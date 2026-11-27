import "./globals.css";

const title = "Le Soleil Thaï | Meximieux";
const description =
  "Découvrez les massages thaïlandais, soins et forfaits du Soleil Thaï à " +
  "Meximieux. Consultez les tarifs et prenez rendez-vous par téléphone.";

export const metadata = {
  metadataBase: new URL("https://lesoleilthai.fr"),
  title,
  description,
  applicationName: "Le Soleil Thaï",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    siteName: "Le Soleil Thaï",
    locale: "fr_FR",
    type: "website",
    url: "https://lesoleilthai.fr",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
