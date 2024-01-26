import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider/AuthProvaider';
import { Navigate, useLocation } from 'react-router-dom';
const Privateroute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location} replace></Navigate>;
};

export default Privateroute;
