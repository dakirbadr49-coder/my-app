import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProductName, products } from "@/data/products";
import { siteConfig } from "@/data/site-config";
import { getTotalDonations } from "@/lib/donations";
import { formatPrice } from "@/lib/format";
import { getLocale } from "@/lib/get-locale";
import { getDictionary } from "@/dictionaries";

export const revalidate = 60;

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const totalDonations = await getTotalDonations();
  const cvHref = locale === "en" ? "/cv/badr-dakir-cv-en.pdf" : "/cv/badr-dakir-cv-fr.pdf";

  return (
    <div>
      <Link
        href="/don"
        className="block border-b border-border bg-surface px-6 py-3 text-center text-sm transition-colors hover:bg-accent/10"
      >
        {totalDonations ? (
          <>
            <span className="font-medium text-accent">
              {formatPrice(totalDonations, locale)}
            </span>{" "}
            {dict.donationBanner.raised.replace("{name}", siteConfig.name)} —{" "}
            <span className="underline">{dict.donationBanner.donate}</span>
          </>
        ) : (
          <>
            {dict.donationBanner.fallback.replace("{name}", siteConfig.name)}{" "}
            <span className="underline">{dict.donationBanner.donate}</span>
          </>
        )}
      </Link>

      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/45 blur-3xl" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-accent2/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
              {dict.home.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark"
              >
                {dict.home.ctaServices}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-8 py-3.5 text-sm font-medium tracking-wide transition-colors hover:border-accent hover:text-accent"
              >
                {dict.home.ctaContact}
              </Link>
              <a
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-muted underline-offset-4 hover:text-accent hover:underline"
              >
                {dict.home.ctaCv} →
              </a>
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
                  alt={getProductName(p, locale)}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl">{dict.home.popularServices}</h2>
          <Link
            href="/services"
            className="text-sm font-medium tracking-wide hover:text-accent"
          >
            {dict.home.seeAll}
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            {dict.home.methodEyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl">{dict.home.methodTitle}</h2>
          <p className="mt-3 max-w-xl text-muted">{dict.home.methodIntro}</p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {dict.home.steps.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <span className="font-serif text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl">{dict.home.trustTitle}</h2>
          <p className="mt-3 max-w-xl text-muted">
            {dict.home.trustIntro.replace("{name}", siteConfig.name)}
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {dict.home.trustItems.map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-serif text-3xl">{dict.home.faqTitle}</h2>

          <div className="mt-8 divide-y divide-border">
            {dict.home.faq.map((item) => (
              <div key={item.q} className="py-6">
                <p className="font-medium">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
