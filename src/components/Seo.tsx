import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://metaliftsolutions.co.ke';
const DEFAULT_IMAGE = `${SITE_URL}/images/metaliftlogo.png`;

type SeoConfig = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
};

const seoByPath: Record<string, SeoConfig> = {
  '/': {
    title: 'Metalift Solutions | Digital Product Studio in Nairobi',
    description:
      'Metalift Solutions is a Nairobi digital product studio building scalable web and mobile applications through product strategy, UX design, and engineering.',
    canonicalPath: '/',
  },
  '/about': {
    title: 'About Metalift Solutions | Nairobi Digital Product Studio',
    description:
      'Meet the Nairobi-based strategy, design, and engineering team behind Metalift Solutions and our approach to building dependable digital products.',
    canonicalPath: '/about',
  },
  '/services': {
    title: 'Product Strategy, UX Design & Software Development | Metalift',
    description:
      'Explore Metalift Solutions services for product strategy, UX/UI design, web and mobile development, QA, DevOps, and embedded product delivery.',
    canonicalPath: '/services',
  },
  '/projects': {
    title: 'Digital Product Projects & Case Studies | Metalift Solutions',
    description:
      'See how Metalift Solutions designs and engineers web, mobile, commerce, gaming, and healthcare products for growing businesses.',
    canonicalPath: '/projects',
  },
  '/contact': {
    title: 'Contact & Location | Metalift Solutions Nairobi',
    description:
      'Contact Metalift Solutions in Nairobi, Kenya. Call, email, WhatsApp, or send an enquiry about web, mobile app, product design, and software development services.',
    canonicalPath: '/contact',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Metalift Solutions',
    description:
      'Read how Metalift Solutions collects, uses, protects, and manages personal information across our website and services.',
    canonicalPath: '/privacy-policy',
    noindex: true,
  },
  '/privacy-policy.html': {
    title: 'Privacy Policy | Metalift Solutions',
    description:
      'Read how Metalift Solutions collects, uses, protects, and manages personal information across our website and services.',
    canonicalPath: '/privacy-policy',
    noindex: true,
  },
  '/terms': {
    title: 'Terms and Conditions | Metalift Solutions',
    description:
      'Review the terms and conditions governing services and engagements with Metalift Solutions.',
    canonicalPath: '/terms',
  },
};

const fallbackSeo: SeoConfig = {
  title: 'Page Not Found | Metalift Solutions',
  description: 'The requested page could not be found.',
  canonicalPath: '/',
  noindex: true,
};

const setMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = seoByPath[pathname] ?? fallbackSeo;
    const canonicalUrl = `${SITE_URL}${config.canonicalPath}`;

    document.title = config.title;
    document.documentElement.lang = 'en-KE';

    setMeta('meta[name="description"]', { name: 'description', content: config.description });
    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: config.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: config.title });
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: config.description,
    });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: DEFAULT_IMAGE });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: config.title });
    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: config.description,
    });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: DEFAULT_IMAGE });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
};

export default Seo;
