import {
  projects,
} from '../data/content';

import Hero from '../components/home/Hero';
import ProjectsSection from '../components/home/ProjectsSection';
import FAQSection from '../components/home/FAQSection';
import WhatWeOffer from '../components/home/WhatWeOffer';
import ServicesSection from '../components/home/ServicesSection';
import TechnologyStackSection from '../components/home/TechnologyStackSection';
import ContactSection from '../components/home/ContactSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  // Scroll animation refs
  const whatWeOfferRef = useScrollAnimation();
  const servicesSectionRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const techStackRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12 pb-12 sm:pb-16 md:pb-20">
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* What We Offer Section */}
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

      {/* Technology Stack Section */}
      <div
        ref={techStackRef.ref}
        className={`scroll-mt-28 transition-all duration-1000 ease-out delay-200 ${
          techStackRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <TechnologyStackSection />
      </div>

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
        <FAQSection />
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        ref={contactRef.ref}
        className={`scroll-mt-28 transition-all duration-1000 ease-out delay-500 ${
          contactRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;