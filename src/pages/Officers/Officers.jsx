import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import CircuitSVG from '../../components/CircuitSVG/CircuitSVG';
import Button from '../../components/Buttons/Buttons';
import SubTabs from '../../components/SubTabs/SubTabs';
import { TEAM_TABS } from '../../data/navLinks';
import { renderBold } from '../../utils/renderBold';
import { officersData } from '../../data/officersData';
import { missionData, storyData } from '../../data/aboutData';
import { pastBoards, pastBoardsHeading, pastBoardsIntro } from '../../data/pastBoardsData';
import './Officers.css';

/* Opening one past board closes the others */
function closeOtherBoards(e) {
  const opened = e.currentTarget;
  if (!opened.open) return;
  opened.parentElement?.querySelectorAll('details[open]').forEach((d) => {
    if (d !== opened) d.open = false;
  });
}

/* Inline LinkedIn SVG icon */
const LinkedInIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="officer-card__linkedin-svg">
    <path d="M4.94 2.5a1.67 1.67 0 1 1-3.34 0 1.67 1.67 0 0 1 3.34 0ZM1.8 5.5h2.95V17H1.8V5.5Zm5.2 0h2.83v1.57h.04a3.1 3.1 0 0 1 2.8-1.54c2.99 0 3.54 1.97 3.54 4.52V17h-2.94v-5.77c0-1.38-.02-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05V17H7V5.5Z" />
  </svg>
);

/**
 * Officer card. When the officer has a LinkedIn, the whole card is the link.
 */
function TeamCard({ officer, large }) {
  const { name, role, image, linkedin, year, focusArea, funFact } = officer;
  const Tag = linkedin ? 'a' : 'div';
  const linkProps = linkedin
    ? { href: linkedin, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${name}, ${role}: LinkedIn profile (opens in a new tab)` }
    : {};

  return (
    <Tag className={`officer-card ${large ? 'officer-card--large' : ''} ${linkedin ? 'officer-card--link' : ''}`} {...linkProps}>
      {/* Photo */}
      <div className="officer-card__portrait">
        {image ? (
          <img src={image} alt="" loading="lazy" decoding="async" />
        ) : (
          <div className="officer-card__placeholder" />
        )}
        {linkedin && (
          <span className="officer-card__linkedin" aria-hidden="true">
            <LinkedInIcon />
          </span>
        )}
      </div>

      {/* Info */}
      <div className="officer-card__body">
        <h3 className="officer-card__name">{name}</h3>
        <p className="officer-card__role">{role}</p>
        {year && <p className="officer-card__detail"><strong>year:</strong> {year}</p>}
        {focusArea && <p className="officer-card__detail"><strong>major:</strong> {focusArea}</p>}
        {funFact && <p className="officer-card__detail"><strong>fun fact:</strong> {funFact}</p>}
      </div>
    </Tag>
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
    committeesTeaser,
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
            <h1 className="cursive-title page-title">{title}</h1>
            <p className="team-hero__text">{heroBody}</p>
            <p className="team-hero__text">{heroBodySecondary}</p>
            <SubTabs tabs={TEAM_TABS} label="Our Team sections" />
          </div>

          <div className="team-hero__image-frame">
            {heroImage ? (
              <img src={heroImage} alt={heroImageAlt} />
            ) : (
              <div className="team-hero__image-placeholder" />
            )}
          </div>
        </div>
      </section>

      {/* ===== 2 · WHO WE ARE (edit in data/aboutData.js) ===== */}
      <SectionWrapper>
        <div className="about-who">
          <div className="about-who__content">
            <h2 className="about-who__title cursive-title">{missionData.title}</h2>
            <p className="about-who__text">{renderBold(missionData.body)}</p>
            <p className="about-who__text">{renderBold(missionData.bodySecondary)}</p>
            <p className="about-who__text">{renderBold(missionData.bodyTertiary)}</p>
            <Button href={missionData.ctaLink} variant="accent" className="about-who__btn">
              {missionData.ctaLabel}
            </Button>
          </div>
          <div className="about-who__image-frame">
            <img src={missionData.image} alt={missionData.imageAlt} loading="lazy" decoding="async" />
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 3 · OUR STORY ===== */}
      <SectionWrapper alt>
        <div className="about-story">
          <div className="about-story__image-frame">
            <img src={storyData.image} alt={storyData.imageAlt} loading="lazy" decoding="async" />
          </div>
          <div className="about-story__content">
            <h2 className="about-story__title cursive-title">{storyData.title}</h2>
            <p className="about-story__text">{renderBold(storyData.body)}</p>
            <p className="impact-stat about-story__stat">{renderBold(storyData.statHighlight)}</p>
            <p className="about-story__text">{renderBold(storyData.bodySecondary)}</p>
            <p className="about-story__text">{renderBold(storyData.bodyTertiary)}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 4 · OFFICERS ===== */}
      <SectionWrapper>
        <h2 className="cursive-title section-title--center team-section-heading">
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

        {/* Committees live on their own page; this keeps the link to the board clear */}
        <div className="team-committees-teaser">
          <p>{committeesTeaser}</p>
          <Button to="/committees" variant="primary">meet the committees</Button>
        </div>
      </SectionWrapper>


      {/* ===== 5 · PAST BOARDS (edit in data/pastBoardsData.js) ===== */}
      <SectionWrapper alt>
        <h2 className="cursive-title section-title--center">{pastBoardsHeading}</h2>
        <p className="alumni-past__intro">{pastBoardsIntro}</p>
        <div className="alumni-past">
          {pastBoards.map((b, i) => (
            <details
              key={b.year}
              className="alumni-past__year"
              name="past-boards"            /* browsers: only one open at a time */
              open={i === 0}
              onToggle={closeOtherBoards}   /* same behavior for older browsers */
            >
              <summary>{b.year} board</summary>
              <ul>
                {b.members.map((m) => (
                  <li key={`${m.name}-${m.role}`}>
                    <span className="alumni-past__name">{m.name}</span>
                    <span className="alumni-past__role">{m.role}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
