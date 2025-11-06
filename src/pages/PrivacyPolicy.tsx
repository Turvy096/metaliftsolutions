const sections = [
  {
    title: '1. Information we collect',
    items: [
      'Contact details such as your name, email address, phone number, and company when you complete a form or contact us.',
      'Project information you opt to share during discovery conversations.',
      'Usage data from our website including device, browser, and interaction analytics captured through privacy-friendly tools.',
    ],
  },
  {
    title: '2. How we use your information',
    items: [
      'To respond to enquiries, schedule consultations, and deliver proposals.',
      'To operate, maintain, and improve our website and services.',
      'To send updates about Metalift Solutions that we believe may interest you (you can opt-out anytime).',
    ],
  },
  {
    title: '3. How we share data',
    items: [
      'We do not sell your personal information.',
      'We may share information with trusted service providers who assist in operating our business (for example, analytics or email tools) under confidentiality agreements.',
      'We may disclose information to comply with legal obligations or protect our rights.',
    ],
  },
  {
    title: '4. Data retention',
    items: [
      'We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy.',
      'You may request deletion of your data by contacting us at metaliftsolutions@gmail.com.',
    ],
  },
  {
    title: '5. Your rights',
    items: [
      'Request access to the data we hold about you.',
      'Request correction, deletion, or restriction of your personal data.',
      'Object to certain processing or withdraw consent where processing is based on consent.',
    ],
  },
];

const PrivacyPolicy = () => (
  <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fef4ee] transition-colors duration-300 dark:from-night dark:via-night/90 dark:to-slate/70" />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-4 pb-16 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#ffd9c9] bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#e34813] shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-brand-200">
          Privacy policy
        </span>
        <h1 className="text-4xl font-bold text-slate-900 transition-colors sm:text-5xl dark:text-white">
          Your trust, protected.
        </h1>
        <p className="text-lg text-slate-700 transition-colors dark:text-slate-100">
          We are committed to handling your information with transparency and respect. This policy outlines how Metalift Solutions collects, uses, and safeguards your data.
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 transition-colors dark:text-slate-300">
          Effective date: November 2025
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
      {sections.map((section) => (
        <article
          key={section.title}
          className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
        >
          <h2 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">
            {section.title}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 transition-colors dark:text-slate-100">
            {section.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#e34813] transition-colors dark:bg-brand-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
      <article className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
        <h2 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">6. Cookies & analytics</h2>
        <p className="mt-4 text-sm text-slate-700 transition-colors dark:text-slate-100">
          We use lightweight analytics to understand aggregate usage patterns and improve our services. You can adjust your browser settings to refuse cookies. The site will remain fully functional.
        </p>
      </article>

      <article className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
        <h2 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">7. International transfers</h2>
        <p className="mt-4 text-sm text-slate-700 transition-colors dark:text-slate-100">
          Metalift Solutions operates globally. When information is transferred outside your region, we ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.
        </p>
      </article>

      <article className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
        <h2 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">8. Updates to this policy</h2>
        <p className="mt-4 text-sm text-slate-700 transition-colors dark:text-slate-100">
          We may update this policy periodically. When we do, we will revise the effective date above and post the updated version on this page.
        </p>
      </article>

      <article className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
        <h2 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">9. Contact us</h2>
        <p className="mt-4 text-sm text-slate-700 transition-colors dark:text-slate-100">
          If you have questions about this policy or how we handle your data, reach us at{' '}
          <a
            href="mailto:metaliftsolutions@gmail.com"
            className="text-[#e34813] underline decoration-brand-400/40 underline-offset-4 transition hover:text-[#bf390d] dark:text-brand-200 dark:hover:text-brand-100"
          >
            metaliftsolutions@gmail.com
          </a>
          .
        </p>
      </article>
    </section>
  </div>
);

export default PrivacyPolicy;
