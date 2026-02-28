# Centro Estético Mímate — Landing page

Landing responsive (mobile-first) para el Centro Estético Mímate (Puertollano). Next.js 14 (App Router), TypeScript y TailwindCSS. Lista para desplegar en Vercel.

## Cómo correr en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cómo reemplazar contenido

Todo el contenido editable está centralizado en **`src/content/site.ts`**. Ahí puedes cambiar:

| Dato | Dónde en `site.ts` |
|------|--------------------|
| **Nombre, slogan, tagline** | `name`, `fullName`, `slogan`, `tagline` |
| **Teléfono / WhatsApp** | `contact.phone`, `contact.phoneFormatted`, `contact.whatsapp` |
| **Email** | `contact.email` |
| **Dirección** | `contact.address`, `contact.city`, `contact.addressFull` |
| **Horarios** | Array `schedule` (día + texto de horas) |
| **Redes** | `social.instagram`, `social.facebook` |
| **Servicios** | Array `services` (title, shortDescription, priceFrom, image, etc.) |
| **Por qué elegirnos** | Array `whyUs` (title, text) |
| **Reseñas** | Array `reviews` (author, rating, text) |
| **Galería** | Array `gallery` (id, src, alt). `src` puede ser ruta local (`/images/gallery/xx.jpg`) o URL externa |
| **Vídeo del hero** | `video.mp4`, `video.webm`, `video.poster` (rutas en `/public/video/`) |
| **Mapa** | `mapEmbedSrc`: pega la URL del iframe de Google Maps (Compartir > Insertar un mapa) |

### Imágenes

- **Demo:** la galería y los servicios usan por defecto imágenes gratuitas (Pexels) listas para enseñar la demo. El mapa muestra **C/ Pablo Neruda, 10 · Puertollano**.
- **Galería con fotos de Instagram:** para usar fotos de [@centro_debelleza_mimate](https://www.instagram.com/centro_debelleza_mimate/), descárgalas y súbelas a `public/images/gallery/` (p. ej. `01.jpg`, `02.jpg`) y actualiza `site.gallery[].src` en `site.ts`, o sustituye cada `src` por la URL de la imagen si la tienes.
- **Servicios:** las imágenes actuales son de stock (Pexels); puedes cambiarlas por rutas locales o URLs en `site.services[].image`.
- **Vídeo:** ver sección siguiente.

### Vídeo del hero

El hero usa por defecto un **vídeo 4K gratuito** de Pexels (masaje/spa): [A Woman Getting A Bare Back Massage](https://www.pexels.com/video/hands-woman-relaxation-luxury-3998269/). Si el vídeo no puede reproducirse (autoplay bloqueado, ahorro de datos, etc.), se muestra solo **la imagen del video parada** (poster), sin otro fallback.

- **Vídeo y poster** se configuran en `src/content/site.ts` → `video.mp4` y `video.poster`.
- Para usar tu propio vídeo: sube `hero.mp4` a `public/video/` y pon `mp4: '/video/hero.mp4'`; para el poster, usa una captura de un frame del vídeo en `public/video/hero-poster.jpg` y `poster: '/video/hero-poster.jpg'`.
- **Recomendación de compresión:** 1080p o 720p, bitrate 1–1,5 Mbps. FFmpeg: `ffmpeg -i entrada.mp4 -vcodec libx264 -crf 23 -preset medium -an hero.mp4`.

## Despliegue en Vercel

1. Sube el repo a GitHub (o GitLab/Bitbucket).
2. En [vercel.com](https://vercel.com): **Add New Project** > importa el repositorio.
3. Framework: **Next.js** (detectado automáticamente). Build: `npm run build`. No hace falta configurar nada más.
4. Despliega. Opcional: en **Settings > Environment Variables** añade `RESEND_API_KEY` y `CONTACT_EMAIL` si usas el formulario de contacto con Resend.

## Formulario de contacto y email

El formulario envía a **`/api/contact`** (POST con `name`, `phone`, `message`). La ruta valida y, por defecto, solo devuelve éxito. Para enviar emails:

**Opción A — Resend (recomendado)**  
1. `npm i resend`  
2. Crea una API key en [resend.com](https://resend.com) y verifica tu dominio.  
3. En Vercel (o `.env.local`): `RESEND_API_KEY=re_xxx` y, si quieres, `CONTACT_EMAIL=donde@recibir.com`.  
4. En `src/app/api/contact/route.ts` descomenta el bloque de Resend y cambia el `from` por un email de tu dominio verificado.

**Opción B — mailto**  
Si no quieres backend, puedes sustituir el formulario por un enlace `mailto:info@tudominio.com?subject=Contacto%20web&body=...` o redirigir al usuario a una página con ese enlace.

## Estructura relevante

```
src/
  app/           # App Router: layout, page, privacy, legal, api/contact
  components/    # Header, HeroVideo, ServicesGrid, WhyChooseUs, Gallery, Reviews, CTASticky, LocationHours, Footer, ContactForm
  content/
    site.ts      # Datos centralizados (editar aquí)
public/
  video/         # hero.mp4, hero.webm, hero-poster.jpg
  images/
    gallery/    # Fotos galería
    services/   # Imágenes de servicios
```

## Scripts

- `npm run dev` — desarrollo.
- `npm run build` — build de producción.
- `npm run start` — sirve el build (p. ej. tras `npm run build`).
- `npm run lint` — ESLint.

## SEO y legales

- Metadata (title, description, OpenGraph) en `src/app/layout.tsx`.
- Favicon: coloca `app/icon.ico` (o usa `app/icon.tsx`) para personalizarlo.
- Páginas placeholder: `/privacy` y `/legal`. Sustituye el texto por la política de privacidad y aviso legal definitivos.
