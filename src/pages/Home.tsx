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
import Reveal from '../components/shared/Reveal';

interface Project {
  title: string;
  description: string;
  image: string;
  stats?: string[];
  link?: string;
  isUnderDevelopment?: boolean;
}

const Home = () => {
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
        <Reveal id="services" className="scroll-mt-28">
          <WhatWeOffer />
        </Reveal>

        {/* Services Section - Industries section */}
        <Reveal id="about" className="scroll-mt-28" delay={0.05}>
          <ServicesSection />
        </Reveal>

        {/* Technology Stack Section */}
        <Reveal className="scroll-mt-28">
          <TechnologyStackSection />
        </Reveal>

        {/* Projects Section */}
        <Reveal id="projects" className="scroll-mt-28">
          <ProjectsSection
            projects={projects}
            onProjectClick={handleProjectClick}
          />
        </Reveal>

        {/* FAQ Section */}
        <Reveal className="scroll-mt-28">
          <FAQSection />
        </Reveal>

        {/* Contact Section */}
        <Reveal id="contact" className="scroll-mt-28">
          <ContactSection />
        </Reveal>
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
