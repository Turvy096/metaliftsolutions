const servicePackages = [
  {
    title: 'Product Launch Sprint',
    summary:
      'From idea validation to interactive prototype and production-ready MVP delivered in focused sprints.',
    deliverables: [
      'Product strategy workshops',
      'UX research and customer journeys',
      'Design system starter kit',
      'MVP implementation and QA',
    ],
    timeline: '8-12 weeks',
  },
  {
    title: 'Scale-Up Experience Refresh',
    summary:
      'Elevate your flagship experience with refined UX, new feature experiments, and performance enhancements.',
    deliverables: [
      'UX audit and analytics review',
      'Experience redesign and usability testing',
      'Front-end modernization',
      'Roll-out and enablement playbook',
    ],
    timeline: '6-10 weeks',
  },
  {
    title: 'Embedded Product Pod',
    summary:
      'Dedicated cross-functional squad plugging directly into your roadmap with ongoing sprints and reporting.',
    deliverables: [
      'Product leadership and PM support',
      'Design, engineering, QA specialists',
      'Automated testing and DevOps',
      'Quarterly roadmap co-creation',
    ],
    timeline: 'Quarterly retainers',
  },
];

const techStacks = [
  {
    category: 'Experience',
    tools: ['Figma', 'Framer', 'Linear', 'Storybook'],
  },
  {
    category: 'Web & API',
    tools: ['React', 'Next.js', 'Node.js', 'NestJS', 'GraphQL', 'PostgreSQL'],
  },
  {
    category: 'Mobile',
    tools: ['React Native', 'Expo', 'Swift', 'Kotlin'],
  },
  {
    category: 'Delivery',
    tools: ['GitHub Actions', 'Docker', 'AWS', 'Vercel', 'Azure'],
  },
];

const Services = () => (
  <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-white via-white to-[#fef4ee] transition-colors duration-300 dark:from-night dark:via-night/90 dark:to-slate/70" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#ffd9c9] bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#e34813] shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-brand-200">
          Services
        </span>
        <h1 className="text-4xl font-bold text-slate-900 transition-colors sm:text-5xl dark:text-white">
          Signature services tailored to your growth stage.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-700 transition-colors dark:text-slate-100">
          We assemble the exact mix of strategy, UX, and engineering talent you need--aligned to outcomes,
          transparent in delivery, and relentless on quality.
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-10">
        <h2 className="text-center text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
          Engagement models that move fast but never break things.
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {servicePackages.map((pkg) => (
            <article
              key={pkg.title}
              className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/40 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">
                  {pkg.title}
                </h3>
                <p className="text-sm text-slate-700 transition-colors dark:text-slate-100">
                  {pkg.summary}
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700 transition-colors dark:text-slate-100">
                {pkg.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500 transition-colors dark:bg-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-brand-100 bg-brand-50/90 px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate-500 transition-colors dark:border-white/10 dark:bg-night/60 dark:text-slate-300">
                <span>Typical timeline</span>
                <span className="text-brand-500 transition-colors dark:text-brand-200">{pkg.timeline}</span>
              </div>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-brand-100 px-4 py-3 text-sm font-semibold text-brand-500 transition hover:border-brand-500 hover:text-brand-600 dark:border-brand-400/60 dark:text-brand-200 dark:hover:border-brand-300 dark:hover:text-brand-100"
              >
                Schedule a discovery call
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fff5ef] via-white to-[#ffe3d2] transition-colors duration-300 dark:from-brand-500/10 dark:via-transparent dark:to-brand-400/10" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
              We plug in as your senior product pod.
            </h2>
            <p className="text-slate-700 transition-colors dark:text-slate-100">
              You get a battle-tested team that has shipped zero-to-one products, revamped legacy platforms,
              and scaled multi-market launches. We obsess over the handoffs so your team stays focused on strategy.
            </p>
            <p className="text-slate-700 transition-colors dark:text-slate-100">
              Expect weekly show-and-tells, transparent sprint reports, and proactive recommendations shaped by
              real user insights.
            </p>
          </div>
          <div className="grid gap-6 rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold text-slate-900 transition-colors dark:text-white">
              Your pod includes
            </h3>
            <ul className="grid gap-3 text-sm text-slate-700 transition-colors dark:text-slate-100 sm:grid-cols-2">
              <li className="rounded-2xl border border-brand-100 bg-brand-50/80 px-4 py-3 transition-colors dark:border-white/10 dark:bg-night/60">
                Lead product strategist
              </li>
              <li className="rounded-2xl border border-brand-100 bg-brand-50/80 px-4 py-3 transition-colors dark:border-white/10 dark:bg-night/60">
                Senior UX/UI designer
              </li>
              <li className="rounded-2xl border border-brand-100 bg-brand-50/80 px-4 py-3 transition-colors dark:border-white/10 dark:bg-night/60">
                Front-end and mobile engineers
              </li>
              <li className="rounded-2xl border border-brand-100 bg-brand-50/80 px-4 py-3 transition-colors dark:border-white/10 dark:bg-night/60">
                QA and launch specialist
              </li>
            </ul>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 transition-colors dark:text-slate-300">
              Optional add-ons: content design, data analyst, growth marketing.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-10">
        <h2 className="text-center text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
          Modern tooling and stacks we ship with.
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techStacks.map((stack) => (
            <div
              key={stack.category}
              className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500 transition-colors dark:text-brand-200">
                {stack.category}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 transition-colors dark:text-slate-100">
                {stack.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-xl border border-brand-100 bg-brand-50/90 px-3 py-2 transition-colors dark:border-white/10 dark:bg-night/60"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#ffe7da] via-white to-[#ffe3d2] blur-3xl transition-colors duration-300 dark:from-brand-500/20 dark:via-brand-400/10 dark:to-transparent" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[2.5rem] border border-brand-50 bg-white px-6 py-12 text-center shadow-[0_32px_120px_-60px_rgba(227,72,19,0.45)] transition-colors duration-300 dark:border-white/10 dark:bg-white/10 dark:text-white dark:backdrop-blur lg:px-16">
        <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
          Let&apos;s map the best engagement for your team.
        </h2>
        <p className="max-w-3xl text-lg text-slate-700 transition-colors dark:text-slate-100">
          Share where you are in the product journey. We will recommend the right pod shape, roadmap, and investment.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl"
        >
          Start a conversation
        </a>
      </div>
    </section>
  </div>
);

export default Services;
