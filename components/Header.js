"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "So funktioniert es", href: "/#prozess" },
    { label: "Warum ajents", href: "/#warum-ajents" },
    { label: "Über uns", href: "/#ueber-uns" },
    { label: "Kontakt", href: "/#kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="ajents Logo" width={1380} height={752} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ajents-gray hover:text-ajents-text transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/#kontakt"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Gespräch anfragen
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 -mr-1 text-ajents-gray hover:text-ajents-text"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 min-h-[44px] flex items-center text-sm text-ajents-gray hover:text-ajents-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-3 btn-primary text-center text-sm"
            >
              Gespräch anfragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
