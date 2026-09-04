import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { getLocale } from "@/lib/get-locale";
import { getDictionary } from "@/dictionaries";

export default async function Footer() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

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
            {dict.footer.studio}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/services" className="hover:text-accent">
                {dict.footer.allServices}
              </Link>
            </li>
            <li>
              <Link href="/panier" className="hover:text-accent">
                {dict.footer.myCart}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent">
                {dict.footer.contact}
              </Link>
            </li>
            <li>
              <Link href="/don" className="hover:text-accent">
                {dict.footer.donate}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium tracking-wide uppercase">
            {dict.footer.contactHeading}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>{siteConfig.email}</li>
            <li>{dict.footer.securePayment}</li>
            <li>{dict.footer.projectStart}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. {dict.footer.rights}
      </div>
    </footer>
  );
}
