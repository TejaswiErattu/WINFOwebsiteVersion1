import './Card.css';

/**
 * InfoCard (also exported as Card for backwards compatibility)
 *
 * A versatile content card used throughout the site.
 *
 * Props:
 *   tag       – small coloured badge at the top (e.g. "Latest Episode")
 *   title     – card heading
 *   meta      – secondary info line (e.g. date, guest name)
 *   icon      – optional emoji / React node shown before title
 *   accent    – 'purple' | 'pink' | 'blue' — tints the card background
 *   className – extra class names
 *   children  – any additional body content
 */
export default function Card({
  tag,
  title,
  meta,
  icon,
  accent,
  className = '',
  children,
}) {
  const classes = [
    'card',
    accent && `card--${accent}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {tag && <span className="card__tag">{tag}</span>}

      {icon && <div className="card__icon">{icon}</div>}

      {title && <h3 className="card__title">{title}</h3>}
      {meta && <p className="card__meta">{meta}</p>}

      {children && <div className="card__body">{children}</div>}
    </div>
  );
}

/* Alias so pages can import as InfoCard */
export { Card as InfoCard };
