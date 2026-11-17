import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import PageHero from '../common/PageHero';
import CtaBand from '../common/CtaBand';
import { images } from '../common/images';
import { ParallaxImage, Reveal, Stagger, StaggerItem } from '../common/motion';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team every day between 6 AM and 12 AM.',
    value: '+94 72 1634 671',
    href: 'tel:+94721634671',
    external: false
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Send a quick message on WhatsApp. We reply every day between 6 AM and 12 AM.',
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
    detail: 'Every day, 6 AM – 12 AM'
  },
  {
    icon: Phone,
    title: 'Customer Hotline',
    detail: '+94 72 1634 671'
  }
];

const ContactPage = () => {
  return (
    <div className="bg-sand text-forest-900">
      <PageHero
        eyebrow="Get In Touch"
        title="Contact DIRTYCLOTHS Laundry"
        description="We love hearing from travelers and surfers. Reach out, plan your drop-off, or ask anything about our sun-dried laundry service in Midigama."
        image={images.pageContact}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <StaggerItem key={method.title} className="h-full">
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="group flex h-full flex-col gap-5 rounded-[2rem] bg-white p-7 shadow-soft ring-1 ring-forest-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mint-200 text-forest-800 transition-all duration-500 group-hover:bg-forest-800 group-hover:text-white">
                        <Icon size={24} />
                      </span>
                      <ArrowUpRight className="text-moss/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-leaf-600" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display text-xl font-bold text-ink">{method.title}</h3>
                      <p className="text-sm leading-relaxed text-moss/80">{method.description}</p>
                    </div>
                    <span className="mt-auto break-all font-semibold text-forest-800">{method.value}</span>
                  </a>
                </StaggerItem>
              );
            })}
          </Stagger>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="relative isolate flex flex-col gap-6 overflow-hidden rounded-[2rem] bg-forest-800 p-8 text-white shadow-lift sm:p-12" x={-30} y={0}>
              <ParallaxImage src={images.visitBg} alt="" sizes="(max-width: 1024px) 100vw, 45vw" className="-z-20" strength={14} />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-900/90 via-forest-800/85 to-forest-900/75" />
              <div className="flex flex-col gap-3">
                <h2 className="font-display text-3xl font-bold">Plan Your Visit</h2>
                <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                  Drop off your laundry at our Midigama shop and enjoy the beach while we handle the rest. We are set up for travelers, surfers, and long-stay guests who need reliable turnaround times.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {visitHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sun text-forest-900">
                        <Icon size={20} />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{item.title}</span>
                        <span className="text-sm text-white/70">{item.detail}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
            <Reveal x={30} y={0} className="relative overflow-hidden rounded-[2rem] border-[6px] border-white shadow-lift">
              <iframe
                src="https://www.google.com/maps?q=5.96545,80.39445&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '440px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DIRTYCLOTHS Laundry Location"
                className="block"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need Immediate Assistance?"
        description="We are just a call or message away if you have urgent laundry requirements, group bookings, or special fabric care needs."
        primary={{ label: "Chat on WhatsApp", href: "https://wa.me/94721634671" }}
        secondary={{ label: "Call Now", href: "tel:+94721634671" }}
      />
    </div>
  );
};

export default ContactPage;
