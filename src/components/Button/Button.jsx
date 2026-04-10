import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Reusable pill button. Can render as a <button>, <a>, or React Router <Link>.
 *
 * @param {object}  props
 * @param {'primary'|'secondary'|'ghost'} props.variant – Visual style
 * @param {'sm'|'md'|'lg'} props.size – Button size
 * @param {string}  props.to   – Internal route (uses <Link>)
 * @param {string}  props.href – External URL (uses <a>)
 * @param {React.ReactNode} props.children
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  className = '',
  ...rest
}) {
  const variantClass =
    variant === 'secondary'
      ? 'btnSecondary'
      : variant === 'ghost'
        ? 'btnGhost'
        : 'btnPrimary';

  const sizeClass = size === 'lg' ? 'btnLg' : size === 'sm' ? 'btnSm' : '';

  const classes = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  // Internal link
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  // Button element
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
