import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <header>
      <Suspense>
        <Outlet />
      </Suspense>
    </header>
  );
};

export default Layout;
