import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';

export const PrivateRoute = ({ component, navigateTo }) => {
  const isLogin = useSelector(selectIsLogin);
  return !isLogin ? <Navigate to={navigateTo} /> : component;
};
