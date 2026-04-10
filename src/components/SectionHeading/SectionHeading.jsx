import './SectionHeading.css';

/**
 * Consistent section heading with title, optional subtitle, and decorative underline.
 */
export default function SectionHeading({ title, subtitle }) {
  return (
    <header className="sectionHeading">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
