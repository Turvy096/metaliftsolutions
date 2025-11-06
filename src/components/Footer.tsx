import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="relative mt-20 border-t border-brand-50 bg-sand text-slate-700 transition-colors duration-300 dark:border-white/10 dark:bg-night dark:text-slate-100">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[2fr,1fr,1fr] lg:px-8">
      <div className="space-y-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/metaliftlogo.png"
            alt="Metalift Solutions"
            className="h-12 w-auto"
          />
          <span className="text-xl font-semibold tracking-wide text-slate-900 dark:text-white">
           
          </span>
        </Link>
        <p className="max-w-md text-sm text-slate-700 dark:text-slate-100">
          Product strategy, UX craftsmanship, and engineering excellence delivered with clear
          communication and reliable execution. We build experiences that are resilient, scalable,
          and thoughtful.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/metalift-solutions/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-brand-500 hover:text-brand-500 dark:border-white/10 dark:text-slate-100 dark:hover:text-brand-300"
            aria-label="Follow Metalift Solutions on LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>
          <a
            href="https://x.com/metalift_s"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-brand-500 hover:text-brand-500 dark:border-white/10 dark:text-slate-100 dark:hover:text-brand-300"
            aria-label="Follow Metalift Solutions on X"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            href="https://www.instagram.com/metaliftsolutions/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-brand-500 hover:text-brand-500 dark:border-white/10 dark:text-slate-100 dark:hover:text-brand-300"
            aria-label="Follow Metalift Solutions on Instagram"
            target="_blank"
            rel="noreferrer"
          >
            IG
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-100">
          Quick links
        </h3>
        <ul className="space-y-3 text-sm font-medium text-slate-700 dark:text-slate-100">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="transition hover:text-brand-500 dark:hover:text-brand-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-100">
          Contact
        </h3>
        <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-100">
          <li className="flex items-start gap-3">
            <PhoneIcon className="h-5 w-5 flex-shrink-0 text-brand-500 dark:text-brand-300" />
            <div>
              <p className="font-medium text-slate-800 dark:text-white">Talk to us</p>
              <a className="hover:text-brand-500 dark:hover:text-brand-300" href="tel:+254740025607">
                +254&nbsp;740&nbsp;025&nbsp;607
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <EnvelopeIcon className="h-5 w-5 flex-shrink-0 text-brand-500 dark:text-brand-300" />
            <div>
              <p className="font-medium text-slate-800 dark:text-white">Project enquiries</p>
              <a
                className="hover:text-brand-500 dark:hover:text-brand-300"
                href="mailto:metaliftsolutions@gmail.com"
              >
                metaliftsolutions@gmail.com
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPinIcon className="h-5 w-5 flex-shrink-0 text-brand-500 dark:text-brand-300" />
            <div>
              <p className="font-medium text-slate-800 dark:text-white">Based in</p>
              <p>Nairobi, Kenya - Global Delivery</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-brand-50 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-center sm:px-6 lg:px-8 dark:text-slate-300">
        <p>&copy; {currentYear} Metalift Solutions. All rights reserved.</p>
        {/* <p className="text-slate-500 dark:text-slate-300">
          Built with React, Tailwind CSS, and love for detail.
        </p> */}
      </div>
    </div>
  </footer>
);

export default Footer;
