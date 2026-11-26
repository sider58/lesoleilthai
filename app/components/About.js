"use client";
import Image from "next/image";
import Decoration from "./Decoration";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Lien de contact réutilisable ; external ouvre un nouvel onglet avec les protections associées.
export const Contact = ({ img, text, href, external = false, className = "" }) => {
  return (
    <li className={className}>
      <a
        className="
          flex w-fit max-w-full items-center gap-7
          text-[26px] font-extrabold leading-[1.2]
          max-lg:gap-5 max-lg:text-[22px]
          max-md:gap-3 max-md:text-[clamp(0.875rem,4.8vw,1.25rem)]
        "
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <Image
          className="shrink-0 brightness-0 invert max-lg:size-8 max-md:size-6.25"
          src={`/icons/${img}`}
          unoptimized
          width={40}
          height={40}
          alt=""
        />
        <span className="mb-1 min-w-0 wrap-anywhere">{text}</span>
      </a>
    </li>
  );
}

// Affiche l’adresse, les horaires et les contacts du salon.
const About = () => {
  const aboutContainer = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      ref={aboutContainer}
      className="
        relative pt-41 pb-15 xl:px-12.5 max-xl:px-10
        max-lg:px-7 max-lg:pt-32.5 max-lg:pb-8.75
        max-md:px-5.5 max-md:pt-16 max-md:pb-32 max-xs:px-4
      "
      id="a-propos"
      aria-labelledby="about-title"
    >
      <Decoration
        name="lotus-rose-dore"
        className="
          scroll-fade-transition [--scroll-tyx:translateX(40px)] [--scroll-delay:200ms]
          -right-2.5 -top-1 w-130 -scale-x-100
          max-lg:top-2.5 max-lg:w-90
          max-md:right-0 max-md:top-5
          max-md:w-[min(50vw,210px)]
        "
        sizes="(width < 48rem) min(50vw, 210px), (width < 64rem) 360px, 520px"
      />
      <h2
        id="about-title"
        className="
          scroll-fade-transition
          font-heading text-4xl font-semibold leading-[1.4]
          max-lg:text-4xl max-md:text-[31px] max-xs:text-2xl
        "
      >
        A propos
      </h2>
      <div
        className="
          mt-14.5 text-[26px] leading-[1.4]
          max-lg:mt-12 max-lg:text-[22px]
          max-md:mt-8 max-md:text-lg max-md:leading-normal
          [&_p+p]:mt-7.5 max-md:[&_p+p]:mt-5.5
        "
      >
        <p className="scroll-fade-transition [--scroll-delay:100ms]">
          Nouveau salon de massage traditionnel thaïlandais
          <br className="max-xs:hidden"/> situé au 33 Rue de Lyon à Meximieux (01800)
        </p>
        <p className="scroll-fade-transition [--scroll-delay:200ms]">
          Ouvert sur RDV<br />Du lundi au dimanche de 9h à 19h<br />Fermé le mercredi
        </p>
      </div>
      <div className="mt-12 max-lg:mt-11 max-md:mt-8" id="contact">
        <h3
          className="
            scroll-fade-transition
            mb-9 text-2xl font-extrabold max-lg:text-[25px]
            max-md:mb-4 max-md:text-lg max-xs:text-base
          "
        >
          Contact :
        </h3>
        <ul className="flex flex-col gap-4 max-md:gap-4">
          <Contact
            img="call.svg"
            text="07 62 54 14 17"
            href="tel:+33762541417"
            className="scroll-fade-transition [--scroll-delay:100ms]"
          />
          <Contact
            img="baseline-whatsapp.svg"
            text="09 88 56 14 79"
            href="https://wa.me/33988561479"
            className="scroll-fade-transition [--scroll-delay:200ms]"
            external
          />
          <Contact
            img="outline-email.svg"
            text="soleilthaimassage@gmail.com"
            href="mailto:soleilthaimassage@gmail.com"
            className="scroll-fade-transition [--scroll-delay:300ms]"
          />
        </ul>
      </div>
      <Decoration
        name="frangipani-realiste"
        sizes="(width < 48rem) 116px, (width < 64rem) 200px, 265px"
        className="
          scroll-fade-transition [--scroll-tyx:translateX(24px)] [--scroll-delay:200ms]
          -right-3 bottom-9.5 w-66.25
          max-lg:bottom-1.25 max-lg:w-50
          max-md:right-2 max-md:bottom-2
          max-md:w-29
        "
      />
    </section>
  );
};

export default About;
