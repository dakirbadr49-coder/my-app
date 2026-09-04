"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/store/cart";
import { useLocale } from "@/components/LocaleProvider";
import { getDictionary } from "@/dictionaries";

export default function SuccesPage() {
  const clear = useCart((s) => s.clear);
  const { locale } = useLocale();
  const dict = getDictionary(locale).succes;

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-sm font-medium tracking-widest text-accent uppercase">
        {dict.eyebrow}
      </p>
      <h1 className="mt-4 font-serif text-4xl">{dict.title}</h1>
      <p className="mt-4 text-muted">{dict.text}</p>
      <Link
        href="/services"
        className="mt-10 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark"
      >
        {dict.seeOther}
      </Link>
    </div>
  );
}
