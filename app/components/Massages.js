"use client";
import MassageCard from "./MassageCard";
import {CardOffers, ListWithPrice} from "./CardOffers";
import Option from "./Option";
import Decoration from "./Decoration";
import { massages, packages, duoMassages, additionalTreatments } from "../data/massages";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Toutes les cartes de massages réunies
export const MainMassages = ({ cardClassName = "" }) => {
  return (
    <div
      className="
        mx-auto max-w-305 grid grid-cols-2 gap-x-8 gap-y-8
        max-lg:gap-x-5 max-lg:gap-y-7 max-832:grid-cols-none max-md:gap-5
      "
    >
      {massages.map(massage => (
        <MassageCard key={massage.id} {...massage} className={cardClassName} />
      ))}
    </div>
  );
};

// Assemble le catalogue, l’option aux herbes, les forfaits et le lien de réservation.
// Les contenus et les tarifs proviennent de app/data pour éviter leur duplication dans les composants.
const Massages = () => {
  const container = useScrollAnimation({ threshold: 0.1 });
  return (
    <section
      ref={container}
      className="
        w-full max-w-7xl mx-auto px-7 max-lg:px-5
        max-832:px-8 max-md:px-5
      "
      id="massages"
      aria-label="Massages, tarifs et forfaits"
    >
      <MainMassages cardClassName="scroll-fade-transition [--scroll-delay:200ms]" />
      <Option
        className="scroll-fade-transition [--scroll-delay:200ms]"
        title="Option bien-être – Pochons aux herbes thaïlandaises"
        desc={
          "Sublimez votre expérience de relaxation en ajoutant à votre massage " +
          "deux pochons chauds aux herbes traditionnelles thaïlandaises, pour " +
          "une sensation de détente profonde et un moment de bien-être encore " +
          "plus intense."
        }
        bottomMessage="Option disponible avec tous nos massages – Supplément de 30 €."
        bottomImg="frangipanier-trois-feuilles"
      />
      <div className="mt-9 max-832:mt-6">
        <div className="relative flex justify-center">
          <Decoration
            name="formules-gauche"
            portrait
            className="
              scroll-fade-transition [--scroll-tyx:translateX(-125px)] [--scroll-delay:200ms] 
              top-1/2 -translate-y-1/2 -left-3.75 max-h-142.5 w-62.5 
              max-xl:w-46 max-lg:-left-2.5 
              max-lg:w-[21%] max-lg:max-h-115 max-832:hidden
            "
            sizes="(width < 64rem) 21vw, (width < 80rem) 184px, 250px"
            hiddenMedia="(width < 52rem)"
          />
          <CardOffers
            title="Nos formules et forfaits"
            subtitle="Pour une expérience encore plus complète"
            className="
              scroll-fade-transition [--scroll-delay:850ms] 
              min-h-155 w-147.5
              max-lg:min-h-122.5 max-lg:w-[57%]
              max-md:min-h-105 max-832:w-full
            "
          >
            <ListWithPrice items={packages} />
          </CardOffers>
          <Decoration
            name="formules-droite"
            portrait
            className="
              scroll-fade-transition [--scroll-tyx:translateX(125px)] [--scroll-delay:200ms] 
              top-1/2 -translate-y-1/2 -right-3.75 max-h-142.5 w-52.5 
              max-xl:w-46 max-lg:-right-2.5 max-lg:w-[21%] max-lg:max-h-115 max-832:hidden
            "
            sizes="(width < 64rem) 21vw, (width < 80rem) 184px, 210px"
            hiddenMedia="(width < 52rem)"
          />
        </div>
        <div
          className="
            mt-12 grid grid-cols-2 gap-10
            max-lg:mt-9 max-lg:gap-6
            max-832:mt-6 max-832:grid-cols-1 max-832:gap-6
            [&>article]:min-h-160
            max-lg:[&>article]:min-h-128.75
            max-md:[&>article]:min-h-110
          "
        >
          <CardOffers
            title="Massage en duo"
            subtitle="Partagez un moment de détente"
            className="scroll-fade-transition [--scroll-delay:200ms]"
            fixedHour="1h30"
          >
            <ListWithPrice items={duoMassages} />
          </CardOffers>
          <CardOffers
            title="Nos soins additionnels"
            subtitle="Complétez votre moment de détente"
            className="scroll-fade-transition [--scroll-delay:200ms]"
            fixedHour={
              <>
                <span>30 min</span>
                <span>45€</span>
              </>
            }
          >
            <ul
              className="
                mt-8 flex flex-col gap-6 text-[28px] font-bold leading-[1.35]
                max-lg:mt-6.5 max-lg:gap-4.5 max-lg:text-[22px] max-md:mt-6 
                max-md:gap-5 max-md:text-[clamp(17px,4.75vw,22px)]
              "
            >
              {additionalTreatments.map(treatment => (
                <li key={treatment}>{treatment}</li>
              ))}
            </ul>
          </CardOffers>
        </div>
      </div>
      <div
        className="
          scroll-fade-transition [--scroll-delay:200ms]
          mt-10 max-832:mt-5
        "
      >
        <a
          className="
            mx-auto flex w-4/5 items-center
            justify-center rounded-full border-[6px] border-gold bg-white
            px-6 py-6 text-center font-label text-[35px] font-extrabold
            leading-[1.2] text-black shadow-[5px_8px_8px_rgb(0_0_0/20%)]
            transition-colors hover:border-white
            max-lg:w-[90%] max-lg:border-[5px]
            max-lg:py-5 max-lg:text-[28px]
            max-md:w-full max-md:border-[5px] max-md:px-3 max-md:py-6
            max-md:text-[clamp(26px,8.5vw,36px)]
          "
          href="#"
          aria-label="Prendre rendez-vous"
        >
          Prendre RDV
        </a>
      </div>
    </section>
  );
};

export default Massages;
