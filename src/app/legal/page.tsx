import type { Metadata } from 'next';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: `Aviso legal y condiciones de uso de ${site.fullName}.`,
};

export default function LegalPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6">
      <article className="mx-auto max-w-3xl prose prose-charcoal">
        <h1 className="font-display text-3xl font-semibold text-charcoal">
          Aviso legal
        </h1>
        <p className="text-charcoal/80 text-sm mt-2">
          Última actualización: {new Date().toLocaleDateString('es-ES')}. Este es un texto
          placeholder que debes reemplazar por el aviso legal real de tu centro.
        </p>
        <div className="mt-8 space-y-4 text-charcoal/90 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-6 mb-2">
              1. Datos identificativos
            </h2>
            <p>
              Titular: {site.legal.businessName}. Domicilio: {site.contact.addressFull}.
              Contacto: {site.contact.phoneFormatted}, {site.contact.email}.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-6 mb-2">
              2. Objeto y condiciones de uso
            </h2>
            <p>
              Este sitio web tiene carácter informativo. El uso del mismo implica la aceptación
              de las condiciones aquí expuestas. Se prohíbe el uso con fines ilícitos o
              lesivos.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-6 mb-2">
              3. Propiedad intelectual
            </h2>
            <p>
              Los contenidos, diseños y códigos son propiedad del titular o de sus
              licenciantes y están protegidos por la legislación aplicable.
            </p>
          </section>
          <p className="mt-8 text-charcoal/70 text-xs">
            Sustituye este contenido por el aviso legal definitivo redactado por un
            profesional legal.
          </p>
        </div>
      </article>
    </div>
  );
}
