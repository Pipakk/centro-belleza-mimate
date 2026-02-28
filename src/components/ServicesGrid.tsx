'use client';

import Image from 'next/image';
import { site } from '@/content/site';

export function ServicesGrid() {
  return (
    <section
      id="servicios"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white"
      aria-labelledby="servicios-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="servicios-title" className="font-display text-3xl sm:text-4xl font-semibold text-charcoal text-center mb-4">
          Servicios destacados
        </h2>
        <p className="text-charcoal/70 text-center max-w-xl mx-auto mb-12">
          Tratamientos de belleza y bienestar para que te cuides por dentro y por fuera.
        </p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {site.services.map((service) => (
            <li key={service.id}>
              <article className="group h-full rounded-2xl overflow-hidden bg-cream-50 border border-sand-200/80 shadow-soft hover:shadow-card transition-all duration-200">
                <div className="relative aspect-[4/3] bg-sand-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-3">
                    {service.shortDescription}
                  </p>
                  {'priceFrom' in service && service.priceFrom && (
                    <p className="text-rose-500 font-medium text-sm">
                      {'priceNote' in service && service.priceNote
                        ? `${service.priceNote} ${service.priceFrom}€`
                        : `Desde ${service.priceFrom}€`}
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
