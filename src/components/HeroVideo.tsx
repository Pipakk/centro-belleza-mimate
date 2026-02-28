'use client';

import { useRef, useState, useEffect } from 'react';
import { site } from '@/content/site';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPosterOnly, setShowPosterOnly] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handleError = () => setShowPosterOnly(true);
    v.addEventListener('error', handleError);
    return () => v.removeEventListener('error', handleError);
  }, []);

  const { video } = site;
  const hasPoster = Boolean(video.poster);

  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-sand-200"
      aria-label="Presentación"
    >
      <div className="absolute inset-0">
        {showPosterOnly && hasPoster ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${video.poster})` }}
            role="img"
            aria-label="Imagen de presentación del centro"
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label="Vídeo de presentación del centro"
          >
            <source src={video.mp4} type="video/mp4" />
          </video>
        )}
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center text-cream-50">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 animate-fade-in">
          {site.tagline}
        </h1>
        <p className="text-lg sm:text-xl text-cream-100/95 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {site.fullName}
        </p>
        <a
          href={site.whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-cream-50 text-charcoal px-8 py-4 text-base font-medium shadow-float hover:bg-cream-100 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
        >
          Reservar cita
        </a>
      </div>
    </section>
  );
}
