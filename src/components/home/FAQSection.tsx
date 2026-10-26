import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What can you build?',
    answer:
      'We build websites, iOS and Android apps, and custom software. We also help with interface design, API integrations, hosting, and maintenance.',
  },
  {
    question: 'How much does mobile app development cost?',
    answer:
      'The cost depends on the features, platforms, and work involved. Once we understand your requirements, we can prepare a quote with the scope and costs.',
  },
  {
    question: 'How long does it take to build a mobile app?',
    answer:
      'The timeline depends on the features, integrations, and testing needed. We discuss a schedule after reviewing your requirements and share progress as we build.',
  },
  {
    question: 'Do you sign an NDA to protect my app idea?',
    answer:
      'You can request a non-disclosure agreement (NDA) before sharing confidential details. We can discuss the agreement before starting the project.',
  },
  {
    question: 'Will you help publish the app on the App Store and Google Play?',
    answer:
      'We can help prepare store listings, screenshots, and submissions for the App Store and Google Play. Each store reviews and approves apps independently.',
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
    <section className="py-10 sm:py-16" style={{ backgroundColor: '#0b1220' }}>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Common Questions
          </h2>
          <p className="text-gray-400 mt-3 sm:mt-4 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Answers to questions about planning, costs, development, and launch.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-4xl space-y-3 sm:space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`
                rounded-xl sm:rounded-full border transition-all duration-300
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
                className="flex w-full items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left"
              >
                <span className={`text-xs sm:text-sm md:text-base font-medium transition-colors duration-300 flex-1 ${
                  openIndex === index ? 'text-black' : 'text-gray-400 hover:text-gray-200'
                }`}>
                  {faq.question}
                </span>

                {/* Circle icon */}
                <span
                  className={`flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gray-200 text-black'
                      : 'bg-transparent text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-gray-200'
                  }`}
                >
                  <svg
                    className={`h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 transition-transform duration-300 ${
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
                <div className="border-t border-gray-200/30 px-4 sm:px-6 pb-4 sm:pb-5 pt-1">
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More / Read Less Button */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-black shadow-md transition hover:bg-gray-100 hover:scale-105"
          >
            {isAllVisible ? 'Show fewer questions' : 'Show all questions'}
            <svg
              className={`h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 transition-transform duration-300 ${
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