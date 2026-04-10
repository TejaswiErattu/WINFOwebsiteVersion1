import { useState } from 'react';
import Button from '../../components/Button/Button';
import { socialLinks } from '../../data/siteData';
import './Contact.css';

/**
 * Contact page — form + contact info sidebar.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to an API.
    setSubmitted(true);
  };

  return (
    <main className="contactPage">
      {/* Header */}
      <section className="contactHero" aria-labelledby="contact-heading">
        <h1 id="contact-heading">Get in Touch</h1>
        <p>Have a question, want to collaborate, or just want to say hi? We'd love to hear from you.</p>
      </section>

      {/* Content */}
      <section className="section" aria-label="Contact form and information">
        <div className="container">
          <div className="contactLayout">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="formSuccess" role="status">
                  🎉 Thanks for reaching out! We'll get back to you soon.
                </div>
              ) : (
                <form className="contactForm" onSubmit={handleSubmit}>
                  <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@uw.edu"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Tell us more…"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="formSubmitBtn">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contactInfo">
              <div className="contactInfoCard">
                <h3>Contact Info</h3>
                <ul>
                  <li>
                    <span aria-hidden="true">✉️</span>
                    <a href="mailto:winfo@uw.edu">winfo@uw.edu</a>
                  </li>
                  <li>
                    <span aria-hidden="true">📍</span>
                    <span>University of Washington, Seattle, WA</span>
                  </li>
                </ul>
              </div>

              <div className="contactInfoCard">
                <h3>Follow Us</h3>
                <div className="contactSocials">
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

              <div className="contactInfoCard">
                <h3>Meeting Times</h3>
                <ul>
                  <li>
                    <span aria-hidden="true">📅</span>
                    <span>General meetings: Thursdays, 5:30 PM</span>
                  </li>
                  <li>
                    <span aria-hidden="true">📍</span>
                    <span>Mary Gates Hall, Room 058</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
