import { Link } from 'react-router-dom';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import CTABanner from '../../components/CTABanner/CTABanner';
import Button from '../../components/Button/Button';
import {
  heroData,
  missionData,
  whatWeDoData,
  informaticsBubbles,
} from '../../data/siteData';
import './Home.css';

export default function Home() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="home-hero">
        {/* Soft gradient blobs */}
        <div className="home-hero__bg" aria-hidden="true">
          <div className="home-hero__blob home-hero__blob--1" />
          <div className="home-hero__blob home-hero__blob--2" />
          <div className="home-hero__blob home-hero__blob--3" />
        </div>

        <div className="home-hero__inner">
          {/* Left – text */}
          <div className="home-hero__text">
            <span className="home-hero__badge">✨ University of Washington</span>
            <h1 className="home-hero__title">
              <span>Women in</span>
              <br />
              Informatics
            </h1>
            <p className="home-hero__subtitle">{heroData.subheadline}</p>
            <div className="home-hero__actions">
              <Button to={heroData.ctaLink} size="lg">
                {heroData.ctaLabel}
              </Button>
              <Button to="/events" variant="secondary" size="lg">
                Upcoming Events
              </Button>
            </div>
          </div>

          {/* Right – featured image */}
          <div className="home-hero__image-wrapper">
            <div className="home-hero__float home-hero__float--1" aria-hidden="true" />
            <div className="home-hero__float home-hero__float--2" aria-hidden="true" />
            <div className="home-hero__image-frame">
              {/* Replace the placeholder with a real group photo:
                  <img src="/images/hero-group.jpg" alt="WINFO members" /> */}
              <div className="home-hero__image-placeholder">👩‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. WHO WE ARE ============ */}
      <SectionWrapper>
        <div className="home-who">
          {/* Image side */}
          <div className="home-who__image-frame">
            {/* Replace with a real photo:
                <img src="/images/who-we-are.jpg" alt="WINFO community" /> */}
            <div className="home-who__image-placeholder">🤝</div>
          </div>

          {/* Text side */}
          <div className="home-who__content">
            <span className="home-who__label">Who We Are</span>
            <h2 className="home-who__title">{missionData.title}</h2>
            <p className="home-who__text">{missionData.body}</p>
            <p className="home-who__text">{missionData.bodySecondary}</p>
            <Button to="/about" variant="secondary" className="home-who__btn">
              Our Story →
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ============ 3. WHAT WE DO ============ */}
      <SectionWrapper alt>
        <SectionHeading
          label="What We Do"
          title="Building Skills, Community & Opportunity"
          description="Everything we do is designed to empower our members and create lasting impact."
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
              label="Learn"
              title="What is Informatics?"
              description="A modern discipline at the intersection of people, data, and technology."
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
              More Than a Club — A Community
            </h2>
            <p className="home-bottom-info__text">
              WINFO is dedicated to creating space where students can explore their
              interests, develop professional skills, and find their people. Whether
              you're a freshman exploring informatics or a senior heading into
              industry, there's a place for you here.
            </p>
            <p className="home-bottom-info__text">
              We partner with leading tech companies, host career-focused workshops,
              and maintain an active mentorship program that pairs students with
              industry professionals and upperclassmen.
            </p>
            <div className="home-bottom-info__links">
              <Link to="/membership" className="home-bottom-info__link">
                Become a Member →
              </Link>
              <Link to="/support" className="home-bottom-info__link">
                Support Our Mission →
              </Link>
            </div>
          </div>

          {/* Sidebar quick-links */}
          <div className="home-bottom-info__sidebar">
            <h4>Explore WINFO</h4>
            <div className="home-bottom-info__sidebar-links">
              <Link to="/events" className="home-bottom-info__sidebar-link">
                <span>📅</span> Upcoming Events
              </Link>
              <Link to="/hackathon" className="home-bottom-info__sidebar-link">
                <span>💻</span> Annual Hackathon
              </Link>
              <Link to="/podcast" className="home-bottom-info__sidebar-link">
                <span>🎙️</span> WINFO Podcast
              </Link>
              <Link to="/officers" className="home-bottom-info__sidebar-link">
                <span>👥</span> Meet the Team
              </Link>
              <Link to="/membership" className="home-bottom-info__sidebar-link">
                <span>💜</span> Join WINFO
              </Link>
              <Link to="/support" className="home-bottom-info__sidebar-link">
                <span>🤝</span> Sponsor Us
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ============ 6. CTA ============ */}
      <SectionWrapper>
        <CTABanner
          title="Ready to join our community?"
          text="Become a WINFO member and unlock access to mentorship, events, and a supportive network of peers."
          btnLabel="Become a Member"
          btnTo="/membership"
        />
      </SectionWrapper>
    </>
  );
}
