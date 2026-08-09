import { motion } from 'motion/react';
import type { PropsWithChildren } from 'react';

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  id?: string;
}

const Reveal = ({ children, className, delay = 0, id }: RevealProps) => (
  <motion.div
    id={id}
    className={className}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.4, delay: Math.min(delay, 0.05), ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default Reveal;
