import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      {
        error:
          "Le paiement n'est pas encore configuré. Ajoutez vos clés Stripe dans le fichier .env.local (voir README.md).",
      },
      { status: 500 }
    );
  }

  const body = (await request.json()) as {
    items: { productId: string; quantity: number }[];
  };

  if (!body.items || body.items.length === 0) {
    return NextResponse.json({ error: "Le panier est vide." }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);

  const line_items = body.items.map(({ productId, quantity }) => {
    const product = products.find((p) => p.id === productId);
    if (!product) {
      throw new Error(`Produit introuvable: ${productId}`);
    }
    return {
      quantity,
      price_data: {
        currency: "eur",
        unit_amount: product.price,
        product_data: {
          name: product.name,
          description: product.description,
        },
      },
    };
  });

  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    success_url: `${origin}/panier/succes?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/panier`,
  });

  return NextResponse.json({ url: session.url });
}
