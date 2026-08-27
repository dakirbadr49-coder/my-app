import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import { formatPrice } from "@/lib/format";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product?.name ?? "Service" };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            {product.category}
          </p>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-medium">
            {formatPrice(product.price)}
          </p>
          <p className="mt-6 leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="font-serif text-2xl">Services complémentaires</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
