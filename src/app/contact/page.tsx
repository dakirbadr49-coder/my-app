"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/site-config";
import { useLocale } from "@/components/LocaleProvider";
import { getDictionary } from "@/dictionaries";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const { locale } = useLocale();
  const dict = getDictionary(locale).contact;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? dict.genericError);
        setStatus("error");
        return;
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setError(dict.connectionError);
      setStatus("error");
    }
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-accent2/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
            {dict.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl">{dict.title}</h1>
          <p className="mt-3 max-w-xl text-muted">{dict.intro}</p>
        </div>
      </section>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_320px]">
        {status === "success" ? (
          <div className="rounded-lg border border-border bg-surface p-8 text-center">
            <p className="font-serif text-xl">{dict.successTitle}</p>
            <p className="mt-2 text-sm text-muted">{dict.successText}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                {dict.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                {dict.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                {dict.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
            >
              {status === "loading" ? dict.sending : dict.send}
            </button>
          </form>
        )}

        <aside className="space-y-8">
          <div className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-serif text-lg">{dict.writeDirectly}</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-block text-sm text-accent hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-serif text-lg">{dict.responseTimeTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {dict.responseTimeText}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-serif text-lg">{dict.nextTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {dict.nextText}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
