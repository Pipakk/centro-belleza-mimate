'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site } from '@/content/site';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que-elegirnos', label: 'Por qué elegirnos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#reseñas', label: 'Reseñas' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-sand-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex h-16 sm:h-18 items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight hover:text-rose-500 transition-colors duration-200"
          aria-label={`${site.name} - Inicio`}
        >
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal/80 hover:text-charcoal transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-charcoal text-cream-50 px-5 py-2.5 text-sm font-medium hover:bg-ink transition-colors duration-200 shadow-soft"
          >
            Reservar cita
          </a>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-sand-100 transition-colors duration-200"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu sheet */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="px-4 pb-6 pt-2 bg-cream-50 border-t border-sand-200"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-charcoal hover:text-rose-500 transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 font-medium text-rose-500"
                onClick={() => setMobileOpen(false)}
              >
                Reservar cita (WhatsApp)
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
