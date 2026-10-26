import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import {
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  ServerIcon,
  CloudIcon,
  ShareIcon,
  CommandLineIcon,
  GlobeAltIcon,
  Squares2X2Icon,
  ServerStackIcon,
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
  const reduceMotion = useReducedMotion();
  const [activeService, setActiveService] = useState<string>('mobile');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Service data with Heroicons
  const services: Service[] = [
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'We build mobile apps for iOS and Android, with features designed around your customers and daily operations.',
      details: 'We work with you on the screens, features, and data your app needs. We can also help prepare it for submission to the App Store and Google Play.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: DevicePhoneMobileIcon
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'We build websites and web applications that work across phones, tablets, and computers.',
      details: 'Projects can include company websites, online shops, dashboards, and customer portals. We discuss content, navigation, and integrations before development starts.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: GlobeAltIcon
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'We build software for tasks that standard tools do not cover, such as managing inventory, customers, or internal workflows.',
      details: 'We map out the steps your team follows and build tools around them. We also discuss how the software will connect to your existing systems.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: ComputerDesktopIcon
    },
    {
      id: 'api',
      title: 'API Development',
      description: 'We build APIs to connect your software with payment services, business tools, and other data sources.',
      details: 'We plan how data moves between systems, who can access it, and what happens when a request fails. Documentation helps your team use and maintain the integration.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: ShareIcon
    },
    {
      id: 'saas',
      title: 'SaaS Development',
      description: 'We build subscription-based software with user accounts, billing, and the features your customers need.',
      details: 'We help plan how different customers access the platform, manage their accounts, and pay for subscriptions. The initial features and future updates are agreed as part of the project.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: CloudIcon
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform App Development',
      description: 'We build apps that share code across iOS and Android, helping reduce development and maintenance work.',
      details: 'A shared codebase can suit projects that need similar features on both platforms. We discuss any features that require separate platform-specific development.',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: CommandLineIcon
    },
    {
      id: 'web-hosting',
      title: 'Web Hosting & Administration',
      description: 'We help host and maintain your website, including server setup, backups, security updates, and performance checks.',
      details: 'We can help with domains, server configuration, backups, and routine maintenance. The hosting and support work included will be set out in your proposal.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: ServerIcon
    }
  ];

  const currentService = services.find(s => s.id === activeService) || services[0];

  // Handle service click
  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    scrollToService(serviceId);
  };

  // Function to scroll to a specific service
  const scrollToService = (serviceId: string) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const button = container.querySelector(`[data-service-id="${serviceId}"]`) as HTMLElement;

      if (button) {
        // Calculate scroll position to center the button
        const containerWidth = container.offsetWidth;
        const buttonWidth = button.offsetWidth;
        const buttonLeft = button.offsetLeft;
        const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < maxScroll - 10);
    }
  };

  // Handle arrow clicks
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  // Check scroll position on scroll and resize
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);

      // Initial check
      setTimeout(checkScrollPosition, 100);

      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  // Scroll to initial active service on mount
  useEffect(() => {
    setTimeout(() => {
      scrollToService(activeService);
    }, 500);
  }, []);

  return (
    <section className="overflow-hidden pt-0 pb-4 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-full mx-auto mb-8">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3"
            initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -160 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.8, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            What We Build
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-full">
            Choose a service to see how we can help with your project.
          </p>
        </div>

        {/* Big Blue Card */}
        <div
          className="rounded-3xl shadow-2xl overflow-hidden max-w-7xl mx-auto min-h-[650px]"
          style={{ backgroundColor: '#0b1220' }}
        >
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Service Icons - Horizontal scroll on mobile */}
            <div className="relative">
              {/* Left Arrow - Mobile only */}
              <button
                onClick={scrollLeft}
                className={`
                  absolute left-0 top-1/2 -translate-y-1/2 z-10
                  md:hidden
                  bg-[#0b1220]/80 backdrop-blur-sm
                  text-white p-2 rounded-full
                  border border-white/20
                  transition-all duration-300
                  hover:bg-[#0b1220] hover:scale-110
                  ${showLeftArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>

              {/* Scroll container */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide"
              >
                <div className="flex flex-nowrap gap-3 gap-y-6 sm:gap-y-4 md:gap-y-3 mb-6 sm:mb-8 min-w-max md:min-w-0 px-1">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={service.id}
                        data-service-id={service.id}
                        onClick={() => handleServiceClick(service.id)}
                        className={`
                          flex flex-col items-center justify-center gap-2 text-center p-2 rounded-xl transition-all duration-300 flex-shrink-0
                          min-w-[80px] max-w-[100px] sm:min-w-0 sm:max-w-none sm:flex-1
                          ${activeService === service.id
                            ? 'text-white font-semibold scale-105'
                            : 'text-white/40 hover:text-white hover:font-medium'
                          }
                        `}
                      >
                        <Icon className={`
                          w-8 h-8 transition-all duration-300 flex-shrink-0
                          ${activeService === service.id ? 'text-white' : 'text-white/80'}
                        `} />
                        <span className="text-xs font-medium leading-tight">
                          {service.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Arrow - Mobile only */}
              <button
                onClick={scrollRight}
                className={`
                  absolute right-0 top-1/2 -translate-y-1/2 z-10
                  md:hidden
                  bg-[#0b1220]/80 backdrop-blur-sm
                  text-white p-2 rounded-full
                  border border-white/20
                  transition-all duration-300
                  hover:bg-[#0b1220] hover:scale-110
                  ${showRightArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>

              {/* Scroll indicators - gradient overlays (mobile only) */}
              <div className={`
                absolute left-0 top-0 bottom-0 w-12
                bg-gradient-to-r from-[#0b1220] to-transparent
                pointer-events-none md:hidden
                transition-opacity duration-300
                ${showLeftArrow ? 'opacity-100' : 'opacity-0'}
              `} />
              <div className={`
                absolute right-0 top-0 bottom-0 w-12
                bg-gradient-to-l from-[#0b1220] to-transparent
                pointer-events-none md:hidden
                transition-opacity duration-300
                ${showRightArrow ? 'opacity-100' : 'opacity-0'}
              `} />
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

      {/* Add this CSS to hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WhatWeOffer;