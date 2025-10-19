import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footerpart = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0f351e] text-white">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#d7e6d4]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        {/* Main Footer Content */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/30 text-lg font-semibold">
                DC
              </div>
              <span className="text-xl font-semibold">DIRTYCLOTHS</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Your trusted partner for premium laundry services with eco-friendly practices and exceptional care.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-all hover:border-white/40 hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-all hover:border-white/40 hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#twitter"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-all hover:border-white/40 hover:bg-white/10"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
              <a href="/home" className="text-sm text-white/70 transition-colors hover:text-white">
                Home
              </a>
              <a href="/about" className="text-sm text-white/70 transition-colors hover:text-white">
                About Us
              </a>
              <a href="/services" className="text-sm text-white/70 transition-colors hover:text-white">
                Services
              </a>
              <a href="/contact" className="text-sm text-white/70 transition-colors hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <nav className="flex flex-col gap-2.5">
              <a href="#premium-wash" className="text-sm text-white/70 transition-colors hover:text-white">
                Premium Wash
              </a>
              <a href="#dry-cleaning" className="text-sm text-white/70 transition-colors hover:text-white">
                Dry Cleaning
              </a>
              <a href="#express-service" className="text-sm text-white/70 transition-colors hover:text-white">
                Express Service
              </a>
              <a href="#iron-fold" className="text-sm text-white/70 transition-colors hover:text-white">
                Iron & Fold
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+94763290630"
                className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>+94 76 3290 630</span>
              </a>
              <a
                href="mailto:info@dirtycloths.com"
                className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span>info@dirtycloths.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>Amuwatta Koratuwa, Midigama, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/60 sm:flex-row sm:text-left">
          <p>© {currentYear} DIRTYCLOTHS. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerpart;