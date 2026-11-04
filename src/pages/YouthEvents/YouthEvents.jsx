import FlagshipEvent from '../../components/FlagshipEvent/FlagshipEvent';
import { eventsData } from '../../data/eventsData';
import { flagshipEvents } from '../../data/flagshipEvents';

/* The hackathon has its own page; this page covers the youth programs */
const youthEvents = flagshipEvents.filter((e) => e.slug !== 'hackathon');

export default function YouthEvents() {
  const { youth, flagshipLabels } = eventsData;

  return (
    <>
      <section className="events-section events-section--alt youth-hero" aria-labelledby="youth-title">
        <div className="events-section__head">
          <h1 id="youth-title" className="cursive-title page-title">{youth.heading}</h1>
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
            eagerMedia={i === 0}
          />
        ))}
      </div>
    </>
  );
}
