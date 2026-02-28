import { site } from '@/content/site';

export function LocationHours() {
  return (
    <section
      id="ubicacion"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white"
      aria-labelledby="ubicacion-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="ubicacion-title" className="font-display text-3xl sm:text-4xl font-semibold text-charcoal text-center mb-4">
          Ubicación y horarios
        </h2>
        <p className="text-charcoal/70 text-center max-w-xl mx-auto mb-12">
          Ven a visitarnos en Puertollano.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Horario de apertura</h3>
            <ul className="space-y-2">
              {site.schedule.map((row) => (
                <li key={row.day} className="flex justify-between text-charcoal/90">
                  <span className="font-medium">{row.day}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-sand-200">
              <p className="font-display text-lg font-semibold text-charcoal">{site.contact.addressFull}</p>
              <a
                href={site.telUrl()}
                className="text-rose-500 hover:underline mt-1 inline-block"
              >
                {site.contact.phoneFormatted}
              </a>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.addressFull)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-rose-500 font-medium hover:underline"
            >
              Ver en Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden bg-sand-100 min-h-[280px]">
            <iframe
              title="Ubicación de Mímate en el mapa"
              src={site.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ minHeight: '280px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
