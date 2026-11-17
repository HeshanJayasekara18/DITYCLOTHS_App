'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import Bubbles from './Bubbles';
import { ParallaxImage } from './motion';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
};

const PageHero = ({ eyebrow, title, description, image, children }: PageHeroProps) => (
  <section className="relative isolate overflow-hidden bg-forest-900 pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
    <motion.div
      className="absolute inset-0 -z-20"
      initial={{ scale: 1.15 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <ParallaxImage src={image} alt="" priority sizes="100vw" strength={18} />
    </motion.div>
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-900/80 via-forest-900/60 to-forest-900/90" />
    <Bubbles />

    <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6">
      <motion.span
        className="eyebrow !text-sun"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h1
        className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {description}
      </motion.p>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </div>

    {/* Wave divider */}
    <svg
      aria-hidden="true"
      className="absolute -bottom-px left-0 h-12 w-full text-sand sm:h-16"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M0 40c120 26 240 40 360 40s240-14 360-40 240-40 360-40 240 14 360 40v40H0z" />
    </svg>
  </section>
);

export default PageHero;
