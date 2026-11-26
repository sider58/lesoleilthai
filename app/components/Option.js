import Decoration from "./Decoration";

// Block au fond doré proposant une option, sa description et ses détails
const Option = ({ title, desc, bottomMessage, bottomImg, className = "" }) => {
  return (
    <aside
      className={`
        relative w-full mt-10 rounded-3xl
        bg-[linear-gradient(130deg,#b7a853_14%,#9e9040)]
        px-5.5 pt-6 pb-5 text-black
        max-lg:mt-7.5 max-lg:rounded-[22px]
        max-lg:px-5 max-lg:py-5.5
        max-md:mt-6 max-md:rounded-[18px]
        max-md:px-3.5 max-md:py-4
        ${className}
      `}
      aria-labelledby="option-title"
    >
      <h3
        className="
          font-label text-3xl font-extrabold leading-[1.3]
          max-lg:text-2xl max-md:text-[clamp(19px,5vw,23px)]
        "
        id="option-title"
      >
        {title}
      </h3>
      <p
        className="
          mt-6 text-[25px] font-bold leading-[1.35]
          max-lg:mt-5.5 max-lg:text-[21px]
          max-md:mt-3 max-md:text-[clamp(17px,4vw,20px)]
          max-md:leading-[1.35]
        "
      >
        {desc}
      </p>
      {bottomMessage && (
        <p
          className="
            mt-9.5 pr-37.5 text-xl
            font-heading font-bold italic
            max-lg:mt-8 max-lg:pr-27.5
            max-lg:text-xl max-md:mt-8
            max-md:pr-12 max-md:text-[clamp(16px,3.5vw,18px)]
          "
        >
          {bottomMessage}
        </p>
      )}
      {bottomImg && (
        <Decoration
          name={bottomImg}
          className="
            right-1.5 bottom-1.25 w-37.5
            max-lg:w-30
            max-md:-right-0 max-md:bottom-0.75
            max-md:w-17.25
          "
          sizes="(width < 48rem) 69px, (width < 64rem) 120px, 150px"
        />
      )}
    </aside>
  );
};

export default Option;
