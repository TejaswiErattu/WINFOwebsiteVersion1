import Button from '../Button/Button';
import './CTABanner.css';

export default function CTABanner({ title, text, btnLabel, btnTo }) {
  return (
    <div className="cta-banner">
      <h2 className="cta-banner__title">{title}</h2>
      {text && <p className="cta-banner__text">{text}</p>}
      {btnLabel && <Button to={btnTo}>{btnLabel}</Button>}
    </div>
  );
}
