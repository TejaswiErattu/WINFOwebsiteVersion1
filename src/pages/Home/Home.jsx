import Button from '../../components/Button/Button';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { EventCard } from '../../components/Card/Card';
import { heroData, missionData, eventsData } from '../../data/siteData';
import './Home.css';

/**
 * Home page — hero, mission blurb, featured events, join CTA.
 */
export default function Home() {
  const upcomingEvents = eventsData
    .filter((e) => e.category === 'upcoming')
    .slice(0, 3);

  return (
    <main className="homePage">
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="heroGlow" aria-hidden="true" />
        <div className="heroContent">
          <span className="heroBadge">UW Student Organization</span>
          <h1 id="hero-heading">{heroData.headline}</h1>
          <p>{heroData.subheadline}</p>
          <div className="heroCta">
            <Button to={heroData.ctaLink} size="lg">
              {heroData.ctaText}
            </Button>
            <Button to="/about" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section missionSection" aria-labelledby="mission-heading">
        <div className="container">
          <SectionHeading
            title={missionData.title}
            subtitle="Our community, our mission"
          />
          <div className="missionContent">
            <p>{missionData.description}</p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section" aria-labelledby="featured-events-heading">
        <div className="container">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Don't miss what's coming up next"
          />
          <div className="featuredEventsGrid">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="featuredEventsMore">
            <Button to="/events" variant="secondary">
              View All Events →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section ctaSection" aria-labelledby="cta-heading">
        <div className="container">
          <div className="ctaBanner">
            <h2 id="cta-heading">Ready to Join?</h2>
            <p>
              Become part of a supportive community of women and non-binary
              students in informatics. We'd love to meet you!
            </p>
            <Button to="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
