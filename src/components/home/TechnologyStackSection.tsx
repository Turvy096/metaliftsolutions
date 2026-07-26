import React, { useState } from 'react';

interface TechItem {
  name: string;
  icon: string;
}

interface TechCategory {
  name: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    name: 'Mobile App',
    items: [
      { name: 'ANDROID', icon: 'https://cdn.simpleicons.org/android/3DDC84' },
      { name: 'IOS', icon: 'https://cdn.simpleicons.org/apple/ffffff' },
      { name: 'FLUTTER', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
      { name: 'REACT NATIVE', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'KOTLIN', icon: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'JAVA', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
      { name: 'KOTLIN', icon: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
      { name: 'GOLANG', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { name: 'TYPESCRIPT', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'REACT', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'TAILWIND', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      {
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      },
    ],
  },
  {
    name: 'Data Base',
    items: [
      { name: 'MYSQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'POSTGRESQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'MONGODB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    ],
  },
  {
    name: 'UI/UX Design',
    items: [
      {
        name: 'FIGMA',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
      },
      {
        name: 'PHOTOSHOP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg'
      },
    ],
  },
];

const TechnologyStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mobile App');

  const currentCategory = techCategories.find((c) => c.name === activeTab);
  const items = currentCategory?.items || [];

  return (
    <section className="py-10 sm:py-14 min-h-[400px] sm:min-h-[550px]" style={{ backgroundColor: '#0b1220' }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto mb-6 sm:mb-9">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
            The Tech Stack We Use to Build Profitable Solutions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-4xl mx-auto text-center px-2">
            We leverage modern technologies to build fast, secure, and reliable digital solutions tailored to your business.
          </p>
        </div>

        {/* Tabs - Responsive buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10">
          {techCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              className={`
                px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-base md:text-lg font-medium transition-all duration-300
                ${
                  activeTab === category.name
                    ? 'bg-white text-black'
                    : 'bg-transparent text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-gray-200'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Hexagon Grid - Responsive icons with reduced vertical spacing on mobile */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
          {items.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group">
              <div
                className="relative w-[70px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[75px] sm:h-[110px] md:h-[130px] lg:h-[150px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  clipPath:
                    'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  backgroundColor: '#1a1a2e',
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-7 sm:w-10 md:w-12 lg:w-16 h-7 sm:h-10 md:h-12 lg:h-16 object-contain"
                />
              </div>

              <span className="mt-1.5 sm:mt-3 text-[10px] sm:text-xs md:text-sm font-medium tracking-widest text-gray-400 uppercase">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;