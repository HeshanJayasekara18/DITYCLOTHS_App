"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { ParallaxImage, Reveal } from "@/app/common/motion";
import { images } from "@/app/common/images";

const Section5 = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const scriptSrc = "https://elfsightcdn.com/platform.js";
    const widgetEl = widgetRef.current;
    if (!widgetEl) return;

    const parent = widgetEl.parentElement || document.body;
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      parent.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }

    // If the script is already present, try to initialize Elfsight (no-op if not available)
    if (window.elfsight && typeof window.elfsight.init === "function") {
      try {
        window.elfsight.init();
      } catch (e) {
        // ignore init errors
      }
    }
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-forest-900 py-20 text-white sm:py-28">
      <ParallaxImage src={images.reviewsBg} alt="" sizes="100vw" className="-z-20" strength={20} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-900/85 via-forest-900/80 to-forest-900/95" />
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-leaf-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sun/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-16">
          <span className="eyebrow !text-sun">Testimonials</span>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Loved by travelers from around the world
          </h2>
          <div className="flex items-center gap-1 text-sun" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Real reviews from real customers on Google
          </p>
        </Reveal>

        {/* Elfsight Reviews Widget Container */}
        <Reveal delay={0.1} className="relative rounded-[2rem] bg-white p-4 text-ink shadow-lift sm:p-6">
          {/* Elfsight widget */}
          <div
            ref={widgetRef}
            className="elfsight-app-5412be18-2c07-4453-9dc1-245649e63be0"
            data-elfsight-app-lazy=""
          />
        </Reveal>

        {/* View More on Google Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/maps/place/DIRTYCLOTHS/@5.9655628,80.39438503768007,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-forest-800 transition hover:-translate-y-0.5 hover:bg-mint-50"
          >
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-5"
            />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section5;
