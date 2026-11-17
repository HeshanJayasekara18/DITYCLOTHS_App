import { Sparkle } from 'lucide-react';

const words = ['Wash', 'Dry', 'Fold', 'Baby Care', 'Sensitive Skin', 'Express 24h', 'Eco-Friendly', 'No Bleach', 'Midigama', 'Ahangama', 'Weligama'];

const Marquee = () => (
  <div className="relative overflow-hidden border-y border-forest-900/10 bg-forest-800 py-5 text-white" aria-hidden="true">
    <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
      {[...words, ...words].map((word, i) => (
        <span key={i} className="flex items-center gap-10 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {word}
          <Sparkle size={20} className="text-sun" fill="currentColor" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
