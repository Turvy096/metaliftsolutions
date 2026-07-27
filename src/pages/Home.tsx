import { useState } from 'react';
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

interface Project {
  title: string;
  description: string;
  image: string;
  stats?: string[];
  link?: string;
  isUnderDevelopment?: boolean;
}

const Home = () => {
  // Scroll animation refs
  const whatWeOfferRef = useScrollAnimation();
  const servicesSectionRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const techStackRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  // Modal state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
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
          <ProjectsSection
            projects={projects}
            onProjectClick={handleProjectClick}
          />
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

      {/* SIMPLE MODAL - Directly in the component */}
      {isModalOpen && selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
            padding: '20px',
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '450px',
              width: '100%',
              padding: '32px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              margin: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#0f172a',
                  margin: 0,
                }}
              >
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '28px',
                  cursor: 'pointer',
                  color: '#94a3b8',
                  padding: '0 0 0 20px',
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <p
                style={{
                  color: '#475569',
                  fontSize: '16px',
                  lineHeight: '1.7',
                  margin: '0 0 12px 0',
                }}
              >
                This project is currently in development. We're working hard to bring you an amazing
                experience. Stay tuned for the launch!
              </p>
              {selectedProject.description && (
                <p
                  style={{
                    color: '#64748b',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    margin: '0',
                  }}
                >
                  {selectedProject.description}
                </p>
              )}
            </div>

            <button
              onClick={handleCloseModal}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '16px',
                fontWeight: '600',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ea580c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f97316';
              }}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;