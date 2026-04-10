import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../data/siteData';
import Button from '../Button/Button';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => setMenuOpen((prev) => !prev);
  const close = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={close}>
          winfo
        </Link>

        {/* Desktop links */}
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
          <Button to="/membership" size="sm" className="navbar__cta">
            Become a Member
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggle}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="navbar__mobile">
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
          <Button to="/membership" size="sm" onClick={close}>
            Become a Member
          </Button>
        </div>
      )}
    </nav>
  );
}
