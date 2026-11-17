'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X, Send, MessageCircle } from 'lucide-react';
import dcIcon from '@/app/assert/images/DCicon.png';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(y > 24);
    setIsHidden(y > previous && y > 240 && !isMenuOpen);
  });

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const openChat = () => {
    setIsChatOpen(true);
    setIsMenuOpen(false);
  };

  const closeChat = () => setIsChatOpen(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isChatOpen ? 'hidden' : originalOverflow;

    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsChatOpen(false);
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isChatOpen]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
        animate={{ y: isHidden ? -120 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 text-sm font-medium text-forest-900 backdrop-blur-xl transition-all duration-300 sm:px-4 ${
            isScrolled
              ? 'border-white/60 bg-white/85 shadow-[0_12px_40px_rgba(11,34,20,0.14)]'
              : 'border-white/40 bg-white/60 shadow-[0_6px_24px_rgba(11,34,20,0.06)]'
          }`}
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-forest-900/15 bg-white p-1.5 transition-transform duration-500 group-hover:rotate-[360deg]">
              <Image src={dcIcon} alt="DIRTYCLOTHS logo" className="h-full w-full object-contain" priority />
            </span>
            <span className="font-display text-base font-bold tracking-tight sm:text-lg">DIRTYCLOTHS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 transition-colors ${
                  isActive(link.href) ? 'text-white' : 'hover:text-leaf-600'
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-forest-800"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-sm font-bold text-forest-900 transition hover:-translate-y-0.5 hover:bg-[#f7c35e] md:inline-flex"
              onClick={openChat}
            >
              <MessageCircle size={16} />
              Chat
            </button>

            {/* Mobile Menu Button */}
            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-forest-800 text-white transition hover:bg-forest-900 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="absolute left-0 right-0 top-full mt-3 origin-top rounded-3xl border border-white/60 bg-white/95 p-3 shadow-lift backdrop-blur-xl md:hidden"
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <nav className="flex flex-col gap-1">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={link.href}
                        className={`block rounded-2xl px-4 py-3 text-base transition-colors ${
                          isActive(link.href) ? 'bg-mint-200 font-semibold text-forest-800' : 'hover:bg-mint-100'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sun px-6 py-3 text-sm font-bold text-forest-900"
                    onClick={openChat}
                  >
                    <MessageCircle size={16} />
                    Chat with us
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-forest-900/60 p-4 backdrop-blur-sm sm:items-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-assistant-title"
            onClick={closeChat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-[0_32px_80px_rgba(11,34,20,0.35)]"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
              <div className="flex items-center justify-between gap-3 bg-forest-800 px-6 py-4 text-white">
                <div className="flex items-center gap-3 text-left">
                  <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white p-1.5">
                    <Image src={dcIcon} alt="" className="h-full w-full object-contain" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-forest-800 bg-[#25D366]" />
                  </span>
                  <div>
                    <h2 id="chat-assistant-title" className="text-base font-semibold">
                      DIRTYCLOTHS Assistant (Beta)
                    </h2>
                    <p className="text-xs text-white/70">Ask anything about our services, pricing, or location.</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
                  onClick={closeChat}
                >
                  <span className="sr-only">Close chat</span>
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-3 bg-mint-50 px-6 py-6">
                <motion.div
                  className="self-start rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-forest-800 shadow-soft"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi there! I&apos;m your DIRTYCLOTHS virtual assistant. How can I help you today?
                </motion.div>
                <motion.div
                  className="self-start rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-moss shadow-soft"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  Popular questions:
                  <ul className="mt-2 space-y-1 text-left text-xs text-forest-800">
                    <li>• What are your wash &amp; fold rates?</li>
                    <li>• How fast is the turnaround?</li>
                    <li>• Where is the shop located?</li>
                  </ul>
                </motion.div>

                <motion.a
                  href="https://wa.me/94721634671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-between gap-3 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span>Live chat is coming soon — message us on WhatsApp now</span>
                  <Send size={16} className="shrink-0" />
                </motion.a>
              </div>

              <div className="border-t border-forest-900/10 px-6 py-4">
                <div className="flex items-center gap-3 rounded-full border border-forest-900/10 bg-white px-4 py-2">
                  <input
                    className="flex-1 border-none bg-transparent text-sm text-moss placeholder:text-moss/50 focus:outline-none"
                    type="text"
                    placeholder="Type your message (coming soon)..."
                    disabled
                  />
                  <Send className="text-forest-900/30" size={18} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
