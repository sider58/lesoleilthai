import Image from "next/image";
import Decoration from "./Decoration";

// En-tête visuel du salon avec logo, accroche et lien vers son adresse sur Google Maps.
// Seul le logo est préchargé ; les ornements gardent leur chargement différé.
const LandingPage = () => {
  return (
    <section
      className="relative pb-18 max-md:pb-11"
      aria-labelledby="salon-title"
    >
      <Decoration
        name="frangipani-ornements"
        className="
          landing-animation [--landing-delay:1500ms] [--landing-tyx:translateX(-370px)]
          -left-17.5 top-5 w-96 max-xl:w-88.5 rotate-66
          max-lg:-left-16.25 max-lg:top-7
          max-lg:w-67.5
          max-md:hidden
        "
        sizes="(width < 64rem) 270px, (width < 80rem) 354px, 384px"
        hiddenMedia="(width < 48rem)"
      />
      <Decoration
        name="frangipani-realiste"
        className="
          hidden landing-animation [--landing-delay:1500ms] [--landing-tyx:translateX(-32px)]
          -left-3 top-3 max-md:block max-md:w-38 max-sm:w-22 max-xs:w-20
        "
        sizes="(width < 30rem) 80px, (width < 40rem) 88px, 152px"
        hiddenMedia="(width >= 48rem)"
      />
      <Image
        src="/images/le-soleil-thai-logo-sans-cercle.webp"
        width={1146}
        height={1069}
        preload
        sizes="(width < 48rem) min(70vw, 280px), (width < 64rem) 390px, 420px"
        className="
          landing-animation mx-auto -mt-3.5 block h-auto w-105
          max-lg:mt-0 max-lg:w-97.5
          max-md:mt-1.5 max-md:w-[min(70vw,280px)]
        "
        alt="Le Soleil Thaï — Massage & Bien-être"
      />
      <div
        className="
          landing-animation [--landing-delay:2.5s] mx-18 mt-10
          max-xl:mx-15 max-lg:mt-10.5
          max-md:mx-5.5 max-md:mt-6.5 max-xs:mx-4
        "
      >
        <h1
          id="salon-title"
          className="
            bg-[linear-gradient(105deg,#cdbf6c,#ddd087)] bg-clip-text
            font-heading text-6xl font-semibold leading-[1.15] text-transparent
            max-xl:text-[54px] max-lg:text-[42px] max-md:text-[clamp(1.5rem,8.6vw,2.5rem)]
          "
        >
          Le Soleil Thaï
        </h1>
        <h2
          className="
            bg-[linear-gradient(105deg,#cdbf6c,#ddd087)] bg-clip-text
            font-heading text-4xl font-semibold leading-[1.3] text-transparent
            max-xl:text-[38px] max-lg:text-[32px] max-md:text-[clamp(1.45rem,6.7vw,2rem)]
          "
        >
          Massage et Bien-être
        </h2>
        <p
          className="
            mt-1 font-['Gotu'] text-3xl leading-[1.65] 
            whitespace-normal text-browny max-lg:text-2xl
            max-md:text-[clamp(0.8rem,3.6vw,1.125rem)]
          "
        >
          Technique traditionnelle fait pour votre bien-être
        </p>
        <a
          className="
            flex w-fit items-center gap-2 font-['Gotu'] text-[30px] 
            leading-[1.6] max-lg:text-[22px] max-md:mt-1 
            max-md:gap-1 max-md:text-[clamp(0.8rem,3.6vw,1.125rem)] hover:text-gray-300
          "
          href="https://www.google.com/maps/search/?api=1&query=Le+Soleil+Thai+33+Rue+de+Lyon+01800+Meximieux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="shrink-0 max-lg:size-7.5 max-md:size-5 max-xs:size-4.5"
            src="/icons/map-pin-fill.svg"
            unoptimized
            width={32}
            height={32}
            alt=""
          />
          <span>33 Rue de Lyon, Meximieux (01800)</span>
        </a>
      </div>
      <Decoration
        name="orchidees-ornements"
        className="
          landing-animation [--landing-delay:1500ms] [--landing-tyx:translateX(440px)]
          -right-7.5 top-65 w-120 max-xl:w-96
          max-lg:-right-5 max-lg:top-69
          max-lg:w-82.5
          max-md:hidden
        "
        sizes="(width < 64rem) 330px, (width < 80rem) 384px, 480px"
        hiddenMedia="(width < 48rem)"
      />
      <Decoration
        name="orchidees-realistes"
        className="
          landing-animation [--landing-delay:1500ms] [--landing-tyx:translateX(32px)]
          -right-1 bottom-1 hidden w-32 
          max-md:block max-sm:w-24 max-xs:w-16"
        sizes="(width < 30rem) 64px, (width < 40rem) 96px, 128px"
        hiddenMedia="(width >= 48rem)"
      />
    </section>
  );
};

export default LandingPage;
