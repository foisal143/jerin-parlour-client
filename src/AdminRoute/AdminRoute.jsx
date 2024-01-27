import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
import { Navigate } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin();

  if (loader || isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default AdminRoute;
