import Button from '../Buttons/Buttons';
import './PageHero.css';

/**
 * PageHero — shared hero section used at the top of every page.
 *
 * Layouts:
 *   'center'    – badge + title + desc centred, no image  (Events, Officers)
 *   'split'     – text left, image/placeholder right      (Hackathon, Podcast, Membership, Support)
 *   'home'      – custom Home layout (text left, framed image right)
 *
 * Props:
 *   badge         – small pill text above the title (e.g. "📅 Our Events")
 *   title         – main heading (can include <br /> for line breaks)
 *   titleSpan     – text wrapped in gradient <span> inside <h1>
 *   description   – paragraph below the title
 *   actions       – array of { label, to?, href?, variant? } for CTA buttons
 *   layout        – 'center' | 'split' | 'home' (default: 'center')
 *   datePill      – optional date pill shown below description (Hackathon)
 *   className     – extra class name added to the root section
 *   children      – optional right-side content (image, side nav, etc.)
 */
export default function PageHero({
  badge,
  title,
  titleSpan,
  description,
  actions = [],
  layout = 'center',
  datePill,
  className = '',
  children,
}) {
  const rootClass = [
    'page-hero',
    `page-hero--${layout}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <section className={rootClass}>
      {/* Background blobs */}
      <div className="page-hero__bg" aria-hidden="true">
        <span className="page-hero__blob page-hero__blob--1" />
        <span className="page-hero__blob page-hero__blob--2" />
        {layout === 'home' && (
          <span className="page-hero__blob page-hero__blob--3" />
        )}
      </div>

      <div className="page-hero__inner">
        {/* Text column */}
        <div className="page-hero__text">
          {badge && <span className="page-hero__badge">{badge}</span>}

          <h1 className="page-hero__title">
            {titleSpan ? <span>{titleSpan}</span> : null}
            {title}
          </h1>

          {description && (
            <p className="page-hero__desc">{description}</p>
          )}

          {datePill && (
            <span className="page-hero__date-pill">{datePill}</span>
          )}

          {actions.length > 0 && (
            <div className="page-hero__actions">
              {actions.map((action, i) => (
                <Button
                  key={action.label}
                  to={action.to}
                  href={action.href}
                  variant={action.variant || (i === 0 ? 'primary' : 'secondary')}
                  size="lg"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Right-side content (image, side nav, etc.) */}
        {children && (
          <div className="page-hero__right">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
