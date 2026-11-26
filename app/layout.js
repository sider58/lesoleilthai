import "./globals.css";

// Titre et description ajoutés par Next.js aux métadonnées de la page.
export const metadata = {
  title: "Le Soleil Thaï | Massage traditionnel à Meximieux",
  description:
    "Découvrez les massages thaïlandais, soins et forfaits du Soleil Thaï à " +
    "Meximieux. Retrouvez nos tarifs et prenez rendez-vous au 07 62 54 14 17.",
};

// Structure HTML commune : la langue française aide les lecteurs d’écran.
// children reçoit la page active ; globals.css applique le thème à tout le site.
const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
