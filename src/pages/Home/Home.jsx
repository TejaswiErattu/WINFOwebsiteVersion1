import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { FeatureCard } from '../../components/Cards';
import Button from '../../components/Buttons/Buttons';
import WinfoLogo from '../../components/WinfoLogo/WinfoLogo';
import '../../components/WinfoLogo/WinfoLogo.css';
import {
  missionData,
  storyData,
  whatWeDoHeading,
  whatWeDoData,
  informaticsHeading,
  informaticsQuotes,
  homeCta,
} from '../../data/homeData';
import './Home.css';

export default function Home() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="home-hero">
        {/* Circuit board decorations */}
        <div className="home-hero__circuits home-hero__circuits--left" aria-hidden="true">
          <svg viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="80" x2="260" y2="80" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="160" x2="200" y2="160" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="240" x2="280" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="320" x2="180" y2="320" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="400" x2="240" y2="400" stroke="currentColor" strokeWidth="1.5" />
            <line x1="120" y1="80" x2="120" y2="160" stroke="currentColor" strokeWidth="1.5" />
            <line x1="180" y1="160" x2="180" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="240" x2="100" y2="320" stroke="currentColor" strokeWidth="1.5" />
            <line x1="160" y1="320" x2="160" y2="400" stroke="currentColor" strokeWidth="1.5" />
            <line x1="200" y1="80" x2="240" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <line x1="150" y1="160" x2="190" y2="120" stroke="currentColor" strokeWidth="1.5" />
            <line x1="220" y1="240" x2="260" y2="200" stroke="currentColor" strokeWidth="1.5" />
            <line x1="140" y1="320" x2="180" y2="280" stroke="currentColor" strokeWidth="1.5" />
            <line x1="200" y1="400" x2="240" y2="360" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="120" cy="80" r="4" fill="currentColor" />
            <circle cx="260" cy="80" r="5" fill="currentColor" />
            <circle cx="200" cy="160" r="4" fill="currentColor" />
            <circle cx="180" cy="240" r="5" fill="currentColor" />
            <circle cx="100" cy="240" r="4" fill="currentColor" />
            <circle cx="280" cy="240" r="4" fill="currentColor" />
            <circle cx="160" cy="320" r="5" fill="currentColor" />
            <circle cx="180" cy="320" r="4" fill="currentColor" />
            <circle cx="240" cy="400" r="5" fill="currentColor" />
            <circle cx="240" cy="40" r="3.5" fill="currentColor" />
            <circle cx="190" cy="120" r="3.5" fill="currentColor" />
            <circle cx="260" cy="200" r="3.5" fill="currentColor" />
            <circle cx="180" cy="280" r="3.5" fill="currentColor" />
            <circle cx="240" cy="360" r="3.5" fill="currentColor" />
            <circle cx="60" cy="80" r="3" fill="currentColor" />
            <circle cx="80" cy="160" r="3" fill="currentColor" />
            <circle cx="50" cy="240" r="3" fill="currentColor" />
            <circle cx="60" cy="400" r="3" fill="currentColor" />
          </svg>
        </div>
        <div className="home-hero__circuits home-hero__circuits--right" aria-hidden="true">
          <svg viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="320" y1="100" x2="60" y2="100" stroke="currentColor" strokeWidth="1.5" />
            <line x1="320" y1="200" x2="120" y2="200" stroke="currentColor" strokeWidth="1.5" />
            <line x1="320" y1="300" x2="40" y2="300" stroke="currentColor" strokeWidth="1.5" />
            <line x1="320" y1="380" x2="100" y2="380" stroke="currentColor" strokeWidth="1.5" />
            <line x1="200" y1="100" x2="200" y2="200" stroke="currentColor" strokeWidth="1.5" />
            <line x1="140" y1="200" x2="140" y2="300" stroke="currentColor" strokeWidth="1.5" />
            <line x1="220" y1="300" x2="220" y2="380" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="100" x2="60" y2="60" stroke="currentColor" strokeWidth="1.5" />
            <line x1="160" y1="200" x2="120" y2="160" stroke="currentColor" strokeWidth="1.5" />
            <line x1="80" y1="300" x2="40" y2="260" stroke="currentColor" strokeWidth="1.5" />
            <line x1="140" y1="380" x2="100" y2="340" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="200" cy="100" r="4" fill="currentColor" />
            <circle cx="60" cy="100" r="5" fill="currentColor" />
            <circle cx="140" cy="200" r="5" fill="currentColor" />
            <circle cx="120" cy="200" r="4" fill="currentColor" />
            <circle cx="220" cy="300" r="4" fill="currentColor" />
            <circle cx="40" cy="300" r="5" fill="currentColor" />
            <circle cx="100" cy="380" r="4" fill="currentColor" />
            <circle cx="60" cy="60" r="3.5" fill="currentColor" />
            <circle cx="120" cy="160" r="3.5" fill="currentColor" />
            <circle cx="40" cy="260" r="3.5" fill="currentColor" />
            <circle cx="100" cy="340" r="3.5" fill="currentColor" />
            <circle cx="260" cy="100" r="3" fill="currentColor" />
            <circle cx="240" cy="200" r="3" fill="currentColor" />
            <circle cx="280" cy="300" r="3" fill="currentColor" />
            <circle cx="260" cy="380" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Centered logo only — no photos */}
        <div className="home-hero__center">
          <WinfoLogo color="white" className="home-hero__logo" />
        </div>
      </section>

      {/* ============ 2. WHO WE ARE ============ */}
      <SectionWrapper>
        <div className="home-who">
          {/* Text side (LEFT) */}
          <div className="home-who__content">
            <h2 className="home-who__title cursive-title">{missionData.title}</h2>
            <p className="home-who__text">{missionData.body}</p>
            <p className="home-who__text">{missionData.bodySecondary}</p>
            <p className="home-who__text">{missionData.bodyTertiary}</p>
            <Button to={missionData.ctaLink} variant="primary" className="home-who__btn">
              {missionData.ctaLabel}
            </Button>
          </div>

          {/* Image side (RIGHT) */}
          <div className="home-who__image-frame">
            {missionData.image ? (
              <img src={missionData.image} alt={missionData.imageAlt} />
            ) : (
              <div className="home-who__image-placeholder">🤝</div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ============ 3. OUR STORY ============ */}
      <SectionWrapper alt>
        <div className="home-story">
          {/* Image side (LEFT) — tilted */}
          <div className="home-story__image-frame">
            {storyData.image ? (
              <img src={storyData.image} alt={storyData.imageAlt} />
            ) : (
              <div className="home-story__image-placeholder">📖</div>
            )}
          </div>

          {/* Text side (RIGHT) */}
          <div className="home-story__content">
            <h2 className="home-story__title cursive-title">{storyData.title}</h2>
            <p className="home-story__text">{storyData.body}</p>
            <p className="home-story__text">{storyData.bodySecondary}</p>
            <p className="home-story__text">{storyData.bodyTertiary}</p>
            <Button to={storyData.ctaLink} variant="secondary" className="home-story__btn">
              {storyData.ctaLabel}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ============ 4. WHAT WE DO ============ */}
      <SectionWrapper>
        <h2 className="cursive-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {whatWeDoHeading.title}
        </h2>
        <div className="home-features__grid">
          {whatWeDoData.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
              linkLabel={item.linkLabel}
              linkTo={item.linkTo}
              accent={item.accent}
            />
          ))}
        </div>
        {/* Big centered "join us!" pill */}
        <div className="home-features__cta">
          <Button to={homeCta.btnTo} variant="primary" size="lg">
            {homeCta.btnLabel}
          </Button>
        </div>
      </SectionWrapper>

      {/* ============ 5. WHAT IS INFORMATICS ============ */}
      <SectionWrapper className="home-informatics">
        {/* Background blobs */}
        <div className="home-informatics__bg" aria-hidden="true">
          <div className="home-informatics__blob home-informatics__blob--1" />
          <div className="home-informatics__blob home-informatics__blob--2" />
        </div>

        <div className="home-informatics__inner">
          <h2 className="cursive-title" style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            {informaticsHeading.title}
          </h2>

          <div className="home-informatics__quotes">
            {informaticsQuotes.map((q, i) => (
              <blockquote className="home-quote" key={i}>
                <p className="home-quote__text">{q.quote}</p>
                <cite className="home-quote__cite">
                  — {q.name}, {q.role}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Circuit decoration on right side */}
        <div className="home-informatics__circuit" aria-hidden="true">
          <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="200" y1="60" x2="40" y2="60" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="140" x2="80" y2="140" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="220" x2="20" y2="220" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="300" x2="60" y2="300" stroke="currentColor" strokeWidth="1" />
            <line x1="120" y1="60" x2="120" y2="140" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="140" x2="80" y2="220" stroke="currentColor" strokeWidth="1" />
            <line x1="140" y1="220" x2="140" y2="300" stroke="currentColor" strokeWidth="1" />
            <circle cx="120" cy="60" r="3" fill="currentColor" />
            <circle cx="40" cy="60" r="4" fill="currentColor" />
            <circle cx="80" cy="140" r="4" fill="currentColor" />
            <circle cx="20" cy="220" r="3" fill="currentColor" />
            <circle cx="140" cy="300" r="4" fill="currentColor" />
            <circle cx="60" cy="300" r="3" fill="currentColor" />
          </svg>
        </div>
      </SectionWrapper>
    </>
  );
}
