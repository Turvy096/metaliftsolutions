const milestones = [
  {
    year: '2019',
    title: 'Metalift Solutions is founded',
    description:
      'We set out to build digital experiences that merge Kenyan ingenuity with global product standards.',
  },
  {
    year: '2021',
    title: 'Cross-functional studio',
    description:
      'Expanded into a full-stack squad across strategy, UX, engineering, and QA to own outcomes end-to-end.',
  },
  {
    year: '2023',
    title: 'Global partnerships',
    description:
      'Trusted by scale-ups across Africa, Europe, and the Middle East to launch new verticals and platforms.',
  },
];

const pillars = [
  {
    title: 'Strategy with empathy',
    description:
      'We start with people, not features--grounding every engagement in real user needs and business priorities.',
  },
  {
    title: 'Craft is non-negotiable',
    description:
      'Polish is baked in from the start. It shapes how we structure components, write code, and test flows.',
  },
  {
    title: 'Momentum after launch',
    description:
      'Your roadmap does not stop at release. We embed long-term thinking, analytics, and iteration into the engagement.',
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
          We are builders, designers, and optimists crafting dependable digital products.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-700 transition-colors dark:text-slate-100">
          Based in Nairobi, delivering globally. Our studio pairs relentless curiosity with a bias
          for action, partnering closely with teams who are ready to create category-defining experiences.
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-start">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
            Craft, clarity, and collaboration.
          </h2>
          <p className="text-slate-700 transition-colors dark:text-slate-100">
            We began as a tight crew building products for growth-stage companies. As our partners grew,
            so did the bar for outcomes. Today, we operate as an embedded product team--lean, multi-disciplinary,
            and obsessed with results.
          </p>
          <p className="text-slate-700 transition-colors dark:text-slate-100">
            Collaboration is foundational. We co-create with founders, CTOs, and product leaders who value
            informed debate, rapid experimentation, and thoughtful delivery.
          </p>
        </div>
        <div className="grid gap-6 rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e34813]">
              Studio pulse
            </p>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold text-[#e34813] dark:text-brand-200">12+</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                  Core specialists
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#e34813] dark:text-brand-200">7</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                  Countries launched
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#e34813] dark:text-brand-200">4.9</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                  Partner satisfaction
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-brand-50/90 p-6 transition-colors duration-300 shadow-brand-50/40 dark:border-white/10 dark:bg-night/60">
            <p className="text-sm text-slate-700 transition-colors dark:text-slate-100">
              "We treat every engagement as a shared venture. Your success metrics become ours, and we show up
              accordingly--with accountability, curiosity, and craft."
            </p>
            <p className="mt-4 text-sm font-semibold text-[#e34813] transition-colors dark:text-brand-100">
              Metalift Studio Leads
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fff5ef] via-white to-[#ffe3d2] transition-colors duration-300 dark:from-brand-500/10 dark:via-transparent dark:to-brand-300/10" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
          The principles we operate by
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
            Our story so far.
          </h2>
          <p className="text-slate-700 transition-colors dark:text-slate-100">
            Each milestone represents a new chapter in how we partner with ambitious teams--and how we evolve
            our craft to meet their goals.
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
          Let&apos;s build what&apos;s next together.
        </h2>
        <p className="max-w-3xl text-lg text-slate-700 transition-colors dark:text-slate-100">
          Tell us about the product you have in mind--we will share insights, challenge ideas, and outline a
          roadmap built around your goals.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl"
        >
          Schedule a consultation
        </a>
      </div>
    </section>
  </div>
);

export default About;
