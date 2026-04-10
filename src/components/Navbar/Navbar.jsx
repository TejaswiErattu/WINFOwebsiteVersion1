import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/siteData';
import './Navbar.css';

/**
 * Sticky navigation bar with responsive hamburger menu.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navContainer">
        {/* Logo */}
        <Link to="/" className="navLogo" aria-label="WINFO Home">
          <span className="navLogoIcon" aria-hidden="true">W</span>
          WINFO
        </Link>

        {/* Desktop Links */}
        <div className="navLinks">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navLink ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`mobileMenu ${menuOpen ? 'open' : ''}`}
          role="dialog"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navLink ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
