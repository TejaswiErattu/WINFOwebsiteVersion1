import { useState } from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import { eventsData } from '../../data/siteData';
import './Events.css';

/* Emoji map for placeholder thumbnails */
const categoryEmoji = {
  workshop: '🛠️',
  social: '🎉',
  panel: '💬',
  hackathon: '🏆',
};

/* Helper: parse "April 20, 2026" → { month: 'Apr', day: '20' } */
function parseDate(str) {
  const parts = str.split(' ');
  return { month: parts[0]?.slice(0, 3), day: parts[1]?.replace(',', '') };
}

export default function Events() {
  const {
    title,
    tagline,
    heroDescription,
    pastEvents,
    categories,
    upcoming,
  } = eventsData;

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents =
    activeFilter === 'all'
      ? pastEvents
      : pastEvents.filter((e) => e.category === activeFilter);

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <section className="events-hero">
        <div className="events-hero__bg" aria-hidden="true">
          <span className="events-hero__blob events-hero__blob--1" />
          <span className="events-hero__blob events-hero__blob--2" />
        </div>

        <div className="events-hero__inner">
          <span className="events-hero__badge">📅 {tagline}</span>
          <h1 className="events-hero__title">
            <span>{title}</span>
          </h1>
          <p className="events-hero__desc">{heroDescription}</p>
        </div>
      </section>

      {/* ===== 2 · PAST EVENTS GALLERY ===== */}
      <SectionWrapper>
        <SectionHeading
          label="Gallery"
          title="Past Events"
          description="A look back at workshops, socials, panels, and more."
        />

        {/* Filter pills */}
        <div className="events-filters">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`events-filter-pill${activeFilter === cat.key ? ' events-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="events-gallery">
          {filteredEvents.map((evt) => (
            <div key={evt.id} className="events-gallery-card">
              <div className="events-gallery-card__image">
                {evt.image ? (
                  <img src={evt.image} alt={evt.title} />
                ) : (
                  <div className="events-gallery-card__placeholder">
                    <span className="events-gallery-card__placeholder-emoji">
                      {categoryEmoji[evt.category] || '📸'}
                    </span>
                  </div>
                )}
              </div>
              <div className="events-gallery-card__body">
                <p className="events-gallery-card__label">{evt.label}</p>
                <h3 className="events-gallery-card__title">{evt.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 3 · UPCOMING EVENTS ===== */}
      <SectionWrapper alt>
        <SectionHeading
          label="Coming Soon"
          title="Upcoming Events"
          description="Mark your calendar — these are just around the corner."
        />

        <div className="events-upcoming-list">
          {upcoming.map((evt) => {
            const { month, day } = parseDate(evt.date);
            return (
              <div key={evt.id} className="events-upcoming-item">
                <div className="events-upcoming-item__date">
                  <span className="events-upcoming-item__date-month">{month}</span>
                  <span className="events-upcoming-item__date-day">{day}</span>
                </div>
                <div className="events-upcoming-item__content">
                  <span className="events-upcoming-item__tag">{evt.tag}</span>
                  <h3 className="events-upcoming-item__title">{evt.title}</h3>
                </div>
                <span className="events-upcoming-item__arrow">→</span>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ===== 4 · JOIN CTA ===== */}
      <SectionWrapper>
        <div className="events-join-cta">
          <div className="events-join-cta__card">
            <div className="events-join-cta__emoji">✨</div>
            <h2 className="events-join-cta__title">Interested?</h2>
            <p className="events-join-cta__desc">
              Become a WINFO member to get early access to event registration,
              exclusive workshops, and a welcoming community.
            </p>
            <Button to="/membership" size="lg">
              Become a Member
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
