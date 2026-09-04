"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart, useCartDetails } from "@/store/cart";
import { formatPrice } from "@/lib/format";
import { useLocale } from "@/components/LocaleProvider";
import { getDictionary } from "@/dictionaries";
import { getProductName } from "@/data/products";

export default function PanierPage() {
  const { items, subtotal } = useCartDetails();
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { locale } = useLocale();
  const fullDict = getDictionary(locale);
  const dict = fullDict.cart;

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.product.id,
            quantity: i.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? dict.genericError);
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError(dict.connectionError);
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-3xl">{dict.emptyTitle}</h1>
        <p className="mt-3 text-muted">{dict.emptyText}</p>
        <Link
          href="/services"
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark"
        >
          {dict.seeServices}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-3xl">{dict.title}</h1>

      <ul className="mt-10 divide-y divide-border">
        {items.map(({ product, quantity }) => {
          const name = getProductName(product, locale);
          return (
            <li key={product.id} className="flex gap-5 py-6">
              <div className="h-28 w-24 shrink-0 overflow-hidden rounded-lg border border-border bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-4">
                  <div>
                    <Link
                      href={`/services/${product.slug}`}
                      className="font-serif text-lg hover:text-accent"
                    >
                      {name}
                    </Link>
                    <p className="text-sm text-muted">
                      {fullDict.categories[product.category] ?? product.category}
                    </p>
                  </div>
                  <p className="font-medium whitespace-nowrap">
                    {formatPrice(product.price * quantity, locale)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-border">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="flex h-9 w-9 items-center justify-center"
                      aria-label="-"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="flex h-9 w-9 items-center justify-center"
                      aria-label="+"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-sm text-muted hover:text-accent"
                  >
                    {dict.remove}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col items-end gap-6 border-t border-border pt-8">
        <div className="flex w-full max-w-xs justify-between text-lg">
          <span>{dict.subtotal}</span>
          <span className="font-medium">{formatPrice(subtotal, locale)}</span>
        </div>
        <p className="w-full max-w-xs text-right text-xs text-muted">
          {dict.invoiceNote}
        </p>

        {error && (
          <p className="w-full max-w-xs text-right text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full max-w-xs rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
        >
          {loading ? dict.redirecting : dict.checkout}
        </button>
      </div>
    </div>
  );
}
