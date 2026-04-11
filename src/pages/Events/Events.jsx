import { useState } from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PageHero from '../../components/PageHero/PageHero';
import { JoinCTACard } from '../../components/Cards';
import { eventsData } from '../../data/eventsData';
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
    galleryHeading,
    upcomingHeading,
    joinCta,
  } = eventsData;

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents =
    activeFilter === 'all'
      ? pastEvents
      : pastEvents.filter((e) => e.category === activeFilter);

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <PageHero
        layout="center"
        badge={`📅 ${tagline}`}
        title={<span>{title}</span>}
        description={heroDescription}
        className="events-hero"
      />

      {/* ===== 2 · PAST EVENTS GALLERY ===== */}
      <SectionWrapper>
        <SectionHeading
          label={galleryHeading.label}
          title={galleryHeading.title}
          description={galleryHeading.description}
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
          label={upcomingHeading.label}
          title={upcomingHeading.title}
          description={upcomingHeading.description}
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
        <JoinCTACard
          emoji={joinCta.emoji}
          title={joinCta.title}
          description={joinCta.description}
          btnLabel={joinCta.btnLabel}
          btnTo={joinCta.btnTo}
        />
      </SectionWrapper>
    </>
  );
}
