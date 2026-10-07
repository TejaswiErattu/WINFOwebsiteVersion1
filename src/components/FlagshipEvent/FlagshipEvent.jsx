import { useRef, useState } from 'react';
import Button from '../Buttons/Buttons';
import PosterLightbox from './PosterLightbox';
import './FlagshipEvent.css';

/**
 * FlagshipEvent — full-width editorial section for one flagship event.
 *
 * Props:
 *   event       – an entry from data/flagshipEvents.js (missing fields are skipped)
 *   labels      – eventsData.flagshipLabels (all visible UI strings)
 *   flipped     – true puts the copy left and media right
 *   eagerMedia  – load the first photo eagerly (first section only)
 */
export default function FlagshipEvent({ event, labels, flipped = false, eagerMedia = false }) {
  const {
    slug, name, tagline, dates, description, mission, audience, audienceLabel, howItWorks,
    timesHeld, timesHeldAsOf, firstYear, attendance, reach, tracks,
    posters = [], photos = [], link,
  } = event;

  /* ---- Stats: verified numbers only; a strip needs at least two ---- */
  const stats = [];
  if (timesHeld != null) {
    stats.push({ value: timesHeld, label: timesHeldAsOf ? `${labels.timesHeld} (${labels.asOf} ${timesHeldAsOf})` : labels.timesHeld });
  }
  if (firstYear != null) stats.push({ value: firstYear, label: labels.firstYear });
  if (attendance != null) stats.push({ value: attendance, label: labels.attendance });

  /* ---- Numbered rows: only those with content ---- */
  const rows = [];
  if (mission) rows.push({ key: 'mission', title: labels.mission, body: <p>{mission}</p> });
  if (audience) rows.push({ key: 'audience', title: labels.audience, body: <p>{audience}</p> });
  if (howItWorks) rows.push({ key: 'how', title: labels.howItWorks, body: <p>{howItWorks}</p> });
  if (reach?.length) {
    rows.push({
      key: 'reach',
      title: labels.reach,
      body: (
        <ul className="flagship__list">
          {reach.map((r) => <li key={r}>{r}</li>)}
        </ul>
      ),
    });
  }
  if (tracks?.items?.length) {
    rows.push({
      key: 'tracks',
      title: `${tracks.year} ${labels.tracks}`,
      body: (
        <ul className="flagship__list">
          {tracks.items.map((t) => (
            <li key={t.name}><strong>{t.name}:</strong> {t.description}</li>
          ))}
        </ul>
      ),
    });
  }

  /* ---- Poster lightbox ---- */
  const [openIndex, setOpenIndex] = useState(null);
  const thumbRefs = useRef([]);
  const closeLightbox = () => {
    const i = openIndex;
    setOpenIndex(null);
    requestAnimationFrame(() => thumbRefs.current[i]?.focus());
  };

  const headingId = `flagship-${slug}-title`;
  const loading = (i) => (eagerMedia && i === 0 ? 'eager' : 'lazy');

  /* ---- Media: 1 photo single, 2 side by side, 3–5 collage ---- */
  const shown = photos.slice(0, 5);
  const mediaClass =
    shown.length >= 3 ? 'flagship__media--collage' : shown.length === 2 ? 'flagship__media--pair' : 'flagship__media--single';

  return (
    <section
      className={`flagship flagship--${slug} ${flipped ? 'flagship--flipped' : ''}`}
      aria-labelledby={headingId}
    >
      <div className={`flagship__inner ${shown.length ? '' : 'flagship__inner--no-media'}`}>
        {shown.length > 0 && (
          <div className={`flagship__media ${mediaClass} flagship__media--count-${shown.length}`}>
            {shown.map((p, i) => (
              <figure key={p.src} className="flagship__photo">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  loading={loading(i)}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        )}

        <div className="flagship__copy">
          {audienceLabel && <p className="flagship__badge">{audienceLabel}</p>}
          <h2 id={headingId} className="flagship__name">{name}</h2>
          {tagline && <p className="flagship__tagline">{tagline}</p>}
          {dates && <p className="flagship__dates">{dates}</p>}
          {description && <p className="flagship__description">{description}</p>}

          {stats.length >= 2 && (
            <dl className="flagship__stats">
              {stats.map((s) => (
                <div key={s.label} className="flagship__stat">
                  <dt className="flagship__stat-label">{s.label}</dt>
                  <dd className="flagship__stat-value">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {rows.length > 0 && (
            <ol className="flagship__rows">
              {rows.map((r, i) => (
                <li key={r.key} className="flagship__row">
                  <span className="flagship__row-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="flagship__row-title">{r.title}</h3>
                    <div className="flagship__row-body">{r.body}</div>
                  </div>
                </li>
              ))}
            </ol>
          )}

          {posters.length > 0 && (
            <div className="flagship__posters">
              <h3 className="flagship__posters-title">{labels.posters}</h3>
              <ul className="flagship__poster-strip">
                {posters.map((p, i) => (
                  <li key={p.src}>
                    <button
                      type="button"
                      ref={(el) => { thumbRefs.current[i] = el; }}
                      className="flagship__poster-thumb"
                      onClick={() => setOpenIndex(i)}
                      aria-label={`${labels.openPoster}${p.year ? ` ${p.year}` : ''}: ${p.alt}`}
                    >
                      <img src={p.src} alt="" loading="lazy" decoding="async" />
                      {p.year && <span className="flagship__poster-year">{p.year}</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {link && (
            <div className="flagship__cta">
              <Button to={link.to} href={link.href} variant="primary">
                {link.label}
              </Button>
            </div>
          )}
        </div>
      </div>

      {openIndex !== null && (
        <PosterLightbox
          posters={posters}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={closeLightbox}
          labels={labels}
        />
      )}
    </section>
  );
}
