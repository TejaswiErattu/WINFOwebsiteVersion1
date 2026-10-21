import { useEffect, useRef, useState } from 'react';
import './EventCalendar.css';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

/* '5–7 PM', '5:30-7pm', '11 AM–1 PM' → { start: [h, m], end: [h, m] } in 24h, or null */
function parseTimeRange(text) {
  const m = text
    .replace(/\s+/g, ' ')
    .match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*[-–—to]+\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/i);
  if (!m) return null;
  const [, sh, sm = '0', sap, eh, em = '0', eap] = m;
  const to24 = (h, ap) => (Number(h) % 12) + (ap.toLowerCase() === 'pm' ? 12 : 0);
  const end = [to24(eh, eap), Number(em)];
  let startAp = sap || eap;
  if (!sap && to24(sh, eap) > end[0]) startAp = eap.toLowerCase() === 'pm' ? 'am' : 'pm';
  return { start: [to24(sh, startAp), Number(sm)], end };
}

const pad = (n) => String(n).padStart(2, '0');

/* Google Calendar "add event" link. Times are Seattle local time. */
function googleCalUrl(e, where) {
  const ymd = e.date.replace(/-/g, '');
  const range = parseTimeRange(e.time);
  let dates;
  if (range) {
    const t = ([h, m]) => `${ymd}T${pad(h)}${pad(m)}00`;
    dates = `${t(range.start)}/${t(range.end)}`;
  } else {
    const next = new Date(e.when.getFullYear(), e.when.getMonth(), e.when.getDate() + 1);
    dates = `${ymd}/${next.getFullYear()}${pad(next.getMonth() + 1)}${pad(next.getDate())}`;
  }
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: e.title,
    dates,
    ctz: 'America/Los_Angeles',
    location: `${where}, University of Washington, Seattle, WA`,
    details: `${e.blurb ? `${e.blurb}\n\n` : ''}Hosted by Women in Informatics (WINFO) at UW.`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function slug(e) {
  return `cal-${e.date}-${e.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
}


const DEFAULT_TYPE = 'fun';

function whereText(e, buildings) {
  const name = buildings[e.building];
  return { name, where: `${name || e.building}${e.room ? ` ${e.room}` : ''}` };
}

function LocationLink({ e, buildings, short = false }) {
  const { name, where } = whereText(e, buildings);
  return (
    <a
      className="cal-where"
      href={mapsUrl(name, e.building)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${where} (opens Google Maps in a new tab)`}
    >
      <svg className="cal-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </svg>
      {e.building}{e.room ? ` ${e.room}` : ''}
      {name && !short && <span className="cal-where__bldg"> · {name}</span>}
    </a>
  );
}

function TimeText({ e }) {
  return (
    <time dateTime={e.date} className="cal-time">
      <svg className="cal-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="sr-only">{`${WEEKDAY_NAMES[e.when.getDay()]}, ${MONTHS[e.when.getMonth()]} ${e.when.getDate()}, `}</span>
      {e.time}
    </time>
  );
}

function GoogleCalButton({ e, buildings }) {
  return (
    <a
      className="cal-gcal"
      href={googleCalUrl(e, whereText(e, buildings).where)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Add ${e.title} to Google Calendar (opens in a new tab)`}
    >
      <svg className="cal-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="cal-gcal__long">Add to Google Calendar</span>
      <span className="cal-gcal__short">Add to calendar</span>
    </a>
  );
}

/* Event details that pop out over the calendar */
function EventPopover({ e, buildings, types, onClose, returnFocusTo }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    el?.focus();
    const onKey = (ev) => { if (ev.key === 'Escape') onClose(); };
    const onDown = (ev) => { if (el && !el.contains(ev.target)) onClose(); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
      returnFocusTo?.focus?.();
    };
  }, [onClose, returnFocusTo]);

  const type = types[e.type] || types[DEFAULT_TYPE];
  return (
    <div
      ref={ref}
      className="cal-pop"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cal-pop-title"
      tabIndex={-1}
      style={{ '--type-color': type.color, '--type-ink': type.ink }}
    >
      <button type="button" className="cal-pop__close" onClick={onClose} aria-label="Close event details">
        <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 2l8 8M10 2 2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      </button>
      <p className={`cal-pop__type${e.past ? ' cal-pop__type--past' : ''}`}>{type.label}</p>
      <h3 id="cal-pop-title" className="cal-pop__title">{e.title}</h3>
      <p className="cal-pop__date">{`${WEEKDAY_NAMES[e.when.getDay()]}, ${MONTHS[e.when.getMonth()]} ${e.when.getDate()}`}</p>
      <div className="cal-pop__meta">
        <TimeText e={e} />
        <LocationLink e={e} buildings={buildings} />
      </div>
      {e.blurb && <p className="cal-pop__blurb">{e.blurb}</p>}
      {e.past ? <p className="cal-pop__past">This event already happened.</p> : <GoogleCalButton e={e} buildings={buildings} />}
    </div>
  );
}

/* Large month grid; each event is a clickable colored tag on its day */
function BigMonth({ year, month, byDay, today, types, onOpen }) {
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return (
    <table className="cal-grid">
      <caption className="sr-only">{`${MONTHS[month]} ${year}`}</caption>
      <thead>
        <tr>
          {WEEKDAYS.map((w, i) => (
            <th key={w} scope="col">
              <span aria-hidden="true">{w}</span>
              <span className="sr-only">{WEEKDAY_NAMES[i]}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, wi) => (
          <tr key={wi}>
            {week.map((day, di) => {
              if (!day) return <td key={di} className="cal-cell cal-cell--empty" />;
              const key = `${year}-${pad(month + 1)}-${pad(day)}`;
              const evs = byDay[key] || [];
              const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
              return (
                <td key={di} className={`cal-cell${evs.length ? ' cal-cell--has' : ''}${isToday ? ' cal-cell--today' : ''}`}>
                  <span className="cal-cell__day" aria-current={isToday ? 'date' : undefined}>{day}</span>
                  {evs.map((e) => {
                    const type = types[e.type] || types[DEFAULT_TYPE];
                    return (
                      <button
                        key={e.id}
                        type="button"
                        className={`cal-chip${e.past ? ' cal-chip--past' : ''}`}
                        style={{ '--type-color': type.color, '--type-ink': type.ink }}
                        onClick={(ev) => onOpen(e, ev.currentTarget)}
                        aria-label={`${e.title}, ${MONTHS[month]} ${day}, ${e.time}${e.past ? ' (already happened)' : ''}. Show details`}
                      >
                        <span className="cal-chip__title">{e.title}</span>
                      </button>
                    );
                  })}
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
 * Quarter events calendar: a large month view (click an event to pop out its
 * details) beside a list of upcoming events, color-coded by type.
 * Past events and events after the quarter's end date are hidden automatically.
 */
export default function EventCalendar({ quarter, events, buildings = {}, types = {}, heading = 'upcoming events' }) {
  const today = startOfToday();
  const end = parseDate(quarter.endsOn);

  /* Every event this quarter; ones before today are greyed out */
  const all = events
    .map((e) => ({ ...e, when: parseDate(e.date) }))
    .filter((e) => e.when <= end)
    .sort((a, b) => a.when - b.when)
    .map((e) => ({ ...e, id: slug(e), type: types[e.type] ? e.type : DEFAULT_TYPE, past: e.when < today }));
  const upcoming = all.filter((e) => !e.past);
  const past = all.filter((e) => e.past);

  const byDay = {};
  all.forEach((e) => { (byDay[e.date] = byDay[e.date] || []).push(e); });

  /* Months from the first event through the last one */
  const months = [];
  if (all.length) {
    const firstEvent = all[0].when;
    const last = all[all.length - 1].when;
    for (let d = new Date(firstEvent.getFullYear(), firstEvent.getMonth(), 1); d <= last; d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) {
      months.push({ year: d.getFullYear(), month: d.getMonth() });
    }
  }
  /* Open on the current month (or the first month still to come) */
  const startIndex = Math.max(0, months.findIndex((m) => m.year > today.getFullYear() || (m.year === today.getFullYear() && m.month >= today.getMonth())));

  const [monthIndex, setMonthIndex] = useState(startIndex);
  const [openEvent, setOpenEvent] = useState(null);
  const [opener, setOpener] = useState(null);
  const shown = months[Math.min(monthIndex, Math.max(months.length - 1, 0))];
  const usedTypes = Object.keys(types).filter((t) => all.some((e) => e.type === t));

  const openDetails = (e, el) => { setOpener(el); setOpenEvent(e); };
  const closeDetails = () => setOpenEvent(null);
  const showMonthOf = (e) => {
    const i = months.findIndex((m) => m.year === e.when.getFullYear() && m.month === e.when.getMonth());
    if (i >= 0) setMonthIndex(i);
  };

  const renderCard = (e) => {
    const type = types[e.type];
    return (
      <li
        key={e.id}
        id={e.id}
        className={`cal-card${e.past ? ' cal-card--past' : ''}`}
        style={{ '--type-color': type.color, '--type-ink': type.ink }}
      >
        <div className="cal-card__stub" aria-hidden="true">
          <span className="cal-card__mon">{MONTHS[e.when.getMonth()].slice(0, 3)}</span>
          <span className="cal-card__day">{e.when.getDate()}</span>
          <span className="cal-card__dow">{WEEKDAYS[e.when.getDay()]}</span>
        </div>
        <div className="cal-card__body">
          <h3 className="cal-card__title">
            <button type="button" className="cal-card__open" onClick={(ev) => { showMonthOf(e); openDetails(e, ev.currentTarget); }}>
              {e.title}
            </button>
          </h3>
          <p className="cal-card__type">{e.past ? `${type.label} · already happened` : type.label}</p>
          <div className="cal-card__meta">
            <TimeText e={e} />
            <LocationLink e={e} buildings={buildings} short />
          </div>
        </div>
        {!e.past && (
          <a
            className="cal-card__gcal"
            href={googleCalUrl(e, whereText(e, buildings).where)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Add ${e.title} to Google Calendar (opens in a new tab)`}
            title="Add to Google Calendar"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        )}
      </li>
    );
  };

  return (
    <section className="cal" id="calendar" aria-labelledby="cal-heading">
      <div className="cal__inner">
        <h2 id="cal-heading" className="cursive-title section-title--center cal__heading">{heading}</h2>

        {all.length === 0 ? (
          <p className="cal__empty">
            New events are on the way! Follow <a href="https://instagram.com/uwwinfo" target="_blank" rel="noopener noreferrer">@uwwinfo</a> to hear first.
          </p>
        ) : (
          <div className="cal__layout">
            <div className="cal__main">
              <div className="cal__toolbar">
                <button
                  type="button"
                  className="cal__nav"
                  onClick={() => setMonthIndex((i) => Math.max(0, i - 1))}
                  disabled={monthIndex === 0}
                  aria-label="Previous month"
                >
                  <span aria-hidden="true">‹</span>
                </button>
                <p className="cal__month" aria-live="polite">{`${MONTHS[shown.month]} ${shown.year}`}</p>
                <button
                  type="button"
                  className="cal__nav"
                  onClick={() => setMonthIndex((i) => Math.min(months.length - 1, i + 1))}
                  disabled={monthIndex >= months.length - 1}
                  aria-label="Next month"
                >
                  <span aria-hidden="true">›</span>
                </button>
              </div>

              <div className="cal__key">
                <p className="cal__key-title" id="cal-key-title">Color key</p>
                <ul aria-labelledby="cal-key-title">
                  {usedTypes.map((t) => (
                    <li key={t} className="cal__key-item" style={{ '--type-color': types[t].color, '--type-ink': types[t].ink }}>
                      {types[t].label}
                    </li>
                  ))}
                  {past.length > 0 && <li className="cal__key-item cal__key-item--past">Already happened</li>}
                </ul>
              </div>

              <div className="cal__grid-wrap">
                <BigMonth {...shown} byDay={byDay} today={today} types={types} onOpen={openDetails} />
                {openEvent && (
                  <EventPopover e={openEvent} buildings={buildings} types={types} onClose={closeDetails} returnFocusTo={opener} />
                )}
              </div>
            </div>

            <div className="cal__side">
              {upcoming.length > 0 ? (
                <ol className="cal__list" aria-label="Upcoming events">
                  {upcoming.map((e) => renderCard(e))}
                </ol>
              ) : (
                <p className="cal__empty">That's a wrap on this quarter's events! Follow <a href="https://instagram.com/uwwinfo" target="_blank" rel="noopener noreferrer">@uwwinfo</a> for what's next.</p>
              )}
              {past.length > 0 && (
                <>
                  <h3 className="cal__past-heading">Earlier this quarter</h3>
                  <ol className="cal__list" aria-label="Past events this quarter">
                    {past.slice().reverse().map((e) => renderCard(e))}
                  </ol>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
