import { useRef, type PropsWithChildren } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface AnimatedHeadingProps extends PropsWithChildren {
  className?: string;
}

const AnimatedHeading = ({ children, className = '' }: AnimatedHeadingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.15 });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={containerRef} className="[--heading-x:0px] [--heading-y:-28px] md:[--heading-x:-160px] md:[--heading-y:0px]">
      <motion.h2
        className={className}
        initial={false}
        animate={inView || reduceMotion
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: 'var(--heading-x)', y: 'var(--heading-y)' }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default AnimatedHeading;
