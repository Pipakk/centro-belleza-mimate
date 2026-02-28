'use client';

import { useState } from 'react';
import { site } from '@/content/site';

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= rating ? 'text-amber-400' : 'text-sand-300'}
          aria-hidden
        >
          ★
        </span>
      ))}
    </span>
  );
}

export function Reviews() {
  const [start, setStart] = useState(0);
  const perPage = 3;
  const total = site.reviews.length;
  const visible = site.reviews.slice(start, start + perPage);
  const canPrev = start > 0;
  const canNext = start + perPage < total;

  return (
    <section
      id="reseñas"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-cream-100/50"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="reviews-title" className="font-display text-3xl sm:text-4xl font-semibold text-charcoal text-center mb-4">
          Reseñas
        </h2>
        <p className="text-charcoal/70 text-center max-w-xl mx-auto mb-12">
          Lo que dicen nuestras clientas en Google.
        </p>

        <div className="relative">
          <ul className="grid sm:grid-cols-3 gap-6 min-h-[180px]">
            {visible.map((review, i) => (
              <li
                key={`${review.author}-${i}`}
                className="rounded-2xl bg-white p-6 border border-sand-200/80 shadow-soft flex flex-col"
              >
                <StarRating rating={review.rating} />
                <p className="font-medium text-charcoal mt-2">{review.author}</p>
                <p className="text-charcoal/80 text-sm mt-2 leading-relaxed flex-1 line-clamp-4">
                  {review.text}
                </p>
              </li>
            ))}
          </ul>

          {total > perPage && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                type="button"
                className="p-2 rounded-full border border-sand-300 text-charcoal hover:bg-sand-100 disabled:opacity-40 disabled:pointer-events-none transition-colors duration-200"
                onClick={() => setStart((s) => Math.max(0, s - perPage))}
                disabled={!canPrev}
                aria-label="Reseñas anteriores"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                className="p-2 rounded-full border border-sand-300 text-charcoal hover:bg-sand-100 disabled:opacity-40 disabled:pointer-events-none transition-colors duration-200"
                onClick={() => setStart((s) => Math.min(total - perPage, s + perPage))}
                disabled={!canNext}
                aria-label="Más reseñas"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
