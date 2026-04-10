import './Card.css';

/**
 * Generic card wrapper with hover effect.
 */
export function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

/**
 * Event card used on Events page and homepage preview.
 */
export function EventCard({ event }) {
  return (
    <article className="card eventCard">
      <div className="eventTags">
        {event.tags.map((tag) => (
          <span key={tag} className="eventTag">
            {tag}
          </span>
        ))}
      </div>
      <h3>{event.title}</h3>
      <div className="eventMeta">
        <span>📅 {event.date}</span>
        <span>🕐 {event.time}</span>
        <span>📍 {event.location}</span>
      </div>
      <p className="eventDescription">{event.description}</p>
    </article>
  );
}

/**
 * Board member card used on the Board page.
 */
export function BoardCard({ member }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <article className="card boardCard">
      <div className="avatar" aria-hidden="true">
        {member.photo ? (
          <img src={member.photo} alt={member.name} />
        ) : (
          initials
        )}
      </div>
      <h3>{member.name}</h3>
      <span className="role">{member.role}</span>
      <p className="bio">{member.bio}</p>
    </article>
  );
}

/**
 * Value card used on About page.
 */
export function ValueCard({ icon, title, description }) {
  return (
    <article className="card valueCard">
      <div className="valueIcon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
