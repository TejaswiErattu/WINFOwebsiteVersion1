import './SectionWrapper.css';

/**
 * SectionWrapper — reusable page-section container.
 *
 * Props:
 *   id        – optional id for anchor links (e.g. "#about")
 *   alt       – if true, uses the alternate pastel background
 *   narrow    – if true, limits inner width to 800px (great for text sections)
 *   noPadding – if true, removes default vertical section padding
 *   className – extra class names
 *   children  – section content
 */
export default function SectionWrapper({
  children,
  id,
  alt = false,
  narrow = false,
  noPadding = false,
  className = '',
}) {
  const classes = [
    'section-wrapper',
    alt && 'section-wrapper--alt',
    narrow && 'section-wrapper--narrow',
    noPadding && 'section-wrapper--no-padding',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      <div className="container">{children}</div>
    </section>
  );
}
