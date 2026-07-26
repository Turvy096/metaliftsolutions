import React from 'react';

interface ProcessStep {
  title: string;
  badge: string;
  description: string;
  highlights?: string[];
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

const ProcessStep: React.FC<{ step: ProcessStep; index: number }> = ({ step, index }) => (
  <div className={`rounded-3xl border border-brand-100 bg-brand-50/80 p-6 shadow-sm shadow-brand-50/30 dark:border-white/10 dark:bg-white/10 animate-slideUp animation-delay-${(index + 1) * 100}`}>
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white text-sm font-semibold text-brand-500 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-brand-200">
        {index + 1}
      </span>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
          <span className="rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-100">
            {step.badge}
          </span>
        </div>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-100">{step.description}</p>
        {step.highlights && (
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-100 sm:grid-cols-2">
            {step.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-brand-200" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  return (
    <section className="relative" id="process">
      <div className="absolute inset-0 -z-10 bg-white/90 backdrop-blur transition-colors duration-300 dark:bg-night/80" />
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-50 bg-white px-6 py-12 shadow-[0_32px_120px_-60px_rgba(227,72,19,0.45)] sm:px-10 dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div className="space-y-6 animate-slideUp">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e34813]">
                Signature playbook
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
                A delivery rhythm designed to reduce risk and keep momentum high.
              </h2>
              <p className="text-slate-700 dark:text-slate-100">
                We obsess over clarity: partner ceremonies, transparent reporting, and tangible
                momentum every week. No black boxes, just focused collaboration.
              </p>
              <p className="text-slate-700 dark:text-slate-100">
                Each phase hands over artefacts, documentation, and metrics so stakeholders know what
                to expect and how decisions are made.
              </p>
            </div>
            <div className="grid gap-5">
              {steps.map((step, index) => (
                <ProcessStep key={step.title} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;