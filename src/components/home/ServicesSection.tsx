import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
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
      'Online shops and mobile apps for browsing products, placing orders, and making payments. We also build tools for managing products, stock, and orders.',
    icon: ShoppingCartIcon,
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Fintech',
    description:
      'Apps and integrations for payments, transaction records, and financial account management. We plan access controls and data handling around the needs of each project.',
    icon: Cog6ToothIcon,
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Healthcare',
    description:
      'Tools for appointment booking, patient records, and remote consultations. We work with providers to understand their workflows and data access requirements.',
    icon: HeartIcon,
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Travel & Hospitality',
    description:
      'Websites and apps for accommodation bookings, tour packages, and guest enquiries. We also build tools to help staff manage reservations and availability.',
    icon: BuildingOffice2Icon,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Education',
    description:
      'Platforms for course materials, online lessons, student records, and school administration. We design them around the needs of learners, teachers, and staff.',
    icon: AcademicCapIcon,
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Logistics & Transport',
    description:
      'Tools for tracking deliveries, managing vehicles, and coordinating orders. Teams can use them to see delivery progress and organise daily operations.',
    icon: TruckIcon,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard = ({ industry }: IndustryCardProps) => (
  <motion.article
    className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
    variants={{
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="relative h-48 overflow-hidden sm:h-52">
      <img
        src={industry.image}
        alt={industry.title}
        className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/90 via-[#0b1220]/20 to-transparent" />
      <h3 className="absolute bottom-8 left-5 right-5 text-xl font-bold text-white drop-shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-safe:group-hover:translate-y-6">
        {industry.title}
      </h3>
    </div>
    <div className="p-5 sm:p-6">
      <p className="text-sm leading-relaxed text-slate-600" data-nosnippet>
        {industry.description}
      </p>
    </div>
  </motion.article>
);

const ServicesSection: React.FC<ServicesSectionProps> = ({
  industries = defaultIndustries,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden pt-2 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-full mx-auto mb-8 sm:mb-10">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3"
            initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -160 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.8, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Industries We Serve.
          </motion.h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-full px-2">
           We build software for businesses in retail, finance, healthcare, travel, education, and logistics. Here are some of the ways it can be used.
          </p>
        </div>

        {/* Industry cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.08 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              industry={industry}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
