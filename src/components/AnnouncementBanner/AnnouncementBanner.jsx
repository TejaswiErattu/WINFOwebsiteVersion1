import { useEffect, useRef, useState } from 'react';
import './AnnouncementBanner.css';

const SHOW_AFTER_MS = 700;
const VISIBLE_MS = 7000;

/**
 * A small announcement that slides down under the navbar, then leaves on its
 * own. Pauses while hovered or focused, has a close button, and shows once
 * per page per browser session.
 *
 * Props: id (unique key), message, linkLabel?, linkHref?
 */
export default function AnnouncementBanner({ id, message, linkLabel, linkHref }) {
  const [state, setState] = useState('hidden'); // hidden → shown → leaving → gone
  const [paused, setPaused] = useState(false);
  const leaveTimer = useRef(0);
  const storageKey = `winfo-banner-${id}`;

  /* Appear shortly after the page loads (unless already seen this session) */
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(storageKey) === '1'; } catch { /* storage blocked */ }
    if (seen) return undefined;
    const t = setTimeout(() => {
      setState('shown');
      try { sessionStorage.setItem(storageKey, '1'); } catch { /* storage blocked */ }
    }, SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, [storageKey]);

  /* Leave on its own after a while, unless the visitor is reading it */
  useEffect(() => {
    if (state !== 'shown' || paused) return undefined;
    leaveTimer.current = setTimeout(() => setState('leaving'), VISIBLE_MS);
    return () => clearTimeout(leaveTimer.current);
  }, [state, paused]);

  if (state === 'hidden' || state === 'gone') return null;

  const external = linkHref && /^https?:/.test(linkHref);

  return (
    <div
      className={`announce ${state === 'leaving' ? 'announce--leaving' : ''}`}
      role="status"
      onAnimationEnd={() => state === 'leaving' && setState('gone')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <p className="announce__text">
        {message}
        {linkHref && (
          <>
            {' '}
            <a
              href={linkHref}
              className="announce__link"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {linkLabel}
            </a>
          </>
        )}
      </p>
      <button type="button" className="announce__close" aria-label="Dismiss announcement" onClick={() => setState('leaving')}>
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2 2l8 8M10 2 2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
