import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Button from '../../components/Buttons/Buttons';
import { renderBold } from '../../utils/renderBold';
import { alumniData, pastBoards } from '../../data/alumniData';
import './Alumni.css';

export default function Alumni() {
  const d = alumniData;

  return (
    <>
      {/* ===== 1 · HERO ===== */}
      <section className="alumni-hero">
        <div className="alumni-hero__inner">
          <div className="alumni-hero__content">
            <p className="alumni-eyebrow">{d.eyebrow}</p>
            <h1 className="cursive-title page-title">{d.title}</h1>
            <p className="alumni-hero__text">{renderBold(d.heroBody)}</p>
            <p className="alumni-hero__text">{renderBold(d.heroBodySecondary)}</p>
            <Button href={d.ctaLink} variant="primary" className="alumni-hero__btn">
              {d.ctaLabel}
            </Button>
          </div>
          <div className="alumni-hero__image-frame photo-frame">
            <img src={d.heroImage} alt={d.heroImageAlt} decoding="async" />
          </div>
        </div>
      </section>

      {/* ===== 2 · THE WINFO CYCLE ===== */}
      <SectionWrapper>
        <h2 className="cursive-title section-title--center">{d.cycleHeading}</h2>
        <ol className="alumni-cycle">
          {d.cycle.map((c) => (
            <li key={c.step} className="alumni-cycle__step">
              <span className="alumni-cycle__num" aria-hidden="true">{c.step}</span>
              <h3 className="alumni-cycle__title">{c.title}</h3>
              <p className="alumni-cycle__text">{c.text}</p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      {/* ===== 3 · WHY ===== */}
      <SectionWrapper alt>
        <div className="alumni-why">
          <h2 className="cursive-title">{d.whyHeading}</h2>
          <ul className="alumni-why__list">
            {d.why.map((w) => (
              <li key={w}>{renderBold(w)}</li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* ===== 4 · WHAT THE BOARD DOES ===== */}
      <SectionWrapper>
        <h2 className="cursive-title section-title--center">{d.doesHeading}</h2>
        <div className="alumni-pillars">
          {d.pillars.map((p) => (
            <article key={p.label} className={`alumni-pillar alumni-pillar--${p.accent}`}>
              <p className="alumni-pillar__label">{p.label}</p>
              <h3 className="alumni-pillar__title">{p.title}</h3>
              <ul>
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 5 · BOARD STRUCTURE ===== */}
      <SectionWrapper alt>
        <h2 className="cursive-title section-title--center">{d.structureHeading}</h2>
        <div className="alumni-structure">
          <div className="alumni-structure__chair">{d.chair}</div>
          <ul className="alumni-structure__leads">
            {d.leads.map((l) => (
              <li key={l.role}>
                <strong>{l.role}</strong>
                <span>{l.text}</span>
              </li>
            ))}
          </ul>
          <p className="alumni-structure__reps">{d.reps}</p>
        </div>
      </SectionWrapper>

      {/* ===== 6 · VISION QUOTE ===== */}
      <SectionWrapper narrow>
        <blockquote className="alumni-vision">
          <p>{renderBold(d.vision)}</p>
        </blockquote>
      </SectionWrapper>

      {/* ===== 7 · PAST BOARDS ===== */}
      <SectionWrapper alt>
        <h2 className="cursive-title section-title--center">{d.pastBoardHeading}</h2>
        <p className="alumni-past__intro">{d.pastBoardIntro}</p>
        <div className="alumni-past">
          {pastBoards.map((b, i) => (
            <details key={b.year} className="alumni-past__year" open={i === 0}>
              <summary>{b.year} board</summary>
              <ul>
                {b.members.map((m) => (
                  <li key={`${m.name}-${m.role}`}>
                    <span className="alumni-past__name">{m.name}</span>
                    <span className="alumni-past__role">{m.role}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== 8 · CTA ===== */}
      <SectionWrapper>
        <div className="alumni-cta">
          <p className="alumni-cta__text cursive-title">{d.bottomCta.text}</p>
          <Button href={d.bottomCta.btnLink} variant="accent" size="lg">
            {d.bottomCta.btnLabel}
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
