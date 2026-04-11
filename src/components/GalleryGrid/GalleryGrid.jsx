import './GalleryGrid.css';

/**
 * GalleryGrid — responsive photo / placeholder grid.
 *
 * Props:
 *   items – array of objects, each may contain:
 *           { id, image, alt, emoji, label }
 *   cols  – number of columns: 2 | 3 | 4 (default 3)
 *
 * If an item has an `image` it renders an <img>.
 * Otherwise it shows a pastel gradient placeholder with emoji + label.
 */
export default function GalleryGrid({ items = [], cols = 3 }) {
  return (
    <div
      className={`gallery-grid gallery-grid--cols-${cols}`}
      role="list"
    >
      {items.map((item, i) => (
        <div
          key={item.id ?? i}
          className="gallery-grid__item"
          role="listitem"
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.alt || item.label || ''}
              loading="lazy"
            />
          ) : (
            <div className="gallery-grid__placeholder">
              <span className="gallery-grid__placeholder-emoji">
                {item.emoji || '📸'}
              </span>
              {item.label && (
                <span className="gallery-grid__placeholder-label">
                  {item.label}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
