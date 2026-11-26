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
      {left && <Polaroid photo={left} className="side-photos__photo--left" />}
      {right && <Polaroid photo={right} className="side-photos__photo--right" />}
    </div>
  );
}

/**
 * PhotoStrip — a row of tilted polaroids (scrapbook style) for the end of a
 * short page. Four photos fit one row on wide screens; two per row on
 * tablets and phones.
 *
 * Props:
 *   photos    – each { src, alt, width?, height?, position? }
 *   title     – optional small heading above the strip
 *   className – extra class names
 */
export function PhotoStrip({ photos = [], title, className = '' }) {
  if (!photos.length) return null;

  return (
    <div className={`photo-strip ${className}`.trim()}>
      {title && <h3 className="photo-strip__title cursive-title">{title}</h3>}
      <ul className="photo-strip__list">
        {photos.map((photo) => (
          <li key={photo.src} className="photo-strip__item">
            <Polaroid photo={photo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Polaroid({ photo, className = '' }) {
  return (
    <figure className={`side-photos__photo ${className}`.trim()}>
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
