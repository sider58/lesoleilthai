"use client";
import Image from "next/image";
import { useRef } from "react";
import Decoration from "./Decoration";

// Navigation ordinateur et mobile
const Nav = () => {
  // Références vers le dialogue mobile et le bouton qui l’ouvre.
  const dialogRef = useRef(null);
  const toggleRef = useRef(null);

  // Ouvre le panneau modal, bloque le scroll et met à jour son état accessible.
  const openMenu = () => {
    dialogRef.current.showModal();
    document.body.style.overflow = "hidden";
    toggleRef.current?.setAttribute("aria-expanded", "true");
  };
  // Déclenche la fermeture ; le nettoyage commun est effectué par l’événement onClose.
  const closeMenu = () => {
    dialogRef.current.close();
  };
  const onClose = () => {
    document.body.style.overflow = "";
    toggleRef.current?.setAttribute("aria-expanded", "false");
    toggleRef.current?.focus({ preventScroll: true });
  };
  return (
    <>
      {/* Desktop */}
      <nav
        className="
          landing-animation [--landing-delay:2s] [--landing-tyx:translateY(20px)] 
          flex items-center justify-end gap-5 px-10 pt-5
          font-label text-[28px] font-extrabold text-gold max-lg:pt-5
          max-xl:gap-4 max-xl:px-7 max-xl:text-[22px]
          max-md:hidden
        "
        aria-label="Navigation principale"
      >
        <a
          className="transition-colors hover:text-gold-light"
          href="#massages"
        >
          Massages
        </a>
        <a
          className="
            rounded-full border-2 border-gold bg-card px-4 py-1
            transition-colors hover:text-gold-light
          "
          href="#"
        >
          Prendre RDV
        </a>
        <a
          className="transition-colors hover:text-gold-light"
          href="#a-propos"
        >
          A propos
        </a>
      </nav>

      {/* Mobile */}
      <div
        className="
          relative hidden max-md:flex items-center
          px-4 py-4
        "
      >
        <button
          ref={toggleRef}
          className="flex size-11 flex-col items-center justify-center gap-1.5"
          type="button"
          onClick={openMenu}
          aria-label="Ouvrir le menu"
          aria-haspopup="dialog"
          aria-controls="menu-mobile"
          aria-expanded="false"
        >
          <span className="block h-1.5 w-10 bg-white" />
          <span className="block h-1.5 w-10 bg-white" />
          <span className="block h-1.5 w-10 bg-white" />
        </button>
        <a
          className="absolute left-1/2 -translate-x-1/2"
          href="#haut-de-page"
          aria-label="Le Soleil Thaï — Logo"
        >
          <Image
            src="/images/le-soleil-thai-logo-transparent.webp"
            width={48}
            height={48}
            alt=""
          />
        </a>
      </div>
      <dialog
        ref={dialogRef}
        id="menu-mobile"
        className="
          fixed inset-y-0 left-0 m-0 h-dvh max-h-none
          w-[min(82vw,320px)] max-w-none border-0
          bg-dark p-0 text-white backdrop:bg-black/25
        "
        aria-labelledby="menu-title"
        onClose={onClose}
        onClick={event => {
          if (event.target === dialogRef.current) closeMenu();
        }}
      >
        <div className="relative min-h-full overflow-hidden px-5 py-5">
          <div className="flex items-center justify-between gap-1">
            <a
              href="#haut-de-page"
              className="flex min-w-0 items-center gap-2.5"
              onClick={closeMenu}
            >
              <Image
                src="/images/le-soleil-thai-logo-transparent.webp"
                width={36}
                height={36}
                alt="dialog-img"
              />
              <span 
                id="menu-title" 
                className="font-heading font-semibold text-gold whitespace-nowrap text-xl"
              >
                Le Soleil Thaï
              </span>
            </a>
            <button
              type="button" 
              className="grid size-7 shrink-0 place-items-center"
              onClick={closeMenu}
              aria-label="Fermer le menu"
            >
              <svg
                aria-hidden="true"
                className="size-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 4 20 20M20 4 4 20" />
              </svg>
            </button>
          </div>
          <nav
            aria-label="Navigation mobile"
            className="
                mt-18 flex flex-col gap-6
              font-heading text-2xl font-semibold text-gold
            "
          >
            <a className="py-1" href="#massages" onClick={closeMenu}>Massages</a>
            <a className="py-1" href="#" onClick={closeMenu}>Prendre RDV</a>
            <a className="py-1" href="#a-propos" onClick={closeMenu}>A propos</a>
          </nav>
          <Decoration
            name="frangipani-realiste"
            className="
              landing-animation [--landing-delay:700ms] [--landing-tyx:translateX(-24px)]
              bottom-5 -left-5 w-40
            "
            sizes="160px"
          />
        </div>
      </dialog>
    </>
  );
};

export default Nav;
