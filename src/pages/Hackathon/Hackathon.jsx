import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import AnnouncementBanner from '../../components/AnnouncementBanner/AnnouncementBanner';
import { renderBold } from '../../utils/renderBold';
import { hackathonData, REGISTRATION_URL_TBD } from '../../data/hackathonData';
import './Hackathon.css';

/* Evergreen overview of WINFO's annual hackathon. Year-specific details
   (schedule, prize tracks, FAQ) live on the official hackathon website. */
export default function Hackathon() {
  const {
    title,
    heroLede,
    heroImage,
    overviewHeading,
    overviewBody,
    statsHeading,
    stats,
    tagline,
    aboutBody,
    challengeHeading,
    challengeBody,
    beginnerHeading,
    beginnerBody,
    aboutImage,
    aboutImageAlt,
    currentHackathon: current,
    impactHeading,
    impactBody,
    impactPhotos,
    winnersHeading,
    winners,
    sponsorHeading,
    sponsorBody,
    sponsorBenefits,
    sponsorCtaLabel,
    sponsorCtaLink,
    pastSponsorsHeading,
    pastSponsors,
    websiteHeading,
    websiteBody,
  } = hackathonData;

  const registrationOpen =
    current.registrationUrl && current.registrationUrl !== REGISTRATION_URL_TBD;

  return (
    <div className="hack-page">
      {current.banner && (
        <AnnouncementBanner id="hackathon-15" message={current.banner} linkLabel={current.bannerLinkLabel} linkHref={current.websiteUrl} />
      )}

      {/* ===== HERO: large title over a crowd photo ===== */}
      <header className="hack-hero" style={{ '--hack-hero-img': `url(${heroImage})` }}>
        <div className="hack-hero__inner">
          <h1 className="cursive-title page-title hack-hero__title">{title}</h1>
          <p className="hack-hero__lede">{heroLede}</p>
        </div>
      </header>

      {/* ===== 1 · OVERVIEW: history, scale, mission ===== */}
      <SectionWrapper className="hack-section">
        <div className="hack-split">
          <div className="hack-split__text">
            <h2 className="cursive-title">{overviewHeading}</h2>
            {overviewBody.map((p, i) => (
              <p key={i} className="hack-body">{p}</p>
            ))}
          </div>
          <div className="hack-stats-card">
            <h3 className="hack-stats__heading">{statsHeading}</h3>
            <div className="hack-stats">
              {stats.map((s) => (
                <div key={s.label} className="hack-stat">
                  <span className="hack-stat__number">{s.number}</span>
                  <span className="hack-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 2 · COLLABORATE. NETWORK. SOLVE. (photo left, text right) ===== */}
      <SectionWrapper alt className="hack-section">
        <div className="hack-split hack-split--flipped">
          <div className="hack-split__text">
            <h2 className="cursive-title hack-tagline">{tagline}</h2>
            <p className="hack-body">{aboutBody}</p>
            <h3 className="hack-sub-heading">{challengeHeading}</h3>
            <p className="hack-body">{challengeBody}</p>
            <h3 className="hack-sub-heading">{beginnerHeading}</h3>
            <p className="hack-body">{beginnerBody}</p>
          </div>
          <figure className="photo-frame hack-photo hack-photo--tilt">
            <img src={aboutImage} alt={aboutImageAlt} width="1200" height="800" loading="lazy" decoding="async" />
          </figure>
        </div>
      </SectionWrapper>

      {/* ===== 3 · THIS YEAR'S THEME (text left, photos right) ===== */}
      <SectionWrapper className="hack-section hack-current">
        <div className="hack-split">
          <div className="hack-split__text">
            <p className="hack-eyebrow">{current.label}</p>
            <h2 className="hack-current__theme">{current.theme}</h2>
            <p className="hack-current__meta">
              <span className="hack-current__date">{current.dates}</span>
              <span className="hack-current__location">{current.location}</span>
              <span className="hack-current__location-detail">{current.locationDetail}</span>
            </p>
            {current.themeBody.map((p, i) => (
              <p key={i} className="hack-body">{p}</p>
            ))}
            <div className="hack-current__actions">
              {registrationOpen ? (
                <Button href={current.registrationUrl} variant="accent" size="lg">Register</Button>
              ) : (
                <span className="hack-current__register-soon" role="status">Registration opening soon</span>
              )}
            </div>
          </div>
          <div className="hack-photo-stack">
            {current.photos.map((p) => (
              <figure key={p.src} className="photo-frame hack-photo">
                <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ===== 4 · PHOTOS & IMPACT ===== */}
      <SectionWrapper alt className="hack-section">
        <div className="hack-impact__intro">
          <h2 className="cursive-title">{impactHeading}</h2>
          <p className="hack-body">{impactBody}</p>
        </div>
        <div className="hack-collage">
          {impactPhotos.map((p, i) => (
            <figure key={p.src} className={`photo-frame hack-photo hack-collage__item hack-collage__item--${i}`}>
              <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>

        <h3 className="hack-winners__heading">{winnersHeading}</h3>
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
      </SectionWrapper>

      {/* ===== 5 · SUPPORT OUR HACKATHON (static logo wall, every sponsor visible) ===== */}
      <SectionWrapper className="hack-section">
        <div className="hack-split hack-split--top">
          <div className="hack-split__text">
            <h2 className="cursive-title">{sponsorHeading}</h2>
            <p className="hack-body">{renderBold(sponsorBody)}</p>
            <Button href={sponsorCtaLink} variant="primary" size="lg">{sponsorCtaLabel}</Button>
          </div>
          <ul className="hack-sponsor-benefits">
            {sponsorBenefits.map((b) => (
              <li key={b.title} className="hack-sponsor-benefit">
                <h3 className="hack-sponsor-benefit__title">{b.title}</h3>
                <p className="hack-sponsor-benefit__text">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="hack-past-sponsors__heading">{pastSponsorsHeading}</h3>
        <ul className="hack-sponsor-wall" aria-label="Past sponsors">
          {pastSponsors.map((sponsor) => (
            <li
              key={sponsor.name}
              className={`hack-past-sponsor${sponsor.dark ? ' hack-past-sponsor--dark' : ''}${sponsor.logo ? '' : ' hack-past-sponsor--text'}`}
            >
              {sponsor.logo ? (
                <img src={sponsor.logo} alt={sponsor.name} className="hack-past-sponsor__logo" loading="lazy" decoding="async" />
              ) : (
                <span className="hack-past-sponsor__name">{sponsor.name}</span>
              )}
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* ===== 6 · OFFICIAL HACKATHON WEBSITE ===== */}
      {current.websiteUrl && (
        <section className="hack-website">
          <h2 className="cursive-title">{websiteHeading}</h2>
          <p className="hack-body">{websiteBody}</p>
          <Button href={current.websiteUrl} variant="accent" size="lg">{current.websiteLabel}</Button>
        </section>
      )}
    </div>
  );
}
