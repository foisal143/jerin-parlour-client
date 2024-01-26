import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
  const { user, loader } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ['admin', user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
