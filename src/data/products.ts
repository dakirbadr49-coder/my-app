// Catalogue de services vendus à la carte.
//
// Pour AJOUTER un service : copie un bloc { ... } ci-dessous et modifie les valeurs.
// Pour SUPPRIMER un service : efface son bloc.
// - "price" est en centimes (34900 = 349,00 €)
// - "slug" doit être unique et sans espaces (utilisé dans l'URL /services/mon-slug)
// - "image" pointe vers un fichier dans /public/products (icône du service)

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
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
    description:
      "Un site sur une seule page, pensé pour se lancer vite : présentation, services, contact. Design responsive, livré prêt à publier. Idéal pour un lancement rapide ou une landing page.",
    price: 24900,
    category: "Sites",
    image: "/products/site-one-page.svg",
    featured: true,
  },
  {
    id: "2",
    slug: "page-supplementaire",
    name: "Page supplémentaire",
    description:
      "Ajoute une page à ton site existant (à propos, portfolio, blog, mentions légales...). Intégrée au design en place, responsive et optimisée pour le référencement.",
    price: 4900,
    category: "Sites",
    image: "/products/page-supplementaire.svg",
  },
  {
    id: "3",
    slug: "formulaire-contact",
    name: "Formulaire de contact",
    description:
      "Formulaire connecté à ta boîte mail, avec validation des champs et protection anti-spam. Configuration incluse, aucune compétence technique requise de ton côté.",
    price: 3900,
    category: "Fonctionnalités",
    image: "/products/formulaire-contact.svg",
  },
  {
    id: "4",
    slug: "boutique-en-ligne",
    name: "Boutique en ligne (jusqu'à 20 produits)",
    description:
      "Panier et paiement par carte bancaire intégrés à ton site, pour vendre jusqu'à 20 produits. Gestion des produits simple, sans base de données à administrer.",
    price: 28900,
    category: "Fonctionnalités",
    image: "/products/boutique-en-ligne.svg",
    featured: true,
  },
  {
    id: "5",
    slug: "prise-de-rendez-vous",
    name: "Prise de rendez-vous en ligne",
    description:
      "Calendrier de réservation intégré à ton site : tes clients choisissent un créneau disponible et reçoivent une confirmation automatique par e-mail.",
    price: 22900,
    category: "Fonctionnalités",
    image: "/products/prise-de-rendez-vous.svg",
    featured: true,
  },
  {
    id: "7",
    slug: "maintenance-mensuelle",
    name: "Maintenance mensuelle",
    description:
      "Mises à jour techniques, sauvegardes régulières et petites modifications de contenu pendant un mois. Se renouvelle chaque mois selon tes besoins.",
    price: 3500,
    category: "Maintenance",
    image: "/products/maintenance-mensuelle.svg",
    featured: true,
  },
  {
    id: "8",
    slug: "domaine-hebergement",
    name: "Nom de domaine + hébergement (1 an)",
    description:
      "Ton nom de domaine (.fr ou .com) et l'hébergement de ton site inclus pour un an, avec certificat de sécurité HTTPS activé dès la mise en ligne.",
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
