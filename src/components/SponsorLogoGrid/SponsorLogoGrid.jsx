import './SponsorLogoGrid.css';

/**
 * SponsorLogoGrid — flex-wrap grid of sponsor logos / placeholder names.
 *
 * Props:
 *   sponsors – array of { name, logo? }
 *             If a `logo` URL is provided, an <img> is rendered.
 *             Otherwise, the `name` is shown as a pastel text badge.
 */
export default function SponsorLogoGrid({ sponsors = [] }) {
  return (
    <div className="sponsor-grid" role="list">
      {sponsors.map((s, i) => (
        <div key={s.name ?? i} className="sponsor-grid__item" role="listitem">
          {s.logo ? (
            <img src={s.logo} alt={s.name} loading="lazy" />
          ) : (
            <div className="sponsor-grid__placeholder">{s.name}</div>
          )}
        </div>
      ))}
    </div>
  );
}
