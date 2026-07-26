import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import {
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  ServerIcon,
  CloudIcon,
  ShareIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const WhatWeOffer: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('mobile');

  // Service data with Heroicons
  const services: Service[] = [
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Engaging, performant, and user-friendly apps that delight users.',
      details: 'We develop mobile apps for startups and enterprises. Our team builds apps that solve real business problems, from e-commerce and fintech to logistics and healthcare. We handle the entire process from concept to App Store and Google Play deployment.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: DevicePhoneMobileIcon
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'Full-stack web development with modern frameworks. Responsive, fast, and SEO optimized websites and web applications.',
      details: 'We build websites and web applications for businesses that need an online presence that converts. From corporate websites to complex dashboards and admin panels, we focus on performance, security, and user experience. Our team uses React, Next.js, and Node.js to deliver modern web solutions.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: CodeBracketIcon
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Custom software solutions tailored to your business needs. We build scalable, secure, and high performance applications that drive business growth.',
      details: 'We build custom software for businesses that need solutions off the shelf products can\'t provide. Whether it\'s an inventory system, a CRM, or an internal operations tool, we create software that streamlines your workflow and helps your team work more efficiently.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: ComputerDesktopIcon
    },
    {
      id: 'api',
      title: 'API Development',
      description: 'Robust and scalable API solutions that connect your applications, services, and data. Secure, well documented, and high performance APIs.',
      details: 'We design and build APIs that connect your applications, third party services, and data sources. Our APIs are built for reliability and scale, with proper authentication, rate limiting, and clear documentation. We help you build integrations that work.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: ShareIcon
    },
    {
      id: 'saas',
      title: 'SaaS Development',
      description: 'Custom SaaS software development for your business needs. Scalable, multi tenant solutions with subscription management and enterprise grade security.',
      details: 'We build SaaS platforms for businesses that want to offer software as a service. We handle the technical complexity - multi tenant architecture, user authentication, subscription billing, and payment processing so you can focus on your product and customers.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: CloudIcon
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform App Development',
      description: 'Build once, deploy everywhere. Cross platform applications for iOS, Android, and web using React Native and modern frameworks.',
      details: 'We build cross platform apps using React Native and Flutter. This means you get iOS, Android, and sometimes web from a single codebase saving you time, money, and maintenance effort. Perfect for startups and businesses with limited development resources.',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: CommandLineIcon
    },
    {
      id: 'web-hosting',
      title: 'Web Hosting & Administration',
      description: 'Reliable and secure web hosting solutions with 99.9% uptime guarantee. Professional web administration services including maintenance, security updates, and performance optimization.',
      details: 'We provide managed hosting for websites and web applications. We handle server setup, security monitoring, backups, and performance optimization. We also manage domain registration, DNS, and email hosting. Our team ensures your site is always up and running smoothly.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: ServerIcon
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
            {/* Service Icons - Heroicons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-3 sm:mb-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
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
                    <Icon className="w-8 h-8 text-white/80 transition-all duration-300" />
                    <span className="text-xs font-medium leading-tight">
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start min-h-[380px]">
              {/* Left - Description */}
              <div className="flex-1 pt-8 sm:pt-16">
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-3">
                  {currentService.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-base sm:text-lg mb-3">
                  {currentService.description}
                </p>
                <p className="text-white/80 leading-relaxed text-base sm:text-lg">
                  {currentService.details}
                </p>
              </div>

              {/* Right - Image */}
              <div className="flex-1 w-full pt-6 sm:pt-12">
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