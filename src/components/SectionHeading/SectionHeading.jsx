import './SectionHeading.css';

/**
 * SectionHeading — centred heading block for section titles.
 *
 * Props:
 *   label       – small pastel pill above the title (e.g. "Our Mission")
 *   title       – main heading text
 *   description – optional paragraph below the title
 *   align       – 'center' (default) | 'left'
 */
export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {label && <span className="section-heading__label">{label}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
}
