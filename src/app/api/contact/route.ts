import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Merci de remplir tous les champs." },
      { status: 400 }
    );
  }

  // Pour l'instant, le message est simplement journalisé côté serveur.
  // Pour recevoir de vrais e-mails, branche un service comme Resend
  // ou SendGrid ici (voir README.md).
  console.log("Nouveau message de contact:", body);

  return NextResponse.json({ ok: true });
}
