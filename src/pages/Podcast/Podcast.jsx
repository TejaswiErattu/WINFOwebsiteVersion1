import { useRef, useState } from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import CircuitSVG from '../../components/CircuitSVG/CircuitSVG';
import { renderBold } from '../../utils/renderBold';
import { podcastData } from '../../data/podcastData';
import { PlayIcon } from '../../components/Icons/Icons';
import './Podcast.css';

export default function Podcast() {
  const {
    title,
    heroBody,
    heroBodySecondary,
    infoCards,
    guestCta,
    episodes,
  } = podcastData;

  /* Simple carousel state */
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? episodes.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === episodes.length - 1 ? 0 : c + 1));
  /* Swipe left/right on touch screens */
  const swipeStart = useRef(null);
  const onTouchStart = (e) => { swipeStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (swipeStart.current == null) return;
    const dx = e.changedTouches[0].clientX - swipeStart.current;
    swipeStart.current = null;
    if (dx < -40) next();
    else if (dx > 40) prev();
  };

  return (
    <>
      {/* ===== 1 · INTRO ===== */}
      <section className="podcast-hero podcast-hero--compact">
        <div className="podcast-hero__circuit" aria-hidden="true">
          <CircuitSVG variant="small" />
        </div>
        <div className="podcast-intro">
          <h1 className="cursive-title page-title">{title}</h1>
          <p className="podcast-hero__text">{renderBold(heroBody)}</p>
          <p className="podcast-hero__text">{heroBodySecondary}</p>
        </div>
      </section>

      {/* ===== 2 · EPISODES SLIDESHOW (newest first; edit in data/podcastData.js) ===== */}
      <SectionWrapper alt className="podcast-episodes-section">
        <div className="podcast-carousel" role="region" aria-roledescription="carousel" aria-label="Past episodes">
          {/* Left arrow */}
          <button type="button" className="podcast-carousel__arrow podcast-carousel__arrow--left" onClick={prev} aria-label="Previous episode">
            ‹
          </button>

          {/* Episodes sit side by side in a track that slides to the current one */}
          <div className="podcast-carousel__viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div className="podcast-carousel__track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {episodes.map((ep, i) => (
                <div
                  key={ep.title}
                  className="podcast-carousel__slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${episodes.length}`}
                  aria-hidden={i !== current}
                  inert={i !== current}
                >
                  <div className="podcast-carousel__card">
                    <div className="podcast-carousel__thumb">
                      {ep.image ? (
                        <img
                          src={ep.image}
                          alt={ep.imageAlt}
                          loading={Math.abs(i - current) <= 1 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      ) : (
                        <div className="podcast-carousel__thumb-placeholder" />
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
                      <span className="podcast-carousel__tag">{ep.tag}{i === 0 && <span className="podcast-carousel__new">newest</span>}</span>
                      <h3 className="podcast-carousel__title">{ep.title}</h3>
                      <p className="podcast-carousel__desc">{renderBold(ep.description)}</p>
                      {ep.watchUrl && (
                        <Button href={ep.watchUrl} variant="primary" size="sm" className="podcast-carousel__btn">
                          <PlayIcon className="icon icon--inline" /> watch here!
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="sr-only" aria-live="polite">{`Episode ${current + 1} of ${episodes.length}: ${episodes[current].title}`}</p>

          {/* Right arrow */}
          <button type="button" className="podcast-carousel__arrow podcast-carousel__arrow--right" onClick={next} aria-label="Next episode">
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="podcast-carousel__dots">
          {episodes.map((_, i) => (
            <button
              key={i}
              className={`podcast-carousel__dot ${i === current ? 'podcast-carousel__dot--active' : ''}`}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to episode ${i + 1}`}
              aria-current={i === current ? 'true' : undefined}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · WHO / WHAT / WHY ===== */}
      <SectionWrapper>
        <div className="podcast-info-cards">
          {infoCards.map((card) => (
            <div key={card.title} className={`podcast-info-card podcast-info-card--${card.accent}`}>
              <h2 className="podcast-info-card__title cursive-title">{card.title}</h2>
              <p className="podcast-info-card__text">{card.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>


      {/* ===== 4 · BECOME A GUEST (full width) ===== */}
      <SectionWrapper alt>
        <aside className="podcast-guest-cta" aria-label="Be a guest">
          <p className="podcast-guest-cta__text cursive-title">{guestCta.text}</p>
          <p className="podcast-guest-cta__body">{guestCta.body}</p>
          <Button href={guestCta.btnHref} variant="primary" className="podcast-guest-cta__btn">
            {guestCta.btnLabel}
          </Button>
        </aside>
      </SectionWrapper>
    </>
  );
}
