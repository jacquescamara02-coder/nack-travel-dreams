export const site = {
  name: "NACK TRAVEL",
  tagline: "À chaque voyage, une nouvelle histoire avec NACK.",
  promise:
    "Avec NACK votre voyage commence ici et c'est vous qui déterminez la destination.",
  email: "nacktravel@outlook.com",
  phoneDisplay: "07 07 13 76 87",
  phoneRaw: "+2250707137687",
  whatsapp: "2250707137687",
  address: "Angré, Pharmacie des Allées, Cours 208 — Abidjan, Côte d'Ivoire",
  hours: "Lundi au vendredi, 8h à 17h",
  weekend: "L'agence du week-end : samedi et dimanche, 24h/24",
  since: 2023,
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const services = [
  {
    title: "Visa Chine en 7 jours",
    description:
      "Dossier monté, vérifié et déposé par nos soins. Délai de traitement de 7 jours ouvrés.",
    points: ["Étude d'éligibilité", "Montage du dossier", "Dépôt et suivi"],
  },
  {
    title: "Assistance Visa Schengen",
    description:
      "France, Italie, Espagne : prise de rendez-vous, préparation des pièces et simulation d'entretien.",
    points: ["Rendez-vous consulaire", "Attestations et réservations", "Préparation entretien"],
  },
  {
    title: "Visa Canada et États-Unis",
    description:
      "Visa touristique et visiteur, avec accompagnement complet du formulaire jusqu'au rendez-vous.",
    points: ["Formulaires DS-160 / IMM", "Dossier financier", "Coaching entretien"],
  },
  {
    title: "Visa Dubaï",
    description:
      "Obtention rapide du visa Émirats, avec réservation d'hôtel et assurance voyage si besoin.",
    points: ["Traitement express", "Hôtel et transferts", "Assurance voyage"],
  },
  {
    title: "Voyages en groupe",
    description:
      "Organisation complète pour familles, églises, écoles et entreprises : de 5 à 100 voyageurs.",
    points: ["Devis groupé", "Logistique sur place", "Accompagnateur dédié"],
  },
  {
    title: "Voyages d'affaires",
    description:
      "Billetterie, invitations, salons professionnels et déplacements urgents traités de A à Z.",
    points: ["Billetterie flexible", "Lettres d'invitation", "Support 7j/7"],
  },
];

export const faqs = [
  {
    q: "Quel est le délai pour obtenir un visa Chine ?",
    a: "Le traitement est de 7 jours ouvrés à partir du dépôt d'un dossier complet. Nous vérifions chaque pièce avant dépôt afin d'éviter tout retard.",
  },
  {
    q: "Quels documents dois-je préparer pour un visa Schengen ?",
    a: "Passeport valide 6 mois, photos d'identité récentes, justificatifs financiers des 3 derniers mois, réservation de vol et d'hébergement, assurance voyage. Nous vous remettons la liste exacte selon votre profil.",
  },
  {
    q: "Travaillez-vous le week-end ?",
    a: "Oui. En plus des horaires du lundi au vendredi de 8h à 17h, notre agence du week-end vous répond samedi et dimanche, 24h/24.",
  },
  {
    q: "Puis-je réserver un voyage pour un groupe ?",
    a: "Absolument. Nous organisons des départs de groupe pour familles, entreprises, associations et communautés religieuses, avec un devis personnalisé.",
  },
  {
    q: "Garantissez-vous l'obtention du visa ?",
    a: "Aucune agence ne peut garantir une décision consulaire. Nous garantissons en revanche un dossier complet, conforme et défendable, ce qui maximise vos chances.",
  },
  {
    q: "Comment se déroule le paiement ?",
    a: "Le devis est établi avant tout engagement. Le règlement se fait en agence ou par mobile money, avec un reçu remis systématiquement.",
  },
];
