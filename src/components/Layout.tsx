import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-white">
        <ScrollToTop />
        <div className="relative flex flex-col min-h-screen">
          <AnimatePresence mode="wait" initial={false}>
            <motion.main
              key={location.pathname}
              className="flex-1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
};

export default Layout;
