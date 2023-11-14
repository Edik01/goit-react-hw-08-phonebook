import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import Layout from './Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRefresh } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { selectIsRefresh, selectToken } from 'redux/auth/selectors';
import { PublicRoute } from './PublicRoute/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isRefresh = useSelector(selectIsRefresh);
  useEffect(() => {
    if (!token) return;
    dispatch(fetchRefresh());
  }, [dispatch, token]);
  return (
    !isRefresh && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                component={<RegisterPage />}
                navigateTo={'/contacts'}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute component={<LoginPage />} navigateTo={'/contacts'} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                component={<ContactsPage />}
                navigateTo={'/login'}
              />
            }
          />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    )
  );
};
