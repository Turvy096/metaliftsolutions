import React from 'react';
import AnimatedButton from '../shared/AnimatedButton';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-12">
      <div className="absolute inset-0 -z-10 bg-white/90 backdrop-blur transition-colors duration-300 dark:bg-night/80" />
      <div className="mx-auto flex max-w-8xl flex-col items-center gap-5 rounded-[2.5rem] border border-brand-50 bg-white px-6 py-10 text-center shadow-[0_32px_120px_-60px_rgba(227,72,19,0.45)] transition-colors duration-300 dark:border-white/10 dark:bg-white/10 dark:text-white dark:backdrop-blur lg:px-16">
        <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white animate-slideUp">
          Ready to plan your next release?
        </h2>
        <p className="text-lg text-slate-700 transition-colors dark:text-slate-100 animate-slideUp animation-delay-200">
          Let's unpack the roadmap, design the experience, and build something your customers
          will love.
        </p>
        <div className="animate-slideUp animation-delay-300">
          <AnimatedButton href="/contact" variant="cta">
            Schedule a consultation
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default CTASection;