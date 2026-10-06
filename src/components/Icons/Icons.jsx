/**
 * Icons — small inline SVG icons that inherit the surrounding text colour
 * (stroke="currentColor") so they render the same on every OS, unlike emoji.
 * All are decorative (aria-hidden); put the meaning in nearby text.
 *
 * Usage: <CartIcon className="icon" />
 */
function Icon({ children, className = 'icon', fill = 'none' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function CartIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2.5 3.5h2.7l2.3 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.1" />
    </Icon>
  );
}

export function ShirtIcon(props) {
  return (
    <Icon {...props}>
      <path d="M8.5 3 3 6l2 4.5 2.5-1V20h9V9.5l2.5 1L21 6l-5.5-3a3.6 3.6 0 0 1-7 0Z" />
    </Icon>
  );
}

export function MoneyIcon(props) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.75" />
      <path d="M6 9.5v.01M18 14.5v.01" />
    </Icon>
  );
}

export function BoxIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 2.8 3.5 7.2v9.6l8.5 4.4 8.5-4.4V7.2L12 2.8Z" />
      <path d="M3.8 7.4 12 11.7l8.2-4.3M12 11.7v9.3" />
    </Icon>
  );
}

export function ClockIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </Icon>
  );
}

export function PlayIcon(props) {
  return (
    <Icon {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </Icon>
  );
}
