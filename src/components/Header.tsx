import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#testimonials' },
];

const Header = () => {
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
      const headerOffset = 120; // Increased from 100 to 120
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

    // If we're not on the home page, navigate to home first
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
        isScrolled
          ? 'shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? '#0b1220' : 'transparent'
      }}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-4 py-6 text-white transition-colors sm:px-6 lg:px-8">
        <Link to="/" className="group inline-flex items-center gap-3">
          <img
            src="/images/metaliftlogo.png"
            alt="Metalift Solutions"
            className="h-10 w-auto drop-shadow-md transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-lg font-semibold tracking-wide">
            {/* Logo text removed as requested */}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">
          {/* White vertical line - taller */}
          <div className="h-12 w-px bg-white/20 ml-2" />

          <ul className="flex items-center gap-12 ml-4 text-base font-medium tracking-wide text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative inline-flex items-center gap-2 transition-colors duration-200 text-white hover:text-orange-300 cursor-pointer bg-transparent border-none"
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
            className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white uppercase transition hover:bg-orange-600 ml-8 cursor-pointer"
          >
            Get a quote
          </button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:border-white/40 hover:text-orange-300 lg:hidden cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden px-4 pb-6 backdrop-blur`}
        style={{
          backgroundColor: 'rgba(11, 18, 32, 0.95)'
        }}
      >
        <ul className="flex flex-col gap-3 py-4 text-base text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => {
                  handleNavClick(link.href);
                  setOpen(false);
                }}
                className="block w-full text-left rounded-full px-4 py-3 transition hover:bg-white/10 hover:text-orange-300 cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={handleGetAQuote}
          className="block rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white uppercase hover:bg-orange-600 w-full cursor-pointer"
        >
          Get a quote
        </button>
      </div>
    </header>
  );
};

export default Header;