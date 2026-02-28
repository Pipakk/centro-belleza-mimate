import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { CTASticky } from '@/components/CTASticky';
import { Footer } from '@/components/Footer';
import { site } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} · ${site.slogan} | Puertollano`,
    template: `%s | ${site.fullName}`,
  },
  description:
    'Centro de belleza en Puertollano. Manicura, pedicura, presoterapia, maderoterapia, masajes y tratamientos corporales. Reserva tu cita.',
  keywords: [
    'centro estético',
    'Puertollano',
    'manicura',
    'pedicura',
    'presoterapia',
    'maderoterapia',
    'masajes',
    'uñas semipermanentes',
  ],
  openGraph: {
    title: `${site.fullName} · ${site.slogan}`,
    description: 'Centro de belleza en Puertollano. Reserva tu cita.',
    locale: 'es_ES',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <CTASticky />
      </body>
    </html>
  );
}
