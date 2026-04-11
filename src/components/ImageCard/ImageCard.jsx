import './ImageCard.css';

/**
 * ImageCard — card with an image (or placeholder) and a title / subtitle.
 *
 * Props:
 *   image       – URL string for the card image
 *   title       – card heading
 *   subtitle    – secondary text below title
 *   placeholder – emoji shown when no image is provided (default '📸')
 *   label       – extra small label shown on the placeholder
 *   className   – extra class names
 */
export default function ImageCard({
  image,
  title,
  subtitle,
  placeholder = '📸',
  label,
  className = '',
}) {
  return (
    <div className={`image-card ${className}`}>
      {/* ── Image area ── */}
      <div className="image-card__img-wrapper">
        {image ? (
          <img src={image} alt={title || 'Image'} loading="lazy" />
        ) : (
          <div className="image-card__placeholder">
            <span className="image-card__placeholder-emoji">{placeholder}</span>
            {label && (
              <span className="image-card__placeholder-label">{label}</span>
            )}
          </div>
        )}
      </div>

      {/* ── Text area ── */}
      {(title || subtitle) && (
        <div className="image-card__body">
          {title && <h3 className="image-card__title">{title}</h3>}
          {subtitle && <p className="image-card__subtitle">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
