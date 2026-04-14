import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { FeatureCard } from '../../components/Cards';
import Button from '../../components/Buttons/Buttons';
import WinfoLogo from '../../components/WinfoLogo/WinfoLogo';
import CircuitSVG from '../../components/CircuitSVG/CircuitSVG';
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
      {/* ===== 1. HERO ===== */}
      <section className="home-hero">
        <div className="home-hero__circuits home-hero__circuits--left" aria-hidden="true">
          <CircuitSVG variant="left" />
        </div>
        <div className="home-hero__circuits home-hero__circuits--right" aria-hidden="true">
          <CircuitSVG variant="right" />
        </div>
        <div className="home-hero__center">
          <WinfoLogo color="multi" className="home-hero__logo" />
        </div>
      </section>

      {/* ===== 2. WHO WE ARE ===== */}
      <SectionWrapper>
        <div className="home-who">
          <div className="home-who__content">
            <h2 className="home-who__title cursive-title">{missionData.title}</h2>
            <p className="home-who__text">{missionData.body}</p>
            <p className="home-who__text">{missionData.bodySecondary}</p>
            <p className="home-who__text">{missionData.bodyTertiary}</p>
            <Button href={missionData.ctaLink} variant="primary" className="home-who__btn">
              {missionData.ctaLabel}
            </Button>
          </div>
          <div className="home-who__image-frame">
            {missionData.image ? (
              <img src={missionData.image} alt={missionData.imageAlt} />
            ) : (
              <div className="home-who__image-placeholder">🤝</div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 3. OUR STORY ===== */}
      <SectionWrapper alt>
        <div className="home-story">
          <div className="home-story__image-frame">
            {storyData.image ? (
              <img src={storyData.image} alt={storyData.imageAlt} />
            ) : (
              <div className="home-story__image-placeholder">📖</div>
            )}
          </div>
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

      {/* ===== 4. WHAT WE DO ===== */}
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
        <div className="home-features__cta">
          <Button href={homeCta.btnTo} variant="primary" size="lg">
            {homeCta.btnLabel}
          </Button>
        </div>
      </SectionWrapper>

      {/* ===== 5. WHAT IS INFORMATICS ===== */}
      <SectionWrapper className="home-informatics">
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
                <cite className="home-quote__cite">— {q.name}, {q.role}</cite>
              </blockquote>
            ))}
          </div>
        </div>
        <div className="home-informatics__circuit" aria-hidden="true">
          <CircuitSVG variant="small" />
        </div>
      </SectionWrapper>
    </>
  );
}
