const milestones = [
  { year: 'Plan', title: 'Understand the project', description: 'Discuss the problem, users, budget, and features. Agree on the scope before development starts.' },
  { year: 'Build', title: 'Design, develop, and test', description: 'Review the design, build the agreed features, and test how they work together.' },
  { year: 'Launch', title: 'Release and support', description: 'Prepare the release, hand over the work, and agree on any ongoing maintenance.' },
];

const pillars = [
  {
    title: 'Understand the Need',
    description:
      'We ask how your business works and who will use the software before deciding what to build.',
  },
  {
    title: 'Build With Care',
    description:
      'We pay attention to how the software looks, works, and will be maintained after launch.',
  },
  {
    title: 'Plan for Support',
    description:
      'We discuss hosting, maintenance, and future updates so you know what happens after release.',
  },
];

const About = () => (
  <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#fef4ee] transition-colors duration-300 dark:from-night dark:via-night/90 dark:to-slate/70" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#ffd9c9] bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#e34813] shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-brand-200">
          About Metalift
        </span>
        <h1 className="text-4xl font-bold text-slate-900 transition-colors sm:text-5xl dark:text-white">
          Web and Software Development in Nairobi
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-700 transition-colors dark:text-slate-100">
          Metalift Solutions builds websites, mobile apps, and custom software for businesses.
          We help with planning, design, development, and support.
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-start">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
            How We Work With You
          </h2>
          <p className="text-slate-700 transition-colors dark:text-slate-100">
            We start by understanding what you need and the constraints of your project. Then we agree
            on the features, costs, responsibilities, and schedule.
          </p>
          <p className="text-slate-700 transition-colors dark:text-slate-100">
            During development, we share progress and ask for your feedback. If requirements change,
            we discuss the effect on cost and timing before proceeding.
          </p>
        </div>
        <div className="grid gap-6 rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">A Clear Project Scope</h3>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-100">
            Your proposal sets out the work included, deliverables, costs, and payment stages.
            We also discuss what you need to provide and any support required after launch.
          </p>
        </div>
      </div>
    </section>

    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fff5ef] via-white to-[#ffe3d2] transition-colors duration-300 dark:from-brand-500/10 dark:via-transparent dark:to-brand-300/10" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
          What You Can Expect
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm text-slate-700 transition-colors dark:text-slate-100">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
            From Planning to Launch
          </h2>
          <p className="text-slate-700 transition-colors dark:text-slate-100">
            Each project has different requirements. These are the main stages we work through with you.
          </p>
        </div>
        <ol className="relative space-y-8 border-l border-brand-100 pl-6 transition-colors duration-300 dark:border-white/10">
          {milestones.map((milestone) => (
            <li key={milestone.year} className="relative space-y-2">
              <div className="absolute -left-[13px] mt-1 h-3 w-3 rounded-full border border-[#e34813] bg-[#ffe4d6] transition-colors duration-300 dark:border-brand-400 dark:bg-brand-500/30" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e34813] transition-colors dark:text-brand-200">
                {milestone.year}
              </p>
              <h3 className="text-xl font-semibold text-slate-900 transition-colors dark:text-white">
                {milestone.title}
              </h3>
              <p className="text-sm text-slate-700 transition-colors dark:text-slate-100">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#ffe7da] via-white to-[#ffe3d2] blur-3xl transition-colors duration-300 dark:from-brand-500/20 dark:via-brand-400/10 dark:to-transparent" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[2.5rem] border border-brand-50 bg-white px-6 py-12 text-center shadow-[0_32px_120px_-60px_rgba(227,72,19,0.45)] transition-colors duration-300 dark:border-white/10 dark:bg-white/10 dark:text-white dark:backdrop-blur lg:px-16">
        <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
          Have a Project in Mind?
        </h2>
        <p className="max-w-3xl text-lg text-slate-700 transition-colors dark:text-slate-100">
          Tell us what you need to build or improve. We can discuss the requirements and next steps.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl"
        >
          Discuss your project
        </a>
      </div>
    </section>
  </div>
);

export default About;
