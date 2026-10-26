import { useRef, type PropsWithChildren } from 'react';
import { useInView } from 'motion/react';

interface AnimatedHeadingProps extends PropsWithChildren {
  className?: string;
}

const AnimatedHeading = ({ children, className = '' }: AnimatedHeadingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.15 });

  return (
    <div ref={containerRef}>
      <h2
        className={`animated-heading ${className}`}
        data-in-view={inView ? 'true' : 'false'}
      >
        {children}
      </h2>
    </div>
  );
};

export default AnimatedHeading;
