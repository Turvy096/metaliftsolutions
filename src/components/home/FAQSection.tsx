import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What services does your mobile app development company offer?',
    answer:
      'We offer end-to-end mobile app development including iOS, Android, cross-platform (Flutter & React Native), UI/UX design, backend development, API integration, and ongoing maintenance & support.',
  },
  {
    question: 'How much does mobile app development cost?',
    answer:
      'The cost depends on the complexity, features, and platforms. Simple apps usually start from $5,000–$15,000, while medium to complex apps range from $20,000 to $100,000+. We provide a detailed custom quote after understanding your requirements.',
  },
  {
    question: 'How long does it take to build a mobile app?',
    answer:
      'A basic MVP typically takes 4–8 weeks. Mid-level apps take around 2–4 months, and complex enterprise solutions can take 4–6 months or more. We follow an agile process so you can see progress early.',
  },
  {
    question: 'Do you sign an NDA to protect my app idea?',
    answer:
      'Yes, absolutely. We take intellectual property seriously. We are happy to sign a Non-Disclosure Agreement (NDA) before discussing any project details to ensure your idea remains fully protected.',
  },
  {
    question: 'Will you help publish the app on the App Store and Google Play?',
    answer:
      'Yes. We handle the complete submission process for both Apple App Store and Google Play Store, including developer account setup, store listing, screenshots, and compliance with platform guidelines.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleFaqs = faqs.slice(0, visibleCount);
  const isAllVisible = visibleCount === faqs.length;

  const handleToggle = () => {
    if (isAllVisible) {
      setVisibleCount(3);
    } else {
      setVisibleCount(faqs.length);
    }
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#0b1220' }}>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4 max-w-4xl mx-auto text-lg whitespace-nowrap">
            Find answers to common questions about our mobile app development services.
          </p>
        </div>

        {/* FAQ Items - Same design as tech stack tabs */}
        <div className="mx-auto max-w-4xl space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`
                rounded-full border transition-all duration-300
                ${
                  openIndex === index
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-gray-200'
                }
              `}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`text-base font-medium transition-colors duration-300 ${
                  openIndex === index ? 'text-black' : 'text-gray-400 hover:text-gray-200'
                }`}>
                  {faq.question}
                </span>

                {/* Circle icon - matches tech stack style */}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gray-200 text-black'
                      : 'bg-transparent text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-gray-200'
                  }`}
                >
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-200/30 px-6 pb-5 pt-1">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More / Read Less Button - Same as tech stack active button */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-medium text-black shadow-md transition hover:bg-gray-100 hover:scale-105"
          >
            {isAllVisible ? 'Read Less' : 'Read More'}
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                isAllVisible ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;