import Button from '../Buttons/Buttons';
import './JoinCTACard.css';

/**
 * JoinCTACard — centred CTA card with emoji, gradient title, and button.
 *
 * Replaces the duplicated patterns: events-join-cta__card,
 * officers-join-cta__card, membership-join-cta__card, support-bottom-cta__card.
 *
 * Props:
 *   emoji       – large emoji displayed above the title
 *   title       – gradient heading text
 *   description – body text
 *   btnLabel    – CTA button label
 *   btnTo       – internal route (uses react-router <Link>)
 *   btnHref     – external URL (uses <a>)
 */
export default function JoinCTACard({
  emoji,
  title,
  description,
  btnLabel,
  btnTo,
  btnHref,
}) {
  return (
    <div className="join-cta">
      <div className="join-cta__card">
        {emoji && <div className="join-cta__emoji">{emoji}</div>}
        {title && <h2 className="join-cta__title">{title}</h2>}
        {description && <p className="join-cta__desc">{description}</p>}
        {btnLabel && (
          <Button to={btnTo} href={!btnTo ? btnHref : undefined} size="lg">
            {btnLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
