import { useEffect, type PropsWithChildren } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  id?: string;
}

const Reveal = ({ children, className, delay = 0, id }: RevealProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: false,
    amount: 0.12,
    margin: "0px 0px -60px 0px",
  });

  useEffect(() => {
    if (!isInView) {
      animate(
        "h1, h2, h3, p",
        { opacity: 0, y: 26, scale: 0.96 },
        { duration: 0.2 },
      );
      return;
    }

    animate(
      "h1, h2, h3, p",
      { opacity: [0, 1], y: [26, 0], scale: [0.96, 1] },
      {
        duration: 0.5,
        delay: stagger(0.045, { startDelay: delay + 0.18 }),
        ease: [0.22, 1, 0.36, 1],
      },
    );
  }, [animate, delay, isInView]);

  return (
    <motion.div
      ref={scope}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 80, scale: 0.98 }
      }
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
