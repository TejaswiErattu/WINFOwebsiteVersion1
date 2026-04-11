import Button from '../Buttons/Buttons';
import './EpisodeCard.css';

/**
 * EpisodeCard — two-column card with video thumbnail + episode info.
 *
 * Props:
 *   tag         – small badge label (e.g. "Latest Episode")
 *   title       – episode title
 *   guest       – guest name (prefixed with "with")
 *   description – episode summary
 *   image       – thumbnail URL (a gradient placeholder shown if empty)
 *   btnLabel    – CTA button label (default "Watch Episode")
 *   btnTo       – CTA button route
 *   className   – extra class names
 */
export default function EpisodeCard({
  tag,
  title,
  guest,
  description,
  image,
  btnLabel = 'Watch Episode',
  btnTo = '#',
  className = '',
}) {
  return (
    <div className={`episode-card ${className}`}>
      {/* ── Thumbnail / video preview ── */}
      <div className="episode-card__thumbnail">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          /* Gradient placeholder — intentionally empty */
          <></>
        )}
        <button className="episode-card__play-btn" aria-label="Play episode">
          <span className="episode-card__play-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11-7.36a1 1 0 0 0 0-1.72l-11-7.36A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
        </button>
      </div>

      {/* ── Content ── */}
      <div className="episode-card__content">
        {tag && <span className="episode-card__tag">{tag}</span>}
        <h3 className="episode-card__title">{title}</h3>
        {guest && <p className="episode-card__guest">with {guest}</p>}
        {description && <p className="episode-card__desc">{description}</p>}
        <Button to={btnTo} size="sm" className="episode-card__btn">
          {btnLabel}
        </Button>
      </div>
    </div>
  );
}
