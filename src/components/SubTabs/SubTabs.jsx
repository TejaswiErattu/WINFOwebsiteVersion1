import { useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { EVENT_TABS, TEAM_TABS } from '../../data/navLinks';
import './SubTabs.css';

const GROUPS = [
  { tabs: EVENT_TABS, label: 'Event types' },
  { tabs: TEAM_TABS, label: 'Our Team sections' },
];

/* One tab bar, rendered by App directly under the navbar on every page in a
   group, so it sits in the same place on each page. It stays mounted while
   you switch tabs, so the highlight slides to the new tab. */
export default function SubTabs() {
  const { pathname } = useLocation();
  const group = GROUPS.find((g) => g.tabs.some((t) => t.path === pathname));
  const navRef = useRef(null);
  const [pill, setPill] = useState(null);

  useLayoutEffect(() => {
    const measure = () => {
      const el = navRef.current?.querySelector('.sub-tabs__tab.active');
      setPill(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
    };
    measure();
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [pathname]);

  if (!group) return null;

  return (
    <div className="sub-tabs-bar">
      <nav className="sub-tabs" aria-label={group.label} ref={navRef}>
        {pill && (
          <span
            className="sub-tabs__pill"
            aria-hidden="true"
            style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
          />
        )}
        {group.tabs.map((t) => (
          <NavLink key={t.path} to={t.path} end className="sub-tabs__tab">
            {t.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
