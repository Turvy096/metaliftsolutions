import { useEffect, useRef, useState, type FormEvent, type ChangeEvent, type FocusEvent } from 'react';
import emailjs from '@emailjs/browser';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';
type FieldKey = 'name' | 'email' | 'message';

const EMAILJS_SERVICE_ID = 'service_zykv7yb';
const EMAILJS_TEMPLATE_ID = 'template_l5exiuh';
const EMAILJS_PUBLIC_KEY = 'cqw9St8CPyK5hCvZg';
const MAX_MESSAGE_LENGTH = 1000;
const NAME_PATTERN = /^[a-zA-Z\s]{2,50}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  return (
     <div className="space-y-16 pb-16 sm:space-y-20 sm:pb-20">
      <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fef4ee] transition-colors duration-300 dark:from-night dark:via-night/90 dark:to-slate/70" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 text-center sm:px-6 lg:px-8">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-500 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-brand-200">
          Contact
        </span>
        <h1 className="text-4xl font-bold text-slate-900 transition-colors sm:text-5xl dark:text-white">
          Tell us about the Idea you have and we will help bring it to life.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-700 transition-colors dark:text-slate-100">
          We take on a limited number of partnerships at a time so every engagement gets senior focus. Share a few
          details and we&apos;ll follow up with an introductory session.
        </p>
      </div>
    </section>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
      </div>

      

      <section className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
          
          {/* Left Side: Metalift Branding */}
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-400">
              Get in touch
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Start now! Partner with <span className="text-brand-400">Metalift</span> to boost your business.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              From Nairobi to the world, we help teams scale their digital products with senior-level 
              engineering and strategic focus. Tell us your vision, and let's lift your product together.
            </p>
            
            <div className="mt-10 flex flex-col gap-y-6 border-l border-white/10 pl-6">
               <div>
                 <p className="text-sm font-semibold text-white">Global Reach</p>
                 <p className="text-sm text-slate-400">Operating across Africa, Europe, and the Middle East.</p>
               </div>
               <div>
                 <p className="text-sm font-semibold text-white">Rapid Response</p>
                 <p className="text-sm text-slate-400">Our team typically responds within 6 business hours.</p>
               </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="relative">
            {/* Ambient Glow behind form */}
            <div className="absolute -inset-4 -z-10 bg-brand-500/10 blur-3xl rounded-full" />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactForm = () => {
  const [state, setState] = useState<SubmitState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [message, setMessage] = useState("");
  const [overlayState, setOverlayState] = useState<'hidden' | 'loading' | 'success'>('hidden');
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const overlayTimeoutRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (overlayTimeoutRef.current) window.clearTimeout(overlayTimeoutRef.current);
    };
  }, []);

  // Auto-expansion logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [message]);

  const getFieldClasses = (hasError: boolean) => [
    'w-full rounded-xl border px-4 py-3 text-sm transition focus:outline-none focus:ring-2',
    hasError
      ? 'border-red-400 bg-night/70 text-white placeholder:text-slate-500 focus:ring-red-400/30'
      : 'border-white/10 bg-night/70 text-white placeholder:text-slate-500 focus:border-brand-400 focus:ring-brand-400/40',
  ].join(' ');

  const validators: Record<FieldKey, (value: string) => string | null> = {
    name: (v) => (!v.trim() ? 'Name is required.' : !NAME_PATTERN.test(v.trim()) ? 'Use 2-50 alphabetic characters.' : null),
    email: (v) => (!v.trim() ? 'Email is required.' : !EMAIL_PATTERN.test(v.trim()) ? 'Enter a valid email address.' : null),
    message: (v) => (!v.trim() ? 'Please tell us about your project.' : v.trim().length < 10 ? 'Message too short.' : null),
  };

  const validateField = (name: FieldKey, value: string) => {
    const errorMessage = validators[name](value);
    setFieldErrors(prev => {
      const next = { ...prev };
      if (errorMessage) next[name] = errorMessage;
      else delete next[name];
      return next;
    });
    return !errorMessage;
  };

  const handleFieldBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'name' || name === 'email' || name === 'message') validateField(name, value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Validation
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const isNameValid = validateField('name', name);
    const isEmailValid = validateField('email', email);
    const isMsgValid = validateField('message', message);

    if (!isNameValid || !isEmailValid || !isMsgValid) {
      setState('error');
      setError('Please fix highlighted fields.');
      return;
    }

    setState('loading');
    setOverlayState('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: `Company: ${formData.get('company')}\nTimeline: ${formData.get('timeline')}\nBudget: ${formData.get('budget')}\n\nMessage: ${message}`,
        },
        EMAILJS_PUBLIC_KEY
      );

      form.reset();
      setMessage("");
      setState('success');
      setOverlayState('success');
      overlayTimeoutRef.current = window.setTimeout(() => setOverlayState('hidden'), 5000);
    } catch (err) {
      setError('Failed to send. Please try again.');
      setState('error');
      setOverlayState('hidden');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
    >
      {/* Success/Loading Overlay */}
      {overlayState !== 'hidden' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-night/95 p-6 text-center animate-in fade-in duration-300">
          {overlayState === 'loading' ? (
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-500/20 border-t-brand-500" />
          ) : (
            <div className="text-brand-400">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="mt-4 text-lg font-semibold text-white">Message Sent!</p>
              <p className="text-sm text-slate-400">We'll follow up within one business day.</p>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Name *"
          onBlur={handleFieldBlur}
          className={getFieldClasses(Boolean(fieldErrors.name))}
        />
        <input
          name="email"
          type="email"
          placeholder="Work Email *"
          onBlur={handleFieldBlur}
          className={getFieldClasses(Boolean(fieldErrors.email))}
        />
      </div>

      <input
        name="company"
        type="text"
        placeholder="Company / Team"
        className={getFieldClasses(false)}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <select name="timeline" className={getFieldClasses(false)}>
          <option value="" disabled selected>Ideal timeline</option>
          <option value="0-3 months">0-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6 months+">6 months+</option>
        </select>
        <select name="budget" className={getFieldClasses(false)}>
          <option value="" disabled selected>Estimated investment</option>
          <option value="under-1.5m">Under KES 1.5M</option>
          <option value="1.5m-3m">KES 1.5M - 3M</option>
          <option value="3m+">Above KES 3M</option>
        </select>
      </div>

      <textarea
        ref={textareaRef}
        name="message"
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={handleFieldBlur}
        placeholder="How can we help? *"
        className={`${getFieldClasses(Boolean(fieldErrors.message))} min-h-[48px] overflow-hidden resize-none`}
      />

      {error && state === 'error' && <p className="text-xs text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full rounded-xl bg-brand-500 py-4 font-bold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-600 active:scale-[0.98] disabled:opacity-50"
      >
        {state === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>

      <p className="text-center text-[10px] uppercase tracking-widest text-slate-500">
        Secure & Private • One Business Day Response
      </p>
    </form>
  );
};

export default Contact;