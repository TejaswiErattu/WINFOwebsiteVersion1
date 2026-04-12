import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, siteInfo } from '../../data/navLinks';
import Button from '../Buttons/Buttons';
import WinfoLogo from '../WinfoLogo/WinfoLogo';
import './Navbar.css';

/**
 * Navbar — sticky top navigation.
 *
 * Props accepted via `navLinks` from siteData:
 *   links  – array of { label, path }
 *
 * Features:
 *   • Desktop link row with active-state underline
 *   • Animated hamburger → X toggle on mobile
 *   • Auto-closes mobile menu on route change
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(null);
  const { pathname } = useLocation();

  /* Close the mobile menu whenever the route changes (state-driven, no effect) */
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  const toggle = () => setMenuOpen((prev) => !prev);
  const close  = () => setMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo" onClick={close}>
          <WinfoLogo color="multi" />
        </Link>

        {/* ── Desktop links ── */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Button href={siteInfo.navCtaHref} size="sm" className="navbar__cta">
            {siteInfo.navCtaLabel}
          </Button>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggle}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
            onClick={close}
          >
            {link.label}
          </NavLink>
        ))}

        <Button href={siteInfo.navCtaHref} size="sm" onClick={close}>
          {siteInfo.navCtaLabel}
        </Button>
      </div>
    </nav>
  );
}
