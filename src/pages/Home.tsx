import {
  capabilities,
  faqs,
  processSteps,
  projects,
  serviceHighlights,
  services,
  testimonials,
} from '../data/content';

import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
// import ProcessSection from '../components/home/ProcessSection'; // COMMENTED OUT - REMOVED
import ProjectsSection from '../components/home/ProjectsSection';
import TestimonialsSection from '../components/home/TestimonialsSection'; // ADDED BACK
import FAQSection from '../components/home/FAQSection';
import CTASection from '../components/home/CTASection';
import WhatWeOffer from '../components/home/WhatWeOffer';
import ServicesSection from '../components/home/ServicesSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  // Safety check - ensure services has at least 5 items
  const safeServices = services && services.length >= 5 ? services : [
    { title: 'Product Strategy & Discovery', description: 'Position your product with incisive market research, value propositions, and clarity on the roadmap before a single line of code is written.', items: ['Product audits', 'Experience mapping', 'North-star metrics'] },
    { title: 'UX/UI Craftsmanship', description: 'Pair delightful aesthetics with thoughtful interaction design. We orchestrate brand systems, design systems, and micro-interactions that feel effortless.', items: ['Design systems', 'Interactive prototypes', 'Accessibility first'] },
    { title: 'Engineering & Delivery', description: 'Ship resilient mobile and web applications with a modern stack, CI/CD pipelines, and obsessive attention to performance and polish.', items: ['React & React Native', 'Scalable APIs', 'Launch & DevOps'] },
    { title: 'Launch Readiness', description: 'Detailed go-to-market checklists covering user onboarding, support, analytics, and training so launches stay coordinated.', items: ['Launch playbooks', 'User onboarding', 'Analytics setup'] },
    { title: 'Design System Accelerators', description: 'Reusable UI foundations, accessibility tokens, and component documentation that keep teams aligned across platforms.', items: ['UI foundations', 'Accessibility tokens', 'Component docs'] },
  ];

  // Remove unwanted items from all service items
  const cleanedServices = safeServices.map(service => ({
    ...service,
    items: service.items.filter(item =>
      item !== 'UI foundations' &&
      item !== 'Accessibility tokens' &&
      item !== 'Component docs' &&
      item !== 'Product audits' &&
      item !== 'Experience mapping' &&
      item !== 'North-star metrics' &&
      item !== 'Design systems' &&
      item !== 'Interactive prototypes' &&
      item !== 'Accessibility first' &&
      item !== 'Launch playbooks' &&
      item !== 'User onboarding'
    )
  }));

  // Filter out the items we want to remove from serviceHighlights
  const filteredHighlights = serviceHighlights ? serviceHighlights.filter(
    highlight =>
      highlight.title !== 'Launch readiness playbooks' &&
      highlight.title !== 'Design system accelerators' &&
      highlight.title !== 'Delivery governance'
  ) : [];

  // Scroll animation refs
  const whatWeOfferRef = useScrollAnimation();
  const servicesSectionRef = useScrollAnimation();
  const servicesGridRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();

  return (
    <div className="space-y-10 pb-16 sm:space-y-12 sm:pb-20">
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* What We Offer Section - New services with big card */}
      <div
        id="services"
        ref={whatWeOfferRef.ref}
        className={`scroll-mt-28 transition-all duration-1000 ease-out ${
          whatWeOfferRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <WhatWeOffer />
      </div>

      {/* Services Section - Industries section */}
      <div
        id="about"
        ref={servicesSectionRef.ref}
        className={`scroll-mt-28 transition-all duration-1000 ease-out delay-100 ${
          servicesSectionRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ServicesSection />
      </div>

      {/* Services Grid - ADDED BACK */}
      <div
        ref={servicesGridRef.ref}
        className={`scroll-mt-28 transition-all duration-1000 ease-out delay-200 ${
          servicesGridRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ServicesGrid services={cleanedServices} highlights={filteredHighlights} />
      </div>

      {/* ProcessSection REMOVED */}
      {/* <ProcessSection steps={processSteps} /> */}

      {/* Projects Section */}
      <div
        id="projects"
        ref={projectsRef.ref}
        className={`scroll-mt-28 transition-all duration-1000 ease-out delay-300 ${
          projectsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ProjectsSection projects={projects} />
      </div>

      {/* FAQ Section */}
      <div
        ref={faqRef.ref}
        className={`scroll-mt-28 transition-all duration-1000 ease-out delay-400 ${
          faqRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <FAQSection faqs={faqs} />
      </div>

      {/* TestimonialsSection - ADDED BACK with ID */}
      <div
        id="testimonials"
        ref={testimonialsRef.ref}
        className={`scroll-mt-28 transition-all duration-1000 ease-out delay-500 ${
          testimonialsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <TestimonialsSection testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Home;