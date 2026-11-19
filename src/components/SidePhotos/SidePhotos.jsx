import './SidePhotos.css';

/**
 * SidePhotos — frames a block (usually a section heading) with two tilted
 * polaroid photos, one on each side, so short pages feel less empty.
 * On narrow screens the photos move into a row under the block.
 *
 * Props:
 *   photos    – [left, right]; each { src, alt, width?, height?, position? }
 *               (position = CSS object-position, e.g. 'center 30%')
 *   className – extra class names
 *   children  – the block that sits between the photos
 */
export default function SidePhotos({ photos = [], className = '', children }) {
  const [left, right] = photos;

  return (
    <div className={`side-photos ${className}`.trim()}>
      <div className="side-photos__content">{children}</div>
      {left && <Polaroid photo={left} side="left" />}
      {right && <Polaroid photo={right} side="right" />}
    </div>
  );
}

function Polaroid({ photo, side }) {
  return (
    <figure className={`side-photos__photo side-photos__photo--${side}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width ?? 900}
        height={photo.height ?? 600}
        style={photo.position ? { objectPosition: photo.position } : undefined}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}
