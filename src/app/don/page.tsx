"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { getDictionary } from "@/dictionaries";
import { siteConfig } from "@/data/site-config";

const presets = [5, 10, 25, 50];

export default function DonPage() {
  const [amount, setAmount] = useState(10);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { locale } = useLocale();
  const dict = getDictionary(locale).don;

  const selectedAmount = custom ? Number(custom) : amount;

  async function handleDonate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/don", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: selectedAmount }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? dict.minError);
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError(dict.connectionError);
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 text-center">
      <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
        {dict.eyebrow}
      </p>
      <h1 className="mt-4 font-serif text-4xl">
        {dict.title.replace("{name}", siteConfig.name)}
      </h1>
      <p className="mt-4 leading-relaxed text-muted">{dict.intro}</p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {presets.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => {
              setAmount(p);
              setCustom("");
            }}
            className={`rounded-full border px-6 py-3 text-sm font-medium transition-colors ${
              !custom && amount === p
                ? "border-accent bg-accent text-white"
                : "border-border hover:border-accent hover:text-accent"
            }`}
          >
            {p} €
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <label htmlFor="custom-amount" className="text-sm text-muted">
          {dict.otherAmount}
        </label>
        <input
          id="custom-amount"
          type="number"
          min={1}
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="15"
          className="w-24 rounded-lg border border-border bg-surface px-3 py-2 text-center text-sm outline-none focus:border-accent"
        />
        <span className="text-sm text-muted">€</span>
      </div>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      <button
        type="button"
        onClick={handleDonate}
        disabled={loading || !selectedAmount || selectedAmount < 1}
        className="mt-8 rounded-full bg-accent px-10 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
      >
        {loading
          ? dict.redirecting
          : dict.donateButton.replace("{amount}", String(selectedAmount || 0))}
      </button>
    </div>
  );
}
