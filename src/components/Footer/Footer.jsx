import { Link } from 'react-router-dom';
import { footerLinks, socialLinks, siteInfo } from '../../data/navLinks';
import WinfoLogo from '../WinfoLogo/WinfoLogo';
import '../WinfoLogo/WinfoLogo.css';
import './Footer.css';

/* ── Tiny inline SVG icons (outlined style to match screenshot) ── */
const icons = {
  instagram: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <line x1="8" y1="11" x2="8" y2="17" />
      <line x1="8" y1="7" x2="8" y2="7.01" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
      <line x1="16" y1="13" x2="16" y2="17" />
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98" fill="currentColor" stroke="none" />
    </svg>
  ),
  email: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  ),
};

/**
 * Footer — light lavender-pink gradient footer matching Figma screenshot.
 * Features: gradient winfo logo, land acknowledgment, social icons, quick links.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* ── Left column: brand + land acknowledgment + socials ── */}
        <div className="footer__col footer__col--brand">
          <div className="footer__brand-logo">
            <WinfoLogo color="gradient" />
          </div>

          <p className="footer__land-ack">
            The University of Washington acknowledges the Coast Salish peoples of this land, the land which touches the shared waters of all tribes and bands within the Duwamish, Puyallup, Suquamish, Tulalip, and Muckleshoot nations.
          </p>

          <div className="footer__socials">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="footer__social-link"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icons[s.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right column: quick links ── */}
        <div className="footer__col footer__col--links">
          <h4 className="footer__col-title">quick links</h4>
          <nav className="footer__links-list">
            {footerLinks.map((l) => (
              <Link key={l.path} to={l.path} className="footer__link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div className="footer__bottom">
        © {new Date().getFullYear()} {siteInfo.copyright}. All rights reserved.
      </div>
    </footer>
  );
}
