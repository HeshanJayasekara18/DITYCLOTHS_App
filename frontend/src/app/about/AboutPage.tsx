"use client";

import { Heart, Leaf, Users, Award, Sparkles } from 'lucide-react';
import Navbar from '../common/Navbar';



const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond to exceed expectations."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Committed to sustainable practices using biodegradable detergents and energy-efficient equipment."
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Professional care with attention to detail, ensuring your garments receive the best treatment."
    },
    {
      icon: Users,
      title: "Trusted Team",
      description: "Experienced staff dedicated to providing reliable and consistent laundry services."
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "2+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Available" }
  ];

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
                Learn More
              </span>
              <h1 className="text-3xl font-semibold leading-tight tracking-[0.06em] text-[#06150b] sm:text-4xl sm:tracking-[0.08em] lg:text-5xl">
                About DIRTYCLOTHS
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#213b2e] sm:text-base lg:text-lg">
                Delivering excellence in laundry services with a commitment to quality, sustainability, and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#d7e6d4]/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-[#0f2716]/10 bg-gradient-to-br from-[#d7e6d4]/40 to-white shadow-[0_20px_60px_rgba(11,34,20,0.15)]">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#a8c5a3] to-[#d7e6d4] p-8">
                  <div className="flex h-full flex-col justify-center gap-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0f351e] text-white shadow-lg">
                      <Sparkles size={40} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-semibold text-[#06150b]">Our Mission</h3>
                      <p className="text-sm text-[#213b2e]">
                        To provide exceptional laundry services that make your life easier
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-semibold text-[#06150b] sm:text-4xl">
                Our Story
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-[#213b2e] sm:text-base">
                <p>
                  Founded with a passion for providing exceptional laundry care, DIRTYCLOTHS has been serving the community with dedication and expertise. We understand that your clothes are more than just fabric—they&apos;re an investment and a reflection of your personal style.
                </p>
                <p>
                  Over the years, we&apos;ve built our reputation on quality service, attention to detail, and a genuine commitment to our customers. Our state-of-the-art facilities combined with eco-friendly practices ensure that your garments receive the best care possible while protecting the environment.
                </p>
                <p>
                  What started as a small local laundry service has grown into a trusted name in the industry. We&apos;ve expanded our services, upgraded our technology, but our core values remain the same: quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#d7e6d4] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-12 flex flex-col gap-4 text-center sm:mb-16">
            <h2 className="text-3xl font-semibold text-[#06150b] sm:text-4xl lg:text-5xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-[#213b2e] sm:text-base lg:text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/90 p-6 backdrop-blur-sm transition-all hover:shadow-[0_20px_50px_rgba(11,34,20,0.15)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f351e] to-[#153d24] text-white">
                    <Icon size={28} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-[#06150b]">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#213b2e]/80">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 rounded-3xl border border-[#0f2716]/10 bg-gradient-to-br from-[#d7e6d4]/30 to-white/50 p-8 text-center"
              >
                <div className="text-4xl font-bold text-[#0f351e] sm:text-5xl">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-[#213b2e]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#d7e6d4] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/60 bg-white/80 p-8 backdrop-blur-sm sm:p-12">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-[#06150b] sm:text-3xl">
                Ready to Experience the Best?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-[#213b2e] sm:text-base">
                Join thousands of satisfied customers who trust DIRTYCLOTHS for their laundry needs
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#0f351e] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_22px_48px_rgba(15,53,30,0.32)] transition hover:bg-[#0c2815]"
                href="/contact"
              >
                Contact Us Today
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#0f351e]/30 bg-white px-8 py-3.5 text-sm font-semibold text-[#0f351e] shadow-[0_18px_40px_rgba(255,255,255,0.55)] transition hover:bg-[#f3f7f0]"
                href="/services"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;