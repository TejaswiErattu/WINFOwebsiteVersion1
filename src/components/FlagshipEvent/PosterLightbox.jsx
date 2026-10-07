import { useEffect, useRef } from 'react';

/**
 * PosterLightbox — accessible, dependency-free image viewer.
 *
 * Props:
 *   posters  – [{ src, alt, year }]
 *   index    – currently shown poster (number)
 *   onChange – (nextIndex) => void
 *   onClose  – () => void   (the opener restores focus to its thumbnail)
 *   labels   – { closePoster, prevPoster, nextPoster, posterCount }
 *
 * Keyboard: ←/→ navigate, Esc closes, Tab is trapped inside the dialog.
 */
export default function PosterLightbox({ posters, index, onChange, onClose, labels }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const poster = posters[index];
  const multiple = posters.length > 1;

  const go = (step) => onChange((index + step + posters.length) % posters.length);

  /* Initial focus + lock page scroll while open */
  useEffect(() => {
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowRight' && multiple) {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft' && multiple) {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'Tab') {
      const items = [...dialogRef.current.querySelectorAll('button')];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  return (
    <div className="poster-lightbox" onClick={onClose}>
      <div
        ref={dialogRef}
        className="poster-lightbox__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={poster.alt}
        onKeyDown={onKeyDown}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="poster-lightbox__close"
          onClick={onClose}
          aria-label={labels.closePoster}
        >
          <span aria-hidden="true">×</span>
        </button>

        <img className="poster-lightbox__img" src={poster.src} alt={poster.alt} decoding="async" />

        {multiple && (
          <div className="poster-lightbox__nav">
            <button type="button" onClick={() => go(-1)} aria-label={labels.prevPoster}>
              <span aria-hidden="true">←</span>
            </button>
            <p className="poster-lightbox__count" aria-live="polite">
              {index + 1} {labels.posterCount} {posters.length}
            </p>
            <button type="button" onClick={() => go(1)} aria-label={labels.nextPoster}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
