import './WinnerCard.css';

/**
 * WinnerCard — hackathon winner / award card.
 *
 * Props:
 *   placement – badge text, e.g. "🥇 1st Place"
 *   team      – team name
 *   project   – short project description
 *   tier      – 'gold' | 'silver' | 'bronze' | 'special'
 *              controls the card's colour scheme
 *   emoji     – large display emoji (default '🏆')
 */
export default function WinnerCard({
  placement,
  team,
  project,
  tier = 'gold',
  emoji = '🏆',
}) {
  return (
    <div className={`winner-card winner-card--${tier}`}>
      {/* Placement badge */}
      <div className="winner-card__placement">{placement}</div>

      {/* Large emoji */}
      <div className="winner-card__emoji" aria-hidden="true">{emoji}</div>

      {/* Team name */}
      <h3 className="winner-card__team">{team}</h3>

      {/* Project description */}
      {project && <p className="winner-card__project">{project}</p>}
    </div>
  );
}
