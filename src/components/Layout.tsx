import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => (
  <div className="relative min-h-screen bg-white">
    <ScrollToTop />
    <div className="relative flex flex-col min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);

export default Layout;