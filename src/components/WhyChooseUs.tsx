import { site } from '@/content/site';

export function WhyChooseUs() {
  return (
    <section
      id="por-que-elegirnos"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-cream-100/50"
      aria-labelledby="why-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="why-title" className="font-display text-3xl sm:text-4xl font-semibold text-charcoal text-center mb-4">
          Por qué elegirnos
        </h2>
        <p className="text-charcoal/70 text-center max-w-xl mx-auto mb-12">
          En {site.name} nos importas. Profesionalidad, higiene y trato cercano.
        </p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.whyUs.map((item, i) => (
            <li
              key={i}
              className="rounded-2xl bg-white p-6 border border-sand-200/80 shadow-soft hover:shadow-card transition-shadow duration-200"
            >
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-charcoal/80 text-sm leading-relaxed">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
