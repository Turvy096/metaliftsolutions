const caseStudies = [
  {
    title: 'ReTrade Commerce', industry: 'Retail & distribution',
    summary: 'A business-to-business commerce platform for ordering and distribution in East Africa.',
    problem: 'Bringing product ordering and distribution tasks into one platform.',
    approach: ['Product ordering workflows.', 'Web and Android interfaces.', 'Tools for managing operations.'],
    outcome: ['Commerce platform', 'Web and Android applications'], image: '/images/apps/retrade.jpg',
  },
  {
    title: 'GameBaze Studios', industry: 'Gaming & entertainment',
    summary: 'A gaming companion app in development, with tournament, rewards, and community features.',
    problem: 'Bringing gaming events and community features into one app.',
    approach: ['Tournament features.', 'Player rewards.', 'Community interactions.'],
    outcome: ['In development', 'Not yet available to try'], image: '/images/apps/gaming-mockup.jpg',
  },
  {
    title: 'Sasa Health', industry: 'Healthcare',
    summary: 'A healthcare platform in development for patients, clinicians, and administrative teams.',
    problem: 'Organising appointment and consultation workflows.',
    approach: ['Patient appointment workflows.', 'Clinician dashboards.', 'Tools for administrative teams.'],
    outcome: ['In development', 'Not yet available to try'], image: '/images/apps/webapp.jpeg',
  },
];

const Projects = () => (
  <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#fef4ee] transition-colors duration-300 dark:from-night dark:via-night/90 dark:to-slate/70" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 text-center sm:px-6 lg:px-8">

        <h1 className="text-4xl font-bold text-slate-900 transition-colors sm:text-5xl dark:text-white">
          Our Projects
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-700 transition-colors dark:text-slate-100">
          See what each project is for and the features it includes. Some projects are still in development.
        </p>
      </div>
    </section>

    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
      {caseStudies.map((project, index) => (
        <article
          key={project.title}
          className="grid gap-10 overflow-hidden rounded-[2.5rem] border border-brand-100 bg-white p-10 shadow-sm shadow-brand-50/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500 transition-colors dark:text-slate-300">
              <span>0{index + 1}</span>
              <span className="rounded-full border border-brand-100 bg-brand-50/70 px-3 py-1 text-slate-700 transition-colors dark:border-white/10 dark:bg-white/10 dark:text-slate-100">
                {project.industry}
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-slate-900 transition-colors dark:text-white">
              {project.title}
            </h2>
            <p className="text-slate-700 transition-colors dark:text-slate-100">{project.summary}</p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e34813] transition-colors dark:text-brand-200">
                  The challenge
                </h3>
                <p className="mt-3 text-sm text-slate-700 transition-colors dark:text-slate-100">
                  {project.problem}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e34813] transition-colors dark:text-brand-200">
                  Features and status
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 transition-colors dark:text-slate-100">
                  {project.outcome.map((result) => (
                    <li
                      key={result}
                      className="rounded-xl border border-brand-100 bg-brand-50/90 px-3 py-2 transition-colors dark:border-white/10 dark:bg-night/60"
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e34813] transition-colors dark:text-brand-200">
                Project features
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-slate-700 transition-colors dark:text-slate-100">
                {project.approach.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500 transition-colors dark:bg-brand-400" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 underline decoration-brand-400/40 underline-offset-4 transition hover:text-brand-600 dark:text-brand-200 dark:hover:text-brand-100"
            >
              Ask about this project
            </a>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent transition-colors duration-300 dark:from-night dark:via-transparent dark:opacity-60" />
          </div>
        </article>
      ))}
    </section>
  </div>
);

export default Projects;
