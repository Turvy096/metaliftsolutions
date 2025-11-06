import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

const Layout = () => (
  <div className="relative min-h-screen bg-sand text-ink transition-colors duration-300 dark:bg-night dark:text-slate-100">
    <ScrollToTop />
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-white/70 via-white/30 to-brand-100 blur-3xl dark:from-brand-900/40 dark:via-brand-700/20 dark:to-transparent" />
      <div className="absolute right-[-12rem] top-[25rem] h-[32rem] w-[32rem] rounded-full bg-gradient-to-tl from-brand-200/40 via-brand-100/30 to-transparent blur-[160px] dark:from-brand-700/40 dark:via-brand-600/20" />
      <div className="absolute bottom-[-18rem] left-1/2 h-[30rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-white/40 via-brand-50/30 to-transparent blur-[180px] dark:from-brand-900/40 dark:via-brand-800/30" />
    </div>
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);

export default Layout;
