import './ImageCard.css';

export default function ImageCard({ image, title, subtitle, className = '' }) {
  return (
    <div className={`image-card ${className}`}>
      <div className="image-card__img-wrapper">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span className="image-card__placeholder">👤</span>
        )}
      </div>
      <div className="image-card__body">
        {title && <h3 className="image-card__title">{title}</h3>}
        {subtitle && <p className="image-card__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
