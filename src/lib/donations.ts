import Stripe from "stripe";

// Calcule le total des dons reçus en interrogeant directement Stripe
// (pas de base de données : Stripe reste la seule source de vérité).
// Retourne null si les clés Stripe ne sont pas configurées.
export async function getTotalDonations(): Promise<number | null> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return null;

  const stripe = new Stripe(secretKey);
  let total = 0;
  let startingAfter: string | undefined;
  let hasMore = true;

  while (hasMore) {
    const sessions: Stripe.ApiList<Stripe.Checkout.Session> =
      await stripe.checkout.sessions.list({
        limit: 100,
        starting_after: startingAfter,
      });

    for (const session of sessions.data) {
      if (
        session.metadata?.type === "donation" &&
        session.payment_status === "paid"
      ) {
        total += session.amount_total ?? 0;
      }
    }

    hasMore = sessions.has_more;
    startingAfter = sessions.data[sessions.data.length - 1]?.id;
  }

  return total;
}
