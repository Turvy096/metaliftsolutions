import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const quickLinks = [
  { label: 'Home', href: '#hero', isPageLink: false },
  { label: 'About', href: '#about', isPageLink: false },
  { label: 'Services', href: '#services', isPageLink: false },
  { label: 'Projects', href: '#projects', isPageLink: false },
  { label: 'Contact', href: '#testimonials', isPageLink: false },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTarget = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
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
    // If we're on the contact page, navigate to home first
    if (location.pathname === '/contact') {
      navigate('/');
      setTimeout(() => {
        scrollToTarget(href);
      }, 500);
      return;
    }

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

  return (
    <footer className="relative" style={{ backgroundColor: '#0b1220' }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[2fr,1fr,1fr] lg:px-8">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/metaliftlogo.png"
              alt="Metalift Solutions"
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold tracking-wide text-white">
            </span>
          </Link>
          <p className="max-w-md text-sm text-white/70">
            Product strategy, UX craftsmanship, and engineering excellence delivered with clear
            communication and reliable execution. We build experiences that are resilient, scalable,
            and thoughtful.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/metalift-solutions-limited/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/40 hover:text-white"
              aria-label="Follow Metalift Solutions on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Quick links
          </h3>
          <ul className="space-y-3 text-sm font-medium text-white/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="transition hover:text-white bg-transparent border-none cursor-pointer p-0 text-sm font-medium text-white/70"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <PhoneIcon className="h-5 w-5 flex-shrink-0 text-white/50" />
              <div>
                <p className="font-medium text-white">Talk to us</p>
                <a className="hover:text-white" href="tel:+254740025607">
                  +254&nbsp;740&nbsp;025&nbsp;607
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <EnvelopeIcon className="h-5 w-5 flex-shrink-0 text-white/50" />
              <div>
                <p className="font-medium text-white">Project enquiries</p>
                <a
                  className="hover:text-white"
                  href="mailto:info@metaliftsolutions.co.ke"
                >
                  info@metaliftsolutions.co.ke
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 flex-shrink-0 text-white/50" />
              <div>
                <p className="font-medium text-white">Based in</p>
                <p className="text-white/70">Nairobi, Kenya - Global Delivery</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {currentYear} Metalift Solutions. All rights reserved.</p>
          <nav aria-label="Legal" className="flex items-center gap-5">
            <a href="/privacy-policy.html" className="transition hover:text-white">
              Privacy Policy
            </a>
            <Link to="/terms" className="transition hover:text-white">
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
