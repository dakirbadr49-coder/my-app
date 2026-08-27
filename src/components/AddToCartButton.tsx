"use client";

import { useState } from "react";
import { useCart } from "@/store/cart";

export default function AddToCartButton({ productId }: { productId: string }) {
  const addItem = useCart((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center rounded-full border border-border">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="flex h-11 w-11 items-center justify-center text-lg"
          aria-label="Diminuer la quantité"
        >
          −
        </button>
        <span className="w-6 text-center text-sm">{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          className="flex h-11 w-11 items-center justify-center text-lg"
          aria-label="Augmenter la quantité"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          addItem(productId, quantity);
          setAdded(true);
          setQuantity(1);
          setTimeout(() => setAdded(false), 1600);
        }}
        className="flex-1 rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark"
      >
        {added ? "Ajouté au panier ✓" : "Ajouter au panier"}
      </button>
    </div>
  );
}
