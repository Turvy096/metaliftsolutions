import React, { useState } from 'react';
import Header from '../components/Header';
import { sendContactEmail } from '../services/email';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContactEmail(formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus('success');
    } catch (error) {
      console.error(
        'Unable to send contact email:',
        error instanceof Error ? error.message : error,
      );
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero-style Header with responsive height */}
      <section className="relative overflow-hidden pt-24 min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Office team collaboration"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(11, 18, 32, 0.85)' }}
          />
        </div>

        <div
          className="absolute inset-x-0 -top-40 h-[24rem]"
          style={{
            background: 'linear-gradient(to bottom, rgba(11, 18, 32, 0.95), transparent)'
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 text-center sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.3] lg:leading-[1.4] animate-slideUp">
              Let's Turn Your Idea Into Reality
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/80 animate-slideUp animation-delay-200 max-w-3xl mx-auto px-2">
              Ready to turn your software or app idea into reality? Fill out the
              form below to get started with our expert development team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-2">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Driving Digital Growth
                <br />
                With Changing
                <br />
                Technology
              </h1>
              <p className="mt-4 md:mt-6 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
               We help startups and growing businesses turn their ideas into secure, scalable digital products. Smart technology meets practical execution to get you to market faster.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#0d1a30' }}>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">EMAIL</p>
                  <a href="mailto:info@metaliftsolutions.co.ke" className="mt-0.5 sm:mt-1 block text-sm sm:text-base font-medium text-slate-900 hover:text-[#0d1a30] dark:text-white">
                    info@metaliftsolutions.co.ke
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#0d1a30' }}>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">PHONE</p>
                  <a href="tel:+254740025607" className="mt-0.5 sm:mt-1 block text-sm sm:text-base font-medium text-slate-900 hover:text-[#0d1a30] dark:text-white">
                    +254 740 025 607
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#0d1a30' }}>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">LOCATION</p>
                  <p className="mt-0.5 sm:mt-1 text-sm sm:text-base font-medium text-slate-900 dark:text-white">Nairobi, Kenya</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#0d1a30' }}>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="#ffffff" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">WHATSAPP</p>
                  <a href="https://wa.me/254740025607" target="_blank" rel="noopener noreferrer" className="mt-0.5 sm:mt-1 block text-sm sm:text-base font-medium text-slate-900 hover:text-[#0d1a30] dark:text-white">
                    +254 740 025 607
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Added stronger shadow */}
          <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-shadow duration-300 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Ready to Get Started?</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">Share your idea with us, and we'll help you build it faster, and more efficiently. Please indicate your Full Name, Email and Quotation and any need for your request and indicate whether or not you want to protect your business idea by signing an NDA.</p>

            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-700">Full name <span className="text-red-500">*</span></label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Your full name" value={formData.name} onChange={handleChange} className="w-full border-0 border-b border-slate-200 bg-transparent px-0 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-[#0d1a30] focus:outline-none focus:ring-0" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-slate-700">Phone number <span className="text-red-500">*</span></label>
                  <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required placeholder="Your phone number" value={formData.phone} onChange={handleChange} className="w-full border-0 border-b border-slate-200 bg-transparent px-0 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-[#0d1a30] focus:outline-none focus:ring-0" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email address <span className="text-red-500">*</span></label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} className="w-full border-0 border-b border-slate-200 bg-transparent px-0 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-[#0d1a30] focus:outline-none focus:ring-0" />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">How can we help you? <span className="text-red-500">*</span></label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border-0 border-b border-slate-200 bg-transparent px-0 py-2 sm:py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-[#0d1a30] focus:outline-none focus:ring-0 dark:border-white/20 dark:text-white text-sm sm:text-base"
                />
              </div>

              <div className="flex items-start gap-3">
                <label htmlFor="nda" className="text-sm text-slate-600 dark:text-slate-300">
                Happy to work with you!
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-xl px-6 py-3 sm:py-3.5 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0d1a30]/40 disabled:cursor-not-allowed disabled:opacity-60"
                style={{ backgroundColor: '#0d1a30' }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              <div aria-live="polite" className="min-h-5 text-sm">
                {status === 'success' && <p className="text-green-700">Thank you. Your message has been sent successfully.</p>}
                {status === 'error' && <p className="text-red-600">We couldn't send your message. Please try again or email info@metaliftsolutions.co.ke.</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
