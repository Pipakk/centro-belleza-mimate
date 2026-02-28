import Link from 'next/link';
import { site } from '@/content/site';

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream-100 py-12 px-4 sm:px-6 mt-auto">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-display text-xl font-semibold text-cream-50">{site.name}</p>
            <p className="text-cream-100/80 text-sm mt-1">{site.slogan}</p>
            <p className="text-cream-100/70 text-sm mt-2">{site.contact.addressFull}</p>
            <a href={site.telUrl()} className="text-cream-50/90 text-sm hover:underline mt-1 block">
              {site.contact.phoneFormatted}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-cream-100/70 text-sm">Redes</span>
            <div className="flex gap-4">
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-100/90 hover:text-cream-50 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-100/90 hover:text-cream-50 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-charcoal/50 flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-cream-100/70">
          <p>© {new Date().getFullYear()} {site.legal.businessName}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href={site.legal.privacyPath} className="hover:text-cream-50 transition-colors duration-200">
              Política de privacidad
            </Link>
            <Link href={site.legal.legalPath} className="hover:text-cream-50 transition-colors duration-200">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
