'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMessage(json.error || 'Error al enviar.');
        setStatus('error');
        return;
      }
      setStatus('success');
      form.reset();
    } catch {
      setErrorMessage('Error de conexión.');
      setStatus('error');
    }
  }

  return (
    <section
      id="contacto"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-cream-100/50"
      aria-labelledby="contacto-title"
    >
      <div className="mx-auto max-w-xl">
        <h2 id="contacto-title" className="font-display text-3xl sm:text-4xl font-semibold text-charcoal text-center mb-4">
          Contacto
        </h2>
        <p className="text-charcoal/70 text-center mb-8">
          Escríbenos y te respondemos lo antes posible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 sm:p-8 border border-sand-200/80 shadow-soft space-y-4"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1">
              Nombre *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              minLength={2}
              className="w-full rounded-xl border border-sand-300 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition-colors duration-200"
              placeholder="Tu nombre"
              disabled={status === 'loading'}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal mb-1">
              Teléfono *
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              minLength={9}
              className="w-full rounded-xl border border-sand-300 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none transition-colors duration-200"
              placeholder="633 00 00 00"
              disabled={status === 'loading'}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-1">
              Mensaje *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={10}
              rows={4}
              className="w-full rounded-xl border border-sand-300 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 focus:outline-none resize-none transition-colors duration-200"
              placeholder="¿En qué podemos ayudarte?"
              disabled={status === 'loading'}
            />
          </div>
          {status === 'error' && (
            <p className="text-red-600 text-sm" role="alert">
              {errorMessage}
            </p>
          )}
          {status === 'success' && (
            <p className="text-green-700 text-sm" role="status">
              Mensaje enviado. Te contestaremos pronto.
            </p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-xl bg-charcoal text-cream-50 py-3.5 font-medium hover:bg-ink disabled:opacity-60 transition-colors duration-200"
          >
            {status === 'loading' ? 'Enviando…' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  );
}
