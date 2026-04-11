import { Link } from 'react-router-dom';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PageHero from '../../components/PageHero/PageHero';
import { CTABanner, AccentCard, JoinCTACard } from '../../components/Cards';
import Button from '../../components/Buttons/Buttons';
import { membershipData } from '../../data/membershipData';
import './Membership.css';

export default function Membership() {
  const {
    title,
    tagline,
    heroDescription,
    ctaLabel,
    ctaLink,
    secondaryCtaLabel,
    secondaryCtaLink,
    midCta,
    benefits,
    benefitsHeading,
    joinCta,
    lowerInfo,
    bottomCta,
  } = membershipData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <PageHero
        layout="split"
        badge={`💜 ${tagline}`}
        title={<span>{title}</span>}
        description={heroDescription}
        actions={[
          { label: ctaLabel, href: ctaLink },
          { label: secondaryCtaLabel, to: secondaryCtaLink, variant: 'secondary' },
        ]}
        className="membership-hero"
      >
        {/* Hero image placeholder */}
        <div className="membership-hero__image">
          <div className="membership-hero__image-placeholder">
            <span className="membership-hero__image-emoji">👩‍💻</span>
            <span className="membership-hero__image-label">WINFO Community</span>
          </div>
          <span className="membership-hero__float membership-hero__float--1" aria-hidden="true" />
          <span className="membership-hero__float membership-hero__float--2" aria-hidden="true" />
        </div>
      </PageHero>

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
          label={benefitsHeading.label}
          title={benefitsHeading.title}
          description={benefitsHeading.description}
        />

        <div className="membership-benefits">
          {benefits.map((b) => (
            <AccentCard
              key={b.title}
              icon={b.icon}
              title={b.title}
              text={b.description}
              accent={b.accent}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 4 · READY TO JOIN CTA ===== */}
      <SectionWrapper alt>
        <JoinCTACard
          emoji={joinCta.emoji}
          title={joinCta.title}
          description={joinCta.description}
          btnLabel={ctaLabel}
          btnHref={ctaLink}
        />
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
          title={bottomCta.title}
          text={bottomCta.text}
          btnLabel={bottomCta.btnLabel}
          btnTo={bottomCta.btnTo}
        />
      </SectionWrapper>
    </>
  );
}
