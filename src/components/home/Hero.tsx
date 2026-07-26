import React from 'react';
import Header from '../Header';
import { useNavigate, useLocation } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleSeeProcess = () => {
    // If we're on the home page, scroll to testimonials section
    if (location.pathname === '/') {
      scrollToTarget('#testimonials');
    } else {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        scrollToTarget('#testimonials');
      }, 500);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with keyboard image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Keyboard background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(11, 18, 32, 0.85)' }}
        />
      </div>

      <Header />

      <div
        className="absolute inset-x-0 -top-40 h-[24rem]"
        style={{
          background: 'linear-gradient(to bottom, rgba(11, 18, 32, 0.95), transparent)'
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center min-h-[calc(100vh+80px)] gap-14 px-4 pb-20 pt-32 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.3] lg:leading-[1.4] animate-slideUp">
            Digital products engineered for
            measurable performance.
          </h1>
          <p className="text-lg leading-relaxed text-white/80 sm:text-xl animate-slideUp animation-delay-200 max-w-3xl mx-auto">
            Metalift Solutions blends strategy, UX, and engineering into end-to-end experiences for
            ambitious teams across Africa and beyond. Every engagement is grounded in outcomes, scale,
            and operational clarity.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8 stagger-children">
          <button
            onClick={handleStartProject}
            className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-semibold uppercase transition hover:scale-105 min-w-[200px] tracking-wide bg-orange-500 text-white hover:bg-orange-600"
          >
            Start a project
          </button>
          <button
            onClick={handleSeeProcess}
            className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-semibold uppercase transition hover:scale-105 min-w-[200px] tracking-wide bg-white/10 backdrop-blur text-white hover:bg-white/20 border border-white/30"
          >
            See our process
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;