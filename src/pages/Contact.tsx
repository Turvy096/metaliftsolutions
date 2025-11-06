import { useEffect, useRef, useState, type FormEvent, type ChangeEvent, type FocusEvent } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';
type FieldKey = 'name' | 'email' | 'message';

const EMAILJS_SERVICE_ID = 'service_zykv7yb';
const EMAILJS_TEMPLATE_ID = 'template_l5exiuh';
const EMAILJS_PUBLIC_KEY = 'cqw9St8CPyK5hCvZg';
const MAX_MESSAGE_LENGTH = 1000;
const NAME_PATTERN = /^[a-zA-Z\s]{2,50}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => (
  <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fef4ee] transition-colors duration-300 dark:from-night dark:via-night/90 dark:to-slate/70" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-500 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-brand-200">
          Contact
        </span>
        <h1 className="text-4xl font-bold text-slate-900 transition-colors sm:text-5xl dark:text-white">
          Tell us about the product you&apos;re building.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-700 transition-colors dark:text-slate-100">
          We take on a limited number of partnerships at a time so every engagement gets senior focus. Share a few
          details and we&apos;ll follow up with an introductory session.
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
        <div className="space-y-6 rounded-[2.5rem] border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/40 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">
            Reach out directly
          </h2>
          <p className="text-sm text-slate-700 transition-colors dark:text-slate-100">
            Prefer an email or quick call? We reply within one business day.
          </p>
          <div className="space-y-4 text-sm text-slate-700 transition-colors dark:text-slate-100">
            <a
              href="mailto:metaliftsolutions@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/80 px-4 py-3 transition hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:bg-night/60 dark:hover:text-brand-200"
            >
              <EnvelopeIcon className="h-5 w-5 text-brand-500 dark:text-brand-200" />
              metaliftsolutions@gmail.com
            </a>
            <a
              href="tel:+254740025607"
              className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/80 px-4 py-3 transition hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:bg-night/60 dark:hover:text-brand-200"
            >
              <PhoneIcon className="h-5 w-5 text-brand-500 dark:text-brand-200" />
              +254&nbsp;740&nbsp;025&nbsp;607
            </a>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-brand-50/80 p-6 transition-colors duration-300 dark:border-white/10 dark:bg-night/60">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500 transition-colors dark:text-brand-200">
              Typical response times
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 transition-colors dark:text-slate-100">
              <li>Weekdays: within 6 hours</li>
              <li>Weekends and holidays: next business day</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500 transition-colors dark:text-brand-200">
              Our HQ
            </p>
            <p className="mt-2 text-sm text-slate-700 transition-colors dark:text-slate-100">
              Nairobi, Kenya â€” operating across Africa, Europe, and the Middle East.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/5">
        <h2 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white">
          Office hours
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500 transition-colors dark:text-brand-200">
              Monday - Friday
            </p>
            <p className="mt-2 text-sm text-slate-700 transition-colors dark:text-slate-100">09:00 - 18:00 EAT</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500 transition-colors dark:text-brand-200">
              Saturday
            </p>
            <p className="mt-2 text-sm text-slate-700 transition-colors dark:text-slate-100">By appointment</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-500 transition-colors dark:text-brand-200">
              Sunday
            </p>
            <p className="mt-2 text-sm text-slate-700 transition-colors dark:text-slate-100">Closed</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ContactForm = () => {
  const [state, setState] = useState<SubmitState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [messageLength, setMessageLength] = useState(0);
  const [overlayState, setOverlayState] = useState<'hidden' | 'loading' | 'success'>('hidden');
  const overlayTimeoutRef = useRef<number>();
  const resetStateTimeoutRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (overlayTimeoutRef.current) {
        window.clearTimeout(overlayTimeoutRef.current);
      }
      if (resetStateTimeoutRef.current) {
        window.clearTimeout(resetStateTimeoutRef.current);
      }
    };
  }, []);

  const isFieldKey = (value: string): value is FieldKey =>
    value === 'name' || value === 'email' || value === 'message';

  const getFieldClasses = (hasError: boolean) =>
    [
      'w-full rounded-xl border px-4 py-3 text-sm transition focus:outline-none focus:ring-2',
      hasError
        ? 'border-red-400 bg-white text-slate-800 placeholder:text-slate-400 focus:border-red-500 focus:ring-red-500/20 dark:border-red-400/60 dark:bg-night/70 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-red-400/30'
        : 'border-brand-100 bg-white text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:ring-brand-500/30 dark:border-white/10 dark:bg-night/70 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-brand-400 dark:focus:ring-brand-400/40',
    ].join(' ');

  const validators: Record<FieldKey, (value: string) => string | null> = {
    name: (value) => {
      const trimmed = value.trim();
      if (!trimmed) return 'Full name is required.';
      if (!NAME_PATTERN.test(trimmed)) return 'Use 2-50 alphabetic characters.';
      return null;
    },
    email: (value) => {
      const trimmed = value.trim();
      if (!trimmed) return 'Work email is required.';
      if (!EMAIL_PATTERN.test(trimmed)) return 'Enter a valid email address.';
      return null;
    },
    message: (value) => {
      const trimmed = value.trim();
      if (!trimmed) return 'Please tell us a bit about your project.';
      if (trimmed.length < 10) return 'Message must be at least 10 characters.';
      if (trimmed.length > MAX_MESSAGE_LENGTH) return `Message must be under ${MAX_MESSAGE_LENGTH} characters.`;
      return null;
    },
  };

  const validateField = (name: FieldKey, value: string) => {
    const errorMessage = validators[name](value);
    setFieldErrors((prev) => {
      if (errorMessage) {
        return { ...prev, [name]: errorMessage };
      }
      if (prev[name]) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
    return !errorMessage;
  };

  const getFieldValue = (form: HTMLFormElement, name: FieldKey) => {
    const element = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
    return element?.value ?? '';
  };

  const validateForm = (form: HTMLFormElement) => {
    let isValid = true;
    (['name', 'email', 'message'] as FieldKey[]).forEach((key) => {
      const value = getFieldValue(form, key);
      if (!validateField(key, value)) {
        isValid = false;
      }
    });
    return isValid;
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'message') {
      setMessageLength(value.length);
    }
    if (isFieldKey(name) && fieldErrors[name]) {
      validateField(name, value);
    }
  };

  const handleFieldBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (isFieldKey(name)) {
      validateField(name, value);
    }
  };

  const buildMessageBody = (data: {
    name: string;
    email: string;
    company: string;
    timeline: string;
    budget: string;
    message: string;
  }) =>
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : null,
      data.timeline ? `Timeline: ${data.timeline}` : null,
      data.budget ? `Investment: ${data.budget}` : null,
      '',
      data.message.trim(),
    ]
      .filter(Boolean)
      .join('\n');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    if (!validateForm(form)) {
      setState('error');
      setError('Please fix the highlighted fields before submitting.');
      return;
    }

    const formData = new FormData(form);
    const honeypot = formData.get('_gotcha');
    if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
      form.reset();
      setMessageLength(0);
      return;
    }

    const data = {
      name: ((formData.get('name') as string | null) ?? '').trim(),
      email: ((formData.get('email') as string | null) ?? '').trim(),
      company: ((formData.get('company') as string | null) ?? '').trim(),
      timeline: ((formData.get('timeline') as string | null) ?? '').trim(),
      budget: ((formData.get('budget') as string | null) ?? '').trim(),
      message: ((formData.get('message') as string | null) ?? '').trim(),
    };

    setState('loading');
    setOverlayState('loading');

    try {
      await Promise.all([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: data.name,
            from_email: data.email,
            subject: `New project enquiry from ${data.company || 'Metalift site visitor'}`,
            message: buildMessageBody(data),
          },
          EMAILJS_PUBLIC_KEY
        ),
        new Promise((resolve) => window.setTimeout(resolve, 1200)),
      ]);

      form.reset();
      setFieldErrors({});
      setMessageLength(0);
      setState('success');
      setOverlayState('success');

      overlayTimeoutRef.current = window.setTimeout(() => {
        setOverlayState('hidden');
      }, 5000);

      resetStateTimeoutRef.current = window.setTimeout(() => {
        setState('idle');
        setError(null);
      }, 6000);
    } catch (submissionError) {
      console.error('EmailJS submission failed', submissionError);
      setError('We could not send your message. Please try again or email us directly at metaliftsolutions@gmail.com.');
      setState('error');
      setOverlayState('hidden');
    }
  };

  const overlayVisible = overlayState !== 'hidden';
  const counterClass =
    messageLength > MAX_MESSAGE_LENGTH
      ? 'text-red-600 dark:text-red-400'
      : messageLength > MAX_MESSAGE_LENGTH * 0.7
        ? 'text-amber-500 dark:text-amber-300'
        : 'text-slate-500 dark:text-slate-300';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative space-y-6 overflow-hidden rounded-[2.5rem] border border-brand-100 bg-white p-8 shadow-sm shadow-brand-50/30 transition-colors duration-300 dark:border-white/10 dark:bg-white/10 dark:backdrop-blur"
    >
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[2.5rem] bg-white/95 p-8 text-center transition-opacity duration-200 ${
          overlayVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } dark:bg-night/90`}
        aria-hidden={!overlayVisible}
      >
        {overlayState === 'loading' && (
          <>
            <span className="h-12 w-12 animate-spin rounded-full border-4 border-brand-200 border-t-brand-500" />
            <p className="text-base font-semibold text-slate-700 dark:text-slate-100">Sending your message...</p>
            <p className="text-sm text-slate-500 dark:text-slate-300">Please wait while we process your request.</p>
          </>
        )}
        {overlayState === 'success' && (
          <div className="space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L8.75 11.086l6.543-6.543a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-slate-700 dark:text-slate-100">Message sent successfully!</p>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Thank you for reaching out. We&apos;ll respond within one business day.
            </p>
          </div>
        )}
      </div>

      {state === 'success' && (
        <div className="rounded-2xl border border-brand-200 bg-brand-50/90 p-4 text-sm font-medium text-brand-700 dark:border-brand-500/40 dark:bg-white/10 dark:text-brand-100">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </div>
      )}
      {state === 'error' && error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-400/40 dark:bg-red-500/10 dark:text-red-200">
          {error}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700 transition-colors dark:text-slate-100">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            className={getFieldClasses(Boolean(fieldErrors.name))}
            placeholder="Jane Doe"
            onBlur={handleFieldBlur}
            onChange={handleFieldChange}
          />
          {fieldErrors.name && (
            <p id="name-error" className="text-xs font-medium text-red-600 dark:text-red-400">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 transition-colors dark:text-slate-100">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            className={getFieldClasses(Boolean(fieldErrors.email))}
            placeholder="you@company.com"
            onBlur={handleFieldBlur}
            onChange={handleFieldChange}
          />
          {fieldErrors.email && (
            <p id="email-error" className="text-xs font-medium text-red-600 dark:text-red-400">
              {fieldErrors.email}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-slate-700 transition-colors dark:text-slate-100">
            Company / team
          </label>
          <input id="company" name="company" type="text" className={getFieldClasses(false)} placeholder="Metalift" />
        </div>
        <div className="space-y-2">
          <label htmlFor="timeline" className="text-sm font-medium text-slate-700 transition-colors dark:text-slate-100">
            Ideal timeline
          </label>
          <select id="timeline" name="timeline" className={getFieldClasses(false)}>
            <option value="0-3 months">0-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6 months+">6 months+</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium text-slate-700 transition-colors dark:text-slate-100">
            Estimated investment
          </label>
          <select id="budget" name="budget" className={getFieldClasses(false)}>
            <option value="under-1.5m-kes">Under KES 1.5M</option>
            <option value="1.5m-3m-kes">KES 1.5M - 3M</option>
            <option value="3m-6m-kes">KES 3M - 6M</option>
            <option value="6m-plus-kes">Above KES 6M</option>
            <option value="exploring">Still exploring</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700 transition-colors dark:text-slate-100">
          Tell us about the product
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={MAX_MESSAGE_LENGTH}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? 'message-error' : 'message-counter'}
          className={`${getFieldClasses(Boolean(fieldErrors.message))} resize-none`}
          placeholder="What problem are you solving? Who are your users? What does success look like?"
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
        />
        <div id="message-counter" className={`text-right text-xs ${counterClass}`}>
          {messageLength}/{MAX_MESSAGE_LENGTH}
        </div>
        {fieldErrors.message && (
          <p id="message-error" className="text-xs font-medium text-red-600 dark:text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="space-y-3">
        <button
          type="submit"
          disabled={state === 'loading' || overlayState === 'success'}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === 'loading' ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              <span>Sending...</span>
            </>
          ) : state === 'success' ? (
            'Message sent!'
          ) : (
            'Send my project overview'
          )}
        </button>
        <p className="text-xs text-slate-500 transition-colors dark:text-slate-300">
          We respect your privacy. By submitting this form you consent to us storing your details so we can follow up on
          your enquiry.
        </p>
      </div>
    </form>
  );
};

export default Contact;




