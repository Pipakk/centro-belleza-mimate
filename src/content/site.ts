/**
 * Contenido centralizado del sitio - Centro Estético Mímate
 * Edita este archivo para cambiar teléfono, dirección, horarios, servicios, reseñas, galería y vídeo.
 */

export const site = {
  name: 'Mímate',
  fullName: 'Centro Estético Mímate',
  slogan: 'Centro de Belleza',
  tagline: 'Cuidamos de ti',

  contact: {
    phone: '633017069',
    phoneFormatted: '633 01 70 69',
    whatsapp: '633017069',
    email: 'info@mimate-estetica.com', // placeholder - reemplazar
    address: 'C/ Pablo Neruda, 10',
    city: 'Puertollano',
    addressFull: 'C/ Pablo Neruda, 10 · Puertollano',
  },

  /** Enlace WhatsApp con mensaje pre-rellenado. Usa contact.whatsapp para el número. */
  whatsappUrl: (message?: string) => {
    const text = message
      ? encodeURIComponent(message)
      : encodeURIComponent('Hola, me gustaría reservar una cita.');
    return `https://wa.me/34${site.contact.whatsapp}?text=${text}`;
  },

  telUrl: () => `tel:+34${site.contact.phone.replace(/\s/g, '')}`,

  social: {
    instagram: 'https://www.instagram.com/centro_debelleza_mimate/',
    facebook: 'https://www.facebook.com/centroesteticomimatepuertollano',
    // Añade más: tiktok, etc.
  },

  /** Horario de apertura - reemplazar con datos reales si cambian */
  schedule: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '10:00 - 14:00 · 16:30 - 20:00' },
    { day: 'Miércoles', hours: '10:00 - 14:00 · 16:30 - 20:00' },
    { day: 'Jueves', hours: '10:00 - 14:00 · 16:30 - 20:00' },
    { day: 'Viernes', hours: '10:00 - 14:00 · 16:30 - 20:00' },
    { day: 'Sábado', hours: 'Cerrado' },
    { day: 'Domingo', hours: 'Cerrado' },
  ],

  /** Vídeo del Hero: 4K gratis Pexels (masaje espalda/spa). Si no reproduce, se muestra el poster = imagen del video parada. */
  video: {
    mp4: 'https://videos.pexels.com/video-files/3998269/3998269-uhd_2732_1440_25fps.mp4',
    /** Poster = imagen del video parada (mismo tema: masaje/spa). Puedes sustituir por /video/hero-poster.jpg con un frame del vídeo. */
    poster: 'https://images.unsplash.com/photo-1544161515-4ab6d6d49a38?w=1920&q=85',
  },

  /** Servicios destacados — Imágenes en public/images/ (ver README para copiar tus fotos). */
  services: [
    {
      id: 'manicura-pedicura',
      title: 'Manicura y Pedicura',
      shortDescription: 'Pedicura SPA, uñas semipermanentes y manicura francesa.',
      description: 'Pedicura SPA con limpieza de cutículas, corte y limado, esmaltado permanente, exfoliación e hidratación. Uñas semipermanentes, manicura francesa y diseño.',
      priceFrom: '13',
      image: '/images/manicura-pedicura.png',
    },
    {
      id: 'manicura-japonesa',
      title: 'Manicura Japonesa',
      shortDescription: 'Restauración y cuidado natural de uñas.',
      description: 'Tratamiento para restauración de uñas. 4 sesiones 40€.',
      priceFrom: '40',
      priceNote: '4 sesiones',
      image: '/images/manicura-japonesa.png',
    },
    {
      id: 'presoterapia',
      title: 'Presoterapia',
      shortDescription: 'Drenaje y bienestar corporal.',
      description: 'Tratamiento de presoterapia para circulación y retención de líquidos.',
      image: '/images/presoterapia.png',
    },
    {
      id: 'maderoterapia',
      title: 'Maderoterapia',
      shortDescription: 'Mejor circulación, reducción de celulitis y eliminación de toxinas.',
      description: 'Beneficios: mejor circulación, reducción de celulitis, eliminación de toxinas.',
      image: '/images/maderoterapia.png',
    },
    {
      id: 'masajes',
      title: 'Masajes',
      shortDescription: 'Drenantes, relajantes, anticelulíticos, descontracturantes, craneales.',
      description: 'Masajes drenantes, relajantes, anticelulíticos, descontracturantes y craneales.',
      image: '/images/masajes.png',
    },
  ],

  /** Por qué elegirnos - 3 a 5 beneficios */
  whyUs: [
    { title: 'Profesionales cualificadas', text: 'Trato personalizado y atención a tus necesidades.' },
    { title: 'Limpieza y rigor', text: 'Instalaciones y materiales impecables.' },
    { title: 'Productos de calidad', text: 'Utilizamos productos estupendos para los mejores resultados.' },
    { title: 'Ambiente acogedor', text: 'Amabilidad y simpatía en cada visita.' },
    { title: 'Confianza', text: 'Recomendado por nuestras clientas.' },
  ],

  /** Reseñas de Google - reemplazar con las reales que te pase el cliente */
  reviews: [
    { author: 'Cristina Hervás', rating: 5, text: 'Tanto la dueña como las dos chicas que te atienden, son pura amabilidad y simpatía.' },
    { author: 'Maite Venteo Caballero', rating: 5, text: 'Muuuy buena experiencia... Muuuy buenas profesionales, trato insuperable, todo muy limpio. Los mejores tratamientos, pasad y no os arrepentiréis.' },
    { author: 'Maica', rating: 5, text: 'Muy contenta con la experiencia. Tanto la dueña como las chicas son un encanto, trato personalizado, profesionales y muy cariñosas y amables. Los productos estupendos.' },
    { author: 'Raquel Medina', rating: 5, text: 'Maravillosas profesionales, limpieza, amabilidad y un trato inmejorable. De total confianza, lo recomiendo a todos.' },
    { author: 'Marisol Mediavilla Muñoz', rating: 5, text: 'Mi experiencia es muy buena. El trato del personal y la calidad de los productos excelente.' },
    { author: 'Yolanda García', rating: 5, text: 'Muy profesionales siempre atentas a tus necesidades.' },
    { author: 'Soraya Trenado', rating: 5, text: 'Son súper amables y trabajan genial.' },
  ],

  /** Galería: fotos en public/images/gallery/ (01.png, 03–08.png). */
  gallery: [
    { id: '1', src: '/images/gallery/01.png', alt: 'Manicura' },
    { id: '2', src: '/images/gallery/03.png', alt: 'Maderoterapia' },
    { id: '3', src: '/images/gallery/04.png', alt: 'Masaje espalda' },
    { id: '4', src: '/images/gallery/05.png', alt: 'Masaje hombros' },
    { id: '5', src: '/images/gallery/06.png', alt: 'Manicura' },
    { id: '6', src: '/images/gallery/07.png', alt: 'Uñas' },
    { id: '7', src: '/images/gallery/08.png', alt: 'Pedicura' },
  ],

  /** Mapa: C/ Pablo Neruda, 10 · Puertollano (embed por dirección, sin API key). */
  mapEmbedSrc:
    'https://www.google.com/maps?q=Calle+Pablo+Neruda+10+Puertollano+Espa%C3%B1a&output=embed',

  /** Legal / SEO */
  legal: {
    businessName: 'Centro Estético Mímate',
    privacyPath: '/privacy',
    legalPath: '/legal',
  },
} as const;

export type Site = typeof site;
