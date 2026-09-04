"use client";

import { useState } from "react";
import { useCart } from "@/store/cart";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function AddToCartButton({
  productId,
  locale = "fr",
}: {
  productId: string;
  locale?: Locale;
}) {
  const addItem = useCart((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const dict = getDictionary(locale).serviceDetail;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center rounded-full border border-border">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="flex h-11 w-11 items-center justify-center text-lg"
          aria-label={dict.decrease}
        >
          −
        </button>
        <span className="w-6 text-center text-sm">{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          className="flex h-11 w-11 items-center justify-center text-lg"
          aria-label={dict.increase}
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
        {added ? dict.added : dict.addToCart}
      </button>
    </div>
  );
}
