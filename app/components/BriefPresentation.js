"use client";
import Image from "next/image";
import Decoration from "./Decoration";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Associe une icône décorative à une valeur du salon ; children contient son libellé.
export const Slogan = ({ icon, children, className = "" }) => {
  return (
    <li
      className={`
        flex min-w-0 flex-col items-center text-center font-label text-2xl
        font-extrabold leading-[1.2] text-gold
        max-lg:text-xl max-md:text-[clamp(0.7rem,2.6vw,0.875rem)]
        ${className}
      `}
    >
      <Image
        className="
          mb-3 size-20 object-contain
          icon-gold-filter
          max-lg:mb-3 max-lg:size-14
          max-md:mb-2.5 max-md:size-[clamp(2.25rem,11.5vw,3.5rem)]
        "
        src={`/icons/${icon}`}
        unoptimized
        width={96}
        height={96}
        alt=""
      />
      <span className="whitespace-nowrap">{children}</span>
    </li>
  );
};
// Présente la praticienne, l’ambiance du salon et les quatre valeurs illustrées.
const BriefPresentation = () => {
  const presentationRef = useScrollAnimation();

  return (
    <section
      ref={presentationRef}
      className="
        pt-4.5 pb-18 max-lg:pb-18
        max-md:pt-3 max-md:pb-10
      "
      aria-labelledby="presentation-title"
    >
      <div className="relative mb-16 max-lg:mb-11.5 max-md:mb-8 max-sm:mb-6">
        <h2
          id="presentation-title"
          className="
            scroll-fade-transition [--scroll-delay:200ms]
            font-heading text-4xl
            font-semibold max-xl:px-10 xl:px-12.5
            max-lg:text-2xl max-lg:px-7 
            max-md:text-[clamp(1.2rem,3.85vw,1.5rem)]
            max-md:leading-[1.4] max-md:px-5.5 max-xs:px-4
          "
        >
          Un voyage sensoriel au cœur de la Thaïlande
        </h2>
        <Decoration
          name="orchidees-blanches-dorees"
          sizes="(width < 64rem) 165px, 180px"
          hiddenMedia="(width < 48rem)"
          className="
            scroll-fade-transition
            right-0 -top-11.25 w-45 -scale-x-100
            max-lg:-right-5 max-lg:w-41.25 max-md:hidden
          "
        />
      </div>
      <div
        className="
          max-w-9/10 text-[26px] leading-[1.45] max-xl:px-10 xl:mx-12.5
          [&_p+p]:mt-7.5 max-lg:text-xl max-lg:px-7 max-lg:[&_p+p]:mt-7.5 
          max-md:max-w-none max-md:text-lg max-md:leading-normal
          max-md:px-5.5 max-md:[&_p+p]:mt-5.5 max-xs:px-4 max-xs:text-base
        "
      >
        <p className="scroll-fade-transition [--scroll-delay:200ms]">
          Le salon est exploité par Kay Xayavongsa, diplômée en massage
          traditionnel thaïlandais, qui compte plus de 10 ans d’expérience dans
          le domaine du bien-être.
        </p>
        <p className="scroll-fade-transition [--scroll-delay:200ms]">
          Notre objectif est d’offrir un lieu de détente, de relaxation et de
          bien-être, dans une ambiance chaleureuse, zen et professionnelle.
        </p>
      </div>
      <ul
        className="
          scroll-fade-transition [--scroll-delay:350ms]
          mx-auto mt-20 grid max-w-[1030px] grid-cols-4
          max-lg:mt-15 max-lg:max-w-185 max-md:mt-9
          max-md:gap-2 max-md:px-5.5 max-xs:px-4
        "
        aria-label="Les valeurs du salon"
      >
        <Slogan icon="frangipani.svg">
          Tradition
          <br />
          thaïlandaise
        </Slogan>
        <Slogan icon="carry-heart.svg">
          Bien-être
          <br />
          et relaxation
        </Slogan>
        <Slogan icon="leaf.svg">Équilibre</Slogan>
        <Slogan icon="pierres.svg">Harmonie</Slogan>
      </ul>
    </section>
  );
};

export default BriefPresentation;
