// Grille partagée : durées en minutes et prix en euros pour les massages au tarif standard.
const standardPrices = [
  { hour: 60, price: 70 },
  { hour: 90, price: 100 },
  { hour: 120, price: 130 },
];

// Catalogue affiché par MassageCard : identifiant, image dans public/images, textes et tarifs.
// Certaines prestations définissent leurs propres durées et prix plutôt que la grille standard.
export const massages = [
  {
    id: "thai",
    img: "massage-1.webp",
    title: "Massage Thaï (massage traditionnel)",
    desc:
      "Pressions, étirements et techniques traditionnelles pour libérer les " +
      "tensions et rééquilibrer le corps et l’esprit.",
    priceRange: standardPrices,
  },
  {
    id: "huiles",
    img: "massage-2.webp",
    title: "Massage Thaï aux huiles",
    desc: "Un massage doux et enveloppant avec des huiles chaudes pour détendre le corps et apaiser l’esprit.",
    priceRange: standardPrices,
  },
  {
    id: "pieds",
    img: "massage-3.webp",
    title: "Massage des pieds et des jambes",
    desc: "Soulage la fatigue, améliore la circulation et détend les jambes.",
    priceRange: standardPrices,
  },
  {
    id: "nuque",
    img: "massage-4.webp",
    title: "Massage cou, nuque et épaules",
    desc: "Détend les muscles, soulage les tensions et améliore la mobilité.",
    priceRange: standardPrices,
  },
  {
    id: "visage",
    img: "massage-5.webp",
    title: "Massage du visage",
    desc: "Ravive l’éclat de la peau, détend les muscles du visage et apporte une sensation de fraîcheur.",
    priceRange: [{ hour: 60, price: 80 }],
  },
  {
    id: "pierres",
    img: "massage-6.webp",
    title: "Massage aux pierres chaudes",
    desc: "Les pierres volcaniques chaudes réchauffent les muscles, détendent le corps et favorisent la circulation.",
    priceRange: [{ hour: 90, price: 130 }],
  },
  {
    id: "tok-sen",
    img: "massage-7.webp",
    title: "Massage Tok Sen",
    desc:
      "Massage avec des instruments en bois pour stimuler les lignes " +
      "d’énergie, libérer les tensions et améliorer la circulation.",
    priceRange: [{ hour: 90, price: 130 }],
  },
  {
    id: "pochons",
    img: "massage-8.webp",
    title: "Massage aux pochons d’herbes chauds",
    desc:
      "La chaleur des pochons d’herbes médicinales combinée à un massage " +
      "traditionnel procure un effet apaisant et revitalisant.",
    priceRange: [{ hour: 90, price: 130 }],
  },
  {
    id: "grossesse",
    img: "massage-9.webp",
    title: "Massage femme enceinte",
    desc: "Soulage les tensions, réduit les inconforts et favorise une détente profonde.",
    priceRange: standardPrices,
  },
  {
    id: "enfants",
    img: "massage-10.webp",
    title: "Massage pour enfants",
    desc: "Apporte détente, douceur et bien-être aux plus jeunes.",
    priceRange: [{ hour: 60, price: 65 }, { hour: 90, price: 100 }],
  },
];
// Formules combinant plusieurs soins ; chaque intitulé précise la durée de la prestation.
export const packages = [
  { title: "Massage Thaï + Thaï aux huiles | 1h30", price: 120 },
  { title: "Massage du visage + relaxation | 1h30", price: 75 },
  { title: "Massage des pieds + nuque + épaules | 1h", price: 75 },
  {
    title: "Chaleur & bien-être (pochons d’herbes chauds ou pierres chaudes) | 1h30",
    price: 130,
  },
];
// Tarifs affichés dans l’offre duo, dont la durée est présentée dans le composant Massages.
export const duoMassages = [
  { title: "Massage Thaï", price: 120 },
  { title: "Massage Thaï aux huiles", price: 120 },
  { title: "Massage aux pochons d’herbes chauds", price: 250 },
  { title: "Massage aux pierres chaudes", price: 250 },
];
// Soins additionnels affichés sous la durée et le tarif communs définis dans Massages.
export const additionalTreatments = [
  "Massage du visage",
  "Massage des pieds",
  "Massage du dos",
  "Massage nuque, épaules",
  "Massage tête",
  "Massage jambes",
  "Massage mains",
];
