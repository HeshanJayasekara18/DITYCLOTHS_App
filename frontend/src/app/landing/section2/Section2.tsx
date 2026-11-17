import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Wind, Clock, Baby, ArrowUpRight, Check, HeartHandshake, Sun } from 'lucide-react';
import { images } from '@/app/common/images';
import { Reveal, Stagger, StaggerItem } from '@/app/common/motion';

const services = [
  {
    icon: Sparkles,
    image: images.serviceWash,
    title: 'Premium Wash & Dry',
    description: 'Deep cleaning and professional drying with eco-friendly detergents and no bleach, so fabrics and colours stay protected.',
    features: ['No bleach', 'Stain removal', 'Color protection', 'Fabric softening', 'Fabric-safe'],
  },
  {
    icon: Baby,
    image: images.serviceBaby,
    title: 'Baby & Sensitive Skin Care',
    split: true,
    description: 'Have sensitive skin? Just let us know. We wash your clothes, and baby clothes, with gentle hypoallergenic detergent made for sensitive skin.',
    features: ['Sensitive-skin detergent', 'Hypoallergenic wash', 'Gentle care'],
  },
  {
    icon: Sun,
    image: images.serviceSun,
    title: 'Natural Sun-Dry',
    description: 'Dried in the open sunshine in a quiet, green spot, away from the dust and traffic of the main road. Clean air means your clothes come back fresh and hygienic.',
    features: ['Fresh air', 'Away from road dust', 'Natural sunlight'],
  },
  {
    icon: Wind,
    image: images.serviceExpress,
    title: 'Express Service',
    description: 'In a hurry? Ask for express and your laundry is ready within 24 hours, at the same Rs 700/kg price.',
    features: ['Ready within 24h', 'Same price', 'Just ask'],
  },
  {
    icon: Clock,
    image: images.serviceIron,
    title: 'Iron & Fold',
    description: 'Every order is neatly folded. Need it ironed too? Just ask, ironing is free on request.',
    features: ['Free ironing on request', 'Neat folding', 'Ready to pack'],
  },
];

const Section2 = () => {
  return (
    <section className="relative bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-4">
            <span className="eyebrow">What We Offer</span>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Care for every kind of <span className="text-leaf-600">wardrobe</span>
            </h2>
            <p className="text-base leading-relaxed text-moss sm:text-lg">
              Traditional care meets modern machines — from salty surf gear to delicate baby clothes.
            </p>
          </div>
          <Link href="/services" className="btn-ghost group w-fit">
            All services
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        {/* Services Grid */}
        <Stagger className="flex flex-wrap justify-center gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]">
                <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-forest-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-white text-forest-800 shadow-lg transition-all duration-500 group-hover:rotate-12 group-hover:bg-sun">
                      <Icon size={22} />
                    </span>
                    {service.split && (
                      <>
                        <span className="absolute bottom-3 left-[4.5rem] inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-forest-800 shadow-lg">
                          <Baby size={12} />
                          Baby
                        </span>
                        <span className="absolute bottom-3 left-[calc(50%+0.5rem)] inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-forest-800 shadow-lg">
                          <HeartHandshake size={12} />
                          Sensitive skin
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-moss/80">{service.description}</p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="inline-flex items-center gap-1 rounded-full bg-mint-100 px-3 py-1 text-xs font-medium text-forest-800"
                        >
                          <Check size={12} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default Section2;
