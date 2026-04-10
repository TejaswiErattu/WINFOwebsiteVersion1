import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import { supportData } from '../../data/siteData';
import './Support.css';

export default function Support() {
  const {
    title,
    tagline,
    heroDescription,
    ctaLabel,
    ctaLink,
    whySupport,
    hackathon,
    otherWays,
  } = supportData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <section className="support-hero">
        <div className="support-hero__bg" aria-hidden="true">
          <span className="support-hero__blob support-hero__blob--1" />
          <span className="support-hero__blob support-hero__blob--2" />
        </div>

        <div className="support-hero__inner">
          {/* text */}
          <div className="support-hero__text">
            <span className="support-hero__badge">🤝 {tagline}</span>
            <h1 className="support-hero__title">
              <span>{title}</span>
            </h1>
            <p className="support-hero__desc">{heroDescription}</p>
            <div className="support-hero__actions">
              <Button href={ctaLink} size="lg">
                {ctaLabel}
              </Button>
              <Button variant="secondary" to="/membership" size="lg">
                Become a Member
              </Button>
            </div>
          </div>

          {/* image */}
          <div className="support-hero__image-wrapper">
            <div className="support-hero__image">
              <div className="support-hero__image-placeholder">
                <span className="support-hero__image-emoji">💜</span>
                <span className="support-hero__image-label">Support WINFO</span>
              </div>
              <span className="support-hero__float support-hero__float--1" aria-hidden="true" />
              <span className="support-hero__float support-hero__float--2" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2 · WHY SUPPORT US ===== */}
      <SectionWrapper>
        <SectionHeading
          label="Why Support Us?"
          title="Your Impact Matters"
          description="Every contribution helps us build a stronger, more inclusive tech community at UW."
        />

        <div className="support-why-cards">
          {whySupport.map((card) => (
            <div
              key={card.title}
              className={`support-why-card support-why-card--${card.accent}`}
            >
              <div className="support-why-card__icon">{card.icon}</div>
              <h3 className="support-why-card__title">{card.title}</h3>
              <p className="support-why-card__desc">{card.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · HACKATHON SUPPORT ===== */}
      <SectionWrapper alt>
        <div className="support-hackathon">
          {/* image */}
          <div className="support-hackathon__image">
            <div className="support-hackathon__image-placeholder">
              <span className="support-hackathon__image-emoji">🏆</span>
              <span className="support-hackathon__image-label">WINFO Hackathon</span>
            </div>
          </div>

          {/* content */}
          <div className="support-hackathon__content">
            <span className="support-hackathon__label">🎪 Hackathon Sponsorship</span>
            <h2 className="support-hackathon__title">{hackathon.title}</h2>
            <p className="support-hackathon__desc">{hackathon.description}</p>

            <div className="support-hackathon__highlights">
              {hackathon.highlights.map((h) => (
                <div key={h.text} className="support-hackathon__highlight">
                  <span className="support-hackathon__highlight-icon">{h.icon}</span>
                  {h.text}
                </div>
              ))}
            </div>

            <div>
              <Button href={ctaLink} size="lg">
                Sponsor the Hackathon
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 4 · OTHER WAYS TO SUPPORT ===== */}
      <SectionWrapper>
        <SectionHeading
          label="More Ways to Help"
          title="Support us in other ways"
          description="Not every contribution is monetary — here are more ways to make a difference."
        />

        <div className="support-other-grid">
          {otherWays.map((item) => (
            <div key={item.title} className="support-other-card">
              <div className="support-other-card__icon">{item.icon}</div>
              <h3 className="support-other-card__title">{item.title}</h3>
              <p className="support-other-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 5 · BOTTOM CTA ===== */}
      <SectionWrapper alt>
        <div className="support-bottom-cta">
          <div className="support-bottom-cta__card">
            <div className="support-bottom-cta__emoji">💌</div>
            <h2 className="support-bottom-cta__title">Ready to Partner?</h2>
            <p className="support-bottom-cta__desc">
              We'd love to discuss how we can work together. Reach out and our
              sponsorship team will get back to you within 48 hours.
            </p>
            <Button href={ctaLink} size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
