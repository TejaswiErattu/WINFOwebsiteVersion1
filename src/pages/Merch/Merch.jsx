import './Merch.css';

const ORDER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe11gQXz_OIKfNHMFx8wJ6w6zpyhBvcXcYO2PUy3eMbqBCBHQ/viewform';

export default function Merch() {
  return (
    <div className="merch-page">
      {/* ===== HERO ===== */}
      <section className="merch-hero">
        <div className="merch-hero__inner">
          <div className="merch-hero__text">
            <span className="badge">limited drop</span>
            <h1 className="merch-hero__title">
              w;nfo <span>merch</span> is live!
            </h1>
            <p className="merch-hero__desc">
              Rep your community — grab a cozy WINFO crewneck before they sell
              out. Orders close soon, so don't wait!
            </p>

            {/* Pricing */}
            <div className="merch-pricing">
              <div className="merch-pricing__card">
                <p className="merch-pricing__item">Crewneck</p>
                <p className="merch-pricing__price">$40</p>
              </div>
            </div>

            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="merch-cta-btn"
            >
              🛒 order now
            </a>
            <p className="merch-hero__note">
              Opens in a new tab — Google Form order.
            </p>
          </div>

          {/* Sweatshirt photo */}
          <div className="merch-hero__image">
            <img
              src="/images/merchpic.png"
              alt="WINFO crewneck sweatshirts in brown and cream"
            />
          </div>
        </div>
      </section>

      {/* ===== DETAILS ===== */}
      <section className="merch-details">
        <div className="merch-details__inner">
          <h2 className="merch-details__heading cursive-title">the details</h2>
          <div className="merch-details__grid">
            <div className="merch-detail-card">
              <span className="merch-detail-card__icon">👕</span>
              <h3>Style</h3>
              <p>Unisex crewneck sweatshirt — available in brown and cream.</p>
            </div>
            <div className="merch-detail-card">
              <span className="merch-detail-card__icon">💸</span>
              <h3>Price</h3>
              <p>$40 per crewneck.</p>
            </div>
            <div className="merch-detail-card">
              <span className="merch-detail-card__icon">📦</span>
              <h3>How to order</h3>
              <p>Fill out the Google Form to place your order. Link below!</p>
            </div>
            <div className="merch-detail-card">
              <span className="merch-detail-card__icon">⏰</span>
              <h3>Deadline</h3>
              <p>Orders close soon — grab yours before it's too late!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="merch-banner">
        <h2>support winfo &amp; treat yourself!</h2>
        <p>Every purchase goes toward supporting our community and events.</p>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="merch-cta-btn merch-cta-btn--light"
        >
          🛒 order now
        </a>
      </section>
    </div>
  );
}
