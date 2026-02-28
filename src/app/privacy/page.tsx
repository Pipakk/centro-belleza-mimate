import type { Metadata } from 'next';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: `Política de privacidad de ${site.fullName}.`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6">
      <article className="mx-auto max-w-3xl prose prose-charcoal">
        <h1 className="font-display text-3xl font-semibold text-charcoal">
          Política de privacidad
        </h1>
        <p className="text-charcoal/80 text-sm mt-2">
          Última actualización: {new Date().toLocaleDateString('es-ES')}. Este es un texto
          placeholder que debes reemplazar por la política de privacidad real de tu centro.
        </p>
        <div className="mt-8 space-y-4 text-charcoal/90 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-6 mb-2">
              1. Responsable del tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos personales es {site.legal.businessName},
              con domicilio en {site.contact.addressFull}. Puede contactar en el teléfono{' '}
              {site.contact.phoneFormatted} o en el correo electrónico {site.contact.email}.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-6 mb-2">
              2. Finalidad y legitimación
            </h2>
            <p>
              Los datos facilitados serán tratados para gestionar reservas, consultas y la
              relación comercial. La base legal es el consentimiento y la ejecución de servicios
              contratados.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-charcoal mt-6 mb-2">
              3. Conservación y derechos
            </h2>
            <p>
              Los datos se conservarán mientras sea necesario para la finalidad indicada. Usted
              puede ejercer sus derechos de acceso, rectificación, supresión, limitación y
              portabilidad dirigiéndose al responsable, así como presentar una reclamación ante
              la autoridad de control.
            </p>
          </section>
          <p className="mt-8 text-charcoal/70 text-xs">
            Sustituye este contenido por la política de privacidad definitiva redactada por un
            profesional legal.
          </p>
        </div>
      </article>
    </div>
  );
}
