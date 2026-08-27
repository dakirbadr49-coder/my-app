"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

export default function ProductGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: readonly string[];
}) {
  const [active, setActive] = useState<string>("Tout");

  const filtered =
    active === "Tout" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["Tout", ...categories].map((cat) => (
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
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
