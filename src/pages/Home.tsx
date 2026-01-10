import {
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import {
  capabilities,
  faqs,
  heroHighlights,
  processSteps,
  projects,
  serviceHighlights,
  serviceIndustries,
  services,
  testimonials,
} from '../data/content';

const Home = () => (
  <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fef4ee] transition-colors duration-300 dark:from-night dark:via-night/80 dark:to-slate/70" />
      <div className="absolute inset-x-0 -top-40 h-[24rem] bg-gradient-to-b from-[#ffe8db] to-transparent blur-3xl transition-colors duration-300 dark:from-brand-400/20" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 pt-8 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd9c9] bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#e34813] shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-brand-200">
          Product strategy | UX | Engineering
          <SparklesIcon className="h-4 w-4" />
        </div>
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 transition-colors sm:text-5xl lg:text-6xl dark:text-white">
            Digital products engineered for measurable performance and growth.
          </h1>
          <p className="text-lg text-slate-700 transition-colors sm:text-xl dark:text-slate-50">
            Metalift Solutions blends strategy, UX, and engineering into end-to-end experiences for
            ambitious teams across Africa and beyond. Every engagement is grounded in outcomes, scale,
            and operational clarity.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl"
          >
            Start a project
            <ArrowRightIcon className="h-5 w-5" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-500 dark:border-white/20 dark:text-slate-100 dark:hover:text-brand-300"
          >
            See our process
          </a>
        </div>
        <div className="grid w-full gap-4 sm:grid-cols-3">
          {heroHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-brand-100 bg-white/90 p-6 text-left shadow-sm shadow-brand-50/40 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:shadow-black/5"
            >
              <p className="text-3xl font-semibold text-[#e34813] dark:text-brand-200">{item.value}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-brand-50 bg-white px-6 py-12 shadow-[0_32px_120px_-60px_rgba(227,72,19,0.45)] sm:px-10 dark:border-white/10 dark:bg-white/5">
        <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e34813]">
              What we do
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
              Product strategy, design, and engineering aligned from day one.
            </h2>
            <p className="text-slate-700 dark:text-slate-100">
              Whether you're launching a new venture or elevating a flagship product, we plug in
              as an elite cross-functional squad. Expect thought partnership, pixel-perfect design,
              and reliable delivery.
            </p>
            <p className="text-slate-700 dark:text-slate-100">
              Every engagement pairs discovery, design, and build specialists so you avoid fragmented
              handovers. We operate with clear governance, shared documentation, and measurement plans
              that keep business goals in sight.
            </p>
            <p className="text-slate-700 dark:text-slate-100">We don't just build features; we define the "why." Our discovery phase aligns your business objectives with actual user needs to ensure we are building the right product for the right market.</p>
            <p className="text-slate-700 dark:text-slate-100">Pixel-perfect interfaces that drive engagement. Design at Metalift is not just about aesthetics it’s about usability, brand trust, and conversion. We create design systems that grow with your product.</p>
            <p>Elite delivery with zero technical debt. Our engineering squad operates as an extension of your team. We build robust, secure, and high-performing applications using industry-leading practices.</p>
          </div>
          <div className="grid gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm shadow-brand-50/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-100">{service.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2 text-xs text-brand-600 dark:text-brand-200">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/80 px-4 py-1.5 dark:border-white/10 dark:bg-white/10"
                  >
                    <CheckIcon className="h-4 w-4 text-brand-500 dark:text-brand-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {serviceHighlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-2xl border border-brand-100 bg-brand-50/90 p-6 shadow-sm shadow-brand-50/40 dark:border-white/10 dark:bg-white/10"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{highlight.title}</h3>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-100">{highlight.description}</p>
          </div>
        ))}
      </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e34813]">
            Industries we support
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {serviceIndustries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="relative" id="process">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fff1e6] via-white to-[#ffe5d6]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-50 bg-white px-6 py-12 shadow-[0_32px_120px_-60px_rgba(227,72,19,0.45)] sm:px-10 dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div className="space-y-6">
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
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-brand-100 bg-brand-50/80 p-6 shadow-sm shadow-brand-50/30 dark:border-white/10 dark:bg-white/10"
                >
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e34813]">
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
            A strike team that ships with artistry and precision.
          </h2>
          <p className="max-w-2xl text-slate-700 transition-colors dark:text-slate-100">
            Designers, engineers, strategists, and QA specialists operating as one unit. Everyone
            stays close to the customer and the craft.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">
              {capability.title}
            </h3>
            <p className="mt-4 text-sm text-slate-700 transition-colors dark:text-slate-100">
              {capability.description}
            </p>
          </article>
        ))}
      </div>
    </section>

    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fff5ef] via-white to-[#ffe3d2] transition-colors duration-300 dark:from-brand-500/10 dark:via-transparent dark:to-brand-400/5" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e34813]">
              Selected work
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
              Products we&apos;ve brought to market.
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e34813] transition hover:text-[#bf390d] dark:text-brand-200 dark:hover:text-brand-100"
            href="/projects"
          >
            View all projects
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm shadow-brand-50/30 transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent opacity-60 transition-colors duration-300 dark:from-night dark:via-night/30 dark:opacity-75" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#e34813] shadow-sm backdrop-blur transition-colors duration-300 dark:bg-night/60 dark:text-brand-200"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold text-slate-900 transition-colors dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-700 transition-colors dark:text-slate-100">
                  {project.description}
                </p>
                <a
                  href="/contact"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#e34813] transition hover:text-[#bf390d] dark:text-brand-200 dark:hover:text-brand-100"
                >
                  Let&apos;s talk impact
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e34813]">
            Community love
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
            Trusted by product leaders who demand excellence.
          </h2>
          <p className="text-slate-700 transition-colors dark:text-slate-100">
            Our partners stay with us because we sweat details, communicate proactively, and keep
            momentum high long after launch.
          </p>
        </div>
        <div className="grid gap-5">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-lg font-medium text-slate-900 transition-colors dark:text-white">
                "{testimonial.quote}"
              </p>
              <footer className="mt-6 text-sm text-slate-500 transition-colors dark:text-brand-100">
                {testimonial.name} - {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="contact">
      <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e34813]">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
            Answers before we kick things off.
          </h2>
          <p className="text-slate-700 transition-colors dark:text-slate-100">
            Have more questions? Drop us a line and we&apos;ll schedule an introductory session.
          </p>
          <a
            href="mailto:metaliftsolutions@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e34813] underline decoration-brand-400/40 underline-offset-4 transition hover:text-[#bf390d] dark:text-brand-200 dark:hover:text-brand-100"
          >
            metaliftsolutions@gmail.com
          </a>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-50/40 transition-colors duration-300 open:border-brand-200 dark:border-white/10 dark:bg-white/5"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 transition-colors dark:text-white">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-slate-700 transition-colors dark:text-slate-100">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffe7da] via-white to-[#ffe3d2] blur-2xl transition-colors duration-300 dark:from-brand-500/20 dark:via-brand-400/15 dark:to-transparent" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 rounded-[2.5rem] border border-brand-50 bg-white px-6 py-10 text-center shadow-[0_32px_120px_-60px_rgba(227,72,19,0.45)] transition-colors duration-300 dark:border-white/10 dark:bg-white/10 dark:text-white dark:backdrop-blur lg:px-16">
        <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
          Ready to plan your next release?
        </h2>
        <p className="text-lg text-slate-700 transition-colors dark:text-slate-100">
          Let&apos;s unpack the roadmap, design the experience, and build something your customers
          will love.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl"
        >
          Schedule a consultation
          <ArrowRightIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  </div>
);

export default Home;
