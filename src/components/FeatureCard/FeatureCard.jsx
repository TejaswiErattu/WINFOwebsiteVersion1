import { Link } from 'react-router-dom';
import './FeatureCard.css';

/**
 * FeatureCard — icon + title + description card with an optional link.
 *
 * Props:
 *   icon      – emoji or React node displayed in a coloured bubble
 *   title     – card heading
 *   text      – card body text
 *   linkLabel – text for the bottom link (default: 'Learn More')
 *   linkTo    – route for the link (default: '#')
 *   accent    – 'purple' | 'pink' | 'blue' — sets the colour scheme
 *   className – extra class names
 */
export default function FeatureCard({
  icon,
  title,
  text,
  linkLabel = 'Learn More',
  linkTo = '#',
  accent = 'purple',
  className = '',
}) {
  return (
    <div className={`feature-card feature-card--${accent} ${className}`}>
      {/* Icon bubble */}
      <div className="feature-card__icon">{icon}</div>

      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__text">{text}</p>

      {linkLabel && (
        <Link to={linkTo} className="feature-card__link">
          {linkLabel}
          <span className="feature-card__link-arrow" aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
