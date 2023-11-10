import { Nav } from 'components/Nav/Nav';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';

const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <header>
        <Nav />
        {token && <UserMenu />}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
