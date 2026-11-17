'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ShoppingBag, WashingMachine, Sun, Shirt, PartyPopper } from 'lucide-react';
import { Reveal } from '@/app/common/motion';
import { images } from '@/app/common/images';

const steps = [
  {
    icon: ShoppingBag,
    title: 'Drop off',
    image: images.stepDropoff,
    alt: 'Bags full of laundry ready to be washed',
    description: 'Bring your laundry bag to our Midigama shop. We are open every day, 6 AM – 12 AM.',
  },
  {
    icon: WashingMachine,
    title: 'We wash',
    image: images.stepWash,
    alt: 'Row of washing machines',
    description: 'Sorted by colour and fabric, then washed with eco-friendly detergents. We never use bleach.',
  },
  {
    icon: Sun,
    title: 'Sun-dried',
    image: images.stepSun,
    alt: 'Colourful clean clothes drying on a line in the sunshine',
    description: 'Dried naturally in the Midigama sunshine for a fresh, clean smell.',
  },
  {
    icon: Shirt,
    title: 'Neatly folded',
    image: images.stepFold,
    alt: 'A neat stack of folded t-shirts',
    description: 'Folded and packed wrinkle-free. Ironing available on request.',
  },
  {
    icon: PartyPopper,
    title: 'Pick up fresh',
    image: images.stepPickup,
    alt: 'Handing over a DIRTYCLOTHS bag of fresh, folded laundry',
    description: 'Ready in 24–48 hours (express within 24 hours). Collect at the shop and head back to the beach.',
  },
];

const HowItWorks = () => (
  <section className="relative overflow-hidden bg-mint-200 py-20 sm:py-28">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.7),transparent_45%)]" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <Reveal className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-20">
        <span className="eyebrow">How It Works</span>
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Five easy steps to fresh clothes
        </h2>
      </Reveal>

      <div className="relative flex flex-wrap justify-center gap-6 xl:gap-5">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              className="group relative flex w-full flex-col items-center gap-3 overflow-hidden rounded-[2rem] bg-white pb-7 text-center shadow-soft sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-5rem)/5)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 18vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative -mt-12">
                <motion.span
                  className="grid h-16 w-16 place-items-center rounded-full bg-white text-forest-800 shadow-lift ring-[6px] ring-white"
                  whileHover={{ scale: 1.1, rotate: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={28} strokeWidth={1.8} />
                </motion.span>
                <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-sun font-display text-sm font-bold text-forest-900">
                  {i + 1}
                </span>
              </div>
              <h3 className="px-4 font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="max-w-xs px-4 text-sm leading-relaxed text-moss">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowItWorks;
