"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function ProductGrid({
  products,
  categories,
  locale = "fr",
}: {
  products: Product[];
  categories: readonly string[];
  locale?: Locale;
}) {
  const dict = getDictionary(locale);
  const [active, setActive] = useState<string>(dict.services.all);

  const filtered =
    active === dict.services.all
      ? products
      : products.filter(
          (p) => (dict.categories[p.category] ?? p.category) === active
        );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {[dict.services.all, ...categories.map((c) => dict.categories[c] ?? c)].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "border-accent bg-accent text-white"
                  : "border-border hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </div>
    </div>
  );
}
