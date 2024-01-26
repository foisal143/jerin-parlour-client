import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
const useServices = () => {
  const axiosSecure = useAxiosSecure();
  const { loader } = useContext(AuthContext);
  const { data: services = [], refetch } = useQuery({
    queryKey: ['service'],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure.get('/services');
      return res.data;
    },
  });

  return [services, refetch];
};

export default useServices;
