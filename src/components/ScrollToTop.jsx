import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Jumps to the top on every navigation.
 * Depends on location.key (not just pathname) so clicking a link to the page
 * you are already on, such as "home" in the footer, still returns to the top.
 * An instant jump is used because the page sets `scroll-behavior: smooth`,
 * and a smooth scroll can be interrupted on phones.
 */
export default function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [pathname, key]);

  return null;
}
