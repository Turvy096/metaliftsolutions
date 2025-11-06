import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-night/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-slate-800 transition-colors sm:px-6 lg:px-8 dark:text-slate-100">
        <Link to="/" className="group inline-flex items-center gap-3">
          <img
            src="/images/metaliftlogo.png"
            alt="Metalift Solutions"
            className="h-10 w-auto drop-shadow-md transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-lg font-semibold tracking-wide">
            
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    [
                      'relative inline-flex items-center gap-2 transition-colors duration-200',
                      isActive
                        ? 'text-brand-500'
                        : 'hover:text-brand-500 dark:hover:text-brand-300',
                    ].join(' ')
                  }
                >
                  {link.label}
                  <span
                    className="absolute inset-x-0 -bottom-1 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 transition-transform duration-200 group-hover:scale-x-100"
                    aria-hidden
                  />
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-brand-500 hover:text-brand-500 dark:border-white/10 dark:text-slate-100 dark:hover:text-brand-300 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden border-t border-slate-200 bg-white/95 px-4 pb-6 dark:border-white/10 dark:bg-night/95`}
      >
        <ul className="flex flex-col gap-3 py-4 text-base text-slate-700 dark:text-slate-100">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  [
                    'block rounded-full px-4 py-3 transition',
                    isActive
                      ? 'bg-[#fff4ee] text-brand-500 dark:bg-white/5 dark:text-brand-300'
                      : 'hover:bg-[#fff4ee] hover:text-brand-500 dark:hover:bg-white/5 dark:hover:text-brand-300',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="block rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand-500/30"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
};

export default Header;
