import { Link } from 'react-router-dom';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { FeatureCard, CTABanner } from '../../components/Cards';
import Button from '../../components/Buttons/Buttons';
import WinfoLogo from '../../components/WinfoLogo/WinfoLogo';
import '../../components/WinfoLogo/WinfoLogo.css';
import {
  missionData,
  whatWeDoHeading,
  whatWeDoData,
  informaticsHeading,
  informaticsBubbles,
  bottomInfoData,
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
            {/* Horizontal lines */}
            <line x1="0" y1="80" x2="260" y2="80" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="160" x2="200" y2="160" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="240" x2="280" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="320" x2="180" y2="320" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="400" x2="240" y2="400" stroke="currentColor" strokeWidth="1.5" />
            {/* Vertical connectors */}
            <line x1="120" y1="80" x2="120" y2="160" stroke="currentColor" strokeWidth="1.5" />
            <line x1="180" y1="160" x2="180" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="100" y1="240" x2="100" y2="320" stroke="currentColor" strokeWidth="1.5" />
            <line x1="160" y1="320" x2="160" y2="400" stroke="currentColor" strokeWidth="1.5" />
            {/* Diagonal branches */}
            <line x1="200" y1="80" x2="240" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <line x1="150" y1="160" x2="190" y2="120" stroke="currentColor" strokeWidth="1.5" />
            <line x1="220" y1="240" x2="260" y2="200" stroke="currentColor" strokeWidth="1.5" />
            <line x1="140" y1="320" x2="180" y2="280" stroke="currentColor" strokeWidth="1.5" />
            <line x1="200" y1="400" x2="240" y2="360" stroke="currentColor" strokeWidth="1.5" />
            {/* Nodes (circles at intersections) */}
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
            {/* Extra small dots */}
            <circle cx="60" cy="80" r="3" fill="currentColor" />
            <circle cx="80" cy="160" r="3" fill="currentColor" />
            <circle cx="50" cy="240" r="3" fill="currentColor" />
            <circle cx="60" cy="400" r="3" fill="currentColor" />
          </svg>
        </div>
        <div className="home-hero__circuits home-hero__circuits--right" aria-hidden="true">
          <svg viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Horizontal lines (mirrored) */}
            <line x1="320" y1="100" x2="60" y2="100" stroke="currentColor" strokeWidth="1.5" />
            <line x1="320" y1="200" x2="120" y2="200" stroke="currentColor" strokeWidth="1.5" />
            <line x1="320" y1="300" x2="40" y2="300" stroke="currentColor" strokeWidth="1.5" />
            <line x1="320" y1="380" x2="100" y2="380" stroke="currentColor" strokeWidth="1.5" />
            {/* Vertical connectors */}
            <line x1="200" y1="100" x2="200" y2="200" stroke="currentColor" strokeWidth="1.5" />
            <line x1="140" y1="200" x2="140" y2="300" stroke="currentColor" strokeWidth="1.5" />
            <line x1="220" y1="300" x2="220" y2="380" stroke="currentColor" strokeWidth="1.5" />
            {/* Diagonal branches */}
            <line x1="100" y1="100" x2="60" y2="60" stroke="currentColor" strokeWidth="1.5" />
            <line x1="160" y1="200" x2="120" y2="160" stroke="currentColor" strokeWidth="1.5" />
            <line x1="80" y1="300" x2="40" y2="260" stroke="currentColor" strokeWidth="1.5" />
            <line x1="140" y1="380" x2="100" y2="340" stroke="currentColor" strokeWidth="1.5" />
            {/* Nodes */}
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
            {/* Extra small dots */}
            <circle cx="260" cy="100" r="3" fill="currentColor" />
            <circle cx="240" cy="200" r="3" fill="currentColor" />
            <circle cx="280" cy="300" r="3" fill="currentColor" />
            <circle cx="260" cy="380" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Centered logo with floating photos */}
        <div className="home-hero__center">
          <img
            src="/images/hero-photo-1.png"
            alt="WINFO members collaborating"
            className="home-hero__photo home-hero__photo--left"
          />
          <WinfoLogo color="white" className="home-hero__logo" />
          <img
            src="/images/hero-photo-2.png"
            alt="WINFO community event"
            className="home-hero__photo home-hero__photo--right"
          />
        </div>
      </section>

      {/* ============ 2. WHO WE ARE ============ */}
      <SectionWrapper>
        <div className="home-who">
          {/* Image side */}
          <div className="home-who__image-frame">
            {missionData.image ? (
              <img src={missionData.image} alt={missionData.imageAlt} />
            ) : (
              <div className="home-who__image-placeholder">🤝</div>
            )}
          </div>

          {/* Text side */}
          <div className="home-who__content">
            <span className="home-who__label">{missionData.label}</span>
            <h2 className="home-who__title">{missionData.title}</h2>
            <p className="home-who__text">{missionData.body}</p>
            <p className="home-who__text">{missionData.bodySecondary}</p>
            <Button to={missionData.ctaLink} variant="secondary" className="home-who__btn">
              {missionData.ctaLabel}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ============ 3. WHAT WE DO ============ */}
      <SectionWrapper alt>
        <SectionHeading
          label={whatWeDoHeading.label}
          title={whatWeDoHeading.title}
          description={whatWeDoHeading.description}
        />
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
      </SectionWrapper>

      {/* ============ 4. WHAT IS INFORMATICS ============ */}
      <SectionWrapper className="home-informatics">
        {/* Background blobs */}
        <div className="home-informatics__bg" aria-hidden="true">
          <div className="home-informatics__blob home-informatics__blob--1" />
          <div className="home-informatics__blob home-informatics__blob--2" />
        </div>

        <div className="home-informatics__inner">
          <div className="home-informatics__heading">
            <SectionHeading
              label={informaticsHeading.label}
              title={informaticsHeading.title}
              description={informaticsHeading.description}
            />
          </div>

          <div className="home-informatics__bubbles">
            {informaticsBubbles.map((b, i) => (
              <div className="info-bubble" key={i}>
                <span className="info-bubble__emoji">{b.emoji}</span>
                <span className="info-bubble__text">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ============ 5. BOTTOM ORG INFO ============ */}
      <SectionWrapper alt>
        <div className="home-bottom-info">
          <div className="home-bottom-info__content">
            <h2 className="home-bottom-info__title">
              {bottomInfoData.title}
            </h2>
            {bottomInfoData.paragraphs.map((p, i) => (
              <p key={i} className="home-bottom-info__text">{p}</p>
            ))}
            <div className="home-bottom-info__links">
              {bottomInfoData.links.map((link) => (
                <Link key={link.to} to={link.to} className="home-bottom-info__link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar quick-links */}
          <div className="home-bottom-info__sidebar">
            <h4>{bottomInfoData.sidebarTitle}</h4>
            <div className="home-bottom-info__sidebar-links">
              {bottomInfoData.sidebarLinks.map((link) => (
                <Link key={link.to} to={link.to} className="home-bottom-info__sidebar-link">
                  <span>{link.emoji}</span> {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ============ 6. CTA ============ */}
      <SectionWrapper>
        <CTABanner
          title={homeCta.title}
          text={homeCta.text}
          btnLabel={homeCta.btnLabel}
          btnTo={homeCta.btnTo}
        />
      </SectionWrapper>
    </>
  );
}
