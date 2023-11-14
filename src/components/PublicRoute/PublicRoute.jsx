import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';

export const PublicRoute = ({ component: Component, navigateTo }) => {
  // const token = useSelector(selectToken);
  const isLogin = useSelector(selectIsLogin);
  return !isLogin ? Component : <Navigate to={navigateTo} />;
};
