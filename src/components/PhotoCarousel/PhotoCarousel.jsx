import { useCallback, useEffect, useRef, useState } from 'react';
import './PhotoCarousel.css';

const AUTOPLAY_MS = 5000;

/**
 * Accessible photo carousel.
 * photos: [{ src, alt, width?, height?, caption? }]
 * Auto-advances (paused on hover/focus, off for reduced-motion users) and
 * has a visible pause control, prev/next buttons and dot navigation.
 */
export default function PhotoCarousel({ photos = [], label = 'Photo gallery' }) {
  const [index, setIndex] = useState(0);
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [playing, setPlaying] = useState(!prefersReduced);
  const [hovered, setHovered] = useState(false);
  const rootRef = useRef(null);
  const count = photos.length;

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (!playing || hovered || count < 2) return undefined;
    const t = setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [playing, hovered, index, count, go]);

  if (count === 0) return null;

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
  };

  return (
    <section
      ref={rootRef}
      className="photo-carousel"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => { if (!rootRef.current?.contains(e.relatedTarget)) setHovered(false); }}
      onKeyDown={onKeyDown}
    >
      <div className="photo-carousel__viewport">
        <ul
          className="photo-carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live={playing && !hovered ? 'off' : 'polite'}
        >
          {photos.map((p, i) => (
            <li
              key={p.src}
              className="photo-carousel__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
            >
              <figure className="photo-carousel__frame">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                {p.caption && <figcaption>{p.caption}</figcaption>}
              </figure>
            </li>
          ))}
        </ul>
      </div>

      {count > 1 && (
        <div className="photo-carousel__controls">
          <button type="button" className="photo-carousel__btn" onClick={() => go(index - 1)} aria-label="Previous photo">
            <span aria-hidden="true">‹</span>
          </button>
          <div className="photo-carousel__dots">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                className={`photo-carousel__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" className="photo-carousel__btn" onClick={() => go(index + 1)} aria-label="Next photo">
            <span aria-hidden="true">›</span>
          </button>
          <button
            type="button"
            className="photo-carousel__btn photo-carousel__btn--pause"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          >
            <span aria-hidden="true">{playing ? '❚❚' : '▶'}</span>
          </button>
        </div>
      )}
    </section>
  );
}
