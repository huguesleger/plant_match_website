// TODO: remplacer par les vraies URLs des stores une fois l'app publiée.
export const APP_STORE_URL = "https://apps.apple.com/app/plantmatch";
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.plantmatch.app";

export const SITE_URL = "https://plantmatch.app";

// Liens absolus (« / ») pour fonctionner aussi depuis les pages légales.
export const NAV_LINKS = [
  { href: "/#comment-ca-marche", label: "Comment ça marche" },
  { href: "/#fonctionnalites", label: "Fonctionnalités" },
  { href: "/#feuilles", label: "Feuilles" },
  { href: "/#niveaux", label: "Niveaux" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const LEGAL_LINKS = [
  { href: "/conditions-utilisation", label: "Conditions d'utilisation" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/mentions-legales", label: "Mentions légales" },
] as const;

/**
 * Informations de l'éditeur, utilisées dans les pages légales.
 * TODO: remplacer chaque valeur entre crochets par les informations réelles.
 */
export const LEGAL = {
  publisher: "[Nom ou raison sociale de l'éditeur]",
  legalForm: "[Forme juridique : entrepreneur individuel, SAS, SARL…]",
  capital: "[Capital social, si société]",
  siret: "[Numéro SIRET / RCS]",
  vat: "[Numéro de TVA intracommunautaire, si applicable]",
  address: "[Adresse postale complète]",
  director: "[Nom du directeur de la publication]",
  email: "contact@plantmatch.app",
  privacyEmail: "privacy@plantmatch.app",
  lastUpdate: "8 novembre 2026",
} as const;
