import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import { PropTypes } from 'prop-types';

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <span className="loading loading-infinity loading-lg  mx-auto py-80 "></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/login'} state={location.pathname}></Navigate>;
};

PrivetRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoutes;
