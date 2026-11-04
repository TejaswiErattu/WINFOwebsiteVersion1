import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { useState } from 'react';
import WinfoLogo from '../../components/WinfoLogo/WinfoLogo';
import CircuitSVG from '../../components/CircuitSVG/CircuitSVG';
import GalleryScroller from '../../components/GalleryScroller/GalleryScroller';
import { renderBold } from '../../utils/renderBold';
import {
  heroData,
  informaticsHeading,
  informaticsDefinition,
  informaticsAreas,
  informaticsQuotes,
  communityHeading,
  communityPhotos,
} from '../../data/homeData';
import './Home.css';

export default function Home() {
  /* Which Informatics bubble is showing its description (hover or tap) */
  const [activeArea, setActiveArea] = useState(0);
  const area = informaticsAreas[activeArea];

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
          <h1 className="home-hero__title page-title--hero">
            {heroData.heading.map((line, i) => (
              <span key={line} className="home-hero__title-line">
                {i > 0 && ' '}
                {line}
              </span>
            ))}
          </h1>
          {heroData.slogan && <p className="home-hero__slogan">{heroData.slogan}</p>}
          <p className="home-hero__tagline">{heroData.tagline}</p>
        </div>
      </section>

      {/* ===== 2. WHAT IS INFORMATICS (explained before WINFO itself) ===== */}
      <SectionWrapper className="home-informatics">
        <div className="home-informatics__bg" aria-hidden="true">
          <div className="home-informatics__blob home-informatics__blob--1" />
          <div className="home-informatics__blob home-informatics__blob--2" />
        </div>
        <div className="home-informatics__inner">
          <h2 className="cursive-title section-title--center">
            {informaticsHeading.title}
          </h2>
          <div className="home-informatics__definition">
            {informaticsDefinition.map((p, i) => (
              <p key={i} className="home-informatics__text">{renderBold(p)}</p>
            ))}
          </div>
          <ul className="home-informatics__areas" aria-label="Areas of Informatics">
            {informaticsAreas.map((a, i) => (
              <li key={a.name}>
                <button
                  type="button"
                  className="home-informatics__area"
                  aria-pressed={i === activeArea}
                  aria-controls="informatics-area-desc"
                  onClick={() => setActiveArea(i)}
                  onMouseEnter={() => setActiveArea(i)}
                  onFocus={() => setActiveArea(i)}
                >
                  {a.name}
                </button>
              </li>
            ))}
          </ul>
          <p id="informatics-area-desc" className="home-informatics__area-desc" aria-live="polite">
            <strong>{area.name}:</strong> {area.desc}
          </p>
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
      {/* ===== 3. OUR COMMUNITY (photo strip; edit communityPhotos in homeData.js) ===== */}
      <section className="section-wrapper section-wrapper--alt home-community" aria-labelledby="home-community-title">
        <div className="container">
          <h2 id="home-community-title" className="cursive-title section-title--center">{communityHeading}</h2>
        </div>
        <GalleryScroller photos={communityPhotos} label="Photos from WINFO events" eagerCount={0} />
      </section>

    </>
  );
}
