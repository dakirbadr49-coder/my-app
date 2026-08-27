import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { categories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-serif text-4xl">Nos services</h1>
      <p className="mt-3 max-w-xl text-muted">
        Choisis les services dont tu as besoin et compose ton projet à la
        carte.
      </p>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Tarifs indicatifs pour une demande standard : le prix final peut
        varier selon la complexité de ton projet.
      </p>

      <div className="mt-10">
        <ProductGrid products={products} categories={categories} />
      </div>
    </div>
  );
}
