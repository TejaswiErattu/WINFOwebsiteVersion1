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

  const linkClass = ({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`;

  /* Desktop row: plain links and dropdown groups */
  const desktopLinks = navLinks.map((item) =>
    item.children ? (
      <NavGroup key={item.label} group={item} pathname={pathname} />
    ) : (
      <NavLink key={item.path} to={item.path} end={item.path === '/'} className={linkClass}>
        {item.label}
      </NavLink>
    ),
  );

  /* Mobile panel: groups become a small label with their pages underneath */
  const mobileLinks = navLinks.map((item) =>
    item.children ? (
      <div key={item.label} className="navbar__mobile-group" role="group" aria-label={item.label}>
        <p className="navbar__mobile-group-label" aria-hidden="true">{item.label}</p>
        {item.children.map((child) => (
          <NavLink key={child.path} to={child.path} className={linkClass} onClick={close}>
            {child.label}
          </NavLink>
        ))}
      </div>
    ) : (
      <NavLink key={item.path} to={item.path} end={item.path === '/'} className={linkClass} onClick={close}>
        {item.label}
      </NavLink>
    ),
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
          {desktopLinks}

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
        {mobileLinks}

        <Button href={siteInfo.navCtaHref} size="sm" className="navbar__cta" onClick={close}>
          {siteInfo.navCtaLabel}
        </Button>
      </div>
    </nav>
  );
}

/**
 * Desktop dropdown: opens on hover or click, closes on Escape, outside
 * click, focus leaving the group, or choosing a page.
 */
function NavGroup({ group, pathname }) {
  const [open, setOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const closeTimer = useRef(0);
  const openedByHover = useRef(false);
  const menuId = `nav-group-${group.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const active = group.children.some((c) => pathname === c.path || pathname.startsWith(`${c.path}/`));

  /* Close when the route changes (state-driven, no effect) */
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    if (!open) openedByHover.current = true;
    setOpen(true);
  };
  /* A click always opens the menu. If hovering already opened it, the click
     just keeps it open; a second click on an open menu closes it. */
  const onToggleClick = () => {
    clearTimeout(closeTimer.current);
    if (open && openedByHover.current) {
      openedByHover.current = false;
      return;
    }
    openedByHover.current = false;
    setOpen((v) => !v);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={rootRef}
      className={`navbar__group ${open ? 'navbar__group--open' : ''}`}
      onPointerEnter={(e) => e.pointerType === 'mouse' && openNow()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && closeSoon()}
      onBlur={(e) => { if (!rootRef.current?.contains(e.relatedTarget)) setOpen(false); }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`navbar__link navbar__group-toggle ${active ? 'navbar__link--active' : ''}`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={onToggleClick}
      >
        {group.label}
        <svg className="navbar__chevron" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul id={menuId} className="navbar__menu" hidden={!open}>
        {group.children.map((child) => (
          <li key={child.path}>
            <NavLink
              to={child.path}
              className={({ isActive }) => `navbar__menu-link ${isActive ? 'navbar__menu-link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="navbar__menu-label">{child.label}</span>
              {child.description && <span className="navbar__menu-desc">{child.description}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
