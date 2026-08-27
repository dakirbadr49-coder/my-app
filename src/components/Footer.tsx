import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium tracking-wide uppercase">
            Studio
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/services" className="hover:text-accent">
                Tous les services
              </Link>
            </li>
            <li>
              <Link href="/panier" className="hover:text-accent">
                Mon panier
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium tracking-wide uppercase">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>{siteConfig.email}</li>
            <li>Paiement sécurisé par carte bancaire</li>
            <li>Démarrage du projet sous 48h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
