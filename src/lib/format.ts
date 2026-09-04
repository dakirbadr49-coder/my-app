import type { Locale } from "./i18n";

export function formatPrice(
  cents: number,
  locale: Locale = "fr",
  currency: string = "EUR"
) {
  return new Intl.NumberFormat(locale === "en" ? "en-IE" : "fr-FR", {
    style: "currency",
    currency,
  }).format(cents / 100);
}
