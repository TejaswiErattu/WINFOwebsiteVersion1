import { NavLink } from 'react-router-dom';
import './SubTabs.css';

/* Tabs that join related pages (e.g. Our Team ↔ Committees) */
export default function SubTabs({ tabs, label }) {
  return (
    <nav className="sub-tabs" aria-label={label}>
      {tabs.map((t) => (
        <NavLink key={t.path} to={t.path} end className="sub-tabs__tab">
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
}
