import { useState } from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import { hackathonData } from '../../data/hackathonData';
import './Hackathon.css';

/**
 * Render text with **bold** markdown-style markers.
 */
function renderBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

export default function Hackathon() {
  const {
    title,
    heroPhotos,
    tagline,
    aboutBody,
    challengeHeading,
    challengeBody,
    beginnerHeading,
    beginnerBody,
    ctaLabel,
    ctaLink,
    statsHeading,
    stats,
    winnersHeading,
    winners,
    registerCta,
    faqHeading,
    faqs,
    sponsorHeading,
    sponsorBody,
    sponsorBenefits,
    sponsorCtaLabel,
    sponsorCtaLink,
    pastSponsorsHeading,
    pastSponsors,
    pastHackathonsHeading,
    pastHackathons,
  } = hackathonData;

  /* FAQ accordion state */
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq((prev) => (prev === i ? null : i));

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <section className="hack-hero">
        <div className="hack-hero__inner">
          <h1 className="cursive-title">{title}</h1>

          {/* 3-photo strip */}
          <div className="hack-hero__photos">
            {heroPhotos.map((p, i) => (
              <div key={i} className="hack-hero__photo">
                {p.src ? (
                  <img src={p.src} alt={p.alt} />
                ) : (
                  <div className="hack-hero__photo-placeholder" />
                )}
              </div>
            ))}
          </div>

          {/* About blurbs */}
          <div className="hack-hero__about">
            <h2 className="hack-hero__tagline">{tagline}</h2>
            <p className="hack-hero__body">{aboutBody}</p>

            <h3 className="hack-hero__sub-heading">{challengeHeading}</h3>
            <p className="hack-hero__body">{challengeBody}</p>

            <h3 className="hack-hero__sub-heading">{beginnerHeading}</h3>
            <p className="hack-hero__body">{beginnerBody}</p>

            <Button href={ctaLink} variant="accent" className="hack-hero__cta">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* ===== 2 · STATS ===== */}
      <SectionWrapper>
        <h2 className="cursive-title hack-stats__heading">{statsHeading}</h2>
        <div className="hack-stats">
          {stats.map((s, i) => (
            <div key={i} className={`hack-stat hack-stat--${i}`}>
              <span className="hack-stat__number">{s.number}</span>
              <span className="hack-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · PREVIOUS WINNERS ===== */}
      <SectionWrapper>
        <div className="hack-winners-card">
          <h2 className="cursive-title hack-winners__heading">{winnersHeading}</h2>
          <div className="hack-winners-grid">
            {winners.map((w) => (
              <div key={w.category} className="hack-winner">
                <p className="hack-winner__category">{w.category}</p>
                <div className="hack-winner__image">
                  {w.image ? (
                    <img src={w.image} alt={w.category} />
                  ) : (
                    <div className="hack-winner__placeholder" />
                  )}
                </div>
                <a href={w.link} className="hack-winner__link">learn more</a>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 4 · REGISTER CTA ===== */}
      <SectionWrapper alt className="hack-register-section">
        {/* Circuit decoration */}
        <div className="hack-register__circuit" aria-hidden="true">
          <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="100" y1="0" x2="100" y2="80" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="80" x2="160" y2="140" stroke="currentColor" strokeWidth="1.5" />
            <line x1="160" y1="140" x2="160" y2="220" stroke="currentColor" strokeWidth="1.5" />
            <line x1="160" y1="220" x2="100" y2="280" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="80" r="4" fill="currentColor" />
            <circle cx="160" cy="140" r="5" fill="currentColor" />
            <circle cx="160" cy="220" r="4" fill="currentColor" />
            <circle cx="100" cy="280" r="5" fill="currentColor" />
          </svg>
        </div>
        <div className="hack-register-cta">
          <p className="hack-register-cta__text cursive-title">{registerCta.text}</p>
          <Button href={registerCta.btnLink} variant="accent" size="lg" className="hack-register-cta__btn">
            {registerCta.btnLabel}
          </Button>
        </div>
      </SectionWrapper>

      {/* ===== 5 · FAQ ===== */}
      <SectionWrapper className="hack-faq-section">
        {/* Circuit decoration on right */}
        <div className="hack-faq__circuit" aria-hidden="true">
          <svg viewBox="0 0 260 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="0" x2="40" y2="100" stroke="currentColor" strokeWidth="1" />
            <line x1="40" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="1" />
            <line x1="140" y1="100" x2="140" y2="200" stroke="currentColor" strokeWidth="1" />
            <line x1="140" y1="200" x2="60" y2="200" stroke="currentColor" strokeWidth="1" />
            <line x1="60" y1="200" x2="60" y2="300" stroke="currentColor" strokeWidth="1" />
            <line x1="60" y1="300" x2="180" y2="300" stroke="currentColor" strokeWidth="1" />
            <line x1="180" y1="300" x2="180" y2="400" stroke="currentColor" strokeWidth="1" />
            <line x1="180" y1="400" x2="100" y2="400" stroke="currentColor" strokeWidth="1" />
            <line x1="100" y1="400" x2="100" y2="500" stroke="currentColor" strokeWidth="1" />
            <circle cx="40" cy="100" r="4" fill="currentColor" />
            <circle cx="140" cy="100" r="3" fill="currentColor" />
            <circle cx="140" cy="200" r="4" fill="currentColor" />
            <circle cx="60" cy="200" r="3" fill="currentColor" />
            <circle cx="60" cy="300" r="4" fill="currentColor" />
            <circle cx="180" cy="300" r="3" fill="currentColor" />
            <circle cx="180" cy="400" r="4" fill="currentColor" />
            <circle cx="100" cy="400" r="3" fill="currentColor" />
          </svg>
        </div>

        <h2 className="cursive-title hack-faq__heading">{faqHeading}</h2>

        <div className="hack-faq">
          {faqs.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className={`hack-faq__item ${isOpen ? 'hack-faq__item--open' : ''}`}>
                <button className="hack-faq__trigger" onClick={() => toggleFaq(i)} aria-expanded={isOpen}>
                  <span className="hack-faq__question">{item.question}</span>
                  <span className="hack-faq__chevron" aria-hidden="true">
                    {isOpen ? '∧' : '∨'}
                  </span>
                </button>
                {isOpen && (
                  <div className="hack-faq__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ===== 6 · SPONSOR THE HACKATHON ===== */}
      <SectionWrapper alt className="hack-sponsor-section">
        <h2 className="cursive-title hack-sponsor__heading">{sponsorHeading}</h2>
        <p className="hack-sponsor__body">{renderBold(sponsorBody)}</p>

        <div className="hack-sponsor-benefits">
          {sponsorBenefits.map((b, i) => (
            <div key={i} className={`hack-sponsor-benefit hack-sponsor-benefit--${i}`}>
              <h3 className="hack-sponsor-benefit__title">{b.title}</h3>
              <p className="hack-sponsor-benefit__text">{b.text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button href={sponsorCtaLink} variant="accent" size="lg">
            {sponsorCtaLabel}
          </Button>
        </div>
      </SectionWrapper>

      {/* ===== 7 · PAST SPONSORS ===== */}
      <SectionWrapper>
        <h2 className="cursive-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {pastSponsorsHeading}
        </h2>
        <div className="hack-past-sponsors">
          {pastSponsors.map((name) => (
            <div key={name} className="hack-past-sponsor">
              <span className="hack-past-sponsor__name">{name}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 8 · PAST HACKATHONS ===== */}
      <SectionWrapper>
        <h2 className="cursive-title hack-past__heading">{pastHackathonsHeading}</h2>
        <div className="hack-past-list">
          {pastHackathons.map((ph) => (
            <div key={ph.year} className="hack-past-item">
              <span className="hack-past-item__theme">{ph.theme}</span>
              <span className="hack-past-item__year">{ph.year}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
