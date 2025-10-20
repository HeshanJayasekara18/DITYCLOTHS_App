'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Send } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
    setIsMenuOpen(false);
  };

  const closeChat = () => setIsChatOpen(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isChatOpen]);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between text-sm font-medium text-[#0f2716]">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            className="grid h-10 w-10 place-items-center rounded-full border border-[#0f2716]/30 text-base font-semibold tracking-wide sm:h-11 sm:w-11 sm:text-lg"
            href="/"
          >
            DC
          </Link>
          <Link className="text-base font-semibold sm:text-lg" href="/">
            DIRTYCLOTHS
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:gap-10 md:flex">
          <Link className="transition-colors hover:text-[#114633]" href="/">
            Home
          </Link>
          <Link className="transition-colors hover:text-[#114633]" href="/about">
            About
          </Link>
          <Link className="transition-colors hover:text-[#114633]" href="/services">
            Services
          </Link>
          <Link className="transition-colors hover:text-[#114633]" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-full bg-[#153d24] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#0f2716] md:inline-flex md:items-center md:justify-center"
            onClick={openChat}
          >
            Chat
          </button>

          {/* Mobile Menu Button */}
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-[#0f2716]/30 transition-colors hover:bg-[#0f2716]/5 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-[#0f2716]/20 bg-white/95 p-4 shadow-xl backdrop-blur-sm md:hidden">
            <nav className="flex flex-col gap-3">
              <Link
                className="rounded-lg px-4 py-3 transition-colors hover:bg-[#d7e6d4]/50"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="rounded-lg px-4 py-3 transition-colors hover:bg-[#d7e6d4]/50"
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="rounded-lg px-4 py-3 transition-colors hover:bg-[#d7e6d4]/50"
                href="/services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                className="rounded-lg px-4 py-3 transition-colors hover:bg-[#d7e6d4]/50"
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                type="button"
                className="mt-2 rounded-full bg-[#153d24] px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-[#0f2716]"
                onClick={openChat}
              >
                Chat
              </button>
            </nav>
          </div>
        )}
      </header>

      {isChatOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-assistant-title"
          onClick={closeChat}
        >
          <div
            className="mx-4 w-full max-w-lg rounded-3xl bg-white shadow-[0_32px_80px_rgba(11,34,20,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#0f2716]/10 px-6 py-4">
              <div className="text-left">
                <h2 id="chat-assistant-title" className="text-base font-semibold text-[#06150b]">
                  DIRTYCLOTHS Assistant (Beta)
                </h2>
                <p className="text-xs text-[#213b2e]/70">Ask anything about our services, pricing, or location.</p>
              </div>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0f2716]/15 text-[#0f2716] transition hover:bg-[#f3f7f0]"
                onClick={closeChat}
              >
                <span className="sr-only">Close chat</span>
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-4 px-6 py-6">
              <div className="flex flex-col gap-3">
                <div className="self-start rounded-2xl bg-[#d7e6d4] px-4 py-3 text-sm text-[#0f351e]">
                  Hi there! I'm your DIRTYCLOTHS virtual assistant. How can I help you today?
                </div>
                <div className="self-start rounded-2xl bg-white px-4 py-3 text-sm text-[#213b2e] shadow-[0_10px_24px_rgba(11,34,20,0.12)]">
                  Popular questions:
                  <ul className="mt-2 space-y-1 text-left text-xs text-[#0f351e]">
                    <li>• What are your wash & fold rates?</li>
                    <li>• How fast is the turnaround?</li>
                    <li>• Where is the shop located?</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-[#0f2716]/15 bg-[#f8fbf7] p-4 text-left text-xs text-[#213b2e]/80">
                Live messaging is launching soon. Until then, reach us via WhatsApp at <span className="font-semibold text-[#0f351e]">+94 72 1634 671</span>.
              </div>
            </div>

            <div className="border-t border-[#0f2716]/10 px-6 py-4">
              <div className="flex items-center gap-3 rounded-full border border-[#0f2716]/10 bg-white px-4 py-2">
                <input
                  className="flex-1 border-none bg-transparent text-sm text-[#213b2e] placeholder:text-[#213b2e]/50 focus:outline-none"
                  type="text"
                  placeholder="Type your message (coming soon)..."
                  disabled
                />
                <Send className="text-[#0f2716]/30" size={18} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar