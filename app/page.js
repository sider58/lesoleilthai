import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import BriefPresentation from "./components/BriefPresentation";
import Massages from "./components/Massages";
import About from "./components/About";
import Footer from "./components/Footer";

const localBusinessJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Le Soleil Thaï",
  url: "https://lesoleilthai.fr",
  description:
    "Salon de massage traditionnel thaïlandais à Meximieux. Massages, soins et forfaits sur rendez-vous.",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "SIRET",
    value: "92159558300011",
  },
  telephone: "+33762541417",
  email: "soleilthaimassage@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "33 Rue de Lyon",
    addressLocality: "Meximieux",
    postalCode: "01800",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
        "https://schema.org/Sunday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Le+Soleil+Thai+33+Rue+de+Lyon+01800+Meximieux",
});
const safeLocalBusinessJsonLd = localBusinessJsonLd.replace(/</g, "\\u003c");

// Assemble les sections dans leur ordre de lecture.
// Les identifiants contenu et haut-de-page servent aux liens de navigation et d’accès rapide.
const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeLocalBusinessJsonLd }}
      />
      <a
        className="fixed left-3 top-3 -translate-y-[180%] bg-white px-5 py-3 text-navy focus:translate-y-0"
        href="#contenu"
      >
        Aller au contenu
      </a>
      <div
        className="mx-auto w-full max-w-[1536px] overflow-clip bg-navy min-[1450px]:shadow-[0_0_80px_rgb(0_0_0/15%)]"
        id="haut-de-page"
      >
        <header>
          <Nav />
          <LandingPage />
        </header>
        <main 
          className=""
          id="contenu"
        >
          <BriefPresentation />
          <Massages />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
