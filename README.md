# B Network — studio web

Site vitrine + boutique de services vendus à la carte (création de site, fonctionnalités, SEO, maintenance...), construit avec Next.js, TypeScript et Tailwind CSS. Paiement par carte bancaire via Stripe Checkout.

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Modifier les services vendus

Tout le catalogue est dans [src/data/products.ts](src/data/products.ts).

- **Ajouter un service** : copie un bloc `{ ... }` du tableau `products` et modifie les valeurs.
- **Modifier un service** : change directement les champs (nom, description, prix, catégorie...).
- **Supprimer un service** : efface son bloc.
- Le `price` est en **centimes** (`34900` = 349,00 €).
- Le `slug` doit être unique (il sert dans l'URL `/services/mon-slug`).
- `image` pointe vers une icône dans `public/products/`. Ce sont des icônes de démonstration au format SVG — libre à toi de les remplacer par tes propres visuels (SVG, PNG, WebP...).

Le nom du site, le slogan et l'e-mail de contact se modifient dans [src/data/site-config.ts](src/data/site-config.ts).

Aucune base de données n'est utilisée pour l'instant : c'est le moyen le plus simple pour démarrer et gérer tes services toi-même sans toucher au code. Si le catalogue grandit beaucoup ou si tu veux un panneau d'administration, on pourra faire évoluer le site vers une vraie base de données.

## Activer les paiements (Stripe)

Le site est déjà branché à Stripe, il manque juste tes clés :

1. Crée un compte sur https://dashboard.stripe.com
2. Récupère tes clés de test : https://dashboard.stripe.com/test/apikeys
3. Copie `.env.local.example` en `.env.local` et colle tes clés :
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```
4. Relance `npm run dev`

Tant que ces clés ne sont pas renseignées, le bouton "Passer la commande" affiche un message d'erreur explicite au lieu de planter.

Pour tester un paiement sans vraie carte bancaire, utilise le numéro de test Stripe `4242 4242 4242 4242`, avec n'importe quelle date future et n'importe quel CVC.

Quand tu es prêt à accepter de vrais paiements, remplace les clés `sk_test_...` / `pk_test_...` par tes clés `sk_live_...` / `pk_live_...` (après avoir activé ton compte Stripe).

Note : certains services comme "Maintenance mensuelle" sont pensés pour être payés chaque mois. Pour l'instant chaque achat est un paiement unique (le client repasse commande chaque mois). Si tu veux un vrai prélèvement automatique récurrent, il faudra passer ce service en mode "abonnement" Stripe — on pourra le faire quand tu seras prêt.

## Formulaire de contact

Le formulaire sur `/contact` fonctionne et valide les champs, mais les messages sont pour l'instant seulement journalisés côté serveur (visibles dans le terminal `npm run dev`). Pour recevoir ces messages par e-mail, il faudra brancher un service comme Resend ou SendGrid dans [src/app/api/contact/route.ts](src/app/api/contact/route.ts).

## Structure du projet

```
src/
  app/                  pages du site (routing par dossier)
    services/            catalogue et fiche détaillée d'un service
    panier/              panier et page de confirmation
    contact/             formulaire de contact
    api/                 routes serveur (Stripe, contact)
  components/           Header, Footer, cartes service, etc.
  data/                  services et réglages du site (à modifier librement)
  store/                 gestion du panier (persisté dans le navigateur)
public/products/         icônes des services
```

## Déployer le site

Le plus simple est [Vercel](https://vercel.com) (créé par l'équipe Next.js) : connecte ton dépôt GitHub, ajoute les mêmes variables d'environnement que dans `.env.local`, et le site est en ligne en quelques minutes.
