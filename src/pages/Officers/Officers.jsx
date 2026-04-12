import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import CircuitSVG from '../../components/CircuitSVG/CircuitSVG';
import { officersData } from '../../data/officersData';
import './Officers.css';

/* Inline LinkedIn SVG icon */
const LinkedInIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="officer-card__linkedin-svg">
    <path d="M4.94 2.5a1.67 1.67 0 1 1-3.34 0 1.67 1.67 0 0 1 3.34 0ZM1.8 5.5h2.95V17H1.8V5.5Zm5.2 0h2.83v1.57h.04a3.1 3.1 0 0 1 2.8-1.54c2.99 0 3.54 1.97 3.54 4.52V17h-2.94v-5.77c0-1.38-.02-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05V17H7V5.5Z" />
  </svg>
);

/**
 * Officer detail card used on the team page.
 */
function TeamCard({ officer, large }) {
  const { name, role, image, linkedin, year, hometown, focusArea, funFact } = officer;

  return (
    <div className={`officer-card ${large ? 'officer-card--large' : ''}`}>
      {/* Photo */}
      <div className="officer-card__portrait">
        {image ? (
          <img src={image} alt={name} loading="lazy" />
        ) : (
          <div className="officer-card__placeholder" />
        )}
        {/* LinkedIn badge */}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="officer-card__linkedin" aria-label={`${name} LinkedIn`}>
            <LinkedInIcon />
          </a>
        )}
      </div>

      {/* Info */}
      <div className="officer-card__body">
        <h3 className="officer-card__name">{name}</h3>
        <p className="officer-card__role">{role}</p>
        {year && <p className="officer-card__detail"><strong>year:</strong> {year}</p>}
        {hometown && <p className="officer-card__detail"><strong>hometown:</strong> {hometown}</p>}
        {focusArea && <p className="officer-card__detail"><strong>focus area:</strong> {focusArea}</p>}
        {funFact && <p className="officer-card__detail"><strong>fun fact:</strong> {funFact}</p>}
      </div>
    </div>
  );
}

/**
 * Committee card with image + title + description.
 */
function CommitteeCard({ committee }) {
  const { name, image, description } = committee;

  return (
    <div className="committee-card">
      <div className="committee-card__image">
        {image ? (
          <img src={image} alt={name} loading="lazy" />
        ) : (
          <div className="committee-card__placeholder" />
        )}
      </div>
      <h3 className="committee-card__name cursive-title">{name}</h3>
      <p className="committee-card__desc">{description}</p>
    </div>
  );
}

export default function Officers() {
  const {
    title,
    heroBody,
    heroBodySecondary,
    heroImage,
    heroImageAlt,
    officersHeading,
    coPresidents,
    directors,
    committeesHeading,
    committees,
  } = officersData;

  return (
    <>
      {/* ===== 1 · HERO — "our team" ===== */}
      <section className="team-hero">
        {/* Circuit decoration */}
        <div className="team-hero__circuit" aria-hidden="true">
          <CircuitSVG variant="small" />
        </div>

        <div className="team-hero__inner">
          <div className="team-hero__content">
            <h1 className="cursive-title">{title}</h1>
            <p className="team-hero__text">{heroBody}</p>
            <p className="team-hero__text">{heroBodySecondary}</p>
          </div>

          <div className="team-hero__image-frame">
            {heroImage ? (
              <img src={heroImage} alt={heroImageAlt} />
            ) : (
              <div className="team-hero__image-placeholder">👩‍💻</div>
            )}
          </div>
        </div>
      </section>

      {/* ===== 2 · OFFICERS ===== */}
      <SectionWrapper>
        <h2 className="cursive-title team-section-heading" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {officersHeading}
        </h2>

        {/* Co-Presidents — 2 cards centered, larger */}
        <div className="officers-grid officers-grid--copres">
          {coPresidents.map((o) => (
            <TeamCard key={o.name} officer={o} large />
          ))}
        </div>

        {/* Directors — 4-column grid */}
        <div className="officers-grid officers-grid--directors">
          {directors.map((o) => (
            <TeamCard key={o.name} officer={o} />
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · COMMITTEES ===== */}
      <SectionWrapper alt className="committees-section">
        <h2 className="cursive-title team-section-heading" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {committeesHeading}
        </h2>

        <div className="committees-grid">
          {committees.map((c) => (
            <CommitteeCard key={c.name} committee={c} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
