import "server-only";
import { cookies } from "next/headers";
import { defaultLocale, isLocale, LANG_COOKIE, type Locale } from "./i18n";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LANG_COOKIE)?.value;
  return isLocale(value) ? value : defaultLocale;
}
