import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({ baseURL: 'http://localhost:5000' });

const useAxiosSecure = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(config => {
    const accessToken = localStorage.getItem('my-ac-token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  axiosSecure.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        const { status } = error.response;
        if (status === 401 || status === 403) {
          logout().then(() => {
            navigate('/');
          });
        }
      }
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
