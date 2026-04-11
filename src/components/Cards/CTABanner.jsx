import Button from '../Buttons/Buttons';
import './CTABanner.css';

/**
 * CTABanner (CTASection) — full-width call-to-action banner.
 *
 * Props:
 *   title    – main heading
 *   text     – optional paragraph below the heading
 *   btnLabel – label for the CTA button
 *   btnTo    – internal route for the CTA button
 *   btnHref  – external URL for the CTA button (used if `btnTo` is not set)
 *   children – any extra content below the button
 */
export default function CTABanner({
  title,
  text,
  btnLabel,
  btnTo,
  btnHref,
  children,
}) {
  return (
    <div className="cta-banner">
      <h2 className="cta-banner__title">{title}</h2>

      {text && <p className="cta-banner__text">{text}</p>}

      {btnLabel && (
        <Button to={btnTo} href={!btnTo ? btnHref : undefined}>
          {btnLabel}
        </Button>
      )}

      {children}
    </div>
  );
}
