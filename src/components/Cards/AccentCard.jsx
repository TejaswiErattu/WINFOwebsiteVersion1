import './AccentCard.css';

/**
 * AccentCard — icon + title + description card with coloured accent bar.
 *
 * Replaces the duplicated patterns: podcast-highlight-card, officers-role-card,
 * membership-benefit-card, and support-why-card.
 *
 * Props:
 *   icon      – emoji or React node shown in a coloured bubble
 *   title     – card heading
 *   text      – card body text
 *   accent    – 'purple' | 'pink' | 'blue' — colour scheme (default: 'purple')
 *   className – extra class names
 *   children  – optional extra content below the text
 */
export default function AccentCard({
  icon,
  title,
  text,
  accent = 'purple',
  className = '',
  children,
}) {
  const classes = [
    'accent-card',
    `accent-card--${accent}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {icon && <div className="accent-card__icon">{icon}</div>}
      {title && <h3 className="accent-card__title">{title}</h3>}
      {text && <p className="accent-card__text">{text}</p>}
      {children}
    </div>
  );
}
