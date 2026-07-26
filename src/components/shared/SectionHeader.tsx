import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  action?: {
    href: string;
    label: string;
  };
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  badge, 
  title, 
  description, 
  action, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div className="space-y-4">
        {badge && (
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e34813]">
            {badge}
          </p>
        )}
        <h2 className="text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-slate-700 transition-colors dark:text-slate-100">
            {description}
          </p>
        )}
      </div>
      {action && (
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#e34813] transition hover:text-[#bf390d] dark:text-brand-200 dark:hover:text-brand-100"
          href={action.href}
        >
          {action.label}
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      )}
    </div>
  );
};

export default SectionHeader;