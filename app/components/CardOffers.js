// Liste descriptive commune aux forfaits et aux massages duo : intitulé puis prix en euros.
export const ListWithPrice = ({ items }) => {
  return (
    <dl
      className="
        mt-8.5 text-[28px] font-bold leading-[1.35]
        max-lg:mt-5 max-lg:text-[22px] max-md:text-[clamp(17px,4.75vw,22px)]
        [&>div+div]:mt-4.5 max-xs:mt-5
      "
    >
      {items.map(item => (
        <div key={item.title}>
          <dt>{item.title}</dt>
          <dd className="text-3xl font-extrabold max-lg:text-3xl max-md:mt-0.5 max-md:text-[25px]">
            {item.price}€
          </dd>
        </div>
      ))}
    </dl>
  );
};

// Cadre partagé par les forfaits, massages duo et soins additionnels.
// fixedHour est facultatif ; children reçoit le contenu et className adapte la mise en page.
export const CardOffers = ({
  title,
  subtitle,
  fixedHour,
  className = "",
  children,
}) => {
  return (
    <article
      className={`
        min-w-0 rounded-3xl border-2 border-gold bg-dark
        px-4.5 pt-5.5 pb-8 text-gold
        max-lg:rounded-[22px] max-lg:px-4
        max-lg:pt-5 max-lg:pb-7
        max-md:rounded-[20px] max-md:px-4.25
        max-md:pt-5 max-md:pb-7 max-sm:pt-3 max-sm:px-3 ${className}
      `}
    >
      <h3
        className="
          bg-[linear-gradient(105deg,#cdbf6c,#ddd087)] bg-clip-text
          font-label text-[35px] font-extrabold leading-[1.2] text-transparent
          max-lg:text-[28px] max-md:text-[26px] max-xs:text-2xl
        "
      >
        {title}
      </h3>
      <p
        className="
          mt-1.5 font-heading text-[26px] italic leading-[1.4]
          max-lg:text-[21px] max-md:text-[18px] max-xs:text-base
        "
      >
        {subtitle}
      </p>
      {fixedHour && (
        <div
          className="
            mt-8 flex items-baseline justify-between gap-3
            text-3xl font-extrabold leading-[1.35]
            max-lg:gap-2 max-lg:text-2xl max-lg:mt-5
            max-832:text-[26px] max-xs:mt-3 max-xs:text-[22px]
          "
        >
          <span>Selon massage</span>
          <span
            className="
              flex shrink-0 gap-5 text-3xl font-bold
              max-lg:gap-3 max-lg:text-[26px] max-832:text-[26px]
              max-832:mr-2 max-832:gap-5 max-md:gap-4 max-xs:text-[22px]
            "
          >
            {fixedHour}
          </span>
        </div>
      )}
      {children}
    </article>
  );
};
