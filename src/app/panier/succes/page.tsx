"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/store/cart";

export default function SuccesPage() {
  const clear = useCart((s) => s.clear);

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-sm font-medium tracking-widest text-accent uppercase">
        Commande confirmée
      </p>
      <h1 className="mt-4 font-serif text-4xl">Merci pour votre commande !</h1>
      <p className="mt-4 text-muted">
        Un e-mail de confirmation vous a été envoyé. Nous démarrons la
        prestation sous 48h et reviendrons vers vous pour lancer le projet.
      </p>
      <Link
        href="/services"
        className="mt-10 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark"
      >
        Voir d&apos;autres services
      </Link>
    </div>
  );
}
