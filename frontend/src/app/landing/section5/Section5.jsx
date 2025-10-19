"use client";

import { useEffect, useRef } from 'react';

const Section5 = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const scriptSrc = 'https://cdn.trustindex.io/loader.js?3dafeb156fcd4761e646741dde6';
    const widgetEl = widgetRef.current;
    if (!widgetEl) return;

    const parent = widgetEl.parentElement;
    if (!parent) return;

    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.defer = true;
      script.async = true;
      parent.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }

    if (window.Trustindex && typeof window.Trustindex.load === 'function') {
      window.Trustindex.load();
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#d7e6d4] py-16 sm:py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.4),transparent_55%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 text-center sm:mb-16 lg:mb-20">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.55em] text-[#1b3f26] sm:text-[0.7rem] sm:tracking-[0.65em]">
            Testimonials
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-[0.06em] text-[#06150b] sm:text-4xl sm:tracking-[0.08em] lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#213b2e] sm:text-base lg:text-lg">
            Real reviews from real customers on Google
          </p>
        </div>

        {/* Trustindex Widget Container */}
        <div className="relative rounded-3xl bg-white/90 p-6 shadow-[0_22px_48px_rgba(15,53,30,0.18)]">
          <div
            className="ti-widget"
            data-widget="google-reviews"
            data-id="3dafeb156fcd4761e646741dde6"
            ref={widgetRef}
          />
        </div>

        {/* View More on Google Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/maps/place/DIRTYCLOTHS/@5.9655628,80.39438503768007,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-8 py-3.5 text-sm font-semibold text-[#0f351e] shadow-[0_18px_40px_rgba(255,255,255,0.55)] transition hover:bg-[#f3f7f0] sm:px-9"
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