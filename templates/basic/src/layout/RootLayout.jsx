import { Outlet } from 'react-router';
import NavbarLayout from './NavbarLayout';
import FooterLayout from './FooterLayout';
import SmoothScroll from '../components/utility/SmoothScroll';

const RootLayout = () => {
  return (
    <>
      <header>
        <NavbarLayout />
      </header>
      <main>
       <SmoothScroll>
         <Outlet />
       </SmoothScroll>
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </>
  );
};

export default RootLayout;
