"use client";
import Image from "next/image";
import { useRef, useState } from "react";

// Construit les liens vers les réseaux sociaux
export const SocialPlatforms = () => {
  const platforms = [
    {
      name: "Google",
      icon: "google-svgrepo-com.svg",
      href: "https://www.google.com/maps/search/?api=1&query=Le+Soleil+Thai+Meximieux",
      label: "Rechercher Le Soleil Thaï sur Google Maps",
    },
    {
      name: "Facebook",
      icon: "facebook-svgrepo-com.svg",
      href: "https://www.facebook.com/share/1Mivc5iLcD/?mibextid=wwXIfr",
      label: "Rechercher Le Soleil Thaï sur Facebook",
    },
    {
      name: "Instagram",
      icon: "instagram-167-svgrepo-com.svg",
      href: "https://www.instagram.com/lesoleilthaimassage?knvt=ejJhdzAxdmtjdjE2",
      label: "Rechercher Le Soleil Thaï sur Instagram",
    },
  ];

  return (
    <div
      className="
        mt-9.5 mb-5 flex justify-end
        gap-5 max-lg:mb-4 max-lg:gap-3.5
        max-md:col-start-2 max-md:row-start-1
        max-md:m-0 max-md:mb-1 max-md:mr-2 max-md:gap-3
      "
    >
      {platforms.map(platform => (
        <a
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.label}
          title={platform.label}
          className="
            flex min-h-17.5 w-17.5 items-center justify-center
            transition-transform hover:-translate-y-1
            max-lg:min-h-13 max-lg:w-13
            max-md:min-h-8 max-md:w-[clamp(1.75rem,9vw,2.5rem)]
          "
        >
          <Image
            src={`/icons/${platform.icon}`}
            unoptimized
            width={64}
            height={64}
            alt=""
            className="size-16 object-contain max-lg:size-12 max-md:size-full"
          />
        </a>
      ))}
    </div>
  );
};
// Pied de page et fenêtre partagée entre confidentialité et mentions légales.
const Footer = () => {
  // La référence contrôle le dialogue natif ; l’état détermine quel document afficher.
  const dialogRef = useRef(null);
  const [documentType, setDocumentType] = useState("privacy");

  // Sélectionne le contenu puis ouvre le dialogue modal ; un clic sur le fond le referme.
  const openDocument = (type) => {
    setDocumentType(type);
    dialogRef.current.showModal();
  };
  return (
    <footer 
      className="
        px-5 pb-5 max-md:grid max-md:grid-cols-[minmax(0,1fr)_auto] max-md:items-end 
        max-md:gap-2 max-md:px-2.5 max-md:pt-10 max-md:pb-5
        ">
      <SocialPlatforms />
      <div
        className="
          flex items-center justify-between gap-5 text-[23px] leading-normal
          max-lg:gap-3.5 max-lg:text-[17px]
          max-md:col-start-1 max-md:row-start-1
          max-md:items-end max-md:justify-start
          max-md:gap-3 max-md:text-[clamp(0.6875rem,3.6vw,1rem)]
        "
      >
        <nav
          className="
            flex flex-wrap items-center gap-6 max-lg:gap-4 
            max-md:shrink-0 max-md:flex-col max-md:items-start max-md:gap-0
          "
          aria-label="Navigation de bas de page"
        >
          <a 
            className="inline-flex min-h-11 items-center max-md:min-h-7" 
            href="#haut-de-page"
          >
            Haut de page
          </a>
          <a 
            className="inline-flex min-h-11 items-center max-md:min-h-7" 
            href="#massages"
          >
            Massages
          </a>
          <a 
            className="inline-flex min-h-11 items-center max-md:min-h-7" 
            href="tel:+33762541417"
          >
            Prendre RDV
          </a>
        </nav>
        <div
          className="
            flex flex-wrap items-center gap-6 max-lg:gap-4
            max-md:shrink-0 max-md:flex-col max-md:items-start max-md:gap-0
          "
        >
          <button
            className="inline-flex min-h-11 items-center max-md:min-h-7"
            onClick={() => openDocument("privacy")}
          >
            Confidentialité
          </button>
          <button
            className="inline-flex min-h-11 items-center max-md:min-h-7"
            onClick={() => openDocument("legal")}
          >
            Mentions légales
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="
          fixed inset-0 m-auto max-h-[85dvh]
          w-[min(600px,calc(100%-32px))] rounded-[20px] 
          border bg-navy p-9 text-[18px] leading-[1.6]
        text-white backdrop:bg-black/65
        "
        aria-labelledby="information-title"
        onClick={event => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <button
          className="absolute top-2 right-3 size-11 text-[32px]"
          aria-label="Fermer"
          onClick={() => dialogRef.current.close()}
        >
          ×
        </button>
        <h2
          className="mt-0 mr-7.5 mb-5 font-heading text-[28px] font-semibold text-gold"
          id="information-title"
        >
          {documentType === "privacy" ? "Confidentialité" : "Mentions légales"}
        </h2>
        {documentType === "privacy" ? (
          <>
            <p>
              Cette page présente les prestations du salon et ne contient aucun formulaire de collecte de données.
            </p>
            <p className="mt-4">
              Les liens de contact ouvrent votre application de téléphone, de
              messagerie ou un service externe. Les services externes appliquent
              leurs propres conditions de confidentialité.
            </p>
            <p className="mt-4">
              Pour toute question :{" "}
              <a
                className="wrap-anywhere underline"
                href="mailto:soleilthaimassage@gmail.com"
              >
                soleilthaimassage@gmail.com
              </a>.
            </p>
          </>
        ) : (
          <>
            <p>Le Soleil Thaï — Massage et bien-être</p>
            <p className="mt-4">
              Salon exploité par Kay Xayavongsa.<br />33 Rue de Lyon, Meximieux (01800)
            </p>
            <p className="mt-4">
              SIRET: 92159558300011
            </p>
            <p className="mt-4">
              <a 
                className="wrap-anywhere underline" 
                href="tel:+33762541417"
              >
                07 62 54 14 17
              </a>
              <br />
              <a 
                className="wrap-anywhere underline" 
                href="mailto:soleilthaimassage@gmail.com"
              >
                soleilthaimassage@gmail.com
              </a>
            </p>
          </>
        )}
      </dialog>
    </footer>
  );
};

export default Footer;
