import React from 'react';
import Header from '../Header';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

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
    if (location.pathname === '/') {
      scrollToTarget('#testimonials');
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToTarget('#testimonials');
      }, 500);
    }
  };

  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-screen overflow-hidden">
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

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center min-h-[50vh] md:min-h-[55vh] lg:min-h-[calc(100vh+80px)] gap-6 sm:gap-14 px-4 pb-8 sm:pb-20 pt-24 sm:pt-32 text-center sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl space-y-3 sm:space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18, delayChildren: 0.12 } },
          }}
        >
          <motion.h1
            className="text-3xl sm:text-[2.25rem] md:text-[2.75rem] lg:text-6xl font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.3] lg:leading-[1.4]"
            variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Digital products engineered for
            measurable performance.
          </motion.h1>
          <motion.p
            className="text-[15px] sm:text-[1.125rem] md:text-[1.25rem] lg:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto px-2 sm:px-0"
            variants={{ hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Metalift Solutions blends strategy, UX, and engineering into end-to-end experiences for
            ambitious teams across Africa and beyond. Every engagement is grounded in outcomes, scale,
            and operational clarity.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: 'easeOut' }}
        >
          <button
            onClick={handleStartProject}
            className="inline-flex items-center justify-center rounded-xl px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg font-semibold uppercase transition hover:scale-105 min-w-[160px] sm:min-w-[200px] tracking-wide bg-orange-500 text-white hover:bg-orange-600 w-auto"
          >
            Start a project
          </button>
          <button
            onClick={handleSeeProcess}
            className="inline-flex items-center justify-center rounded-xl px-6 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg font-semibold uppercase transition hover:scale-105 min-w-[160px] sm:min-w-[200px] tracking-wide bg-white/10 backdrop-blur text-white hover:bg-white/20 border border-white/30 w-auto"
          >
            See our process
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
