'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, X, Navigation, PlayCircle } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/app/common/motion';

const Section4 = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  // Business coordinates and details
  const businessLocation = {
    lat: 5.96545,
    lng: 80.39445,
    address: "Amuwatta Koratuwa, Midigama, Southern Province, Sri Lanka",
    phone: "+94 72 1634 671",
    email: "dirtycloths.midigama@gmail.com",
    hours: "Every day, 6 AM – 12 AM"
  };

  // Correct Google Maps embed URL format
  const mapEmbedUrl = `https://www.google.com/maps?q=${businessLocation.lat},${businessLocation.lng}&hl=en&z=15&output=embed`;

  const infoCards = [
    { icon: MapPin, title: 'Address', body: businessLocation.address },
    { icon: Phone, title: 'Phone', body: businessLocation.phone, href: `tel:${businessLocation.phone}` },
    { icon: Mail, title: 'Email', body: businessLocation.email, href: `mailto:${businessLocation.email}` },
    { icon: Clock, title: 'Business Hours', body: businessLocation.hours },
  ];

  return (
    <section id="section4" className="relative overflow-hidden bg-sand py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <Reveal className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center sm:mb-16">
          <span className="eyebrow">Find Us</span>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Just off the beach in Midigama
          </h2>
          <p className="text-base leading-relaxed text-moss sm:text-lg">
            Visit us at our convenient location. We&apos;re here to serve you with exceptional laundry services.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {infoCards.map(({ icon: Icon, title, body, href }) => (
                <StaggerItem key={title}>
                  <div className="group flex h-full gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint-200 text-forest-800 transition-colors duration-300 group-hover:bg-forest-800 group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <div className="flex min-w-0 flex-col gap-1">
                      <h3 className="font-semibold text-ink">{title}</h3>
                      {href ? (
                        <a href={href} className="break-words text-sm text-moss hover:text-leaf-600">
                          {body}
                        </a>
                      ) : (
                        <p className="text-sm text-moss">{body}</p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* CTA Buttons */}
            <Reveal delay={0.2} className="flex flex-col gap-3 sm:flex-row">
              <a
                className="btn-primary"
                href={`https://www.google.com/maps/dir//${businessLocation.lat},${businessLocation.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <button type="button" className="btn-ghost" onClick={() => setIsVideoModalOpen(true)}>
                <PlayCircle size={16} />
                Video Directions
              </button>
            </Reveal>
          </div>

          {/* Google Maps */}
          <Reveal x={40} y={0} className="relative overflow-hidden rounded-[2rem] border-[6px] border-white shadow-lift">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '460px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DIRTYCLOTHS Location"
              className="block"
            />
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-900/60 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-coming-soon-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-4 w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-[0_32px_80px_rgba(11,34,20,0.3)]"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            >
              <button
                type="button"
                className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-forest-900/15 text-forest-900 transition hover:bg-mint-50"
                onClick={() => setIsVideoModalOpen(false)}
              >
                <span className="sr-only">Close</span>
                <X size={18} />
              </button>
              <div className="mt-4 flex flex-col gap-3">
                <h3 id="video-coming-soon-title" className="font-display text-2xl font-bold text-ink">
                  Video directions coming soon
                </h3>
                <p className="text-sm leading-relaxed text-moss">
                  We are recording a guided walkthrough of the route to our shop. Check back shortly to watch the full video experience.
                </p>
                <div className="mx-auto rounded-full bg-mint-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-forest-800">
                  Coming Soon
                </div>
                <button type="button" className="btn-primary mt-2" onClick={() => setIsVideoModalOpen(false)}>
                  Back to site
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Section4;
