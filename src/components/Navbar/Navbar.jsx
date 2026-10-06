import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, siteInfo } from '../../data/navLinks';
import Button from '../Buttons/Buttons';
import WinfoLogo from '../WinfoLogo/WinfoLogo';
import './Navbar.css';

const MOBILE_MENU_ID = 'navbar-mobile-menu';
const SCROLL_THRESHOLD = 20;
const FOCUSABLE = 'a[href], button:not([disabled])';

/**
 * Navbar — sticky top navigation.
 *
 * Props accepted via `navLinks` from siteData:
 *   links  – array of { label, path }
 *
 * Features:
 *   • Desktop link row with active-state underline (NavLink)
 *   • Solid background + shadow once scrolled past 20px
 *   • Mobile (< 768px) slide-down panel: closes on route change and Escape,
 *     traps Tab focus while open, returns focus to the hamburger on close
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(null);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  /* Close the mobile menu whenever the route changes (state-driven, no effect) */
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  const toggle = () => setMenuOpen((prev) => !prev);
  const close  = () => setMenuOpen(false);

  /* Scrolled state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Escape to close + focus trap while the mobile menu is open */
  useEffect(() => {
    if (!menuOpen) return undefined;

    const toggleBtn = toggleRef.current;
    const getFocusable = () => [
      toggleBtn,
      ...(panelRef.current?.querySelectorAll(FOCUSABLE) ?? []),
    ].filter(Boolean);

    getFocusable()[1]?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleBtn?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = getFocusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    /* Close if the viewport grows past the mobile breakpoint */
    const mq = window.matchMedia('(min-width: 768px)');
    const onResize = (e) => e.matches && setMenuOpen(false);

    document.addEventListener('keydown', onKeyDown);
    mq.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      mq.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  const renderLinks = (onClick) =>
    navLinks.map((link) =>
      link.external ? (
        <a
          key={link.path}
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__link navbar__link--merch"
          onClick={onClick}
        >
          {link.label}
        </a>
      ) : (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === '/'}
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
          onClick={onClick}
        >
          {link.label}
        </NavLink>
      )
    );

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo" onClick={close} aria-label="WINFO home">
          <WinfoLogo color="multi" />
        </Link>

        {/* ── Desktop links ── */}
        <div className="navbar__links">
          {renderLinks()}

          <Button href={siteInfo.navCtaHref} size="sm" className="navbar__cta">
            {siteInfo.navCtaLabel}
          </Button>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          ref={toggleRef}
          type="button"
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggle}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls={MOBILE_MENU_ID}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile panel (inert when closed so it is skipped by Tab and AT) ── */}
      <div
        id={MOBILE_MENU_ID}
        ref={panelRef}
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        inert={!menuOpen}
      >
        {renderLinks(close)}

        <Button href={siteInfo.navCtaHref} size="sm" className="navbar__cta" onClick={close}>
          {siteInfo.navCtaLabel}
        </Button>
      </div>
    </nav>
  );
}
