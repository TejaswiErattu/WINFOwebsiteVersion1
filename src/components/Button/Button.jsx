import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = '',
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${size ? `btn--${size}` : ''} ${className}`.trim();

  if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  return <button className={classes} {...rest}>{children}</button>;
}
