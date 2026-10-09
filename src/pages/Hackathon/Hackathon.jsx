import { useEffect, useRef, useState } from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import CircuitSVG from '../../components/CircuitSVG/CircuitSVG';
import GalleryScroller from '../../components/GalleryScroller/GalleryScroller';
import { renderBold } from '../../utils/renderBold';
import { hackathonData, REGISTRATION_URL_TBD } from '../../data/hackathonData';
import './Hackathon.css';

/* In-page sections, in render order. `id` doubles as the anchor target. */
const SECTIONS = [
  { id: 'gallery', label: 'Gallery' },
  { id: 'this-year', label: 'This Year' },
  { id: 'about', label: 'About' },
  { id: 'tracks', label: 'Prize Tracks' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'winners', label: 'Previous Winners' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'faq', label: 'FAQ' },
];
const SECTION_IDS = SECTIONS.map((s) => s.id);

/* Highlight the sub-nav link for whichever section sits just under the sticky bars */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        const first = ids.find((id) => visible.get(id));
        if (first) setActive(first);
      },
      /* Band starts just below where scroll-margin-top parks a section
         (nav 62 + sub-nav 53 + 12 = 127px), so the previous section is out */
      { rootMargin: '-140px 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Hackathon() {
  const {
    title,
    gallery,
    galleryEagerCount,
    currentHackathon: current,
    tagline,
    aboutBody,
    challengeHeading,
    challengeBody,
    beginnerHeading,
    beginnerBody,
    statsHeading,
    stats,
    tracksHeading,
    tracks,
    scheduleHeading,
    scheduleNote,
    schedule,
    winnersHeading,
    winners,
    faqHeading,
    faqs,
    sponsorHeading,
    sponsorBody,
    sponsorBenefits,
    sponsorCtaLabel,
    sponsorCtaLink,
    pastSponsorsHeading,
    pastSponsors,
    pastHackathonsHeading,
    pastHackathons,
  } = hackathonData;

  const activeSection = useActiveSection(SECTION_IDS);
  const subnavListRef = useRef(null);

  /* Mobile pill row: keep the active pill in view (horizontal scroll only) */
  useEffect(() => {
    const list = subnavListRef.current;
    const link = list?.querySelector('.hack-subnav__link--active');
    if (!list || !link || list.scrollWidth <= list.clientWidth) return;
    const left = link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2;
    list.scrollTo({ left, behavior: 'smooth' });
  }, [activeSection]);
  const registrationOpen =
    current.registrationUrl && current.registrationUrl !== REGISTRATION_URL_TBD;

  /* FAQ accordion state */
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq((prev) => (prev === i ? null : i));

  return (
    <div className="hack-page">
      {/* ===== PAGE HEADER ===== */}
      <header className="hack-header">
        <h1 className="cursive-title page-title">{title}</h1>
      </header>

      {/* ===== IN-PAGE SUB-NAV ===== */}
      <nav className="hack-subnav" aria-label="Hackathon page sections">
        <ul className="hack-subnav__list" ref={subnavListRef}>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`hack-subnav__link ${activeSection === s.id ? 'hack-subnav__link--active' : ''}`}
                aria-current={activeSection === s.id ? 'location' : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== 1 · GALLERY (scroll, swipe or drag; also drifts on its own) ===== */}
      <section id="gallery" className="hack-section hack-gallery" aria-label="Hackathon photo gallery">
        <GalleryScroller photos={gallery} label="Hackathon photos" eagerCount={galleryEagerCount} />
      </section>

      {/* ===== 2 · THIS YEAR'S HACKATHON ===== */}
      <SectionWrapper id="this-year" className="hack-section hack-current">
        <div className={`hack-current__grid ${current.posterSrc ? '' : 'hack-current__grid--no-poster'}`}>
          {current.posterSrc && (
            <div className="hack-current__poster">
              <img src={current.posterSrc} alt={current.posterAlt} loading="lazy" decoding="async" />
            </div>
          )}

          <div className="hack-current__info">
            <p className="hack-current__eyebrow">WINFO {current.edition}th Hackathon</p>
            <h2 className="hack-current__theme">{current.theme}</h2>
            <p className="hack-current__meta">
              <span className="hack-current__date">{current.dates}</span>
              <span className="hack-current__location">{current.location}</span>
              <span className="hack-current__location-detail">{current.locationDetail}</span>
            </p>
            <p className="hack-current__body">{current.intro}</p>
            {current.themeBody.map((p, i) => (
              <p key={i} className="hack-current__body">{p}</p>
            ))}

            {registrationOpen ? (
              <Button href={current.registrationUrl} variant="primary" size="lg" className="hack-current__register">
                Register
              </Button>
            ) : (
              <span className="hack-current__register-soon" role="status">
                Registration opening soon
              </span>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 3 · ABOUT THE HACKATHON ===== */}
      <SectionWrapper id="about" alt className="hack-section">
        <div className="hack-about">
          <div className="hack-about__text">
            <h2 className="cursive-title hack-hero__tagline">{tagline}</h2>
            <p className="hack-hero__body">{aboutBody}</p>

            <h3 className="hack-hero__sub-heading">{challengeHeading}</h3>
            <p className="hack-hero__body">{challengeBody}</p>

            <h3 className="hack-hero__sub-heading">{beginnerHeading}</h3>
            <p className="hack-hero__body">{beginnerBody}</p>
          </div>

          <div className="hack-about__stats">
            <h3 className="cursive-title hack-stats__heading">{statsHeading}</h3>
            <div className="hack-stats">
              {stats.map((s, i) => (
                <div key={i} className={`hack-stat hack-stat--${i}`}>
                  <span className="hack-stat__number">{s.number}</span>
                  <span className="hack-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 4 · PRIZE TRACKS ===== */}
      <SectionWrapper id="tracks" className="hack-section">
        <h2 className="cursive-title section-title--center">{tracksHeading}</h2>
        <ol className="hack-tracks">
          {tracks.map((t, i) => (
            <li key={t.name} className="hack-track">
              <span className="hack-track__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="hack-track__name">{t.name}</h3>
                <p className="hack-track__desc">{t.description}</p>
                <p className="hack-track__focus-label">This track focuses on</p>
                <ul className="hack-track__focus">
                  {t.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      {/* ===== 5 · SCHEDULE ===== */}
      <SectionWrapper id="schedule" alt className="hack-section">
        <h2 className="cursive-title section-title--center">{scheduleHeading}</h2>
        <div className="hack-schedule">
          {schedule.map((d) => (
            <div key={d.day} className="hack-schedule__day">
              <h3 className="hack-schedule__title">{d.day}</h3>
              <p className="hack-schedule__date">{d.date}</p>
              <p className="hack-schedule__place">{d.location}</p>
              <dl className="hack-schedule__list">
                {d.items.map((it) => (
                  <div key={it.time + it.label} className="hack-schedule__row">
                    <dt>{it.time}</dt>
                    <dd>{it.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <p className="hack-schedule__note">{scheduleNote}</p>
      </SectionWrapper>

      {/* ===== 6 · PREVIOUS WINNERS + PAST THEMES ===== */}
      <SectionWrapper id="winners" className="hack-section">
        <div className="hack-winners-card">
          <h2 className="cursive-title hack-winners__heading">{winnersHeading}</h2>
          <div className="hack-winners-grid">
            {winners.map((w) => (
              <div key={w.category} className="hack-winner">
                <p className="hack-winner__category">{w.category}</p>
                <div className="hack-winner__image">
                  {w.image ? (
                    <img src={w.image} alt={`${w.category} winning team`} loading="lazy" decoding="async" />
                  ) : (
                    <div className="hack-winner__placeholder" />
                  )}
                </div>
                {w.projectName && <p className="hack-winner__project">{w.projectName}</p>}
                {w.projectDescription && <p className="hack-winner__desc">{w.projectDescription}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="hack-past">
          <h3 className="cursive-title hack-past__heading">{pastHackathonsHeading}</h3>
          <div className="hack-past-list">
            {pastHackathons.map((ph) => (
              <div key={ph.year} className="hack-past-item">
                <span className="hack-past-item__theme">{ph.theme}</span>
                <span className="hack-past-item__year">{ph.year}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 7 · SPONSORS ===== */}
      <SectionWrapper id="sponsors" alt className="hack-section hack-sponsor-section">
        <h2 className="cursive-title hack-sponsor__heading">{sponsorHeading}</h2>
        <p className="hack-sponsor__body">{renderBold(sponsorBody)}</p>

        <div className="hack-sponsor-benefits">
          {sponsorBenefits.map((b, i) => (
            <div key={i} className={`hack-sponsor-benefit hack-sponsor-benefit--${i}`}>
              <h3 className="hack-sponsor-benefit__title">{b.title}</h3>
              <p className="hack-sponsor-benefit__text">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="hack-sponsor__cta">
          <Button href={sponsorCtaLink} variant="accent" size="lg">
            {sponsorCtaLabel}
          </Button>
        </div>

        <h3 className="cursive-title section-title--center hack-past-sponsors__heading">
          {pastSponsorsHeading}
        </h3>
        <div className="hack-past-sponsors">
          {pastSponsors.map((sponsor) => (
            <div key={sponsor.name} className={`hack-past-sponsor${sponsor.dark ? ' hack-past-sponsor--dark' : ''}`}>
              {sponsor.logo ? (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="hack-past-sponsor__logo"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="hack-past-sponsor__name">{sponsor.name}</span>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 8 · FAQ / CONTACT ===== */}
      <SectionWrapper id="faq" className="hack-section hack-faq-section">
        <div className="hack-faq__circuit" aria-hidden="true">
          <CircuitSVG variant="faq" />
        </div>

        <h2 className="cursive-title hack-faq__heading">{faqHeading}</h2>

        <div className="hack-faq">
          {faqs.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className={`hack-faq__item ${isOpen ? 'hack-faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="hack-faq__trigger"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                  aria-controls={`hack-faq-${i}`}
                >
                  <span className="hack-faq__question">{item.question}</span>
                  <span className="hack-faq__chevron" aria-hidden="true">
                    {isOpen ? '∧' : '∨'}
                  </span>
                </button>
                <div className="hack-faq__answer" id={`hack-faq-${i}`} hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
