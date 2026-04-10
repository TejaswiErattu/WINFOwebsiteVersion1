import { Link } from 'react-router-dom';
import './FeatureCard.css';

export default function FeatureCard({
  icon,
  title,
  text,
  linkLabel = 'Learn More',
  linkTo = '#',
  accent = 'purple', // 'purple' | 'pink' | 'blue'
  className = '',
}) {
  return (
    <div className={`feature-card feature-card--${accent} ${className}`}>
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__text">{text}</p>
      <Link to={linkTo} className="feature-card__link">
        {linkLabel}
        <span className="feature-card__link-arrow">→</span>
      </Link>
    </div>
  );
}
