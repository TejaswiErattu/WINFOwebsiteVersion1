import Button from '../../components/Buttons/Buttons';
import FlagshipEvent from '../../components/FlagshipEvent/FlagshipEvent';
import { eventsData } from '../../data/eventsData';
import { flagshipEvents } from '../../data/flagshipEvents';
import './Events.css';

/* The header photo strip only appears with at least this many distinct photos */
const MIN_HEADER_PHOTOS = 3;

export default function Events() {
  const { title, subtitle, intro, goals, headerPhotos = [], flagshipLabels, moreEvents, bottomCta } = eventsData;
  const showStrip = headerPhotos.length >= MIN_HEADER_PHOTOS;

  return (
    <>
      {/* ===== 1 · PAGE HEADER ===== */}
      <header className="events-header">
        <div className="events-header__inner">
          {showStrip && (
            <ul className="events-header__strip">
              {headerPhotos.map((p) => (
                <li key={p.src} className="events-header__thumb">
                  <img src={p.src} alt={p.alt} width={p.width} height={p.height} decoding="async" />
                </li>
              ))}
            </ul>
          )}

          <div className="events-header__main">
            <h1 className="events-header__title">{title}</h1>

            <div className="events-header__copy">
              {subtitle && <p className="events-header__subtitle">{subtitle}</p>}
              {intro && <p className="events-header__text">{intro}</p>}
              {goals && <p className="events-header__text">{goals}</p>}
            </div>
          </div>
        </div>
      </header>

      {/* ===== 2 · FLAGSHIP EVENTS ===== */}
      <div className="flagships">
        {flagshipEvents.map((event, i) => (
          <FlagshipEvent
            key={event.slug}
            event={event}
            labels={flagshipLabels}
            flipped={i % 2 === 1}
            eagerMedia={i === 0}
          />
        ))}
      </div>

      {/* ===== 3 · MORE EVENTS ===== */}
      {moreEvents?.events?.length > 0 && (
        <section className="more-events" aria-labelledby="more-events-title">
          <div className="more-events__inner">
            <h2 id="more-events-title" className="more-events__heading">{moreEvents.heading}</h2>
            {moreEvents.intro && <p className="more-events__intro">{moreEvents.intro}</p>}

            <ul className="more-events__grid">
              {moreEvents.events.map((evt) => (
                <li key={evt.name} className="more-events__item">
                  <div className="more-events__image">
                    {evt.image ? (
                      <img src={evt.image} alt={evt.alt ?? ''} loading="lazy" decoding="async" />
                    ) : (
                      <div className="more-events__placeholder" />
                    )}
                  </div>
                  <p className="more-events__name">{evt.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== 4 · BOTTOM CTA ===== */}
      <section className="events-cta">
        <h2 className="events-cta__heading cursive-title">{bottomCta.heading}</h2>
        <p className="events-cta__body">
          {bottomCta.body.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </p>
        <Button href={bottomCta.btnTo} variant="accent" size="lg" className="events-cta__btn">
          {bottomCta.btnLabel}
        </Button>
      </section>
    </>
  );
}
