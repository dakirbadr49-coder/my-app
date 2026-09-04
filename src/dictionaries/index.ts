import type { Locale } from "@/lib/i18n";

export const dictionaries = {
  fr: {
    header: {
      home: "Accueil",
      services: "Services",
      contact: "Contact",
      cart: "Panier",
      menu: "Menu",
    },
    footer: {
      studio: "Studio",
      allServices: "Tous les services",
      myCart: "Mon panier",
      contact: "Contact",
      donate: "Faire un don",
      contactHeading: "Contact",
      securePayment: "Paiement sécurisé par carte bancaire",
      projectStart: "Démarrage du projet sous 48h",
      rights: "Tous droits réservés.",
    },
    donationBanner: {
      raised: "déjà récoltés pour aider {name} à grandir",
      donate: "faire un don",
      fallback: "Aide {name} à grandir —",
    },
    home: {
      eyebrow: "Studio web",
      ctaServices: "Voir les services",
      ctaContact: "Discuter de mon projet",
      ctaCv: "Voir mon CV",
      popularServices: "Services populaires",
      seeAll: "Voir tout →",
      methodEyebrow: "Notre méthode",
      methodTitle: "Comment ça marche",
      methodIntro:
        "Un déroulé simple et transparent, du premier clic à la mise en ligne de ton site.",
      steps: [
        {
          title: "Tu choisis ton service",
          text: "Parcours le catalogue et sélectionne ce dont tu as besoin. Tu peux combiner plusieurs services dans une seule commande.",
        },
        {
          title: "On valide ton projet ensemble",
          text: "Après ta commande, on te contacte sous 24 à 48h pour cadrer précisément tes besoins et confirmer le tarif final.",
        },
        {
          title: "On développe ton site",
          text: "Tu es tenu informé de l'avancement, avec la possibilité de demander des ajustements avant la livraison finale.",
        },
        {
          title: "Livraison et suivi",
          text: "Ton site est mis en ligne et tu reçois tous les accès. Le service de maintenance reste disponible si tu as besoin d'aide ensuite.",
        },
      ],
      trustTitle: "Pourquoi nous faire confiance",
      trustIntro:
        "{name} est un studio qui conçoit des sites sur mesure, sans jargon ni surprise sur la facture. Chaque projet est suivi individuellement, du premier échange jusqu'à la mise en ligne.",
      trustItems: [
        {
          title: "Paiement sécurisé",
          text: "Transactions chiffrées via Stripe : aucune donnée bancaire ne transite par nos serveurs.",
        },
        {
          title: "Devis confirmé avant de démarrer",
          text: "Le tarif final est validé avec toi avant qu'on lance le moindre développement.",
        },
        {
          title: "Tu restes propriétaire",
          text: "Code source, nom de domaine et contenus t'appartiennent, sans dépendance à notre studio.",
        },
        {
          title: "Accompagnement humain",
          text: "Un contact direct avec la personne qui développe ton site, pas de standard téléphonique.",
        },
        {
          title: "Délais annoncés à l'avance",
          text: "Un planning clair dès la validation du projet, avec des points d'étape réguliers.",
        },
        {
          title: "Support après livraison",
          text: "De petits ajustements sont inclus après la mise en ligne, et la maintenance reste disponible ensuite.",
        },
      ],
      faqTitle: "Questions fréquentes",
      faq: [
        {
          q: "Combien de temps faut-il pour recevoir mon site ?",
          a: "Ça dépend du service choisi : compte en moyenne 1 à 2 semaines pour un site simple, davantage pour un projet avec plusieurs fonctionnalités. Un délai précis t'est communiqué après validation du projet.",
        },
        {
          q: "Est-ce que je peux demander des modifications après la livraison ?",
          a: "Oui, de petits ajustements sont inclus juste après la mise en ligne. Pour des évolutions plus importantes par la suite, le service de maintenance mensuelle permet de rester accompagné dans la durée.",
        },
        {
          q: "Comment se passe le paiement ?",
          a: "Le paiement se fait en ligne par carte bancaire au moment de la commande, de façon sécurisée via Stripe. Aucune information bancaire n'est stockée par nos soins.",
        },
        {
          q: "Est-ce que je suis vraiment propriétaire de mon site ?",
          a: "Oui. Le code, le nom de domaine et les contenus t'appartiennent entièrement : tu n'es pas obligé de rester avec nous pour la suite.",
        },
      ],
    },
    productCard: {
      from: "dès",
      learnMore: "En savoir plus →",
    },
    services: {
      eyebrow: "Catalogue",
      title: "Nos services",
      intro: "Choisis les services dont tu as besoin et compose ton projet à la carte.",
      pricingNote:
        "Tarifs indicatifs pour une demande standard : le prix final peut varier selon la complexité de ton projet.",
      all: "Tout",
    },
    serviceDetail: {
      priceNote: "Tarif pour une demande standard, peut varier selon ton projet.",
      decrease: "Diminuer la quantité",
      increase: "Augmenter la quantité",
      addToCart: "Ajouter au panier",
      added: "Ajouté au panier ✓",
      related: "Services complémentaires",
    },
    cart: {
      emptyTitle: "Votre panier est vide",
      emptyText: "Découvrez nos services et ajoutez-en à votre panier.",
      seeServices: "Voir les services",
      title: "Votre panier",
      remove: "Retirer",
      subtotal: "Sous-total",
      invoiceNote: "Facture envoyée par e-mail après paiement.",
      checkout: "Passer la commande",
      redirecting: "Redirection…",
      genericError: "Une erreur est survenue.",
      connectionError: "Impossible de contacter le serveur de paiement.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Discutons de ton projet",
      intro:
        "Une question sur un service ou envie de démarrer ? Écris-nous, on te répond sous 24 à 48h.",
      name: "Nom",
      email: "E-mail",
      message: "Message",
      send: "Envoyer le message",
      sending: "Envoi…",
      successTitle: "Message envoyé ✓",
      successText: "Merci, nous revenons vers vous très vite.",
      writeDirectly: "Nous écrire directement",
      responseTimeTitle: "Délai de réponse",
      responseTimeText:
        "On revient vers toi sous 24 à 48h ouvrées, avec un premier retour sur ton projet.",
      nextTitle: "Et ensuite ?",
      nextText:
        "On échange sur tes besoins, on te confirme un tarif clair, puis on démarre le développement dès que tu valides.",
      genericError: "Une erreur est survenue.",
      connectionError: "Impossible d'envoyer le message pour le moment.",
    },
    don: {
      eyebrow: "Soutenir le projet",
      title: "Aide {name} à grandir",
      intro:
        "Les dons nous permettent d'investir dans de nouveaux outils, d'améliorer nos services et de continuer à proposer des tarifs accessibles. Chaque contribution compte, merci !",
      otherAmount: "Autre montant :",
      donateButton: "Faire un don de {amount} €",
      redirecting: "Redirection…",
      minError: "Le montant minimum est de 1 €.",
      connectionError: "Impossible de contacter le serveur de paiement.",
    },
    donMerci: {
      eyebrow: "Merci !",
      title: "Ton don a bien été reçu",
      text: "Merci pour ton soutien, ça compte vraiment pour continuer à faire grandir le projet.",
      backHome: "Retour à l'accueil",
    },
    succes: {
      eyebrow: "Commande confirmée",
      title: "Merci pour votre commande !",
      text: "Un e-mail de confirmation vous a été envoyé. Nous démarrons la prestation sous 48h et reviendrons vers vous pour lancer le projet.",
      seeOther: "Voir d'autres services",
    },
    categories: {
      Sites: "Sites",
      Fonctionnalités: "Fonctionnalités",
      Maintenance: "Maintenance",
    } as Record<string, string>,
  },
  en: {
    header: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      cart: "Cart",
      menu: "Menu",
    },
    footer: {
      studio: "Studio",
      allServices: "All services",
      myCart: "My cart",
      contact: "Contact",
      donate: "Donate",
      contactHeading: "Contact",
      securePayment: "Secure card payment",
      projectStart: "Project starts within 48h",
      rights: "All rights reserved.",
    },
    donationBanner: {
      raised: "already raised to help {name} grow",
      donate: "donate",
      fallback: "Help {name} grow —",
    },
    home: {
      eyebrow: "Web studio",
      ctaServices: "View services",
      ctaContact: "Discuss my project",
      ctaCv: "View my CV",
      popularServices: "Popular services",
      seeAll: "See all →",
      methodEyebrow: "Our method",
      methodTitle: "How it works",
      methodIntro:
        "A simple, transparent process, from the first click to your site going live.",
      steps: [
        {
          title: "You choose your service",
          text: "Browse the catalog and pick what you need. You can combine several services in a single order.",
        },
        {
          title: "We validate your project together",
          text: "After your order, we contact you within 24 to 48h to define your needs precisely and confirm the final price.",
        },
        {
          title: "We build your site",
          text: "You're kept updated on progress, with the option to request adjustments before final delivery.",
        },
        {
          title: "Delivery and follow-up",
          text: "Your site goes live and you receive full access. Monthly maintenance stays available if you need help afterwards.",
        },
      ],
      trustTitle: "Why trust us",
      trustIntro:
        "{name} is a studio that builds custom websites, with no jargon and no surprise on the invoice. Every project is followed individually, from the first conversation to launch.",
      trustItems: [
        {
          title: "Secure payment",
          text: "Transactions encrypted via Stripe: no banking data ever passes through our servers.",
        },
        {
          title: "Quote confirmed before we start",
          text: "The final price is agreed with you before any development begins.",
        },
        {
          title: "You stay the owner",
          text: "Source code, domain name and content belong to you, with no lock-in to our studio.",
        },
        {
          title: "Human support",
          text: "Direct contact with the person building your site, not a call center.",
        },
        {
          title: "Timelines set upfront",
          text: "A clear schedule as soon as the project is validated, with regular check-ins.",
        },
        {
          title: "Support after launch",
          text: "Small adjustments are included right after launch, and maintenance stays available afterwards.",
        },
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        {
          q: "How long does it take to get my site?",
          a: "It depends on the service: expect 1 to 2 weeks on average for a simple site, more for a project with several features. An exact timeline is shared once the project is validated.",
        },
        {
          q: "Can I request changes after delivery?",
          a: "Yes, small adjustments are included right after launch. For bigger changes later on, the monthly maintenance service keeps you supported over time.",
        },
        {
          q: "How does payment work?",
          a: "Payment is made online by card when you place the order, securely via Stripe. No banking information is stored by us.",
        },
        {
          q: "Do I really own my website?",
          a: "Yes. The code, domain name and content belong entirely to you: you're not required to stay with us afterwards.",
        },
      ],
    },
    productCard: {
      from: "from",
      learnMore: "Learn more →",
    },
    services: {
      eyebrow: "Catalog",
      title: "Our services",
      intro: "Pick the services you need and build your project à la carte.",
      pricingNote:
        "Indicative prices for a standard request: the final price may vary depending on your project's complexity.",
      all: "All",
    },
    serviceDetail: {
      priceNote: "Price for a standard request, may vary depending on your project.",
      decrease: "Decrease quantity",
      increase: "Increase quantity",
      addToCart: "Add to cart",
      added: "Added to cart ✓",
      related: "Related services",
    },
    cart: {
      emptyTitle: "Your cart is empty",
      emptyText: "Browse our services and add some to your cart.",
      seeServices: "View services",
      title: "Your cart",
      remove: "Remove",
      subtotal: "Subtotal",
      invoiceNote: "Invoice sent by email after payment.",
      checkout: "Checkout",
      redirecting: "Redirecting…",
      genericError: "Something went wrong.",
      connectionError: "Could not reach the payment server.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      intro:
        "A question about a service or want to get started? Write to us, we reply within 24 to 48h.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      successTitle: "Message sent ✓",
      successText: "Thanks, we'll get back to you very soon.",
      writeDirectly: "Write to us directly",
      responseTimeTitle: "Response time",
      responseTimeText:
        "We get back to you within 24 to 48 business hours, with initial feedback on your project.",
      nextTitle: "What happens next?",
      nextText:
        "We discuss your needs, confirm a clear price, then start development as soon as you approve it.",
      genericError: "Something went wrong.",
      connectionError: "Could not send the message right now.",
    },
    don: {
      eyebrow: "Support the project",
      title: "Help {name} grow",
      intro:
        "Donations let us invest in new tools, improve our services, and keep offering accessible prices. Every contribution counts, thank you!",
      otherAmount: "Other amount:",
      donateButton: "Donate €{amount}",
      redirecting: "Redirecting…",
      minError: "The minimum amount is €1.",
      connectionError: "Could not reach the payment server.",
    },
    donMerci: {
      eyebrow: "Thank you!",
      title: "Your donation was received",
      text: "Thanks for your support, it really helps keep the project growing.",
      backHome: "Back to home",
    },
    succes: {
      eyebrow: "Order confirmed",
      title: "Thank you for your order!",
      text: "A confirmation email has been sent. We start the work within 48h and will reach out to kick off the project.",
      seeOther: "View other services",
    },
    categories: {
      Sites: "Websites",
      Fonctionnalités: "Features",
      Maintenance: "Maintenance",
    } as Record<string, string>,
  },
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type Dictionary = typeof dictionaries.fr;
