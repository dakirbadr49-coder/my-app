import type { Locale } from "@/lib/i18n";

// Catalogue de services vendus à la carte.
//
// Pour AJOUTER un service : copie un bloc { ... } ci-dessous et modifie les valeurs.
// Pour SUPPRIMER un service : efface son bloc.
// - "price" est en centimes (34900 = 349,00 €)
// - "slug" doit être unique et sans espaces (utilisé dans l'URL /services/mon-slug)
// - "image" pointe vers un fichier dans /public/products (icône du service)
// - "nameEn"/"descriptionEn" sont affichés quand le site est en anglais

export type Product = {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
};

export const categories = ["Sites", "Fonctionnalités", "Maintenance"] as const;

export const products: Product[] = [
  {
    id: "1",
    slug: "site-one-page",
    name: "Site One Page",
    nameEn: "One Page Website",
    description:
      "Un site sur une seule page, pensé pour se lancer vite : présentation, services, contact. Design responsive, livré prêt à publier. Idéal pour un lancement rapide ou une landing page.",
    descriptionEn:
      "A single-page website built to launch fast: introduction, services, contact. Responsive design, delivered ready to publish. Ideal for a quick launch or a landing page.",
    price: 24900,
    category: "Sites",
    image: "/products/site-one-page.svg",
    featured: true,
  },
  {
    id: "2",
    slug: "page-supplementaire",
    name: "Page supplémentaire",
    nameEn: "Extra page",
    description:
      "Ajoute une page à ton site existant (à propos, portfolio, blog, mentions légales...). Intégrée au design en place, responsive et optimisée pour le référencement.",
    descriptionEn:
      "Adds a page to your existing site (about, portfolio, blog, legal notice...). Integrated into your current design, responsive and search-friendly.",
    price: 4900,
    category: "Sites",
    image: "/products/page-supplementaire.svg",
  },
  {
    id: "3",
    slug: "formulaire-contact",
    name: "Formulaire de contact",
    nameEn: "Contact form",
    description:
      "Formulaire connecté à ta boîte mail, avec validation des champs et protection anti-spam. Configuration incluse, aucune compétence technique requise de ton côté.",
    descriptionEn:
      "A form connected to your inbox, with field validation and spam protection. Setup included, no technical skills needed on your end.",
    price: 3900,
    category: "Fonctionnalités",
    image: "/products/formulaire-contact.svg",
  },
  {
    id: "4",
    slug: "boutique-en-ligne",
    name: "Boutique en ligne (jusqu'à 20 produits)",
    nameEn: "Online store (up to 20 products)",
    description:
      "Panier et paiement par carte bancaire intégrés à ton site, pour vendre jusqu'à 20 produits. Gestion des produits simple, sans base de données à administrer.",
    descriptionEn:
      "Cart and card payment built into your site, to sell up to 20 products. Simple product management, no database to maintain.",
    price: 28900,
    category: "Fonctionnalités",
    image: "/products/boutique-en-ligne.svg",
    featured: true,
  },
  {
    id: "5",
    slug: "prise-de-rendez-vous",
    name: "Prise de rendez-vous en ligne",
    nameEn: "Online booking",
    description:
      "Calendrier de réservation intégré à ton site : tes clients choisissent un créneau disponible et reçoivent une confirmation automatique par e-mail.",
    descriptionEn:
      "A booking calendar built into your site: your clients pick an available slot and get an automatic email confirmation.",
    price: 22900,
    category: "Fonctionnalités",
    image: "/products/prise-de-rendez-vous.svg",
    featured: true,
  },
  {
    id: "7",
    slug: "maintenance-mensuelle",
    name: "Maintenance mensuelle",
    nameEn: "Monthly maintenance",
    description:
      "Mises à jour techniques, sauvegardes régulières et petites modifications de contenu pendant un mois. Se renouvelle chaque mois selon tes besoins.",
    descriptionEn:
      "Technical updates, regular backups and small content edits for a month. Renews every month based on your needs.",
    price: 3500,
    category: "Maintenance",
    image: "/products/maintenance-mensuelle.svg",
    featured: true,
  },
  {
    id: "8",
    slug: "domaine-hebergement",
    name: "Nom de domaine + hébergement (1 an)",
    nameEn: "Domain name + hosting (1 year)",
    description:
      "Ton nom de domaine (.fr ou .com) et l'hébergement de ton site inclus pour un an, avec certificat de sécurité HTTPS activé dès la mise en ligne.",
    descriptionEn:
      "Your domain name (.com, .fr...) and site hosting included for one year, with an HTTPS security certificate active from day one.",
    price: 5900,
    category: "Maintenance",
    image: "/products/domaine-hebergement.svg",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getProductName(product: Product, locale: Locale) {
  return locale === "en" ? product.nameEn : product.name;
}

export function getProductDescription(product: Product, locale: Locale) {
  return locale === "en" ? product.descriptionEn : product.description;
}
