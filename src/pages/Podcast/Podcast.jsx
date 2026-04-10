import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import Button from '../../components/Button/Button';
import { podcastData } from '../../data/siteData';
import './Podcast.css';

export default function Podcast() {
  const {
    title,
    tagline,
    heroDescription,
    ctaLabel,
    ctaLink,
    highlights,
    featured,
    episodes,
  } = podcastData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <section className="podcast-hero">
        {/* blobs */}
        <div className="podcast-hero__bg">
          <span className="podcast-hero__blob podcast-hero__blob--1" />
          <span className="podcast-hero__blob podcast-hero__blob--2" />
        </div>

        <div className="podcast-hero__inner">
          {/* text */}
          <div className="podcast-hero__text">
            <span className="podcast-hero__badge">🎙️ {tagline}</span>
            <h1 className="podcast-hero__title">
              <span>{title}</span>
            </h1>
            <p className="podcast-hero__desc">{heroDescription}</p>
            <div className="podcast-hero__actions">
              <Button to={ctaLink} size="lg">
                {ctaLabel}
              </Button>
              <Button variant="secondary" to="/support" size="lg">
                Be a Guest
              </Button>
            </div>
          </div>

          {/* cover art */}
          <div className="podcast-hero__cover-wrapper">
            <div className="podcast-hero__cover">
              <div className="podcast-hero__cover-placeholder">
                <span className="podcast-hero__cover-emoji">🎧</span>
                <span className="podcast-hero__cover-label">{title}</span>
              </div>
              {/* Float decorations */}
              <span className="podcast-hero__float podcast-hero__float--1" />
              <span className="podcast-hero__float podcast-hero__float--2" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2 · HIGHLIGHTS ===== */}
      <SectionWrapper>
        <div className="podcast-highlights">
          {highlights.map((h) => (
            <div
              key={h.label}
              className={`podcast-highlight-card podcast-highlight-card--${h.accent}`}
            >
              <div className="podcast-highlight-card__icon">{h.icon}</div>
              <p className="podcast-highlight-card__number">{h.number}</p>
              <p className="podcast-highlight-card__label">{h.label}</p>
              <p className="podcast-highlight-card__desc">{h.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · FEATURED / LATEST EPISODE ===== */}
      <SectionWrapper alt>
        <div className="podcast-featured__heading">
          <SectionHeading
            label="Latest Episode"
            title="Watch our past episodes"
            description="Tune in to hear powerful conversations with women in tech, informatics, and beyond."
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
          label="Episode Archive"
          title="More episodes to explore"
          description="Catch up on previous conversations and discover new perspectives."
        />

        <div className="podcast-gallery__grid">
          {episodes.map((ep) => (
            <div key={ep.id} className="podcast-gallery-card">
              <div className="podcast-gallery-card__thumb">
                {ep.image ? (
                  <img src={ep.image} alt={ep.title} />
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
          title="Have a story to share?"
          text="We're always looking for inspiring guests. Reach out if you'd like to be featured on the WINFO Podcast."
          btnLabel="Contact Us"
          btnTo="/support"
        />
      </SectionWrapper>
    </>
  );
}
