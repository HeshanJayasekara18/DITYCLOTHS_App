'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Clock, MapPin, Sparkles, Star } from 'lucide-react';
import Bubbles from '@/app/common/Bubbles';
import { images } from '@/app/common/images';

const ease = [0.22, 1, 0.36, 1] as const;
const headline = ['Fresh', 'laundry,', 'more', 'beach', 'time.'];

const Section1 = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-br from-mint-100 via-mint-200 to-sand pb-20 pt-32 sm:pt-36 lg:min-h-[min(100vh,960px)] lg:pb-28 lg:pt-40"
    >
      <div className="absolute -left-40 top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-white/60 blur-3xl" />
      <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-sun/20 blur-3xl" />
      <Bubbles />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10">
        {/* Copy */}
        <div className="flex flex-col gap-7">
          <motion.span
            className="inline-flex w-fit items-center gap-2 rounded-full border border-forest-800/10 bg-white/70 px-4 py-2 text-xs font-semibold text-forest-800 shadow-soft backdrop-blur"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf-500" />
            </span>
            Laundry in Midigama · Open daily 6 AM – 12 AM
          </motion.span>

          <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            {headline.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  className={`mr-[0.22em] inline-block ${word === 'beach' ? 'relative text-leaf-600' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.08 }}
                >
                  {word}
                  {word === 'beach' && (
                    <motion.svg
                      aria-hidden="true"
                      viewBox="0 0 200 20"
                      className="absolute -bottom-1 left-0 h-3 w-full text-sun"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M2 14 Q 50 2, 100 10 T 198 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.9, delay: 1, ease }}
                      />
                    </motion.svg>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-moss sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.6 }}
          >
            DIRTYCLOTHS is a friendly laundry service for travelers and surfers in Midigama, Ahangama, and Weligama. We carefully wash, naturally sun-dry your clothes in a clean area away from roadside dust, and neatly fold them. Enjoy fresh, clean laundry, ready for your next adventure.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.75 }}
          >
            <a className="btn-primary group" href="https://wa.me/94721634671" target="_blank" rel="noopener noreferrer">
              Book on WhatsApp
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link className="btn-ghost" href="/services">
              View our services
            </Link>
          </motion.div>

          <motion.dl
            className="mt-2 grid max-w-lg grid-cols-3 gap-4 border-t border-forest-800/10 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
          >
            {[
              { icon: Star, value: '5.0', label: 'Google rating' },
              { icon: Clock, value: '24h', label: 'Express, same price' },
              { icon: MapPin, value: '3', label: 'Towns served' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <dt className="flex items-center gap-1.5 text-xs font-medium text-moss/70">
                  <Icon size={14} className="text-leaf-600" />
                  {label}
                </dt>
                <dd className="font-display text-2xl font-bold text-forest-800 sm:text-3xl">{value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Visual collage */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-lift sm:aspect-[4/4.4]"
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
          >
            <Image
              src={images.hero}
              alt="Fresh, colourful laundry drying on a line in the sunshine"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
          </motion.div>

          {/* Shop photo card */}
          <motion.div
            style={{ y: cardY }}
            className="absolute -bottom-8 -left-2 w-32 sm:-left-10 sm:w-52"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
          >
            <div className="animate-float-slow overflow-hidden rounded-3xl border-4 border-white shadow-lift">
              <div className="relative aspect-square">
                <Image src={images.shopSign} alt="The DIRTYCLOTHS shop sign in Midigama" fill sizes="220px" className="object-cover" />
              </div>
              <p className="bg-white px-3 py-2 text-center text-xs font-semibold text-forest-800">Find us in Midigama</p>
            </div>
          </motion.div>

          {/* Hours chip */}
          <motion.div
            className="absolute -right-2 top-8 sm:-right-6"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 1 }}
          >
            <div className="animate-float rounded-2xl bg-white px-4 py-3 shadow-lift">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-moss/70">Wash · Sun-dry · Fold · Iron</p>
              <p className="font-display text-2xl font-bold text-forest-800">
                Open 6 AM – 12 AM
              </p>
            </div>
          </motion.div>

          {/* Eco chip */}
          <motion.div
            className="absolute -right-3 bottom-24 flex items-center gap-2 rounded-full bg-forest-800 px-4 py-2.5 text-xs font-semibold text-white shadow-glow sm:-right-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.2 }}
          >
            <Sparkles size={14} className="text-sun" />
            Eco-friendly detergents
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
