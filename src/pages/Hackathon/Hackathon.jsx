import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTABanner from '../../components/CTABanner/CTABanner';
import Button from '../../components/Button/Button';
import { hackathonData } from '../../data/siteData';
import './Hackathon.css';

const emojis = ['⏱️', '🎓', '🏆', '🍕'];

export default function Hackathon() {
  return (
    <>
      {/* Hero */}
      <section className="hackathon-hero">
        <div className="hackathon-hero__content">
          <span className="hackathon-hero__date">📅 {hackathonData.date}</span>
          <h1>{hackathonData.title}</h1>
          <p className="hackathon-hero__tagline">{hackathonData.tagline}</p>
          <p>{hackathonData.description}</p>
          <Button href={hackathonData.ctaLink} size="lg">
            {hackathonData.ctaLabel}
          </Button>
        </div>
      </section>

      {/* Highlights */}
      <SectionWrapper>
        <SectionHeading label="Why attend" title="What to Expect" />
        <div className="hackathon-highlights">
          {hackathonData.highlights.map((h, i) => (
            <div className="hackathon-highlight" key={h}>
              <span>{emojis[i]}</span>
              {h}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <CTABanner
          title="Don't miss out!"
          text="Spots fill up fast. Register today and secure your place at the WINFO Hackathon."
          btnLabel="Register Now"
          btnTo="/hackathon"
        />
      </SectionWrapper>
    </>
  );
}
