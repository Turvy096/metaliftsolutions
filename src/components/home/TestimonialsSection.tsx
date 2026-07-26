import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
  countryCode: string;
  currency: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
    countryCode: '+254',
    currency: 'KES',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pt-1 pb-0 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:items-start">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Let's Bring Your Idea To Tech
              <br />
              Reality
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Are Ready to turn your software or app idea into reality? Fill out the
              form below to get started with our expert development team.
            </p>
          </div>

          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: '#0b1220' }} />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                Discovery Session
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  We discuss your project requirements and goals.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: '#0b1220' }} />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                 Project Proposal & Plan
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                 We provide a detailed scope, timeline, and quote for your project.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: '#0b1220' }} />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                Project Kickoff
                </p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  Start development with our team, with regular updates
                  throughout the process.

                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Form Card - Added stronger shadow */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-shadow duration-300 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Get in touch With us for any questions..
          </h3>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Message <span className="text-slate-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#0d1a30] focus:outline-none focus:ring-2 focus:ring-[#0d1a30]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl px-6 py-3.5 font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0d1a30]/40 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              style={{ backgroundColor: '#0d1a30' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;