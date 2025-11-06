const clauses = [
  {
    title: '1. Agreement overview',
    body:
      'These Terms and Conditions govern your access to and use of services provided by Metalift Solutions. By engaging us, you agree to these terms. We may update them from time to time, with the effective date noted on this page.',
  },
  {
    title: '2. Services',
    body:
      'Scope, deliverables, timelines, and fees will be detailed in individual proposals or statements of work (SOW). Any changes must be agreed to in writing by both parties.',
  },
  {
    title: '3. Client responsibilities',
    body:
      'You agree to provide timely feedback, decision-making, and access to relevant systems or stakeholders needed to deliver the project. Delays in receiving information may impact timelines.',
  },
  {
    title: '4. Fees and payment',
    body:
      'Invoices are issued according to the schedule outlined in the SOW. Payments are due within 14 days unless otherwise stated. Late payments may pause work and accrue interest at 1.5% per month.',
  },
  {
    title: '5. Intellectual property',
    body:
      'Upon full payment, you own the final deliverables. Metalift Solutions retains ownership of pre-existing IP, reusable components, and know-how developed prior to or outside the engagement.',
  },
  {
    title: '6. Confidentiality',
    body:
      'Both parties agree to keep confidential information private and use it only for purposes of the engagement. This obligation survives the termination of the contract.',
  },
  {
    title: '7. Warranty and disclaimers',
    body:
      'We warrant that services will be performed with reasonable skill and care. Except as expressly provided, services are delivered "as-is" without other warranties, express or implied.',
  },
  {
    title: '8. Liability',
    body:
      'To the fullest extent permitted by law, neither party will be liable for indirect, consequential, or incidental damages. Metalift Solutions total liability shall not exceed the amounts paid by you for the services in question.',
  },
  {
    title: '9. Termination',
    body:
      'Either party may terminate with written notice if the other materially breaches the agreement and fails to remedy the breach within 14 days. Upon termination, fees for work completed become immediately due.',
  },
  {
    title: '10. Governing law',
    body:
      'These terms are governed by the laws of the Republic of Kenya. Any disputes will be subject to the exclusive jurisdiction of the courts in Nairobi, Kenya.',
  },
];

const Terms = () => (
  <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fef4ee] transition-colors duration-300 dark:from-night dark:via-night/90 dark:to-slate/70" />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-4 pb-16 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#ffd9c9] bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#e34813] shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-brand-200">
          Terms and conditions
        </span>
        <h1 className="text-4xl font-bold text-slate-900 transition-colors sm:text-5xl dark:text-white">
          The essentials to working with us.
        </h1>
        <p className="text-lg text-slate-700 transition-colors dark:text-slate-100">
          These terms are designed to keep collaboration smooth, transparent, and mutually respectful. We encourage you to review them alongside any proposal or statement of work.
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 transition-colors dark:text-slate-300">
          Effective date: November 2025
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
      {clauses.map((clause) => (
        <article
          key={clause.title}
          className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5"
        >
          <h2 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">
            {clause.title}
          </h2>
          <p className="mt-4 text-sm text-slate-700 transition-colors dark:text-slate-100">{clause.body}</p>
        </article>
      ))}
      <article className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
        <h2 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">11. Contact</h2>
        <p className="mt-4 text-sm text-slate-700 transition-colors dark:text-slate-100">
          Questions about these terms? Reach our team at{' '}
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

export default Terms;
