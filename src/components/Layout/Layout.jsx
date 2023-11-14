import { Nav } from 'components/Nav/Nav';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selectors';

const Layout = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <>
      <header>
        <Nav />
        {isLogin && <UserMenu />}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
