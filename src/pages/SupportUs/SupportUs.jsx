import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PageHero from '../../components/PageHero/PageHero';
import { AccentCard, JoinCTACard } from '../../components/Cards';
import Button from '../../components/Buttons/Buttons';
import { supportData } from '../../data/supportData';
import './SupportUs.css';

export default function SupportUs() {
  const {
    title,
    tagline,
    heroDescription,
    ctaLabel,
    ctaLink,
    secondaryCtaLabel,
    secondaryCtaLink,
    whySupportHeading,
    otherWaysHeading,
    bottomCta,
    whySupport,
    hackathon,
    otherWays,
  } = supportData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <PageHero
        layout="split"
        badge={`🤝 ${tagline}`}
        title={<span>{title}</span>}
        description={heroDescription}
        actions={[
          { label: ctaLabel, href: ctaLink },
          { label: secondaryCtaLabel, to: secondaryCtaLink, variant: 'secondary' },
        ]}
        className="support-hero"
      >
        {/* Hero image placeholder */}
        <div className="support-hero__image">
          <div className="support-hero__image-placeholder">
            <span className="support-hero__image-emoji">💜</span>
            <span className="support-hero__image-label">Support WINFO</span>
          </div>
          <span className="support-hero__float support-hero__float--1" aria-hidden="true" />
          <span className="support-hero__float support-hero__float--2" aria-hidden="true" />
        </div>
      </PageHero>

      {/* ===== 2 · WHY SUPPORT US ===== */}
      <SectionWrapper>
        <SectionHeading
          label={whySupportHeading.label}
          title={whySupportHeading.title}
          description={whySupportHeading.description}
        />

        <div className="support-why-cards">
          {whySupport.map((card) => (
            <AccentCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.description}
              accent={card.accent}
            />
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
            <span className="support-hackathon__label">{hackathon.label}</span>
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
                {hackathon.btnLabel}
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 4 · OTHER WAYS TO SUPPORT ===== */}
      <SectionWrapper>
        <SectionHeading
          label={otherWaysHeading.label}
          title={otherWaysHeading.title}
          description={otherWaysHeading.description}
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
        <JoinCTACard
          emoji={bottomCta.emoji}
          title={bottomCta.title}
          description={bottomCta.description}
          btnLabel={bottomCta.btnLabel}
          btnHref={ctaLink}
        />
      </SectionWrapper>
    </>
  );
}
