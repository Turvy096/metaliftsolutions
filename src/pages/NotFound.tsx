import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e34813] transition-colors dark:text-brand-200">
      404 - Page not found
    </span>
    <h1 className="text-4xl font-bold text-slate-900 transition-colors sm:text-5xl dark:text-white">
      Looks like that page melted into the ether.
    </h1>
    <p className="max-w-xl text-slate-700 transition-colors dark:text-slate-100">
      The link you followed may be broken or the page may have moved. Let&apos;s get you back to the good stuff.
    </p>
    <Link
      to="/"
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl"
    >
      Return home
    </Link>
  </div>
);

export default NotFound;
