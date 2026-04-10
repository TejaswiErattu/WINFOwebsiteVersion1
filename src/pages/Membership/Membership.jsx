import { Link } from 'react-router-dom';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTABanner from '../../components/CTABanner/CTABanner';
import Button from '../../components/Button/Button';
import { membershipData } from '../../data/siteData';
import './Membership.css';

export default function Membership() {
  const {
    title,
    tagline,
    heroDescription,
    ctaLabel,
    ctaLink,
    midCta,
    benefits,
    lowerInfo,
  } = membershipData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <section className="membership-hero">
        <div className="membership-hero__bg" aria-hidden="true">
          <span className="membership-hero__blob membership-hero__blob--1" />
          <span className="membership-hero__blob membership-hero__blob--2" />
        </div>

        <div className="membership-hero__inner">
          {/* text */}
          <div className="membership-hero__text">
            <span className="membership-hero__badge">💜 {tagline}</span>
            <h1 className="membership-hero__title">
              <span>{title}</span>
            </h1>
            <p className="membership-hero__desc">{heroDescription}</p>
            <div className="membership-hero__actions">
              <Button href={ctaLink} size="lg">
                {ctaLabel}
              </Button>
              <Button variant="secondary" to="/events" size="lg">
                See Events
              </Button>
            </div>
          </div>

          {/* image */}
          <div className="membership-hero__image-wrapper">
            <div className="membership-hero__image">
              <div className="membership-hero__image-placeholder">
                <span className="membership-hero__image-emoji">👩‍💻</span>
                <span className="membership-hero__image-label">WINFO Community</span>
              </div>
              <span className="membership-hero__float membership-hero__float--1" aria-hidden="true" />
              <span className="membership-hero__float membership-hero__float--2" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2 · MID-CTA BAND ===== */}
      <section className="membership-mid-cta">
        <div className="membership-mid-cta__inner">
          <p className="membership-mid-cta__text">
            {midCta.line1}{' '}
            <span className="membership-mid-cta__pill">{midCta.highlight}</span>{' '}
            {midCta.line2}{' '}
            <span className="membership-mid-cta__pill membership-mid-cta__pill--pink">
              {midCta.highlight2}
            </span>{' '}
            {midCta.line3}
          </p>
        </div>
      </section>

      {/* ===== 3 · BENEFITS ===== */}
      <SectionWrapper>
        <SectionHeading
          label="Why Join?"
          title="Member Benefits"
          description="Everything you need to grow, connect, and thrive in the tech community."
        />

        <div className="membership-benefits">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`membership-benefit-card membership-benefit-card--${b.accent}`}
            >
              <div className="membership-benefit-card__icon">{b.icon}</div>
              <h3 className="membership-benefit-card__title">{b.title}</h3>
              <p className="membership-benefit-card__desc">{b.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 4 · READY TO JOIN CTA ===== */}
      <SectionWrapper alt>
        <div className="membership-join-cta">
          <div className="membership-join-cta__card">
            <div className="membership-join-cta__emoji">🎉</div>
            <h2 className="membership-join-cta__title">Ready to Join?</h2>
            <p className="membership-join-cta__desc">
              Membership is free and open to all students. Sign up in seconds and
              start exploring everything WINFO has to offer.
            </p>
            <Button href={ctaLink} size="lg">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 5 · LOWER INFO ===== */}
      <SectionWrapper>
        <div className="membership-lower">
          <div className="membership-lower__body">
            <h2 className="membership-lower__heading">{lowerInfo.heading}</h2>
            {lowerInfo.paragraphs.map((p, i) => (
              <p key={i} className="membership-lower__paragraph">{p}</p>
            ))}
          </div>

          <aside className="membership-lower__sidebar">
            <h3 className="membership-lower__sidebar-title">Explore WINFO</h3>
            <ul className="membership-lower__links">
              {lowerInfo.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="membership-lower__link">
                    <span className="membership-lower__link-arrow">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionWrapper>

      {/* ===== 6 · BOTTOM CTA ===== */}
      <SectionWrapper>
        <CTABanner
          title="Questions about membership?"
          text="We'd love to hear from you — reach out anytime."
          btnLabel="Contact Us"
          btnTo="/support"
        />
      </SectionWrapper>
    </>
  );
}
