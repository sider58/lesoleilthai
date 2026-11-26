import Image from "next/image";

// Charge un ornement WebP depuis public/images, sans l’annoncer aux lecteurs d’écran.
// hiddenMedia évite aussi tout téléchargement quand l'ornement est masqué en CSS.
const Decoration = ({
  name,
  className = "",
  portrait = false,
  sizes = "(max-width: 767px) 100px, 320px",
  hiddenMedia,
}) => {
  return (
    <picture className="contents">
      {hiddenMedia && (
        <source
          media={hiddenMedia}
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        />
      )}
      <Image
        src={`/images/${name}.webp`}
        width={portrait ? 887 : 1536}
        height={portrait ? 1774 : 1024}
        alt=""
        aria-hidden="true"
        className={`absolute pointer-events-none h-auto select-none object-contain ${className}`}
        sizes={sizes}
      />
    </picture>
  );
};

export default Decoration;
