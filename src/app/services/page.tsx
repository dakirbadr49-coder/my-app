import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { categories, products } from "@/data/products";
import { getLocale } from "@/lib/get-locale";
import { getDictionary } from "@/dictionaries";

export const metadata: Metadata = {
  title: "Services",
};

export default async function ServicesPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent2/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            {dict.services.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl">{dict.services.title}</h1>
          <p className="mt-3 max-w-xl text-muted">{dict.services.intro}</p>
          <p className="mt-2 max-w-xl text-sm text-muted">
            {dict.services.pricingNote}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <ProductGrid products={products} categories={categories} locale={locale} />
      </div>
    </div>
  );
}
