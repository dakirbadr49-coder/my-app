"use client";

import { useLocale } from "./LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 text-xs font-medium tracking-wide">
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={locale === "fr" ? "text-accent" : "text-muted hover:text-accent"}
        aria-label="Français"
      >
        FR
      </button>
      <span className="text-muted">/</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={locale === "en" ? "text-accent" : "text-muted hover:text-accent"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
