import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => (
  <div className="relative">
    <ScrollToTop />
    <div className="relative">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);

export default Layout;