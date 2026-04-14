import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import CircuitSVG from '../../components/CircuitSVG/CircuitSVG';
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
          <CircuitSVG variant="vertical" />
        </div>

        <div className="events-hero__inner">
          <h1 className="events-hero__title cursive-title">{title}</h1>
          <div className="events-hero__image-frame">
            <img src="/images/winfo-community-2.jpg" alt="WINFO community event" />
          </div>
        </div>
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
        <Button href={bottomCta.btnTo} variant="accent" size="lg" className="events-cta__btn">
          {bottomCta.btnLabel}
        </Button>
      </section>
    </>
  );
}
