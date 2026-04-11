import { useState } from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import { podcastData } from '../../data/podcastData';
import './Podcast.css';

export default function Podcast() {
  const {
    title,
    heroBody,
    heroBodySecondary,
    ctaLabel,
    ctaLink,
    heroImage,
    heroImageAlt,
    infoCards,
    guestCta,
    episodesHeading,
    episodes,
  } = podcastData;

  /* Simple carousel state */
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? episodes.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === episodes.length - 1 ? 0 : c + 1));
  const ep = episodes[current];

  return (
    <>
      {/* ===== 1 · HERO — "our podcast" ===== */}
      <section className="podcast-hero">
        {/* Circuit decoration (right side, subtle) */}
        <div className="podcast-hero__circuit" aria-hidden="true">
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

        <div className="podcast-hero__inner">
          {/* Text side */}
          <div className="podcast-hero__content">
            <h1 className="cursive-title">{title}</h1>
            <p className="podcast-hero__text">
              <strong>Decoding With WINFO</strong> {heroBody.replace('Decoding With WINFO ', '')}
            </p>
            <p className="podcast-hero__text">{heroBodySecondary}</p>
            <Button href={ctaLink} variant="accent" className="podcast-hero__btn">
              {ctaLabel}
            </Button>
          </div>

          {/* Image side */}
          <div className="podcast-hero__image-frame">
            {heroImage ? (
              <img src={heroImage} alt={heroImageAlt} />
            ) : (
              <div className="podcast-hero__image-placeholder">🎙️</div>
            )}
          </div>
        </div>
      </section>

      {/* ===== 2 · WHO / WHAT / WHY ===== */}
      <SectionWrapper>
        <div className="podcast-info-cards">
          {infoCards.map((card) => (
            <div key={card.title} className={`podcast-info-card podcast-info-card--${card.accent}`}>
              <h3 className="podcast-info-card__title cursive-title">{card.title}</h3>
              <p className="podcast-info-card__text">{card.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · GUEST CTA ===== */}
      <SectionWrapper>
        <div className="podcast-guest-cta">
          <p className="podcast-guest-cta__text cursive-title">{guestCta.text}</p>
          <Button to={guestCta.btnTo} variant="primary" className="podcast-guest-cta__btn">
            {guestCta.btnLabel}
          </Button>
        </div>
      </SectionWrapper>

      {/* ===== 4 · PAST EPISODES CAROUSEL ===== */}
      <SectionWrapper alt className="podcast-episodes-section">
        <h2 className="cursive-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {episodesHeading}
        </h2>

        <div className="podcast-carousel">
          {/* Left arrow */}
          <button className="podcast-carousel__arrow podcast-carousel__arrow--left" onClick={prev} aria-label="Previous episode">
            ‹
          </button>

          {/* Episode card */}
          <div className="podcast-carousel__card">
            <div className="podcast-carousel__thumb">
              {ep.image ? (
                <img src={ep.image} alt={ep.imageAlt} />
              ) : (
                <div className="podcast-carousel__thumb-placeholder">🎙️</div>
              )}
              {ep.guests && ep.guests.length > 0 && (
                <div className="podcast-carousel__guests">
                  {ep.guests.map((g) => (
                    <span key={g} className="podcast-carousel__guest-tag">{g}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="podcast-carousel__content">
              <span className="podcast-carousel__tag">{ep.tag}</span>
              <h3 className="podcast-carousel__title">{ep.title}</h3>
              <p className="podcast-carousel__desc">{ep.description}</p>
              <Button href={ep.watchUrl || '#'} variant="accent" size="sm" className="podcast-carousel__btn">
                ▶ watch here!
              </Button>
            </div>
          </div>

          {/* Right arrow */}
          <button className="podcast-carousel__arrow podcast-carousel__arrow--right" onClick={next} aria-label="Next episode">
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="podcast-carousel__dots">
          {episodes.map((_, i) => (
            <button
              key={i}
              className={`podcast-carousel__dot ${i === current ? 'podcast-carousel__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to episode ${i + 1}`}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
