'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
        <Link
          className="hidden rounded-full bg-[#153d24] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#0f2716] md:inline-block"
          href="/contact"
        >
          Chat
        </Link>

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
            <Link
              className="mt-2 rounded-full bg-[#153d24] px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-[#0f2716]"
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Chat
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar