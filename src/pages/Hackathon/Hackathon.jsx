import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PageHero from '../../components/PageHero/PageHero';
import { WinnerCard, SponsorLogoGrid } from '../../components/Cards';
import GalleryGrid from '../../components/GalleryGrid/GalleryGrid';
import FAQAccordion from '../../components/FAQAccordion/FAQAccordion';
import Button from '../../components/Buttons/Buttons';
import { hackathonData } from '../../data/hackathonData';
import { faqData } from '../../data/faqData';
import { sponsorsData } from '../../data/sponsorsData';
import { winnersData } from '../../data/winnersData';
import './Hackathon.css';

export default function Hackathon() {
  const {
    title,
    tagline,
    heroDescription,
    date,
    ctaLabel,
    ctaLink,
    sideLinks,
    mission,
    gallery,
    pastHackathons,
    missionHeading,
    galleryHeading,
    winnersHeading,
    registerCta,
    faqHeading,
    sponsorsHeading,
    pastHeading,
  } = hackathonData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <PageHero
        layout="split"
        badge={`🏆 ${tagline}`}
        title={<span>{title}</span>}
        description={heroDescription}
        datePill={`📅 ${date}`}
        actions={[
          { label: ctaLabel, href: ctaLink },
          { label: 'View FAQ', href: '#faq', variant: 'secondary' },
        ]}
        className="hack-hero"
      >
        {/* Image placeholder + side nav */}
        <div className="hack-hero__image">
          <div className="hack-hero__image-placeholder">
            <span className="hack-hero__image-emoji">💻</span>
            <span className="hack-hero__image-label">WINFO Hackathon</span>
          </div>
        </div>

        <nav className="hack-hero__side-nav">
          {sideLinks.map((link) => (
            <a
              key={link.label}
              href={link.anchor}
              className="hack-hero__side-link"
            >
              <span className="hack-hero__side-link-arrow">→</span>
              {link.label}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* ===== 2 · MISSION / ABOUT ===== */}
      <SectionWrapper id="about">
        <div className="hack-mission">
          <SectionHeading
            label={missionHeading.label}
            title={missionHeading.title}
            description={missionHeading.description}
          />
          <p className="hack-mission__text">{mission}</p>
        </div>
      </SectionWrapper>

      {/* ===== 3 · GALLERY ===== */}
      <SectionWrapper alt>
        <SectionHeading
          label={galleryHeading.label}
          title={galleryHeading.title}
          description={galleryHeading.description}
        />
        <GalleryGrid items={gallery} cols={3} />
      </SectionWrapper>

      {/* ===== 4 · WINNERS ===== */}
      <SectionWrapper>
        <SectionHeading
          label={winnersHeading.label}
          title={winnersData.heading}
          description={winnersHeading.description}
        />
        <div className="hack-winners-grid">
          {winnersData.cards.map((w) => (
            <WinnerCard
              key={w.team}
              placement={w.placement}
              team={w.team}
              project={w.project}
              tier={w.tier}
              emoji={w.emoji}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 5 · REGISTER CTA ===== */}
      <section className="hack-register-cta" id="register-cta">
        <div className="hack-register-cta__bg" aria-hidden="true">
          <span className="hack-register-cta__blob hack-register-cta__blob--1" />
          <span className="hack-register-cta__blob hack-register-cta__blob--2" />
        </div>
        <div className="hack-register-cta__inner">
          <h2 className="hack-register-cta__title">{registerCta.title}</h2>
          <p className="hack-register-cta__desc">{registerCta.description}</p>
          <Button href={ctaLink} size="lg">
            {ctaLabel}
          </Button>
        </div>
      </section>

      {/* ===== 6 · FAQ ===== */}
      <SectionWrapper id="faq">
        <SectionHeading
          label={faqHeading.label}
          title={faqHeading.title}
          description={faqHeading.description}
        />
        <FAQAccordion items={faqData} />
      </SectionWrapper>

      {/* ===== 7 · SPONSORS ===== */}
      <SectionWrapper alt>
        <SectionHeading
          label={sponsorsHeading.label}
          title={sponsorsHeading.title}
          description={sponsorsHeading.description}
        />
        <SponsorLogoGrid sponsors={sponsorsData} />
      </SectionWrapper>

      {/* ===== 8 · PAST HACKATHONS ===== */}
      <SectionWrapper id="past">
        <SectionHeading
          label={pastHeading.label}
          title={pastHeading.title}
          description={pastHeading.description}
        />
        <div className="hack-past-list">
          {pastHackathons.map((ph) => (
            <div key={ph.id} className="hack-past-item">
              <div className="hack-past-item__emoji">{ph.emoji}</div>
              <div className="hack-past-item__content">
                <h3 className="hack-past-item__title">{ph.title}</h3>
                <p className="hack-past-item__excerpt">{ph.excerpt}</p>
              </div>
              <span className="hack-past-item__arrow">→</span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
