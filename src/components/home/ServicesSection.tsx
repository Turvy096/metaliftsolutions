import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShoppingCartIcon,
  Cog6ToothIcon,
  HeartIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

interface Industry {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
}

interface ServicesSectionProps {
  industries?: Industry[];
}

const defaultIndustries: Industry[] = [
  {
    title: 'E-commerce',
    description:
      'We build e-commerce apps that offer smooth shopping experiences, secure payments, and easy navigation. Our solutions help businesses increase conversions, manage products efficiently, and deliver personalized user experiences across mobile platforms.',
    icon: ShoppingCartIcon,
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Fintech',
    description:
      'Our fintech solutions focus on secure transactions, digital wallets, and real-time financial services. We develop scalable apps that ensure data security, fast processing, and seamless user experiences for modern financial platforms.',
    icon: Cog6ToothIcon,
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Healthcare',
    description:
      'We create healthcare apps for appointment booking, patient management, and telemedicine. Our solutions improve accessibility, ensure data security, and help healthcare providers deliver better services through digital platforms.',
    icon: HeartIcon,
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Travel & Hospitality',
    description:
      'We develop travel and hospitality apps that streamline bookings, enhance guest experiences, and simplify operations. From hotel management to tour packages, our solutions help businesses deliver seamless journeys and memorable stays.',
    icon: BuildingOffice2Icon,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Education',
    description:
      'Our education apps support online learning, student management, and interactive classrooms. We build scalable platforms that improve accessibility, engagement, and learning outcomes for schools, universities, and edtech companies.',
    icon: AcademicCapIcon,
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Logistics & Transport',
    description:
      'We create logistics and transport apps for fleet management, real time tracking, and efficient supply chain operations. Our solutions help businesses optimize routes, reduce costs, and deliver goods faster with complete visibility.',
    icon: TruckIcon,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({
  industries = defaultIndustries,
}) => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/contact');
  };

  return (
    <section className="pt-2 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-full mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
            Industries We Serve.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-full px-2">
           We help businesses across various industries build smart, successful digital products. Our mobile app solutions improve operations, enhance user experience, and drive long-term growth.
          </p>
        </div>

        {/* Industry cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-0.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.08 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                className="group relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 bg-white border border-slate-200 min-h-[280px] sm:min-h-[320px]"
                variants={{
                  hidden: { opacity: 0, y: 64, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Default content */}
                <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                  <div className="mb-3 sm:mb-4">
                    <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-slate-800 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {industry.description}
                  </p>
                </div>

                {/* Hover state */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(11, 18, 32, 0.75)' }}
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {industry.title}
                    </h3>

                    <button
                      onClick={handleExploreMore}
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 text-sm sm:text-base cursor-pointer border-none"
                    >
                      Explore more
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
