import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Navbar from '../common/Navbar';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team between 8.00 AM – 10.00 PM every day.',
    value: '+94 72 1634 671',
    href: 'tel:+94721634671',
    external: false
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Send a quick message on WhatsApp and we will reply promptly.',
    value: '+94 72 1634 671',
    href: 'https://wa.me/94721634671',
    external: true
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed requests or partnerships, write to our inbox anytime.',
    value: 'dirtycloths.midigama@gmail.com',
    href: 'mailto:dirtycloths.midigama@gmail.com',
    external: false
  }
];

const visitHighlights = [
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'Amuwatta Koratuwa, Midigama, Southern Province, Sri Lanka'
  },
  {
    icon: Clock,
    title: 'Open Hours',
    detail: 'Always open'
  },
  {
    icon: Phone,
    title: 'Customer Hotline',
    detail: '+94 72 1634 671'
  }
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#0f2716]">
      <section className="relative isolate overflow-hidden bg-[#d7e6d4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.6),transparent_55%)]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-5 sm:gap-12 sm:px-6 sm:pb-20 lg:gap-16 lg:px-10 lg:pb-24">
          <Navbar />
          <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.55em] text-[#1b3f26] sm:text-[0.7rem] sm:tracking-[0.65em]">
                Get In Touch
              </span>
              <h1 className="text-3xl font-semibold leading-tight tracking-[0.06em] text-[#06150b] sm:text-4xl sm:tracking-[0.08em] lg:text-5xl">
                Contact DIRTYCLOTHS Laundry
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#213b2e] sm:text-base lg:text-lg">
                We love hearing from travelers and locals alike. Reach out, schedule a drop-off, or ask anything about our eco-friendly laundry services in Midigama.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="flex flex-col gap-4 rounded-3xl border border-[#0f2716]/10 bg-gradient-to-br from-[#d7e6d4]/40 to-white p-6 shadow-[0_18px_46px_rgba(11,34,20,0.12)] transition hover:shadow-[0_22px_60px_rgba(11,34,20,0.18)] sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f351e] text-white">
                    <Icon size={24} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-[#06150b]">
                      {method.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#213b2e]/80">
                      {method.description}
                    </p>
                  </div>
                  <a
                    className="inline-flex w-fit items-center justify-center rounded-full border border-[#0f351e]/30 bg-white px-5 py-2 text-sm font-semibold text-[#0f351e] shadow-[0_12px_30px_rgba(255,255,255,0.6)] transition hover:bg-[#f3f7f0]"
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                  >
                    {method.value}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-6 rounded-3xl border border-[#0f2716]/10 bg-white/90 p-8 shadow-[0_20px_60px_rgba(11,34,20,0.12)] backdrop-blur-sm sm:p-12">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-[#06150b] sm:text-3xl">
                  Plan Your Visit
                </h2>
                <p className="text-sm leading-relaxed text-[#213b2e] sm:text-base">
                  Drop off your laundry at our Midigama shop and enjoy the beach while we handle the rest. We are set up for travelers, surfers, and long-stay guests who need reliable turnaround times.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {visitHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-[#0f2716]/10 bg-[#d7e6d4]/40 p-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f351e] text-white">
                        <Icon size={22} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#06150b]">
                          {item.title}
                        </span>
                        <span className="text-sm text-[#213b2e]">
                          {item.detail}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-[#0f2716]/10 shadow-[0_20px_60px_rgba(11,34,20,0.15)]">
              <iframe
                src="https://www.google.com/maps?q=5.96545,80.39445&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DIRTYCLOTHS Laundry Location"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d7e6d4] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(11,34,20,0.15)] backdrop-blur-sm sm:p-12">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-[#06150b] sm:text-3xl">
                Need Immediate Assistance?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-[#213b2e] sm:text-base">
                We are just a call or message away if you have urgent laundry requirements, group bookings, or special fabric care needs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#0f351e] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_22px_48px_rgba(15,53,30,0.32)] transition hover:bg-[#0c2815]"
                href="tel:+94721634671"
              >
                Call Now
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#0f351e]/30 bg-white px-8 py-3.5 text-sm font-semibold text-[#0f351e] shadow-[0_18px_40px_rgba(255,255,255,0.55)] transition hover:bg-[#f3f7f0]"
                href="https://wa.me/94721634671"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
