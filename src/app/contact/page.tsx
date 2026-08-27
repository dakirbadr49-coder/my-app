"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/site-config";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

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
        setError(data.error ?? "Une erreur est survenue.");
        setStatus("error");
        return;
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setError("Impossible d'envoyer le message pour le moment.");
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-serif text-4xl">Contact</h1>
      <p className="mt-3 text-muted">
        Une question sur un service ou envie de discuter de ton projet ?
        Écrivez-nous, on vous répond sous 24 à 48h. Vous pouvez aussi nous écrire directement à{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-accent">
          {siteConfig.email}
        </a>
        .
      </p>

      {status === "success" ? (
        <div className="mt-10 rounded-lg border border-border bg-surface p-8 text-center">
          <p className="font-serif text-xl">Message envoyé ✓</p>
          <p className="mt-2 text-sm text-muted">
            Merci, nous revenons vers vous très vite.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Nom
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
              E-mail
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
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
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
            {status === "loading" ? "Envoi…" : "Envoyer le message"}
          </button>
        </form>
      )}
    </div>
  );
}
