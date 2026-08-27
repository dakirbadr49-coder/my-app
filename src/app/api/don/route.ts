import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      {
        error:
          "Les dons ne sont pas encore configurés. Ajoutez vos clés Stripe dans le fichier .env.local (voir README.md).",
      },
      { status: 500 }
    );
  }

  const body = (await request.json()) as { amount?: number };
  const amount = Math.round(Number(body.amount) * 100);

  if (!amount || amount < 100) {
    return NextResponse.json(
      { error: "Le montant minimum est de 1 €." },
      { status: 400 }
    );
  }

  const stripe = new Stripe(secretKey);
  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: amount,
          product_data: {
            name: "Don pour soutenir B Network",
          },
        },
      },
    ],
    metadata: { type: "donation" },
    success_url: `${origin}/don/merci`,
    cancel_url: `${origin}/don`,
  });

  return NextResponse.json({ url: session.url });
}
