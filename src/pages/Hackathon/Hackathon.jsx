import { useState } from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import CircuitSVG from '../../components/CircuitSVG/CircuitSVG';
import { renderBold } from '../../utils/renderBold';
import { hackathonData } from '../../data/hackathonData';
import './Hackathon.css';

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
      <section className="hack-register">
        {/* Circuit decoration */}
        <div className="hack-register__circuit" aria-hidden="true">
          <CircuitSVG variant="register" />
        </div>

        {/* Pink glow */}
        <div className="hack-register__glow" aria-hidden="true" />

        <h2 className="hack-register__heading cursive-title">{registerCta.heading}</h2>

        <div className="hack-register__card">
          <p className="hack-register__card-text">{registerCta.cardText}</p>
          <form className="hack-register__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="hack-register__input"
              placeholder={registerCta.inputPlaceholder}
              aria-label="Email address"
            />
          </form>
        </div>
      </section>

      {/* ===== 5 · FAQ ===== */}
      <SectionWrapper className="hack-faq-section">
        {/* Circuit decoration on right */}
        <div className="hack-faq__circuit" aria-hidden="true">
          <CircuitSVG variant="faq" />
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
