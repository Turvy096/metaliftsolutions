import Header from '../components/Header';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-white text-slate-700">
    <Header solid />

    <main className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Effective date: 9 August 2026</p>

      <div className="mt-8 space-y-8 leading-7">
        <p>
          Metalift Solutions is committed to handling your information transparently and
          responsibly. This policy explains what information we collect, how we use it, and the
          choices available to you when you use our website, applications, and services.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Information we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Contact details such as your name, email address, telephone number, and company.</li>
            <li>Information you choose to provide while using our services or discussing a project.</li>
            <li>Technical and usage information such as device type, browser, diagnostics, and service interactions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. How we use your information</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>To provide, operate, maintain, secure, and improve our services.</li>
            <li>To respond to enquiries, provide support, and deliver proposals.</li>
            <li>To communicate important service updates.</li>
            <li>To comply with legal obligations and protect our users and rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Sharing of information</h2>
          <p className="mt-3">
            We do not sell your personal information. We may share necessary information with
            trusted providers that help us operate our services, or where disclosure is required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Data security and retention</h2>
          <p className="mt-3">
            We use reasonable safeguards to protect personal information and retain it only for as
            long as necessary to provide our services and meet legal requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Your rights and choices</h2>
          <p className="mt-3">
            Depending on applicable law, you may request access to, correction of, deletion of, or
            restriction of your personal information. You may also object to certain processing or
            withdraw consent where processing relies on consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. Cookies and analytics</h2>
          <p className="mt-3">
            Our website may use cookies and limited analytics to understand aggregate usage and
            improve our services. You can control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Children's privacy</h2>
          <p className="mt-3">
            Our general services are not directed to children under 13, and we do not knowingly
            collect their personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">8. International transfers</h2>
          <p className="mt-3">
            Where information is processed outside your country, we use appropriate safeguards in
            accordance with applicable data-protection law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">9. Changes to this policy</h2>
          <p className="mt-3">
            We may update this policy periodically. Changes will be published on this page with a
            revised effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">10. Contact us</h2>
          <p className="mt-3">
            For privacy questions or requests, email{' '}
            <a className="text-orange-600 underline" href="mailto:info@metaliftsolutions.co.ke">
              info@metaliftsolutions.co.ke
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
