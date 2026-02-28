import { NextRequest, NextResponse } from 'next/server';

type Body = { name?: string; phone?: string; message?: string };

function validate(body: Body): string | null {
  const name = (body.name ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const message = (body.message ?? '').trim();
  if (name.length < 2) return 'Nombre no válido.';
  if (phone.length < 9) return 'Teléfono no válido.';
  if (message.length < 10) return 'Mensaje demasiado corto.';
  return null;
}

/**
 * POST /api/contact
 * Cuerpo: { name, phone, message }
 *
 * Para enviar email en producción:
 * 1. Instala Resend: npm i resend
 * 2. Crea RESEND_API_KEY en Vercel (y .env.local)
 * 3. Descomenta el bloque de Resend abajo y sustituye 'onboarding@resend.dev' por tu dominio verificado
 * 4. Opción alternativa: usar nodemailer + SMTP o redirigir a mailto:
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Body;
    const error = validate(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // Opción 1: Resend (recomendado)
    // const Resend = require('resend').Resend;
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'web@tudominio.com',
    //   to: process.env.CONTACT_EMAIL || 'info@mimate-estetica.com',
    //   subject: `Contacto web: ${body.name}`,
    //   text: `Nombre: ${body.name}\nTeléfono: ${body.phone}\n\nMensaje:\n${body.message}`,
    // });

    // Por ahora solo validamos y devolvemos éxito (puedes conectar Resend después)
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Error interno.' }, { status: 500 });
  }
}
