import { useState } from 'react';
import { createPortal } from 'react-dom';
import './AnnouncementBanner.css';

/* index.html has this element just above the app root; banners mount into it */
const BANNER_SLOT_ID = 'announcement-slot';

/**
 * Standard site announcement bar: sits at the very top of the page, above
 * the navbar, and scrolls away with the page. It stays until the visitor
 * closes it; closing hides it for the rest of their visit.
 *
 * Props: id (unique key), message, linkLabel?, linkHref?
 */
export default function AnnouncementBanner({ id, message, linkLabel, linkHref }) {
  const storageKey = `winfo-banner-closed-${id}`;
  const [closed, setClosed] = useState(() => {
    try { return sessionStorage.getItem(storageKey) === '1'; } catch { return false; }
  });

  const close = () => {
    setClosed(true);
    try { sessionStorage.setItem(storageKey, '1'); } catch { /* storage blocked */ }
  };

  const slot = typeof document !== 'undefined' ? document.getElementById(BANNER_SLOT_ID) : null;
  if (closed || !slot) return null;

  const external = linkHref && /^https?:/.test(linkHref);

  return createPortal(
    <div className="announce" role="region" aria-label="Announcement">
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
      <button type="button" className="announce__close" aria-label="Dismiss announcement" onClick={close}>
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2 2l8 8M10 2 2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>,
    slot,
  );
}
