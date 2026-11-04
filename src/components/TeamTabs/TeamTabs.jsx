import { NavLink } from 'react-router-dom';
import './TeamTabs.css';

/* Tabs that join the Our Team pages: the board and its committees */
const tabs = [
  { label: 'Officer board', path: '/officers' },
  { label: 'Committees', path: '/committees' },
];

export default function TeamTabs() {
  return (
    <nav className="team-tabs" aria-label="Our Team sections">
      {tabs.map((t) => (
        <NavLink key={t.path} to={t.path} end className="team-tabs__tab">
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
}
