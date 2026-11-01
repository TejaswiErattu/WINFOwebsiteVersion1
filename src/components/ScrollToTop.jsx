import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Jumps to the top on every navigation, or to the #section in the URL.
 * Depends on location.key (not just pathname) so clicking a link to the page
 * you are already on, such as "home" in the footer, still returns to the top.
 * An instant jump is used because the page sets `scroll-behavior: smooth`,
 * and a smooth scroll can be interrupted on phones.
 */
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
    if (!hash) return undefined;

    /* A #section link (e.g. /events#youth): pages load lazily, so wait for
       the section to appear, then scroll to it. Gives up after ~3s. */
    let tries = 0;
    const id = setInterval(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
      if (el || ++tries > 30) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, [pathname, hash, key]);

  return null;
}
