import Image from 'next/image';
import Link from 'next/link';
import { Leaf, HeartHandshake, ArrowRight } from 'lucide-react';
import { images } from '@/app/common/images';
import { CountUp, Parallax, ParallaxImage, Reveal } from '@/app/common/motion';

const stats = [
  { number: '5.0', label: 'Google rating' },
  { number: '2+', label: 'Years serving' },
  { number: '194', label: 'Google reviews' },
];

const Section3 = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        {/* Image stack */}
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none" x={-40} y={0}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift lg:w-[85%]">
            <ParallaxImage
              src={images.aboutStory}
              alt="Colourful clean clothes drying on a line in the sunshine"
              sizes="(max-width: 1024px) 90vw, 40vw"
              strength={14}
            />
          </div>
          <Parallax speed={50} className="absolute -bottom-10 -right-2 w-1/2 overflow-hidden rounded-[2rem] border-[6px] border-white shadow-lift sm:-right-6 lg:right-0">
            <div className="relative aspect-square">
              <Image src={images.shopSign} alt="DIRTYCLOTHS shop sign" fill sizes="(max-width: 1024px) 45vw, 20vw" className="object-cover" />
            </div>
          </Parallax>
          <Parallax speed={-30} className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-left-8">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-mint-200 text-forest-800">
              <Leaf size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Eco-friendly</p>
              <p className="text-xs text-moss/70">Biodegradable detergents, no bleach</p>
            </div>
          </Parallax>
        </Reveal>

        {/* Content */}
        <Reveal className="flex flex-col gap-7" delay={0.1}>
          <span className="eyebrow">About Us</span>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            A small local laundry with a <span className="text-leaf-600">big heart</span>
          </h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-moss">
            <p>
              At DIRTYCLOTHS, we are dedicated to providing an exceptional laundry experience in the heart of Midigama. We know your clothes are more than fabric — they travel with you.
            </p>
            <p>
              Using eco-friendly practices and reliable equipment, we look after surfers, backpackers and long-stay guests so they can enjoy the coast worry-free.
            </p>
          </div>

          <div className="flex items-start gap-4 rounded-3xl bg-mint-100 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-forest-800 text-white">
              <HeartHandshake size={20} />
            </span>
            <p className="text-sm leading-relaxed text-moss">
              <span className="font-semibold text-ink">Customer first.</span> Questions about fabrics, timing or special care? Just ask — we&apos;re happy to help.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-t border-forest-900/10 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl font-bold text-forest-800 sm:text-4xl">
                  <CountUp value={stat.number} />
                </dd>
                <dt className="text-xs font-medium text-moss/70 sm:text-sm">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <Link href="/about" className="btn-primary group w-fit">
            Our story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Section3;
