import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import Layout from './Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRefresh } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { selectToken } from 'redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) return;
    dispatch(fetchRefresh());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} navigateTo={'/login'} />
          }
        />
      </Route>
    </Routes>
  );
};
