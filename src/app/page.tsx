import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site-config";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/45 blur-3xl" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-accent2/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
              Studio web
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark"
              >
                Voir les services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-8 py-3.5 text-sm font-medium tracking-wide transition-colors hover:border-accent hover:text-accent"
              >
                Discuter de mon projet
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {products.slice(0, 2).map((p) => (
              <div
                key={p.id}
                className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl">Services populaires</h2>
          <Link
            href="/services"
            className="text-sm font-medium tracking-wide hover:text-accent"
          >
            Voir tout →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
          {[
            {
              title: "Paiement sécurisé",
              text: "Transactions chiffrées et traitées via Stripe, sans engagement caché.",
            },
            {
              title: "Développement sur mesure",
              text: "Du code propre, rapide et optimisé pour le référencement.",
            },
            {
              title: "Accompagnement direct",
              text: "Un contact humain à chaque étape, pas de ticket dans le vide.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
