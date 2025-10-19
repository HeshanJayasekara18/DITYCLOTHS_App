import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Section4 = () => {
  // Business coordinates and details
  const businessLocation = {
    lat: 5.96545,
    lng: 80.39445,
    address: "Amuwatta Koratuwa, Midigama, Southern Province, Sri Lanka",
    phone: "+94 72 1634 671",
    email: "info@dirtycloths.com",
    hours: "Anytime"
  };

  // Correct Google Maps embed URL format
  const mapEmbedUrl = `https://www.google.com/maps?q=${businessLocation.lat},${businessLocation.lng}&hl=en&z=15&output=embed`;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#d7e6d4]/30 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-[#d7e6d4]/20 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 text-center sm:mb-16 lg:mb-20">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.55em] text-[#1b3f26] sm:text-[0.7rem] sm:tracking-[0.65em]">
            Find Us
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-[0.06em] text-[#06150b] sm:text-4xl sm:tracking-[0.08em] lg:text-5xl">
            Our Location
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#213b2e] sm:text-base lg:text-lg">
            Visit us at our convenient location. We're here to serve you with exceptional laundry services
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex gap-4 rounded-2xl border border-[#0f2716]/10 bg-gradient-to-br from-[#d7e6d4]/30 to-white/50 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f351e] text-white">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-[#06150b]">Address</h3>
                  <p className="text-sm text-[#213b2e]">{businessLocation.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 rounded-2xl border border-[#0f2716]/10 bg-gradient-to-br from-[#d7e6d4]/30 to-white/50 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f351e] text-white">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-[#06150b]">Phone</h3>
                  <a href={`tel:${businessLocation.phone}`} className="text-sm text-[#213b2e] hover:text-[#0f351e]">
                    {businessLocation.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 rounded-2xl border border-[#0f2716]/10 bg-gradient-to-br from-[#d7e6d4]/30 to-white/50 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f351e] text-white">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-[#06150b]">Email</h3>
                  <a href={`mailto:${businessLocation.email}`} className="text-sm text-[#213b2e] hover:text-[#0f351e]">
                    {businessLocation.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 rounded-2xl border border-[#0f2716]/10 bg-gradient-to-br from-[#d7e6d4]/30 to-white/50 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f351e] text-white">
                  <Clock size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-[#06150b]">Business Hours</h3>
                  <p className="text-sm text-[#213b2e]">{businessLocation.hours}</p>
                  <p className="text-xs text-[#213b2e]/70">Available 24/7</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#0f351e] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_22px_48px_rgba(15,53,30,0.32)] transition hover:bg-[#0c2815]"
                href={`https://www.google.com/maps/dir//${businessLocation.lat},${businessLocation.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>

              <a
                className="inline-flex items-center justify-center rounded-full bg-[#149146] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_22px_48px_rgba(20,145,70,0.32)] transition hover:bg-[#0f6b33]"
                href="#video"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video Directions
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="relative overflow-hidden rounded-3xl border border-[#0f2716]/10 shadow-[0_20px_60px_rgba(11,34,20,0.15)]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DIRTYCLOTHS Location"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;