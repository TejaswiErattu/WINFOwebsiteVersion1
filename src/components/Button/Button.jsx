import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button — universal button / link component.
 *
 * Props:
 *   children  – button label
 *   to        – internal route (renders react-router <Link>)
 *   href      – external URL (renders <a> with target="_blank")
 *   variant   – 'primary' | 'secondary' | 'accent'  (default: 'primary')
 *   size      – 'sm' | 'lg' | '' (default: '')
 *   className – extra class names
 *   ...rest   – any other native button / anchor props (onClick, disabled, etc.)
 *
 * Renders:
 *   <Link>   if `to` is provided
 *   <a>      if `href` is provided
 *   <button> otherwise
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = '',
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size && `btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  /* Internal link */
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  /* External link */
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  /* Plain button */
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

/* ── Convenience wrappers ── */

/**
 * PrimaryButton — shorthand for <Button variant="primary">.
 * Accepts all the same props as Button.
 */
export function PrimaryButton(props) {
  return <Button variant="primary" {...props} />;
}

/**
 * SecondaryButton — shorthand for <Button variant="secondary">.
 * Accepts all the same props as Button.
 */
export function SecondaryButton(props) {
  return <Button variant="secondary" {...props} />;
}
