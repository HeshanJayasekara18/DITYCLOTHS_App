import { ArrowRight } from 'lucide-react';
import { images } from './images';
import { ParallaxImage, Reveal } from './motion';

type CtaBandProps = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const CtaBand = ({ title, description, primary, secondary }: CtaBandProps) => (
  <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
    <Reveal className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-forest-900 px-6 py-16 text-center text-white shadow-lift sm:px-12 sm:py-20">
      <ParallaxImage src={images.ctaBeach} alt="" sizes="(max-width: 1200px) 100vw, 1200px" className="-z-20" strength={16} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-900/90 via-forest-800/75 to-forest-900/40" />
      <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 animate-spin-slow rounded-full border-2 border-dashed border-sun/40" />

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
        <p className="text-base text-white/80 sm:text-lg">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={primary.href}
            target={primary.href.startsWith('http') ? '_blank' : undefined}
            rel={primary.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-sun px-8 py-3.5 text-sm font-bold text-forest-900 shadow-[0_18px_40px_rgba(242,181,68,0.35)] transition hover:-translate-y-0.5 hover:bg-[#f7c35e]"
          >
            {primary.label}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </Reveal>
  </section>
);

export default CtaBand;
