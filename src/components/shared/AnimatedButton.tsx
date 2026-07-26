import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'cta' | 'white';
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-semibold uppercase transition hover:scale-105 min-w-[200px] tracking-wide";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-white/10 backdrop-blur text-white hover:bg-white/20 border border-white/30",
    cta: "bg-orange-500 text-white hover:bg-orange-600 min-w-[240px]",
    white: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-slate-900"
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export default AnimatedButton;