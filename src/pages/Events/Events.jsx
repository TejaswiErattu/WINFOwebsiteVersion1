import { Link } from 'react-router-dom';
import Button from '../../components/Buttons/Buttons';
import FlagshipEvent from '../../components/FlagshipEvent/FlagshipEvent';
import EventCalendar from '../../components/EventCalendar/EventCalendar';
import { quarter, events as calendarEvents, buildings, eventTypes } from '../../data/calendarEvents';
import { eventsData } from '../../data/eventsData';
import { flagshipEvents } from '../../data/flagshipEvents';
import './Events.css';

/* The hackathon has its own page; this page covers the youth programs */
const youthEvents = flagshipEvents.filter((e) => e.slug !== 'hackathon');

export default function Events() {
  const { title, heroImage, intro, categories, onCampus, youth, flagshipLabels, moreEvents, bottomCta } = eventsData;

  return (
    <>
      {/* ===== 1 · HERO: large title over a photo ===== */}
      <header className="events-hero" style={{ '--events-hero-img': `url(${heroImage})` }}>
        <div className="events-hero__inner">
          <h1 className="cursive-title page-title events-hero__title">{title}</h1>
          <p className="events-hero__text">{intro}</p>
        </div>
      </header>

      {/* ===== 2 · EVENT CATEGORIES ===== */}
      <nav className="events-categories" aria-label="Types of WINFO events">
        <ul className="events-categories__list">
          {categories.map((c) => (
            <li key={c.name} className={`events-category events-category--${c.accent}`}>
              <h2 className="events-category__name">{c.name}</h2>
              <p className="events-category__text">{c.text}</p>
              {c.to.startsWith('#') ? (
                <a href={c.to} className="events-category__link">{c.linkLabel} →</a>
              ) : (
                <Link to={c.to} className="events-category__link">{c.linkLabel} →</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== 3 · ON-CAMPUS: calendar (edit src/data/calendarEvents.js) + gallery ===== */}
      <section id="on-campus" className="events-section" aria-labelledby="on-campus-title">
        <div className="events-section__head">
          <h2 id="on-campus-title" className="cursive-title">{onCampus.heading}</h2>
          <p className="events-section__intro">{onCampus.intro}</p>
        </div>
      </section>
      <EventCalendar quarter={quarter} events={calendarEvents} buildings={buildings} types={eventTypes} />

      {moreEvents?.events?.length > 0 && (
        <section className="more-events" aria-labelledby="more-events-title">
          <div className="more-events__inner">
            <h3 id="more-events-title" className="more-events__heading">{moreEvents.heading}</h3>
            {/* Masonry: photos keep their own shape, so heights vary */}
            <ul className="more-events__masonry">
              {moreEvents.events.map((evt, i) => (
                <li key={evt.name} className={`more-events__item more-events__item--${i % 4}`}>
                  <figure className="more-events__image">
                    <img src={evt.image} alt={evt.alt ?? ''} loading="lazy" decoding="async" />
                    <figcaption className="more-events__name">{evt.name}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== 4 · MIDDLE & HIGH SCHOOL ===== */}
      <section id="youth" className="events-section events-section--alt" aria-labelledby="youth-title">
        <div className="events-section__head">
          <h2 id="youth-title" className="cursive-title">{youth.heading}</h2>
          <p className="events-section__intro">{youth.intro}</p>
        </div>
      </section>
      <div className="flagships">
        {youthEvents.map((event, i) => (
          <FlagshipEvent
            key={event.slug}
            event={event}
            labels={flagshipLabels}
            flipped={i % 2 === 1}
            eagerMedia={false}
          />
        ))}
      </div>

      {/* ===== 5 · BOTTOM CTA ===== */}
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
