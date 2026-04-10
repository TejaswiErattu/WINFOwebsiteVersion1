import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { ValueCard } from '../../components/Card/Card';
import { Card } from '../../components/Card/Card';
import { valuesData } from '../../data/siteData';
import './About.css';

const activities = [
  { icon: '💻', title: 'Hackathons', description: 'Annual hackathon focused on social good with mentorship and prizes.' },
  { icon: '📚', title: 'Workshops', description: 'Hands-on skill-building sessions on coding, design, and career prep.' },
  { icon: '🎤', title: 'Panels & Talks', description: 'Hear from women leaders in tech about their journeys and insights.' },
  { icon: '🤗', title: 'Socials', description: 'Casual hangouts, game nights, and community bonding events.' },
  { icon: '🧑‍🏫', title: 'Mentorship', description: 'Peer and industry mentorship to guide you through your career.' },
  { icon: '🌐', title: 'Networking', description: 'Events with companies like Amazon, Microsoft, and local startups.' },
];

/**
 * About page — mission, values, what we do.
 */
export default function About() {
  return (
    <main className="aboutPage">
      {/* Page Header */}
      <section className="aboutHero" aria-labelledby="about-heading">
        <h1 id="about-heading">About WINFO</h1>
        <p>Learn more about who we are, what we stand for, and what we do.</p>
      </section>

      {/* Mission */}
      <section className="section" aria-labelledby="our-story-heading">
        <div className="container">
          <SectionHeading title="Our Story" subtitle="Where it all began" />
          <div className="aboutMission">
            <p>
              Women in Informatics (WINFO) was founded to address the gender gap
              in informatics and technology. We believe that everyone deserves a
              seat at the table, and we work to create a space where women and
              non-binary students feel supported, empowered, and inspired.
            </p>
            <p>
              Through workshops, hackathons, mentorship programs, and networking
              events, we help our members build the skills and confidence they
              need to thrive in the tech industry and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section valuesSection"
        aria-labelledby="values-heading"
      >
        <div className="container">
          <SectionHeading title="Our Values" subtitle="What drives everything we do" />
          <div className="valuesGrid">
            {valuesData.map((value) => (
              <ValueCard
                key={value.id}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" aria-labelledby="activities-heading">
        <div className="container">
          <SectionHeading title="What We Do" subtitle="Programs and events throughout the year" />
          <div className="whatWeDoGrid">
            {activities.map((item) => (
              <Card key={item.title} className="whatWeDoItem">
                <div className="itemIcon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
