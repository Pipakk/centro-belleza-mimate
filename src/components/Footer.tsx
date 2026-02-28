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
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.885 2h.08zm0 5.719a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM12 16.044a4.044 4.044 0 110-8.088 4.044 4.044 0 010 8.088z" clipRule="evenodd" />
                    <path d="M12 6.377a.75.75 0 100 1.5.75.75 0 000-1.5zm-3.75.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM12 8.127a3.875 3.875 0 100 7.75 3.875 3.875 0 000-7.75z" />
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
