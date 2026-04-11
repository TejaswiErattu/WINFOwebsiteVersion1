import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import { membershipData } from '../../data/membershipData';
import './Membership.css';

/* Inline SVG icons matching the Figma perk cards */
const perkIcons = {
  mail: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="membership-perk__svg">
      <rect x="6" y="12" width="36" height="24" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M6 16l18 12 18-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="membership-perk__svg">
      <rect x="8" y="8" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M16 24l5 5 11-11" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="membership-perk__svg">
      <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="38" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M42 34c0-4.418-2.686-8-6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="10" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M6 34c0-4.418 2.686-8 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
};

/**
 * Render text with **bold** markdown-style markers.
 */
function renderBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

export default function Membership() {
  const {
    title,
    heroBody,
    heroBodySecondary,
    heroBodyTertiary,
    ctaLabel,
    ctaLink,
    heroImage,
    heroImageAlt,
    perksHeading,
    perksSubtitle,
    perks,
    bottomCta,
  } = membershipData;

  return (
    <>
      {/* ===== 1 · HERO — "membership" ===== */}
      <section className="membership-hero">
        {/* Circuit decoration */}
        <div className="membership-hero__circuit" aria-hidden="true">
          <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="200" y1="60" x2="40" y2="60" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="140" x2="80" y2="140" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="220" x2="20" y2="220" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="300" x2="60" y2="300" stroke="currentColor" strokeWidth="1" />
            <line x1="120" y1="60" x2="120" y2="140" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="140" x2="80" y2="220" stroke="currentColor" strokeWidth="1" />
            <line x1="140" y1="220" x2="140" y2="300" stroke="currentColor" strokeWidth="1" />
            <circle cx="120" cy="60" r="3" fill="currentColor" />
            <circle cx="40" cy="60" r="4" fill="currentColor" />
            <circle cx="80" cy="140" r="4" fill="currentColor" />
            <circle cx="20" cy="220" r="3" fill="currentColor" />
            <circle cx="140" cy="300" r="4" fill="currentColor" />
            <circle cx="60" cy="300" r="3" fill="currentColor" />
          </svg>
        </div>

        <div className="membership-hero__inner">
          {/* Text side */}
          <div className="membership-hero__content">
            <h1 className="cursive-title">{title}</h1>
            <p className="membership-hero__text">{heroBody}</p>
            <p className="membership-hero__text">{heroBodySecondary}</p>
            <p className="membership-hero__text">{heroBodyTertiary}</p>
            <Button href={ctaLink} variant="accent" className="membership-hero__btn">
              {ctaLabel}
            </Button>
          </div>

          {/* Image side */}
          <div className="membership-hero__image-frame">
            {heroImage ? (
              <img src={heroImage} alt={heroImageAlt} />
            ) : (
              <div className="membership-hero__image-placeholder">👩‍💻</div>
            )}
          </div>
        </div>
      </section>

      {/* ===== 2 · MEMBERSHIP PERKS ===== */}
      <SectionWrapper alt className="membership-perks-section">
        <h2 className="cursive-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {perksHeading}
        </h2>
        <p className="membership-perks__subtitle">{perksSubtitle}</p>

        <div className="membership-perks">
          {perks.map((perk) => (
            <div key={perk.title} className={`membership-perk membership-perk--${perk.accent}`}>
              <div className="membership-perk__icon">
                {perkIcons[perk.icon]}
              </div>
              <h3 className="membership-perk__title cursive-title">{perk.title}</h3>
              <p className="membership-perk__text">{renderBold(perk.text)}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · BOTTOM CTA — "ready to take the leap?" ===== */}
      <SectionWrapper>
        <div className="membership-bottom-cta">
          <p className="membership-bottom-cta__text cursive-title">{bottomCta.text}</p>
          <Button href={bottomCta.btnLink} variant="accent" size="lg" className="membership-bottom-cta__btn">
            {bottomCta.btnLabel}
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
