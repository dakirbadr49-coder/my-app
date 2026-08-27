import Link from "next/link";

export default function DonMerciPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-sm font-medium tracking-widest text-accent uppercase">
        Merci !
      </p>
      <h1 className="mt-4 font-serif text-4xl">Ton don a bien été reçu</h1>
      <p className="mt-4 text-muted">
        Merci pour ton soutien, ça compte vraiment pour continuer à faire
        grandir le projet.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
