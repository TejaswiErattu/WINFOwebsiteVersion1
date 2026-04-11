import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { supportData } from '../../data/supportData';
import './SupportUs.css';

export default function SupportUs() {
  const {
    title,
    heroText,
    heroImage,
    whyTitle,
    whyImage,
    whyText,
    involvedHeading,
    involvedCards,
    ctaLabel,
    ctaLink,
  } = supportData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <section className="support-hero">
        {/* Circuit decoration */}
        <div className="support-hero__circuit" aria-hidden="true">
          <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="100" y1="0" x2="100" y2="120" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="120" x2="180" y2="120" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="120" x2="100" y2="260" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="260" x2="160" y2="260" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="260" x2="100" y2="400" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="120" r="5" fill="currentColor" />
            <circle cx="100" cy="260" r="5" fill="currentColor" />
            <circle cx="180" cy="120" r="4" fill="currentColor" />
            <circle cx="160" cy="260" r="4" fill="currentColor" />
            <circle cx="100" cy="190" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div className="support-hero__inner">
          <div className="support-hero__text">
            <h1 className="support-hero__title cursive-title">{title}</h1>
            {heroText.map((p, i) => (
              <p key={i} className="support-hero__paragraph">{p}</p>
            ))}
          </div>

          <div className="support-hero__image">
            {heroImage ? (
              <img src={heroImage} alt="WINFO community" />
            ) : (
              <div className="support-hero__placeholder" />
            )}
          </div>
        </div>
      </section>

      {/* ===== 2 · WHY SUPPORT US ===== */}
      <SectionWrapper>
        <div className="support-why">
          <div className="support-why__image">
            {whyImage ? (
              <img src={whyImage} alt="WINFO members" />
            ) : (
              <div className="support-why__placeholder" />
            )}
          </div>

          <div className="support-why__content">
            <h2 className="support-why__title cursive-title">{whyTitle}</h2>
            {whyText.map((p, i) => (
              <p
                key={i}
                className="support-why__paragraph"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 3 · GET INVOLVED ===== */}
      <section className="support-involved">
        {/* Circuit decoration */}
        <div className="support-involved__circuit" aria-hidden="true">
          <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="100" y1="0" x2="100" y2="150" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="150" x2="60" y2="150" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="150" x2="100" y2="300" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="300" x2="140" y2="300" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="300" x2="100" y2="400" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="150" r="5" fill="currentColor" />
            <circle cx="100" cy="300" r="5" fill="currentColor" />
            <circle cx="60" cy="150" r="3" fill="currentColor" />
            <circle cx="140" cy="300" r="3" fill="currentColor" />
          </svg>
        </div>

        <h2 className="support-involved__heading cursive-title">{involvedHeading}</h2>

        <div className="support-involved__cards">
          {involvedCards.map((card, i) => (
            <div className={`support-involved-card support-involved-card--${card.accent}`} key={i}>
              <h3 className="support-involved-card__title">
                {card.title.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j === 0 && <br />}
                  </span>
                ))}
              </h3>
              <p className="support-involved-card__body">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Connect CTA button */}
        <a href={ctaLink} className="support-involved__cta">
          {/* Mail icon */}
          <svg className="support-involved__cta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {ctaLabel}
        </a>
      </section>
    </>
  );
}
