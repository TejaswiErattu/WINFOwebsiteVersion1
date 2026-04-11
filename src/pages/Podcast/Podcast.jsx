import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PageHero from '../../components/PageHero/PageHero';
import { EpisodeCard, CTABanner, AccentCard } from '../../components/Cards';
import { podcastData } from '../../data/podcastData';
import './Podcast.css';

export default function Podcast() {
  const {
    title,
    tagline,
    heroDescription,
    ctaLabel,
    ctaLink,
    secondaryCtaLabel,
    secondaryCtaLink,
    highlights,
    featured,
    episodes,
    featuredHeading,
    archiveHeading,
    ctaBanner,
  } = podcastData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <PageHero
        layout="split"
        badge={`🎙️ ${tagline}`}
        title={<span>{title}</span>}
        description={heroDescription}
        actions={[
          { label: ctaLabel, to: ctaLink },
          { label: secondaryCtaLabel, to: secondaryCtaLink, variant: 'secondary' },
        ]}
        className="podcast-hero"
      >
        {/* Cover art */}
        <div className="podcast-hero__cover">
          <div className="podcast-hero__cover-placeholder">
            <span className="podcast-hero__cover-emoji">🎧</span>
            <span className="podcast-hero__cover-label">{title}</span>
          </div>
          <span className="podcast-hero__float podcast-hero__float--1" />
          <span className="podcast-hero__float podcast-hero__float--2" />
        </div>
      </PageHero>

      {/* ===== 2 · HIGHLIGHTS ===== */}
      <SectionWrapper>
        <div className="podcast-highlights">
          {highlights.map((h) => (
            <AccentCard
              key={h.label}
              icon={h.icon}
              accent={h.accent}
              className="podcast-highlight-card"
            >
              <p className="podcast-highlight-card__number">{h.number}</p>
              <p className="podcast-highlight-card__label">{h.label}</p>
              <p className="podcast-highlight-card__desc">{h.description}</p>
            </AccentCard>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · FEATURED / LATEST EPISODE ===== */}
      <SectionWrapper alt>
        <div className="podcast-featured__heading">
          <SectionHeading
            label={featuredHeading.label}
            title={featuredHeading.title}
            description={featuredHeading.description}
          />
        </div>

        <EpisodeCard
          tag={featured.tag}
          title={featured.title}
          guest={featured.guest}
          description={featured.description}
          image={featured.image}
        />

        {/* Static carousel dots */}
        <div className="podcast-carousel-dots">
          <span className="podcast-carousel-dot podcast-carousel-dot--active" />
          <span className="podcast-carousel-dot" />
          <span className="podcast-carousel-dot" />
          <span className="podcast-carousel-dot" />
        </div>
      </SectionWrapper>

      {/* ===== 4 · PAST EPISODES GALLERY ===== */}
      <SectionWrapper>
        <SectionHeading
          label={archiveHeading.label}
          title={archiveHeading.title}
          description={archiveHeading.description}
        />

        <div className="podcast-gallery__grid">
          {episodes.map((ep) => (
            <div key={ep.id} className="podcast-gallery-card">
              <div className="podcast-gallery-card__thumb">
                {ep.image ? (
                  <img src={ep.image} alt={ep.imageAlt || ep.title} />
                ) : (
                  '🎤'
                )}
              </div>
              <div className="podcast-gallery-card__content">
                <span className="podcast-gallery-card__tag">{ep.tag}</span>
                <h3 className="podcast-gallery-card__title">{ep.title}</h3>
                <p className="podcast-gallery-card__guest">w/ {ep.guest}</p>
                <p className="podcast-gallery-card__desc">{ep.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 5 · CTA ===== */}
      <SectionWrapper>
        <CTABanner
          title={ctaBanner.title}
          text={ctaBanner.text}
          btnLabel={ctaBanner.btnLabel}
          btnTo={ctaBanner.btnTo}
        />
      </SectionWrapper>
    </>
  );
}
