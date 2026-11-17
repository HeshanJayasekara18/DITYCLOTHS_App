'use client';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { Sparkles, Shirt, Clock, Check, Calculator, Baby, HeartHandshake, Minus, Plus, Palmtree, Sun, Zap } from 'lucide-react';
import PageHero from '../common/PageHero';
import CtaBand from '../common/CtaBand';
import { images } from '../common/images';
import { Reveal, Stagger, StaggerItem } from '../common/motion';

const ServicesPage = () => {
  const [weight, setWeight] = useState(1);
  const pricePerKg = 700;

  const services = [
    {
      icon: Sparkles,
      image: images.serviceWash,
      title: "Premium Wash & Dry",
      description: "Deep cleaning and professional drying with eco-friendly detergents and no bleach, so fabrics and colours stay protected.",
      features: [
        "No bleach, ever",
        "Stain removal treatment",
        "Color protection process",
        "Fabric softening included",
        "Careful, fabric-safe washing"
      ],
      included: true
    },
    {
      icon: Baby,
      image: images.serviceBaby,
      title: "Baby & Sensitive Skin Care",
      split: true,
      description: "Have sensitive skin? Just tell us when you drop off. We wash your clothes, and baby clothes, with a gentle hypoallergenic detergent suitable for sensitive skin.",
      features: [
        "Detergent for sensitive skin",
        "Hypoallergenic wash",
        "Gentle care",
        "Special handling for babies"
      ],
      included: false
    },
    {
      icon: Sun,
      image: images.serviceSun,
      title: "Natural Sun-Dry",
      description: "Your clothes dry in the open sunshine at our quiet, green spot, away from the dust and traffic of the main road. Clean, fresh air keeps them hygienic and fresh-smelling.",
      features: [
        "Dried in natural sunlight",
        "Away from main-road dust",
        "Clean, fresh air",
        "Fresh, natural smell"
      ],
      included: true
    },
    {
      icon: Clock,
      image: images.serviceExpress,
      title: "Expert Folding",
      description: "Neat and organized folding service to keep your clothes crisp and ready to wear.",
      features: [
        "Professional folding technique",
        "Organized by clothing type",
        "Ready to store",
        "Wrinkle-free packaging"
      ],
      included: true
    },
    {
      icon: Shirt,
      image: images.serviceIron,
      title: "Ironing",
      description: "Want your clothes ironed? Just ask when you drop off. Ironing is free on request, at the same Rs 700/kg price.",
      features: [
        "Free on request",
        "Crisp, fresh look",
        "Suitable for shirts and dresses",
      ],
      included: false
    },
    {
      icon: Zap,
      image: images.stepWash,
      title: "Express Service",
      description: "In a hurry? Ask for express and your laundry is ready within 24 hours. No extra charge.",
      features: [
        "Ready within 24 hours",
        "Same Rs 700/kg price",
        "Just ask at drop-off"
      ],
      included: false
    }
  ];

  const perks = ["Ready in 24–48 hours", "Express within 24h", "No minimum weight", "Free ironing on request"];
  const presets = [2, 5, 8];

  const calculateTotal = () => {
    return (weight * pricePerKg).toLocaleString();
  };

  return (
    <div className="bg-sand">
      <PageHero
        eyebrow="Our Services"
        title="Laundry Services for Tourists"
        description="Convenient laundry service for travelers visiting Midigama"
        image={images.pageServices}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
          <Palmtree size={16} className="text-sun" />
          Tourist Service Only
        </span>
      </PageHero>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          {/* Price card */}
          <Reveal className="flex flex-col gap-7 rounded-[2rem] bg-forest-800 p-8 text-white shadow-lift sm:p-10" x={-30} y={0}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm">
              <Palmtree size={14} className="text-sun" />
              For Tourists &amp; Travelers
            </span>
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Simple Pricing</h2>
              <p className="mt-1 text-white/70">Pay only for what you wash</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl font-extrabold text-sun sm:text-7xl">Rs 700</span>
              <span className="text-xl text-white/70">/ kg</span>
            </div>
            <p className="text-sm text-white/80 sm:text-base">Includes wash, sun-dry &amp; fold. No minimum weight. Cash (LKR) only.</p>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">Perfect for Travelers</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 rounded-xl bg-white/5 p-3 text-sm ring-1 ring-white/10">
                    <Check className="text-sun" size={18} />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Calculator */}
          <Reveal className="flex flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-forest-900/5 sm:p-10" x={30} y={0}>
            <div className="flex items-center gap-3 text-forest-800">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint-200">
                <Calculator size={22} />
              </span>
              <h3 className="font-display text-xl font-bold">Price Calculator</h3>
            </div>

            <div>
              <label htmlFor="weight" className="mb-3 block text-sm font-medium text-moss">
                Weight (kg)
              </label>
              <div className="flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setWeight(Math.max(1, weight - 1))}
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-mint-100 text-forest-800 transition hover:bg-mint-200"
                  aria-label="Decrease weight"
                >
                  <Minus size={20} />
                </motion.button>
                <input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 1))}
                  className="h-14 w-full min-w-0 flex-1 rounded-2xl border border-forest-900/15 bg-white text-center font-display text-3xl font-bold text-forest-800 focus:border-leaf-600 focus:outline-none focus:ring-4 focus:ring-mint-200"
                  min="1"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setWeight(weight + 1)}
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-mint-100 text-forest-800 transition hover:bg-mint-200"
                  aria-label="Increase weight"
                >
                  <Plus size={20} />
                </motion.button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {presets.map((kg) => (
                  <button
                    key={kg}
                    type="button"
                    onClick={() => setWeight(kg)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                      weight === kg ? 'bg-forest-800 text-white' : 'bg-mint-100 text-forest-800 hover:bg-mint-200'
                    }`}
                  >
                    {kg} kg
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-forest-800 to-leaf-600 p-6 text-center text-white">
              <p className="mb-1 text-sm opacity-80">Total Cost</p>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={weight}
                  className="font-display text-5xl font-extrabold"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Rs {calculateTotal()}
                </motion.p>
              </AnimatePresence>
            </div>

            <a href="https://wa.me/94721634671" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              Book on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-mint-200 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-16">
            <span className="eyebrow">What&apos;s Included</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">How It Works</h2>
            <p className="text-base text-moss sm:text-lg">Easy laundry service designed specifically for tourists and travelers</p>
          </Reveal>

          <Stagger className="flex flex-wrap justify-center gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]">
                  <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span
                        className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
                          service.included ? 'bg-leaf-500 text-white' : 'bg-sun text-forest-900'
                        }`}
                      >
                        {service.included ? 'Included' : 'On request'}
                      </span>
                      <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-2xl bg-white text-forest-800 shadow-lg transition-transform duration-500 group-hover:rotate-12">
                        <Icon size={20} />
                      </span>
                      {service.split && (
                        <>
                          <span className="absolute bottom-3 left-[4rem] inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-forest-800 shadow-lg">
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
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
                      <p className="text-sm leading-relaxed text-moss/80">{service.description}</p>
                      <ul className="mt-auto flex flex-col gap-2 pt-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-forest-800">
                            <Check size={14} className="text-leaf-600" />
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

      <CtaBand
        title="Visiting Midigama?"
        description="Drop off your laundry and enjoy your vacation worry-free. We'll have your clothes fresh and ready! Perfect for surfers, backpackers & beach lovers."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "View Location", href: "/#section4" }}
      />
    </div>
  );
};

export default ServicesPage;
