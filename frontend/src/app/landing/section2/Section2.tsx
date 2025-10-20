import { Sparkles, Shirt, Wind, Clock } from 'lucide-react';

const Section2 = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Premium Wash",
      description: "Deep cleaning with eco-friendly detergents that preserve fabric quality and colors.",
      features: ["Stain removal", "Color protection", "Fabric softening"]
    },
    {
      icon: Shirt,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate garments and special fabrics.",
      features: ["Delicate care", "Expert handling", "Quality assurance"]
    },
    {
      icon: Wind,
      title: "Express Service",
      description: "Fast turnaround for those urgent laundry needs without compromising quality.",
      features: ["24h service", "Quick processing", "Rush handling"]
    },
    {
      icon: Clock,
      title: "Iron & Fold",
      description: "Professional ironing and neat folding service to keep your clothes crisp and organized.",
      features: ["Expert pressing", "Neat folding", "Hanger service"]
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#d7e6d4] py-16 sm:py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.4),transparent_55%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 text-center sm:mb-16 lg:mb-20">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.55em] text-[#1b3f26] sm:text-[0.7rem] sm:tracking-[0.65em]">
            What We Offer
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-[0.06em] text-[#06150b] sm:text-4xl sm:tracking-[0.08em] lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#213b2e] sm:text-base lg:text-lg">
            Experience the perfect blend of traditional care and modern innovation with our comprehensive laundry solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_8px_30px_rgba(11,34,20,0.12)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_50px_rgba(11,34,20,0.2)] sm:p-8"
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 transition-all duration-300 group-hover:from-white/60 group-hover:to-white/30" />
                
                <div className="relative flex flex-col gap-4 sm:gap-5">
                  {/* Icon */}
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f351e] to-[#153d24] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-[#06150b] sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#213b2e]/80 sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
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
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-white/40 bg-gradient-to-br from-white/60 via-white/40 to-white/20 p-8 text-center shadow-[0_8px_30px_rgba(11,34,20,0.15)] backdrop-blur-sm sm:mt-16 sm:p-12 lg:mt-20">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-[#06150b] sm:text-3xl">
              Ready to Experience the Difference?
            </h3>
            <p className="mx-auto max-w-xl text-sm text-[#213b2e] sm:text-base">
              Join thousands of satisfied customers who trust us with their laundry needs
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#0f351e] px-8 py-3 text-sm font-semibold text-white shadow-[0_22px_48px_rgba(15,53,30,0.32)] transition hover:bg-[#0c2815] sm:px-9"
              href="#section4"
            >
              Get Started
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-[#0f351e]/30 bg-white px-8 py-3 text-sm font-semibold text-[#0f351e] shadow-[0_18px_40px_rgba(255,255,255,0.55)] transition hover:bg-[#f3f7f0] sm:px-9"
              href="/services"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;