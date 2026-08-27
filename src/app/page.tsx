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
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            Notre méthode
          </p>
          <h2 className="mt-3 font-serif text-3xl">Comment ça marche</h2>
          <p className="mt-3 max-w-xl text-muted">
            Un déroulé simple et transparent, du premier clic à la mise en
            ligne de ton site.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {[
              {
                step: "01",
                title: "Tu choisis ton service",
                text: "Parcours le catalogue et sélectionne ce dont tu as besoin. Tu peux combiner plusieurs services dans une seule commande.",
              },
              {
                step: "02",
                title: "On valide ton projet ensemble",
                text: "Après ta commande, on te contacte sous 24 à 48h pour cadrer précisément tes besoins et confirmer le tarif final.",
              },
              {
                step: "03",
                title: "On développe ton site",
                text: "Tu es tenu informé de l'avancement, avec la possibilité de demander des ajustements avant la livraison finale.",
              },
              {
                step: "04",
                title: "Livraison et suivi",
                text: "Ton site est mis en ligne et tu reçois tous les accès. Le service de maintenance reste disponible si tu as besoin d'aide ensuite.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <span className="font-serif text-3xl text-accent">
                  {item.step}
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
          <h2 className="font-serif text-3xl">Pourquoi nous faire confiance</h2>
          <p className="mt-3 max-w-xl text-muted">
            {siteConfig.name} est un studio qui conçoit des sites sur mesure,
            sans jargon ni surprise sur la facture. Chaque projet est suivi
            individuellement, du premier échange jusqu&apos;à la mise en
            ligne.
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Paiement sécurisé",
                text: "Transactions chiffrées via Stripe : aucune donnée bancaire ne transite par nos serveurs.",
              },
              {
                title: "Devis confirmé avant de démarrer",
                text: "Le tarif final est validé avec toi avant qu'on lance le moindre développement.",
              },
              {
                title: "Tu restes propriétaire",
                text: "Code source, nom de domaine et contenus t'appartiennent, sans dépendance à notre studio.",
              },
              {
                title: "Accompagnement humain",
                text: "Un contact direct avec la personne qui développe ton site, pas de standard téléphonique.",
              },
              {
                title: "Délais annoncés à l'avance",
                text: "Un planning clair dès la validation du projet, avec des points d'étape réguliers.",
              },
              {
                title: "Support après livraison",
                text: "De petits ajustements sont inclus après la mise en ligne, et la maintenance reste disponible ensuite.",
              },
            ].map((item) => (
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
          <h2 className="font-serif text-3xl">Questions fréquentes</h2>

          <div className="mt-8 divide-y divide-border">
            {[
              {
                q: "Combien de temps faut-il pour recevoir mon site ?",
                a: "Ça dépend du service choisi : compte en moyenne 1 à 2 semaines pour un site simple, davantage pour un projet avec plusieurs fonctionnalités. Un délai précis t'est communiqué après validation du projet.",
              },
              {
                q: "Est-ce que je peux demander des modifications après la livraison ?",
                a: "Oui, de petits ajustements sont inclus juste après la mise en ligne. Pour des évolutions plus importantes par la suite, le service de maintenance mensuelle permet de rester accompagné dans la durée.",
              },
              {
                q: "Comment se passe le paiement ?",
                a: "Le paiement se fait en ligne par carte bancaire au moment de la commande, de façon sécurisée via Stripe. Aucune information bancaire n'est stockée par nos soins.",
              },
              {
                q: "Est-ce que je suis vraiment propriétaire de mon site ?",
                a: "Oui. Le code, le nom de domaine et les contenus t'appartiennent entièrement : tu n'es pas obligé de rester avec nous pour la suite.",
              },
            ].map((item) => (
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
