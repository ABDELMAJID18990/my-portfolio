import snacksImg from "../assets/project1.png";
import hotelImg from "../assets/project2.png";
import hotelStaticImg from "../assets/project4.png";
import crimatiImg from "../assets/project5.png";

export const projects = [
  {
    id: "crimati",
    featured: true,
    title: "CRIMATI : gestion du matériel IT et helpdesk",
    badge: "Stage · Centre Régional d'Investissement de Guelmim-Oued Noun",
    context: "Projet d'équipe (3 développeurs), application complète réalisée pendant le stage.",
    tagline: "Intranet de suivi du parc informatique, avec un système de ticketing pour traiter les incidents techniques.",
    role: "Tâches partagées entre les trois développeurs sur toute la stack : back-end, interface, base de données et Docker.",
    highlights: [
      "Contrôle d'accès par rôles (RBAC)",
      "Fiches équipement flexibles grâce à un schéma JSON dynamique",
      "Workflow de tickets automatisé, méthode Agile (Jira / Git)",
    ],
    tech: ["Laravel 12", "Alpine.js", "Tailwind CSS", "MySQL", "Docker"],
    image: crimatiImg,
    demo: null,
    repo: "https://github.com/Ali-AB23/crimati",
    repoLabel: "Code source (dépôt de l'équipe)",
  },
  {
    id: "hotel-dynamique",
    title: "Hôtel Étoile du Désert : plateforme complète",
    badge: "Projet de synthèse · version dynamique",
    tagline: "Réservation en ligne et back-office pour une maison d'hôtes saharienne.",
    highlights: [
      "Calendrier interactif avec blocage dynamique des dates",
      "Routes protégées et intercepteurs Axios pour les tokens",
      "API Laravel 12 sécurisée avec Sanctum",
    ],
    tech: ["React.js", "Redux Toolkit", "Laravel 12", "Sanctum", "MySQL", "Figma"],
    image: hotelImg,
    demo: null,
    repo: "https://github.com/ABDELMAJID18990/Maison-etoile-du-desert",
  },
  {
    id: "snacks",
    title: "Guelmim Snacks : Click & Collect",
    badge: "Projet personnel",
    tagline: "Commander ses snacks en ligne et les retirer sur place.",
    highlights: [
      "Panier et sessions gérés avec Redux Toolkit (thunks)",
      "API REST Laravel 12 avec authentification Sanctum",
      "Architecture découplée front / back",
    ],
    tech: ["React.js", "Redux Toolkit", "Laravel 12", "Sanctum", "MySQL"],
    image: snacksImg,
    demo: null,
    repo: "https://github.com/ABDELMAJID18990/Guelmim-Snacks",
  },
  {
    id: "hotel-statique",
    title: "Hôtel Étoile du Désert : version légère",
    badge: "Variante statique · FR / EN",
    tagline: "Même hôtel, autre approche : rapide, bilingue, sans backend.",
    highlights: [
      "Bilingue FR / EN avec react-i18next",
      "Réservation en un clic via WhatsApp, pensée pour le mobile",
      "Hébergement gratuit, très bonnes performances",
    ],
    tech: ["React.js", "Tailwind CSS", "react-i18next", "Static / Serverless"],
    image: hotelStaticImg,
    demo: "https://maison-etoile-du-desert-statique.vercel.app/",
    repo: "https://github.com/ABDELMAJID18990/Maison-etoile-du-desert-statique",
  },
];