import { CheckCircle2 } from 'lucide-react';

const Section3 = () => {
  return (
    <section className="relative overflow-hidden bg-[#d7e6d4] py-16 sm:py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold leading-tight tracking-[0.06em] text-[#06150b] sm:text-4xl sm:tracking-[0.08em] lg:text-5xl">
                About Us
              </h2>
              <p className="text-lg font-medium text-[#1b3f26] sm:text-xl">
                Get to know the team behind
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm leading-relaxed text-[#213b2e] sm:text-base">
              <p>
                At DIRTYCLOTHS, we are dedicated to providing an exceptional laundry experience. Our state-of-the-art facilities, eco-friendly practices
              </p>
              <p>
                Discover how our innovative solutions can
              </p>
              <p>
                Explore our commitment to sustainability and
              </p>
              <p>
                Learn about our customer-centric approach and
              </p>
            </div>

            {/* Get in Touch Box */}
            <div className="rounded-3xl border border-white/60 bg-white/40 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-[#06150b]">
                Get in Touch
              </h3>
              <p className="text-sm text-[#213b2e]">
                Have questions? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Button */}
            <div>
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#0f351e] px-10 py-3.5 text-sm font-semibold text-white shadow-[0_22px_48px_rgba(15,53,30,0.32)] transition hover:bg-[#0c2815]"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Image/Mockup */}
          <div className="relative">
            {/* Decorative Circle */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-2 border-white/40" />
            
            {/* Device Mockup */}
            <div className="relative mx-auto max-w-md">
              {/* Tablet Frame */}
              <div className="relative rounded-[2.5rem] border-8 border-white bg-white p-4 shadow-[0_30px_80px_rgba(11,34,20,0.25)]">
                {/* Screen Content */}
                <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#a8c5a3] to-[#d7e6d4]">
                  {/* Header */}
                  <div className="flex items-center justify-between bg-[#7ba876] px-4 py-3 text-white">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-white/60" />
                      <div className="h-2 w-2 rounded-full bg-white/60" />
                      <div className="h-2 w-2 rounded-full bg-white/60" />
                    </div>
                    <span className="text-xs font-semibold">DIRTYCLOTHS</span>
                    <div className="h-6 w-6 rounded-full bg-white/20" />
                  </div>

                  {/* Content Area */}
                  <div className="p-4">
                    {/* Hero Section */}
                    <div className="mb-4 rounded-2xl bg-white/60 p-4 backdrop-blur-sm">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="h-16 w-16 rounded-full bg-white/80" />
                        <div className="flex-1">
                          <div className="mb-1.5 h-3 w-24 rounded-full bg-[#7ba876]/40" />
                          <div className="h-2 w-32 rounded-full bg-[#7ba876]/30" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 w-full rounded-full bg-[#7ba876]/30" />
                        <div className="h-2 w-4/5 rounded-full bg-[#7ba876]/30" />
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="mb-3 rounded-2xl bg-white/60 p-3 backdrop-blur-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="h-2.5 w-28 rounded-full bg-[#7ba876]/50" />
                        <div className="flex gap-1">
                          <div className="h-5 w-5 rounded-full bg-[#7ba876]/40" />
                          <div className="h-5 w-5 rounded-full bg-[#7ba876]/40" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-xl bg-white/70 p-2">
                          <div className="mb-2 h-10 w-10 rounded-full bg-[#7ba876]/30" />
                          <div className="mb-1 h-2 w-16 rounded-full bg-[#7ba876]/40" />
                          <div className="h-1.5 w-12 rounded-full bg-[#7ba876]/30" />
                        </div>
                        <div className="rounded-xl bg-white/70 p-2">
                          <div className="mb-2 h-10 w-10 rounded-full bg-[#7ba876]/30" />
                          <div className="mb-1 h-2 w-16 rounded-full bg-[#7ba876]/40" />
                          <div className="h-1.5 w-12 rounded-full bg-[#7ba876]/30" />
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <div className="h-8 flex-1 rounded-full bg-[#7ba876]" />
                      <div className="h-8 w-8 rounded-full bg-white/60" />
                    </div>
                  </div>
                </div>

                {/* Home Button */}
                <div className="mt-2 flex justify-center">
                  <div className="h-1 w-20 rounded-full bg-gray-300" />
                </div>
              </div>

              {/* Decorative Logo */}
              <div className="absolute right-8 top-1/3 flex flex-col items-center gap-2 rounded-2xl bg-white/60 p-3 shadow-lg backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f351e]">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <div className="text-center">
                  <div className="mb-1 text-[0.6rem] font-semibold uppercase tracking-wider text-[#0f351e]">
                    100% Certified
                  </div>
                  <div className="text-[0.5rem] text-[#213b2e]">
                    Eco-Friendly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;