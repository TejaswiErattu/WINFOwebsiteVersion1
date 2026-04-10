import './SectionWrapper.css';

export default function SectionWrapper({ children, alt = false, className = '', id }) {
  return (
    <section
      id={id}
      className={`section-wrapper ${alt ? 'section-wrapper--alt' : ''} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}
