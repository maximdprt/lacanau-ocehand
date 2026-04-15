import type {
  ClubStat,
  MatchItem,
  NavItem,
  NewsItem,
  Partner,
  PricingRow,
  StaffMember,
  Team,
  TimelineEvent,
} from "@/types";

export const beachXperienceUrl = "https://site-lbhx.vercel.app";
export const instagramUrl = "https://www.instagram.com/lacanauocehand/";
export const facebookUrl = "https://www.facebook.com/lacanau.OceHand/";
export const teamSignupEmail = "inscription-equipe@lacanau-ocehand.fr";

export const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Le Club", href: "/le-club" },
  { label: "Nos Equipes", href: "/equipes" },
  { label: "Saison 24-25", href: "/saison" },
  { label: "Evenements", href: "/evenements" },
  { label: "Rejoindre", href: "/rejoindre" },
  { label: "Contact", href: "/contact" },
];

export const clubStats: ClubStat[] = [
  { label: "Coupe de France", value: 1 },
  { label: "Licencies", value: 150 },
  { label: "Fonde en", value: 2017 },
  { label: "Champions Gironde", value: 3, suffix: "x" },
  { label: "Equipes", value: 9 },
];

export const upcomingMatches: MatchItem[] = [
  {
    id: "m1",
    date: "04 Mai 2026 - 19h30",
    competition: "Nationale Beach Series",
    opponent: "Bordeaux Beach Hand",
    location: "Lacanau Ocean",
    isHome: true,
  },
  {
    id: "m2",
    date: "11 Mai 2026 - 18h00",
    competition: "Coupe Nouvelle-Aquitaine",
    opponent: "US Cestas",
    location: "Gymnase Pierre de Coubertin",
    isHome: false,
  },
  {
    id: "m3",
    date: "18 Mai 2026 - 20h00",
    competition: "Championnat Regional",
    opponent: "Arcachon HB",
    location: "Salle des Sports Lacanau",
    isHome: true,
  },
];

export const latestResults: MatchItem[] = [
  {
    id: "r1",
    date: "20 Avril 2026",
    competition: "Championnat Regional",
    opponent: "Mios Biganos",
    location: "Salle des Sports Lacanau",
    isHome: true,
    score: "31 - 27",
  },
  {
    id: "r2",
    date: "13 Avril 2026",
    competition: "Nationale Beach Series",
    opponent: "Royan Atlantique",
    location: "Royan",
    isHome: false,
    score: "26 - 29",
  },
  {
    id: "r3",
    date: "06 Avril 2026",
    competition: "Coupe Nouvelle-Aquitaine",
    opponent: "Mios Biganos",
    location: "Lacanau Ocean",
    isHome: true,
    score: "34 - 30",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    title: "Beach Handball Lacanau: la prepa 2026 est lancee",
    excerpt:
      "Le groupe elite accelere sa preparation pour le circuit national avec un stage intensif sur sable.",
    date: "24 Avril 2026",
    tags: ["elite", "beach handball lacanau"],
    cover: "/placeholders/news-1.jpg",
    slug: "prepa-2026",
  },
  {
    id: "n2",
    title: "Lacanau Beach Handball Xperience: ouverture des inscriptions",
    excerpt:
      "Le tournoi beach handball lacanau revient avec un format etendu sur trois jours.",
    date: "19 Avril 2026",
    tags: ["evenement", "lacanau beach handball xperience"],
    cover: "/placeholders/news-2.jpg",
    slug: "xperience-inscriptions",
  },
  {
    id: "n3",
    title: "Handball Lacanau: focus sur la formation jeunes",
    excerpt:
      "Le club renforce son academie avec de nouveaux creneaux et un suivi individualise.",
    date: "12 Avril 2026",
    tags: ["formation", "handball lacanau"],
    cover: "/placeholders/news-3.jpg",
    slug: "formation-jeunes",
  },
  {
    id: "n4",
    title: "Objectif Lacanau Beach Handball 2025 confirme",
    excerpt:
      "Le staff valide une feuille de route ambitieuse pour viser un nouveau titre national.",
    date: "07 Avril 2026",
    tags: ["performance", "lacanau beach handball 2025"],
    cover: "/placeholders/news-4.jpg",
    slug: "objectif-2025",
  },
];

export const partners: Partner[] = [
  {
    id: "p1",
    name: "VitalParc",
    website: "https://cutt.ly/TwLceujd",
    logo: "/placeholders/partner-vitalparc.png",
  },
  {
    id: "p2",
    name: "Briconautes",
    website: "https://magasin.leclub-bricolage.fr/38-briconautes-lacanau",
    logo: "/placeholders/partner-briconautes.png",
  },
  {
    id: "p3",
    name: "Medoc Atlantique",
    website: "#",
    logo: "/placeholders/partner-medoc.png",
  },
  {
    id: "p4",
    name: "Ville de Lacanau",
    website: "https://www.lacanau.fr/",
    logo: "/placeholders/partner-ville-lacanau.jpg",
  },
  {
    id: "p5",
    name: "209 Agency",
    website: "https://www.209-agency.com/",
    logo: "/placeholders/partner-209.png",
  },
  {
    id: "p6",
    name: "Desirs2Reves",
    website: "https://desirs2reves.com/",
    logo: "/placeholders/partner-desirs2reves.jpg",
  },
];

export const teams: Team[] = [
  {
    slug: "senior-feminine",
    name: "Senior Feminine",
    category: "Competition",
    coach: "Maelys Dupont",
    schedule: ["Mardi 20h00", "Jeudi 20h00"],
    description: "Groupe fanion feminin engage sur les competitions regionales et beach.",
    image: "/placeholders/team-f.jpg",
  },
  {
    slug: "senior-masculine",
    name: "Senior Masculine",
    category: "Competition",
    coach: "Theo Martin",
    schedule: ["Lundi 20h00", "Mercredi 20h00"],
    description: "Effectif senior axe intensite, vitesse et culture beach handball.",
    image: "/placeholders/team-m.jpg",
  },
  {
    slug: "u18-feminine",
    name: "U18 Feminine",
    category: "Formation",
    coach: "Alice Durand",
    schedule: ["Mardi 18h30", "Vendredi 18h30"],
    description: "Collectif U18 feminin, progression technique et intelligence de jeu.",
    image: "/placeholders/u18f.jpg",
  },
  {
    slug: "u18-masculine",
    name: "U18 Masculine",
    category: "Formation",
    coach: "Nolan Rigaud",
    schedule: ["Mercredi 18h00", "Vendredi 19h00"],
    description: "Groupe U18 masculin, developpement performance et esprit equipe.",
    image: "/placeholders/u18m.jpg",
  },
  {
    slug: "u15-feminine",
    name: "U15 Feminine",
    category: "Jeunes",
    coach: "Camille Robert",
    schedule: ["Lundi 18h00", "Jeudi 18h00"],
    description: "Equipe U15 feminine, apprentissage du handball lacanau moderne.",
    image: "/placeholders/u15f.jpg",
  },
  {
    slug: "u15-masculine",
    name: "U15 Masculine",
    category: "Jeunes",
    coach: "Arthur Giraud",
    schedule: ["Mardi 18h00", "Jeudi 19h00"],
    description: "Equipe U15 masculine, progression technique et cohesion collective.",
    image: "/placeholders/u15m.jpg",
  },
  {
    slug: "u13-mixte",
    name: "U13 Mixte",
    category: "Jeunes",
    coach: "Lina Besson",
    schedule: ["Mercredi 16h30", "Samedi 10h00"],
    description: "Section U13 mixte, pedagogie ludique et bases techniques solides.",
    image: "/placeholders/u13.jpg",
  },
  {
    slug: "ecole-de-hand",
    name: "Ecole de Hand",
    category: "Baby/Initiation",
    coach: "Nathan Leger",
    schedule: ["Samedi 09h00"],
    description: "Decouverte du handball sur un format adapte aux plus jeunes.",
    image: "/placeholders/ecole.jpg",
  },
  {
    slug: "beach-elite",
    name: "Beach Elite",
    category: "Beach",
    coach: "Staff Performance",
    schedule: ["Mardi 19h30", "Dimanche 10h30"],
    description: "Section dediee aux tournois beach handball lacanau et nationaux.",
    image: "/placeholders/beach-elite.jpg",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2017",
    title: "Creation du club",
    description:
      "Lacanau Ocehand est fonde pour developper le handball lacanau et l'offre beach locale.",
  },
  {
    year: "2020",
    title: "Structuration de la filiere jeunes",
    description: "Le club atteint 100 licencies et ouvre plusieurs sections U13 a U18.",
  },
  {
    year: "2023",
    title: "Triple titre Gironde",
    description:
      "Trois equipes remportent leur championnat departemental sur une meme saison.",
  },
  {
    year: "2024",
    title: "Champions de France",
    description:
      "Sacre national en Coupe de France a Bercy, moment historique pour le club.",
  },
  {
    year: "2025",
    title: "Lacanau Beach Handball 2025",
    description:
      "Le club renforce sa position sur le circuit tournoi beach handball lacanau.",
  },
];

export const staffMembers: StaffMember[] = [
  {
    id: "s1",
    name: "Maxime Dupre",
    role: "President",
    pole: "Direction",
    image: "/placeholders/staff-1.jpg",
  },
  {
    id: "s2",
    name: "Lena Caron",
    role: "Directrice Sportive",
    pole: "Sportif",
    image: "/placeholders/staff-2.jpg",
  },
  {
    id: "s3",
    name: "Tom Verne",
    role: "Coach Beach Elite",
    pole: "Sportif",
    image: "/placeholders/staff-3.jpg",
  },
  {
    id: "s4",
    name: "Nina Bernard",
    role: "Kine du club",
    pole: "Medical",
    image: "/placeholders/staff-4.jpg",
  },
  {
    id: "s5",
    name: "Yanis Cazaux",
    role: "Responsable Partenariats",
    pole: "Communication",
    image: "/placeholders/staff-5.jpg",
  },
];

export const licensePricing: PricingRow[] = [
  { category: "Baby Hand (U9)", fee: "120 EUR / saison" },
  { category: "Jeunes (U11-U18)", fee: "170 EUR / saison" },
  { category: "Seniors", fee: "220 EUR / saison" },
  { category: "Beach Elite", fee: "250 EUR / saison" },
];

export const trainingSlots = [
  {
    team: "Senior Feminine",
    schedule: "Mardi 20h00 - 22h00 / Jeudi 20h00 - 22h00",
  },
  {
    team: "Senior Masculine",
    schedule: "Lundi 20h00 - 22h00 / Mercredi 20h00 - 22h00",
  },
  {
    team: "U18",
    schedule: "Mardi 18h30 - 20h00 / Vendredi 18h30 - 20h00",
  },
  {
    team: "U15",
    schedule: "Lundi 18h00 - 19h30 / Jeudi 18h00 - 19h30",
  },
];

export const galleryItems = [
  {
    src: "/placeholders/gallery-1.jpg",
    alt: "Finale Coupe de France 2024 a Bercy",
  },
  {
    src: "/placeholders/gallery-2.jpg",
    alt: "Ambiance tournoi beach handball lacanau",
  },
  {
    src: "/placeholders/gallery-3.jpg",
    alt: "Equipe beach elite en celebration",
  },
  {
    src: "/placeholders/gallery-4.jpg",
    alt: "Formation jeunes sur le sable",
  },
];

export const socialPosts = [
  {
    id: "ig-1",
    platform: "Instagram",
    image: "/placeholders/news-3.jpg",
    title: "Finale Coupe de France 2024",
    url: instagramUrl,
  },
  {
    id: "ig-2",
    platform: "Instagram",
    image: "/placeholders/gallery-2.jpg",
    title: "Vie du club et matchs a domicile",
    url: instagramUrl,
  },
  {
    id: "fb-1",
    platform: "Facebook",
    image: "/placeholders/news-2.jpg",
    title: "Resultats et annonces officielles",
    url: facebookUrl,
  },
];
