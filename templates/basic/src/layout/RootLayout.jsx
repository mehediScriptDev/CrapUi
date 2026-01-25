import { Outlet } from 'react-router-dom';
import NavbarLayout from './NavbarLayout';
import FooterLayout from './FooterLayout';

const RootLayout = () => {
  return (
    <>
      <header>
        <NavbarLayout />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </>
  );
};

export default RootLayout;
