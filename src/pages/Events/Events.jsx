import { useState } from 'react';
import { EventCard } from '../../components/Card/Card';
import { eventsData } from '../../data/siteData';
import './Events.css';

const filters = ['all', 'upcoming', 'past'];

/**
 * Events page — filterable grid of all events.
 */
export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents =
    activeFilter === 'all'
      ? eventsData
      : eventsData.filter((e) => e.category === activeFilter);

  return (
    <main className="eventsPage">
      {/* Header */}
      <section className="eventsHero" aria-labelledby="events-heading">
        <h1 id="events-heading">Events</h1>
        <p>Workshops, hackathons, panels, socials, and more — there's always something happening at WINFO.</p>
      </section>

      {/* Events List */}
      <section className="section" aria-label="Events list">
        <div className="container">
          {/* Filter Tabs */}
          <div className="filterTabs" role="tablist" aria-label="Filter events">
            {filters.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={activeFilter === filter}
                className={`filterTab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredEvents.length > 0 ? (
            <div className="eventsGrid">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="noEvents">No events found for this filter.</p>
          )}
        </div>
      </section>
    </main>
  );
}
