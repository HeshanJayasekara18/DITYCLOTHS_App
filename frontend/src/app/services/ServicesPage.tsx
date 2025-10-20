'use client';
import { useState } from 'react';
import { Sparkles, Shirt, Wind, Clock, Check, Calculator, AlertTriangle } from 'lucide-react';
import Navbar from '@/app/common/Navbar';


const ServicesPage = () => {
  const [weight, setWeight] = useState(1);
  const pricePerKg = 600;

  const services = [
    {
      icon: Sparkles,
      title: "Premium Wash",
      description: "Deep cleaning with eco-friendly detergents that preserve fabric quality and colors.",
      features: [
        "Stain removal treatment",
        "Color protection process",
        "Fabric softening included",
        "Gentle care for all fabrics"
      ],
      included: true
    },
    {
      icon: Wind,
      title: "Professional Drying",
      description: "Proper drying techniques to maintain fabric integrity and prevent shrinkage.",
      features: [
        "Temperature-controlled drying",
        "No shrinkage guarantee",
        "Fresh scent",
        "Quick turnaround time"
      ],
      included: true
    },
    {
      icon: Clock,
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
      title: "Premium Ironing",
      description: "Professional ironing service for that crisp, fresh look (available on request).",
      features: [
        "Expert pressing service",
        "Suitable for formal wear",
        "Hanger service available",
        "Additional charges apply"
      ],
      included: false
    }
  ];

  const calculateTotal = () => {
    return (weight * pricePerKg).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#d7e6d4] text-[#0b2214]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.6),transparent_55%)]" />
        
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-5 sm:gap-12 sm:px-6 sm:pb-20 lg:gap-16 lg:px-10 lg:pb-24">
          <Navbar />
          
          <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.55em] text-[#1b3f26] sm:text-[0.7rem] sm:tracking-[0.65em]">
                Our Services
              </span>
              <h1 className="text-3xl font-semibold leading-tight tracking-[0.06em] text-[#06150b] sm:text-4xl sm:tracking-[0.08em] lg:text-5xl">
                Laundry Services for Tourists
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#213b2e] sm:text-base lg:text-lg">
                Convenient laundry service for travelers visiting Midigama
              </p>
              <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-[#0f351e]/20 bg-white/60 px-6 py-2 backdrop-blur-sm">
                <span className="text-2xl">🌴</span>
                <span className="text-sm font-semibold text-[#0f351e]">Tourist Service Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-3xl border border-[#0f2716]/10 bg-gradient-to-br from-[#d7e6d4]/40 to-white shadow-[0_20px_60px_rgba(11,34,20,0.15)]">
              <div className="bg-[#0f351e] px-8 py-6 text-center text-white">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm">
                  <span>🏖️</span>
                  <span>For Tourists & Travelers</span>
                </div>
                <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">Simple Pricing</h2>
                <p className="text-white/80">Pay only for what you wash</p>
              </div>
              
              <div className="p-8 sm:p-12">
                <div className="mb-8 text-center">
                  <div className="mb-4 flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-[#0f351e] sm:text-6xl">Rs 600</span>
                    <span className="text-xl text-[#213b2e]">/ kg</span>
                  </div>
                  <p className="text-sm text-[#213b2e] sm:text-base">
                    Includes wash + dry + fold
                  </p>
                </div>

                {/* Calculator */}
                <div className="mb-8 rounded-2xl border border-[#0f2716]/10 bg-white/60 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-2 text-[#0f351e]">
                    <Calculator size={24} />
                    <h3 className="text-lg font-semibold">Price Calculator</h3>
                  </div>
                  
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-[#213b2e]">
                      Weight (kg)
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setWeight(Math.max(1, weight - 1))}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0f2716]/20 bg-white text-xl font-semibold text-[#0f351e] transition hover:bg-[#d7e6d4]/30"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 1))}
                        className="flex-1 rounded-xl border border-[#0f2716]/20 bg-white px-4 py-3 text-center text-2xl font-semibold text-[#0f351e] focus:border-[#0f351e] focus:outline-none"
                        min="1"
                      />
                      <button
                        onClick={() => setWeight(weight + 1)}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0f2716]/20 bg-white text-xl font-semibold text-[#0f351e] transition hover:bg-[#d7e6d4]/30"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#0f351e] p-6 text-center text-white">
                    <p className="mb-2 text-sm opacity-80">Total Cost</p>
                    <p className="text-4xl font-bold">Rs {calculateTotal()}</p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-[#0f351e]">
                    Perfect for Travelers:
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-lg bg-[#d7e6d4]/30 p-3">
                      <Check className="text-[#0f351e]" size={20} />
                      <span className="text-sm text-[#213b2e]">Premium wash</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-[#d7e6d4]/30 p-3">
                      <Check className="text-[#0f351e]" size={20} />
                      <span className="text-sm text-[#213b2e]">Fast turnaround</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-[#d7e6d4]/30 p-3">
                      <Check className="text-[#0f351e]" size={20} />
                      <span className="text-sm text-[#213b2e]">Expert folding</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-[#d7e6d4]/30 p-3">
                      <Check className="text-[#0f351e]" size={20} />
                      <span className="text-sm text-[#213b2e]">Tourist-friendly</span>
                    </div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="block w-full rounded-full bg-[#0f351e] py-4 text-center text-sm font-semibold text-white shadow-[0_22px_48px_rgba(15,53,30,0.32)] transition hover:bg-[#0c2815]"
                >
                  Contact US
                </a>
                <div className="mt-4 rounded-2xl border border-[#f97316]/30 bg-[#fff7ed] px-4 py-3 shadow-sm">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 text-[#c2410c]" size={20} />
                    <p className="text-xs font-medium text-[#9a3412] sm:text-sm">
                      <span className="mr-1 font-semibold uppercase tracking-wide text-[#9a3412]/90">Attention:</span>
                      We currently do not offer pick-up and drop-off service, so please bring your laundry directly to our shop. We apologize for the inconvenience. – DIRTYCLOTHS Laundry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-[#d7e6d4] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-semibold text-[#06150b] sm:text-4xl lg:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-[#213b2e] sm:text-base lg:text-lg">
              Easy laundry service designed specifically for tourists and travelers
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col gap-5 rounded-3xl border border-white/60 bg-white/90 p-6 backdrop-blur-sm transition-all hover:shadow-[0_20px_50px_rgba(11,34,20,0.15)] sm:p-8"
                >
                  {service.included && (
                    <div className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
                      Included
                    </div>
                  )}
                  
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f351e] to-[#153d24] text-white shadow-lg sm:h-16 sm:w-16">
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-[#06150b] sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#213b2e]/80 sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-[#1b3f26]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0f351e]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <div className="flex flex-col gap-6 rounded-3xl border border-[#0f2716]/10 bg-gradient-to-br from-[#d7e6d4]/40 to-white/50 p-8 shadow-[0_20px_60px_rgba(11,34,20,0.15)] sm:p-12">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-[#06150b] sm:text-3xl">
                Visiting Midigama?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-[#213b2e] sm:text-base">
                Drop off your laundry and enjoy your vacation worry-free. We&apos;ll have your clothes fresh and ready!
              </p>
              <div className="mx-auto mt-2 inline-flex items-center gap-2 text-sm text-[#0f351e]">
                <span className="text-xl">🌊</span>
                <span className="font-semibold">Perfect for surfers, backpackers & beach lovers</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#0f351e] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_22px_48px_rgba(15,53,30,0.32)] transition hover:bg-[#0c2815]"
                href="/contact"
              >
                Contact Us
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#0f351e]/30 bg-white px-8 py-3.5 text-sm font-semibold text-[#0f351e] shadow-[0_18px_40px_rgba(255,255,255,0.55)] transition hover:bg-[#f3f7f0]"
                href="#pricing"
              >
                View Location
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;