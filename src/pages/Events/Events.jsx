import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import { eventsData } from '../../data/eventsData';
import './Events.css';

export default function Events() {
  const { title, categories, bottomCta } = eventsData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <section className="events-hero">
        {/* Circuit decoration */}
        <div className="events-hero__circuit" aria-hidden="true">
          <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="100" y1="0" x2="100" y2="120" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="120" x2="180" y2="120" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="120" x2="100" y2="260" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="260" x2="160" y2="260" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="260" x2="100" y2="400" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="120" r="5" fill="currentColor" />
            <circle cx="100" cy="260" r="5" fill="currentColor" />
            <circle cx="180" cy="120" r="4" fill="currentColor" />
            <circle cx="160" cy="260" r="4" fill="currentColor" />
            <circle cx="100" cy="190" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <h1 className="events-hero__title cursive-title">{title}</h1>
      </section>

      {/* ===== 2 · EVENT CATEGORY ROWS ===== */}
      <SectionWrapper>
        <div className="events-rows">
          {categories.map((cat, idx) => (
            <div className="events-row" key={idx}>
              <p className="events-row__label">{cat.label}</p>

              <div className="events-row__cards">
                {cat.events.map((evt, i) => (
                  <div className="events-card" key={i}>
                    <div className="events-card__image">
                      {evt.image ? (
                        <img src={evt.image} alt={evt.name} />
                      ) : (
                        <div className="events-card__placeholder" />
                      )}
                    </div>
                    <p className="events-card__name">{evt.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · BOTTOM CTA ===== */}
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
        <Button to={bottomCta.btnTo} variant="accent" size="lg" className="events-cta__btn">
          {bottomCta.btnLabel}
        </Button>
      </section>
    </>
  );
}
