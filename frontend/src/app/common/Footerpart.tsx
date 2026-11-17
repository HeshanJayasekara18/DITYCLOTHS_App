import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle, Clock, ArrowUpRight } from 'lucide-react';
import dcIcon from '@/app/assert/images/DCicon.png';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services & Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = ['Premium Wash & Dry', 'Baby & Sensitive Skin Care', 'Express Service', 'Iron & Fold'];

const socials = [
  { href: 'https://wa.me/94721634671', label: 'WhatsApp', icon: MessageCircle },
  { href: 'tel:+94721634671', label: 'Call', icon: Phone },
  { href: 'mailto:dirtycloths.midigama@gmail.com', label: 'Email', icon: Mail },
  { href: 'https://www.google.com/maps/place/DIRTYCLOTHS/@5.9655628,80.39438503768007,15z', label: 'Google Maps', icon: MapPin },
];

const Footerpart = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-900 text-white">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-leaf-500/20 blur-3xl" />
      <div className="absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-sun/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand Section */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white p-1.5">
                <Image src={dcIcon} alt="DIRTYCLOTHS logo" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-2xl font-bold">DIRTYCLOTHS</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              Fresh, folded laundry for travelers, surfers and locals in Midigama, Ahangama &amp; Weligama — so you can spend more time on the beach.
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:-translate-y-1 hover:border-sun hover:bg-sun hover:text-forest-900"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow !text-sun">Explore</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/70 transition hover:translate-x-1 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow !text-sun">Services</h3>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((label) => (
                <Link key={label} href="/services" className="text-sm text-white/70 transition hover:translate-x-1 hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow !text-sun">Get in Touch</h3>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="tel:+94721634671" className="flex items-start gap-3 transition hover:text-white">
                <Phone size={18} className="mt-0.5 shrink-0 text-sun" />
                <span>+94 72 1634 671</span>
              </a>
              <a href="mailto:dirtycloths.midigama@gmail.com" className="flex items-start gap-3 break-all transition hover:text-white">
                <Mail size={18} className="mt-0.5 shrink-0 text-sun" />
                <span>dirtycloths.midigama@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-sun" />
                <span>Amuwatta Koratuwa, Midigama, Sri Lanka</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-sun" />
                <span>Open daily, 6 AM – 12 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Big wordmark */}
        <div aria-hidden="true" className="mt-16 select-none overflow-hidden">
          <p className="bg-gradient-to-b from-white/15 to-white/0 bg-clip-text text-center whitespace-nowrap font-display text-[11vw] font-extrabold leading-none tracking-tighter text-transparent lg:text-[11rem]">
            DIRTYCLOTHS
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-white/55 sm:flex-row sm:text-left">
          <p>
            © {currentYear} DIRTYCLOTHS Laundry. All rights reserved.{' '}
            <Link href="/credits" className="underline-offset-4 transition hover:text-white hover:underline">
              Photo credits
            </Link>
          </p>
          <a href="#top" className="inline-flex items-center gap-1 transition hover:text-white">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footerpart;
