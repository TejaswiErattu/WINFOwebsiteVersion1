import './Card.css';

export default function Card({ tag, title, meta, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {tag && <span className="card__tag">{tag}</span>}
      {title && <h3 className="card__title">{title}</h3>}
      {meta && <p className="card__meta">{meta}</p>}
      <div className="card__body">{children}</div>
    </div>
  );
}
