'use client';

import Image from 'next/image';
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform, type Variants } from 'motion/react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
};

export const Reveal = ({ children, className, delay = 0, y = 32, x = 0 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.8, ease, delay }}
  >
    {children}
  </motion.div>
);

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const Stagger = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    variants={staggerParent}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-80px' }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div className={className} variants={staggerChild}>
    {children}
  </motion.div>
);

// Animates a number like "1000+" or "24/7" up from zero once it scrolls into view.
export const CountUp = ({ value, className }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {
    if (!match || !inView) return;
    const target = Number(match[1]);
    const suffix = match[2];
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      ease,
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Extra classes for the outer (absolute, full-size) wrapper, e.g. '-z-20'. */
  className?: string;
  /** How far the image drifts, as a % of the container height. */
  strength?: number;
};

// Background photo that drifts slower than the page as you scroll. Fills its
// nearest positioned parent. Static for people who prefer reduced motion.
export const ParallaxImage = ({ src, alt, sizes, priority, className = '', strength = 12 }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const travel = strength * 0.8;
  const y = useTransform(scrollYProgress, [0, 1], [`-${travel}%`, `${travel}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-x-0 will-change-transform"
        style={{ top: `-${strength}%`, bottom: `-${strength}%`, y: reduceMotion ? 0 : y }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </div>
  );
};

// Moves its children up/down at a different speed than the page while scrolling.
// Positive speed moves against the scroll (floats up), negative moves with it.
export const Parallax = ({ children, className, speed = 40 }: { children: ReactNode; className?: string; speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} className={className} style={{ y: reduceMotion ? 0 : y }}>
      {children}
    </motion.div>
  );
};
