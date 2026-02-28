'use client';

import { useState } from 'react';
import Image from 'next/image';
import { site } from '@/content/site';

export function Gallery() {
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const current = lightboxId ? site.gallery.find((i) => i.id === lightboxId) : null;

  return (
    <section
      id="galeria"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white"
      aria-labelledby="galeria-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="galeria-title" className="font-display text-3xl sm:text-4xl font-semibold text-charcoal text-center mb-4">
          Galería
        </h2>
        <p className="text-charcoal/70 text-center max-w-xl mx-auto mb-12">
          Algunos momentos y tratamientos en {site.name}.
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {site.gallery.map((img) => (
            <li key={img.id}>
              <button
                type="button"
                className="relative block w-full aspect-square rounded-xl overflow-hidden bg-sand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                onClick={() => setLightboxId(img.id)}
                aria-label={`Ver imagen: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen: ${current.alt}`}
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setLightboxId(null)}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute inset-0 -z-10"
            onClick={() => setLightboxId(null)}
            aria-label="Cerrar"
          />
          <div className="relative max-w-4xl w-full aspect-square max-h-[85vh] rounded-xl overflow-hidden">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
