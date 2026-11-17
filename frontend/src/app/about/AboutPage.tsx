"use client";

import { Heart, Leaf, Users, Award, Sparkles } from 'lucide-react';
import PageHero from '../common/PageHero';
import CtaBand from '../common/CtaBand';
import { images } from '../common/images';
import { CountUp, Parallax, ParallaxImage, Reveal, Stagger, StaggerItem } from '../common/motion';

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
      description: "Committed to sustainable practices using biodegradable detergents, no bleach, and energy-efficient equipment."
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
    { number: "5.0", label: "Google Rating" },
    { number: "2+", label: "Years Experience" },
    { number: "194", label: "Google Reviews" },
    { number: "7", label: "Days a week, 6 AM – 12 AM" }
  ];

  return (
    <div className="bg-sand">
      <PageHero
        eyebrow="Learn More"
        title="About DIRTYCLOTHS"
        description="Delivering excellence in laundry services with a commitment to quality, sustainability, and customer satisfaction"
        image={images.pageAbout}
      />

      {/* Our Story Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none" x={-40} y={0}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift">
              <ParallaxImage src={images.aboutStory} alt="Colourful clean clothes drying on a line in the sunshine" sizes="(max-width: 1024px) 90vw, 45vw" strength={14} />
            </div>
            <Parallax speed={50} className="absolute -bottom-8 -right-4 max-w-[16rem] rounded-3xl bg-forest-800 p-6 text-white shadow-lift sm:-right-8">
              <span className="mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-sun text-forest-900">
                <Sparkles size={24} />
              </span>
              <h3 className="font-display text-xl font-bold">Our Mission</h3>
              <p className="mt-1 text-sm text-white/75">To provide exceptional laundry services that make your life easier</p>
            </Parallax>
          </Reveal>

          <Reveal className="flex flex-col gap-6" delay={0.1}>
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              From a small local shop to Midigama&apos;s trusted laundry
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-moss">
              <p>
                Founded with a passion for providing exceptional laundry care, DIRTYCLOTHS has been serving the community with dedication and expertise. We understand that your clothes are more than just fabric—they&apos;re an investment and a reflection of your personal style.
              </p>
              <p>
                Over the years, we&apos;ve built our reputation on quality service, attention to detail, and a genuine commitment to our customers. Our facilities combined with eco-friendly practices ensure that your garments receive the best care possible while protecting the environment.
              </p>
              <p>
                What started as a small local laundry service has grown into a trusted name. We&apos;ve expanded our services and upgraded our technology, but our core values remain the same: quality, reliability, and customer satisfaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-10">
        <Stagger className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-forest-900/10 shadow-soft lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center gap-2 bg-white p-8 text-center sm:p-10">
              <CountUp value={stat.number} className="font-display text-4xl font-extrabold text-forest-800 sm:text-5xl" />
              <span className="text-sm font-medium text-moss">{stat.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-16">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">Our Values</h2>
            <p className="text-base text-moss sm:text-lg">The principles that guide everything we do</p>
          </Reveal>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title} className="h-full">
                  <div className="group flex h-full flex-col gap-4 rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-forest-900/5 transition-all duration-500 hover:-translate-y-2 hover:bg-forest-800 hover:shadow-lift">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mint-200 text-forest-800 transition-all duration-500 group-hover:rotate-6 group-hover:bg-sun group-hover:text-forest-900">
                      <Icon size={26} />
                    </span>
                    <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-white">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-moss/80 transition-colors group-hover:text-white/75">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <CtaBand
        title="Ready to Experience the Best?"
        description="Rated 5.0 on Google by travelers and surfers. Drop off your laundry any day from 6 AM to 12 AM."
        primary={{ label: "Contact Us Today", href: "/contact" }}
        secondary={{ label: "View Our Services", href: "/services" }}
      />
    </div>
  );
};

export default AboutPage;
