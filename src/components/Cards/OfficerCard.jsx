import './OfficerCard.css';

/**
 * OfficerCard — team member card with portrait + hover bio overlay.
 *
 * Props:
 *   name  – officer name
 *   role  – position title
 *   image – URL for the portrait photo (optional)
 *   bio   – short bio shown on hover (optional)
 *
 * When no image is provided a pastel gradient placeholder is shown instead.
 * The colour rotates via CSS nth-child on the parent grid.
 */
export default function OfficerCard({ name, role, image, bio }) {
  return (
    <div className="officer-card">
      {/* ── Portrait area ── */}
      <div className="officer-card__portrait">
        {image ? (
          <img src={image} alt={name} loading="lazy" />
        ) : (
          <div className="officer-card__placeholder">
            <span className="officer-card__placeholder-emoji" aria-hidden="true">
              👤
            </span>
          </div>
        )}

        {/* Bio overlay — shown on hover / focus */}
        {bio && (
          <div className="officer-card__overlay">
            <p className="officer-card__bio">{bio}</p>
          </div>
        )}
      </div>

      {/* ── Name & role ── */}
      <div className="officer-card__body">
        <h3 className="officer-card__name">{name}</h3>
        <p className="officer-card__role">{role}</p>
      </div>
    </div>
  );
}
