import { MotionConfig } from 'motion/react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Seo from './Seo';

const Layout = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-white">
        <Seo />
        <ScrollToTop />
        <div className="relative flex flex-col min-h-screen">
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
};

export default Layout;
