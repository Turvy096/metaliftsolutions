import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '/contact' },
];

interface HeaderProps {
  solid?: boolean;
}

const Header = ({ solid = false }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Handle scroll - add solid background when scrolled
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, []);

  const scrollToTarget = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 120;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      return true;
    }
    return false;
  };

  const handleNavClick = (href: string) => {
    setOpen(false);

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToTarget(href);
      }, 500);
      return;
    }

    scrollToTarget(href);
  };

  const handleGetAQuote = () => {
    setOpen(false);
    navigate('/contact');
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        solid || isScrolled
          ? 'shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: solid || isScrolled ? '#0b1220' : 'transparent'
      }}
    >
      <nav className="w-full flex items-center justify-between px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 text-white transition-colors">
        <Link to="/" className="group inline-flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img
            src="/images/metaliftlogo.png"
            alt="Metalift Solutions"
            className="h-7 sm:h-8 md:h-10 w-auto drop-shadow-md transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-base sm:text-lg font-semibold tracking-wide">
            {/* Logo text removed as requested */}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">
          <div className="h-12 w-px bg-white/20 ml-2" />

          <ul className="flex items-center gap-6 xl:gap-12 ml-4 text-sm xl:text-base font-medium tracking-wide text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative inline-flex items-center gap-2 transition-colors duration-200 text-white hover:text-orange-300 cursor-pointer bg-transparent border-none text-sm xl:text-base"
                >
                  {link.label}
                  <span
                    className="absolute inset-x-0 -bottom-1 h-0.5 origin-center scale-x-0 bg-white transition-transform duration-200 group-hover:scale-x-100"
                    aria-hidden
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={handleGetAQuote}
            className="rounded-full bg-orange-500 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white uppercase transition hover:bg-orange-600 ml-4 sm:ml-6 md:ml-8 cursor-pointer whitespace-nowrap"
          >
            Get a quote
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-1.5 sm:p-2 text-white transition hover:border-white/40 hover:text-orange-300 lg:hidden cursor-pointer flex-shrink-0"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" /> : <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation - Fixed visibility */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          open
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden backdrop-blur`}
        style={{
          backgroundColor: 'rgba(11, 18, 32, 0.95)'
        }}
      >
        <div className="px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-2 sm:gap-3 py-3 sm:py-4 text-sm sm:text-base text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => {
                    handleNavClick(link.href);
                    setOpen(false);
                  }}
                  className="block w-full text-left rounded-full px-4 py-2.5 sm:py-3 transition hover:bg-white/10 hover:text-orange-300 cursor-pointer bg-transparent border-none text-sm sm:text-base"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleGetAQuote}
            className="block rounded-full bg-orange-500 px-6 py-2.5 sm:py-3 text-center text-xs sm:text-sm font-semibold text-white uppercase hover:bg-orange-600 w-full cursor-pointer"
          >
            Get a quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
