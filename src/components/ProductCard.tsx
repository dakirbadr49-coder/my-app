import Link from "next/link";
import { getProductName, type Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function ProductCard({
  product,
  locale = "fr",
}: {
  product: Product;
  locale?: Locale;
}) {
  const dict = getDictionary(locale);
  const name = getProductName(product, locale);
  const category = dict.categories[product.category] ?? product.category;

  return (
    <Link href={`/services/${product.slug}`} className="group block">
      <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-lg leading-snug">{name}</h3>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-sm text-muted">{category}</p>
          <p className="whitespace-nowrap font-medium">
            {dict.productCard.from} {formatPrice(product.price, locale)}
          </p>
        </div>
        <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
          {dict.productCard.learnMore}
        </p>
      </div>
    </Link>
  );
}
