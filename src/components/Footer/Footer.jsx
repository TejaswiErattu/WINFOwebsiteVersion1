import { Link } from 'react-router-dom';
import { navLinks, socialLinks } from '../../data/siteData';
import './Footer.css';

/**
 * Site footer with brand info, quick links, social icons, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footerContainer">
        <div className="footerGrid">
          {/* Brand */}
          <div className="footerBrand">
            <div className="footerLogo">WINFO</div>
            <p>
              Women in Informatics at the University of Washington — building an
              inclusive community for women and non-binary students in tech.
            </p>
            <div className="footerSocials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footerColumn">
            <h4>Pages</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footerColumn">
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <a href="mailto:winfo@uw.edu">winfo@uw.edu</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  @waborinfo
                </a>
              </li>
              <li>University of Washington</li>
              <li>Seattle, WA</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footerBottom">
          <p>&copy; {year} Women in Informatics (WINFO). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
