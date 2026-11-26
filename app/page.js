import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import BriefPresentation from "./components/BriefPresentation";
import Massages from "./components/Massages";
import About from "./components/About";
import Footer from "./components/Footer";

// Assemble les sections dans leur ordre de lecture.
// Les identifiants contenu et haut-de-page servent aux liens de navigation et d’accès rapide.
const Home = () => {
  return (
    <>
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
