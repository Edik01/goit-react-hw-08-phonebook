import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsRefresh, selectToken } from 'redux/auth/selectors';

export const PrivateRoute = ({ component, navigateTo }) => {
  const token = useSelector(selectToken);
  const isRefresh = useSelector(selectIsRefresh);
  return !token & !isRefresh ? <Navigate to={navigateTo} /> : component;
};
