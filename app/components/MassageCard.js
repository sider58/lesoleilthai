import Image from "next/image";

// Carte réutilisable alimentée par les données de massage.js.
const MassageCard = ({ img, title, desc, priceRange, className = "" }) => {
  return (
    <article
      className={`
        flex min-w-0 flex-col rounded-3xl border-2 border-white/90 bg-card
        p-2.5 shadow-[8px_12px_8px_rgb(0_0_0/28%)]
        max-lg:min-h-45 max-lg:rounded-[20px] 
        max-832:w-155 max-832:justify-self-center
        max-md:w-auto max-md:justify-self-auto max-md:min-h-52.5 max-md:rounded-[19px] max-md:p-2
        ${className}
      `}
    >
      <div
        className="
          grid grid-cols-[140px_minmax(0,1fr)] items-start gap-3.5
          max-lg:grid-cols-[90px_minmax(0,1fr)] max-lg:gap-2.5
          max-832:grid-cols-[128px_minmax(0,1fr)]
          max-md:grid-cols-[clamp(80px,26vw,128px)_minmax(0,1fr)] max-md:gap-2.5
        "
      >
        <Image
          className="
            block size-35 aspect-square rounded-3xl border-4 border-black
            object-cover
            max-lg:size-22.5 max-lg:rounded-[19px]
            max-lg:border-[3px]
            max-832:size-32 max-832:rounded-[17px]
            max-md:h-auto max-md:w-full max-md:rounded-[24px]
            max-md:border-4
          "
          src={`/images/${img}`}
          width={170}
          height={170}
          sizes="(max-width: 492px) 26vw, (max-width: 767px) 128px, (max-width: 832px) 128px, (max-width: 1023px) 90px, 140px"
          alt={title}
        />
        <div className="min-w-0">
          <h3
            className="
              font-label text-2xl mt-1 font-extrabold leading-[1.15]
              max-lg:text-xl max-832:text-2xl 
              max-832:leading-[1.2]
              max-md:mt-0.5 max-md:text-[clamp(15px,4.2vw,20px)]
            "
          >
            {title}
          </h3>
          <p
            className="
              mt-2 text-lg font-bold leading-[1.27] max-w-97
              max-lg:text-lg max-lg:mt-1.5 max-832:text-xl
              max-md:mt-1.5 max-md:text-[clamp(13px,3.5vw,17px)] max-md:leading-[1.3]
            "
          >
            {desc}
          </p>
        </div>
      </div>
      <dl 
        className="mt-auto flex justify-center pt-7.5 pb-2 max-lg:pb-0 max-md:pt-4 max-md:pb-1" 
        aria-label="Durées et tarifs"
      >
        {/* Colonne(s) dont la durée est en haut et le prix en bas */}
        {/* s'il y'en a plusieurs une barre verticale précèdera les colonnes */}
        {priceRange.map(({ hour, price }, index) => (
          <div
            className={`
              relative max-w-55 flex-1 text-center font-price
              text-3xl font-semibold leading-[1.55]
              max-lg:text-[24px]
              max-md:min-w-0 max-md:whitespace-nowrap
              max-md:text-[clamp(18px,5.25vw,24px)] max-md:leading-[1.3]
              ${index > 0
                ? `
                    before:absolute before:left-0 before:top-[24%]
                    before:h-[49%] before:w-1 before:bg-white
                    max-lg:before:w-0.75
                  `
                : ""}
            `}
            key={hour}
          >
            <dt>{hour} min</dt>
            <dd>
              {price}
              <span
                className="text-3xl max-lg:text-[27px] max-md:text-[1.1em]"
                aria-label="euros"
              >
                €
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
};

export default MassageCard;
