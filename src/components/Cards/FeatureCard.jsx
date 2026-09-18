import { Link } from 'react-router-dom';
import './FeatureCard.css';

/**
 * FeatureCard — title + description card with an optional link.
 *
 * Props:
 *   title     – card heading
 *   text      – card body text
 *   linkLabel – text for the bottom link (default: 'Learn more')
 *   linkTo    – route for the link (default: '#')
 *   accent    – 'purple' | 'pink' | 'blue' — sets the accent colour
 *   className – extra class names
 */
export default function FeatureCard({
  title,
  text,
  linkLabel = 'Learn more',
  linkTo = '#',
  accent = 'purple',
  className = '',
}) {
  return (
    <div className={`feature-card feature-card--${accent} ${className}`}>
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
