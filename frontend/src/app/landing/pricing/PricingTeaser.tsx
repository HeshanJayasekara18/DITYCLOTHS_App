import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { images } from '@/app/common/images';
import { Reveal } from '@/app/common/motion';

const included = ['Premium wash', 'Gentle drying', 'Expert folding', 'Tourist-friendly'];

const PricingTeaser = () => (
  <section className="bg-sand py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <div className="grid overflow-hidden rounded-[2.5rem] bg-forest-800 text-white shadow-lift lg:grid-cols-2">
        <Reveal className="flex flex-col justify-center gap-7 p-8 sm:p-12 lg:p-16" x={-30} y={0}>
          <span className="eyebrow !text-sun">Simple Pricing</span>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">Pay only for what you wash.</h2>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-6xl font-extrabold text-sun sm:text-7xl">Rs 700</span>
            <span className="text-xl text-white/70">/ kg</span>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-sun">
                  <Check size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-sun px-8 py-3.5 text-sm font-bold text-forest-900 transition hover:-translate-y-0.5 hover:bg-[#f7c35e]"
          >
            Calculate your price
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="relative min-h-[320px] lg:min-h-full">
          <Image
            src={images.washer}
            alt="Modern washing machine with fresh laundry"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-800 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>
      </div>
    </div>
  </section>
);

export default PricingTeaser;
