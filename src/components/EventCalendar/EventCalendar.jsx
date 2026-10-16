import './EventCalendar.css';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const ACCENTS = ['pink', 'lavender', 'blue'];

/* 'YYYY-MM-DD' → local Date at midnight (avoids the UTC off-by-one) */
function parseDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function startOfToday() {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}

function mapsUrl(name, code) {
  const place = name ? `${name}, University of Washington, Seattle, WA` : `${code} University of Washington Seattle`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
}

function slug(e) {
  return `cal-${e.date}-${e.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
}

/* One small month grid; days with events link down to their card */
function MiniMonth({ year, month, byDay, today }) {
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return (
    <table className="cal-month">
      <caption className="cal-month__name">{MONTHS[month]}</caption>
      <thead>
        <tr>
          {WEEKDAYS.map((w) => (
            <th key={w} scope="col" abbr={w}><span aria-hidden="true">{w[0]}</span></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, wi) => (
          <tr key={wi}>
            {week.map((day, di) => {
              if (!day) return <td key={di} />;
              const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const evs = byDay[key];
              const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
              const cls = `cal-day${evs ? ` cal-day--event cal-day--${evs[0].accent}` : ''}${isToday ? ' cal-day--today' : ''}`;
              return (
                <td key={di}>
                  {evs ? (
                    <a
                      className={cls}
                      href={`#${evs[0].id}`}
                      aria-label={`${MONTHS[month]} ${day}: ${evs.map((e) => e.title).join(', ')}`}
                    >
                      {day}
                    </a>
                  ) : (
                    <span className={cls} aria-current={isToday ? 'date' : undefined}>{day}</span>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * Quarter events calendar: mini month grids plus a list of event cards.
 * Past events and events after the quarter's end date are hidden automatically.
 */
export default function EventCalendar({ quarter, events, buildings = {}, heading = 'upcoming events' }) {
  const today = startOfToday();
  const end = parseDate(quarter.endsOn);

  const upcoming = events
    .map((e) => ({ ...e, when: parseDate(e.date) }))
    .filter((e) => e.when >= today && e.when <= end)
    .sort((a, b) => a.when - b.when)
    .map((e, i) => ({ ...e, id: slug(e), accent: ACCENTS[i % ACCENTS.length] }));

  const byDay = {};
  upcoming.forEach((e) => { (byDay[e.date] = byDay[e.date] || []).push(e); });

  /* Months from now through the last month that has an event */
  const months = [];
  if (upcoming.length) {
    const last = upcoming[upcoming.length - 1].when;
    for (let d = new Date(today.getFullYear(), today.getMonth(), 1); d <= last; d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) {
      months.push({ year: d.getFullYear(), month: d.getMonth() });
    }
  }

  return (
    <section className="cal" id="calendar" aria-labelledby="cal-heading">
      <div className="cal__inner">
        <p className="cal__eyebrow">{quarter.name}</p>
        <h2 id="cal-heading" className="cursive-title section-title--center cal__heading">{heading}</h2>

        {upcoming.length === 0 ? (
          <p className="cal__empty">
            New events are on the way! Follow <a href="https://instagram.com/uwwinfo" target="_blank" rel="noopener noreferrer">@uwwinfo</a> to hear first.
          </p>
        ) : (
          <div className="cal__layout">
            <div className="cal__months" aria-label="Calendar overview">
              {months.map((m) => (
                <MiniMonth key={`${m.year}-${m.month}`} {...m} byDay={byDay} today={today} />
              ))}
            </div>

            <ol className="cal__list">
              {upcoming.map((e) => {
                const name = buildings[e.building];
                const where = `${name || e.building}${e.room ? ` ${e.room}` : ''}`;
                return (
                  <li key={e.id} id={e.id} className={`cal-card cal-card--${e.accent}`}>
                    <div className="cal-card__stub" aria-hidden="true">
                      <span className="cal-card__mon">{MONTHS[e.when.getMonth()].slice(0, 3)}</span>
                      <span className="cal-card__day">{e.when.getDate()}</span>
                      <span className="cal-card__dow">{WEEKDAYS[e.when.getDay()]}</span>
                    </div>
                    <div className="cal-card__body">
                      <h3 className="cal-card__title">{e.title}</h3>
                      <p className="cal-card__meta">
                        <time dateTime={e.date} className="cal-card__time">
                          <svg className="cal-card__icon" viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          <span className="sr-only">
                            {`${WEEKDAYS[e.when.getDay()]}, ${MONTHS[e.when.getMonth()]} ${e.when.getDate()}, `}
                          </span>
                          {e.time}
                        </time>
                        <a
                          className="cal-card__where"
                          href={mapsUrl(name, e.building)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${where} (opens Google Maps in a new tab)`}
                        >
                          <svg className="cal-card__pin" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                          </svg>
                          {e.building}{e.room ? ` ${e.room}` : ''}
                          {name && <span className="cal-card__bldg"> · {name}</span>}
                        </a>
                      </p>
                      {e.blurb && <p className="cal-card__blurb">{e.blurb}</p>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
