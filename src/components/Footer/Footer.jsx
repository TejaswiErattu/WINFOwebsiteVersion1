import { Link } from 'react-router-dom';
import { footerLinks, socialLinks, siteInfo } from '../../data/navLinks';
import WinfoLogo from '../WinfoLogo/WinfoLogo';
import '../WinfoLogo/WinfoLogo.css';
import './Footer.css';

/* ── Tiny inline SVG icons (avoids an external icon library) ── */
const icons = {
  instagram: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-1 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1ZM8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4.5 3a2.5 2.5 0 0 1 2.45 2H15v4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V13a1 1 0 0 0-2 0v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.22A2.49 2.49 0 0 1 12.5 10Z" />
    </svg>
  ),
  facebook: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  ),
  email: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16Zm0 12H4V8l8 5 8-5v10Z" />
    </svg>
  ),
};

/**
 * Footer — site-wide footer with brand info, quick links, and contact.
 *
 * All data comes from `siteData.js` (footerLinks, socialLinks).
 * No props needed — the footer is self-contained.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* ── Brand column ── */}
        <div className="footer__col">
          <div className="footer__brand-logo">
            <WinfoLogo color="white" />
          </div>
          <p className="footer__brand-text">{siteInfo.brandTagline}</p>
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

        {/* ── Quick links column ── */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          {footerLinks.map((l) => (
            <Link key={l.path} to={l.path} className="footer__link">
              {l.label}
            </Link>
          ))}
        </div>

        {/* ── Contact column ── */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact</h4>
          <a href={`mailto:${siteInfo.email}`} className="footer__link">
            {siteInfo.email}
          </a>
          {siteInfo.address.map((line) => (
            <span key={line} className="footer__link">{line}</span>
          ))}
        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div className="footer__bottom">
        © {new Date().getFullYear()} {siteInfo.copyright}. All rights
        reserved.
      </div>
    </footer>
  );
}
