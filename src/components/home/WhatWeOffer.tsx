import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  icon: React.ReactNode;
}

const WhatWeOffer: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('mobile');

  // Service data with new icons and paragraph details
  const services: Service[] = [
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Engaging, performant, and user-friendly apps that delight users.',
      details: 'We develop mobile apps for startups and enterprises. Our team builds apps that solve real business problems, from e-commerce and fintech to logistics and healthcare. We handle the entire process  from concept to App Store and Google Play deployment.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'Full-stack web development with modern frameworks. Responsive, fast, and SEO optimized websites and web applications.',
      details: 'We build websites and web applications for businesses that need an online presence that converts. From corporate websites to complex dashboards and admin panels, we focus on performance, security, and user experience. Our team uses React, Next.js, and Node.js to deliver modern web solutions.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
      )
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Custom software solutions tailored to your business needs. We build scalable, secure, and high performance applications that drive business growth.',
      details: 'We build custom software for businesses that need solutions off the shelf products can\'t provide. Whether it\'s an inventory system, a CRM, or an internal operations tool, we create software that streamlines your workflow and helps your team work more efficiently.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'api',
      title: 'API Development',
      description: 'Robust and scalable API solutions that connect your applications, services, and data. Secure, well documented, and high performance APIs.',
      details: 'We design and build APIs that connect your applications, third party services, and data sources. Our APIs are built for reliability and scale, with proper authentication, rate limiting, and clear documentation. We help you build integrations that work.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'saas',
      title: 'SaaS Development',
      description: 'Custom SaaS software development for your business needs. Scalable, multi tenant solutions with subscription management and enterprise grade security.',
      details: 'We build SaaS platforms for businesses that want to offer software as a service. We handle the technical complexity - multi tenant architecture, user authentication, subscription billing, and payment processing  so you can focus on your product and customers.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform App Development',
      description: 'Build once, deploy everywhere. Cross platform applications for iOS, Android, and web using React Native and modern frameworks.',
      details: 'We build cross platform apps using React Native and Flutter. This means you get iOS, Android, and sometimes web from a single codebase saving you time, money, and maintenance effort. Perfect for startups and businesses with limited development resources.',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4m0 4v4" />
        </svg>
      )
    },
    {
      id: 'web-hosting',
      title: 'Web Hosting & Administration',
      description: 'Reliable and secure web hosting solutions with 99.9% uptime guarantee. Professional web administration services including maintenance, security updates, and performance optimization.',
      details: 'We provide managed hosting for websites and web applications. We handle server setup, security monitoring, backups, and performance optimization. We also manage domain registration, DNS, and email hosting. Our team ensures your site is always up and running smoothly.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const currentService = services.find(s => s.id === activeService) || services[0];

  return (
    <section className="pt-0 pb-4 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-full mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            End-to-End Digital Product Development
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-full">
            From mobile apps to web platforms and custom software, we build digital products that perform and scale.
          </p>
        </div>

        {/* Big Blue Card */}
        <div
          className="rounded-3xl shadow-2xl overflow-hidden max-w-7xl mx-auto min-h-[650px]"
          style={{ backgroundColor: '#0b1220' }}
        >
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Service Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-6">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`
                    flex flex-col items-center justify-center gap-2 text-center p-2 rounded-xl transition-all duration-300
                    ${activeService === service.id
                      ? 'bg-white/5 border border-white/30 scale-105 translate-y-6 text-white font-semibold'
                      : 'text-white/40 border border-transparent hover:text-white hover:font-medium'
                    }
                  `}
                >
                  <span className={`transition-all duration-300 ${activeService === service.id ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                    {service.icon}
                  </span>
                  <span className="text-xs font-medium leading-tight">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start min-h-[380px]">
              {/* Left - Description */}
              <div className="flex-1 pt-16">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {currentService.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-lg mb-3">
                  {currentService.description}
                </p>
                <p className="text-white/80 leading-relaxed text-lg">
                  {currentService.details}
                </p>
              </div>

              {/* Right - Image */}
              <div className="flex-1 w-full pt-12">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-80 lg:h-96 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;