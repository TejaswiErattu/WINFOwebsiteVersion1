/**
 * Shared decorative circuit-board SVG patterns.
 *
 * Every page hero uses one of these variants, so they live
 * in a single place to avoid ~100 lines of inline SVG per page.
 *
 * Usage:
 *   <CircuitSVG variant="small" />     // horizontal-lines pattern (most heroes)
 *   <CircuitSVG variant="vertical" />  // vertical-spine pattern (Events, SupportUs)
 *   <CircuitSVG variant="left" />      // Home hero left side
 *   <CircuitSVG variant="right" />     // Home hero right side
 *   <CircuitSVG variant="register" />  // Hackathon register CTA
 *   <CircuitSVG variant="faq" />       // Hackathon FAQ section
 *   <CircuitSVG variant="branch" />    // SupportUs "get involved" section
 */

/* ── Horizontal-lines pattern (Podcast, Membership, Officers heroes) ── */
function Small() {
  return (
    <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[[60, 40], [140, 80], [220, 20], [300, 60]].map(([y, x2], i) => (
        <line key={`h${i}`} x1="200" y1={y} x2={x2} y2={y} stroke="currentColor" strokeWidth="1" />
      ))}
      <line x1="120" y1="60" x2="120" y2="140" stroke="currentColor" strokeWidth="1" />
      <line x1="80" y1="140" x2="80" y2="220" stroke="currentColor" strokeWidth="1" />
      <line x1="140" y1="220" x2="140" y2="300" stroke="currentColor" strokeWidth="1" />
      {[
        [120, 60, 3], [40, 60, 4], [80, 140, 4],
        [20, 220, 3], [140, 300, 4], [60, 300, 3],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
      ))}
    </svg>
  );
}

/* ── Vertical-spine pattern (Events, SupportUs heroes) ── */
function Vertical() {
  return (
    <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" y1="0" x2="100" y2="120" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="120" x2="180" y2="120" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="120" x2="100" y2="260" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="260" x2="160" y2="260" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="260" x2="100" y2="400" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="120" r="5" fill="currentColor" />
      <circle cx="100" cy="260" r="5" fill="currentColor" />
      <circle cx="180" cy="120" r="4" fill="currentColor" />
      <circle cx="160" cy="260" r="4" fill="currentColor" />
      <circle cx="100" cy="190" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* ── Branch pattern (SupportUs "get involved") ── */
function Branch() {
  return (
    <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" y1="0" x2="100" y2="150" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="150" x2="60" y2="150" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="150" x2="100" y2="300" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="300" x2="140" y2="300" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="300" x2="100" y2="400" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="150" r="5" fill="currentColor" />
      <circle cx="100" cy="300" r="5" fill="currentColor" />
      <circle cx="60" cy="150" r="3" fill="currentColor" />
      <circle cx="140" cy="300" r="3" fill="currentColor" />
    </svg>
  );
}

/* ── Home hero left circuit ── */
function Left() {
  return (
    <svg viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[80, 160, 240, 320, 400].map((y, i) => (
        <line key={`h${i}`} x1="0" y1={y} x2={[260, 200, 280, 180, 240][i]} y2={y} stroke="currentColor" strokeWidth="1.5" />
      ))}
      <line x1="120" y1="80" x2="120" y2="160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="180" y1="160" x2="180" y2="240" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="240" x2="100" y2="320" stroke="currentColor" strokeWidth="1.5" />
      <line x1="160" y1="320" x2="160" y2="400" stroke="currentColor" strokeWidth="1.5" />
      <line x1="200" y1="80" x2="240" y2="40" stroke="currentColor" strokeWidth="1.5" />
      <line x1="150" y1="160" x2="190" y2="120" stroke="currentColor" strokeWidth="1.5" />
      <line x1="220" y1="240" x2="260" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <line x1="140" y1="320" x2="180" y2="280" stroke="currentColor" strokeWidth="1.5" />
      <line x1="200" y1="400" x2="240" y2="360" stroke="currentColor" strokeWidth="1.5" />
      {[
        [120, 80, 4], [260, 80, 5], [200, 160, 4], [180, 240, 5],
        [100, 240, 4], [280, 240, 4], [160, 320, 5], [180, 320, 4],
        [240, 400, 5], [240, 40, 3.5], [190, 120, 3.5], [260, 200, 3.5],
        [180, 280, 3.5], [240, 360, 3.5], [60, 80, 3], [80, 160, 3],
        [50, 240, 3], [60, 400, 3],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
      ))}
    </svg>
  );
}

/* ── Home hero right circuit ── */
function Right() {
  return (
    <svg viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[[100, 60], [200, 120], [300, 40], [380, 100]].map(([y, x2], i) => (
        <line key={`h${i}`} x1="320" y1={y} x2={x2} y2={y} stroke="currentColor" strokeWidth="1.5" />
      ))}
      <line x1="200" y1="100" x2="200" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <line x1="140" y1="200" x2="140" y2="300" stroke="currentColor" strokeWidth="1.5" />
      <line x1="220" y1="300" x2="220" y2="380" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="60" y2="60" stroke="currentColor" strokeWidth="1.5" />
      <line x1="160" y1="200" x2="120" y2="160" stroke="currentColor" strokeWidth="1.5" />
      <line x1="80" y1="300" x2="40" y2="260" stroke="currentColor" strokeWidth="1.5" />
      <line x1="140" y1="380" x2="100" y2="340" stroke="currentColor" strokeWidth="1.5" />
      {[
        [200, 100, 4], [60, 100, 5], [140, 200, 5], [120, 200, 4],
        [220, 300, 4], [40, 300, 5], [100, 380, 4], [60, 60, 3.5],
        [120, 160, 3.5], [40, 260, 3.5], [100, 340, 3.5], [260, 100, 3],
        [240, 200, 3], [280, 300, 3], [260, 380, 3],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
      ))}
    </svg>
  );
}

/* ── Hackathon register CTA circuit ── */
function Register() {
  return (
    <svg viewBox="0 0 260 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="200" x2="40" y2="320" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="320" x2="140" y2="320" stroke="currentColor" strokeWidth="1.5" />
      <line x1="140" y1="320" x2="140" y2="400" stroke="currentColor" strokeWidth="1.5" />
      <line x1="140" y1="200" x2="200" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <line x1="200" y1="200" x2="200" y2="280" stroke="currentColor" strokeWidth="1.5" />
      <line x1="200" y1="280" x2="260" y2="280" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="40" cy="320" r="5" fill="currentColor" />
      <circle cx="140" cy="320" r="4" fill="currentColor" />
      <circle cx="200" cy="200" r="5" fill="currentColor" />
      <circle cx="200" cy="280" r="4" fill="currentColor" />
      <circle cx="40" cy="260" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="140" cy="360" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* ── Hackathon FAQ circuit ── */
function Faq() {
  return (
    <svg viewBox="0 0 260 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="0" x2="40" y2="100" stroke="currentColor" strokeWidth="1" />
      <line x1="40" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="1" />
      <line x1="140" y1="100" x2="140" y2="200" stroke="currentColor" strokeWidth="1" />
      <line x1="140" y1="200" x2="60" y2="200" stroke="currentColor" strokeWidth="1" />
      <line x1="60" y1="200" x2="60" y2="300" stroke="currentColor" strokeWidth="1" />
      <line x1="60" y1="300" x2="180" y2="300" stroke="currentColor" strokeWidth="1" />
      <line x1="180" y1="300" x2="180" y2="400" stroke="currentColor" strokeWidth="1" />
      <line x1="180" y1="400" x2="100" y2="400" stroke="currentColor" strokeWidth="1" />
      <line x1="100" y1="400" x2="100" y2="500" stroke="currentColor" strokeWidth="1" />
      {[
        [40, 100, 4], [140, 100, 3], [140, 200, 4], [60, 200, 3],
        [60, 300, 4], [180, 300, 3], [180, 400, 4], [100, 400, 3],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
      ))}
    </svg>
  );
}

/* ── Variant map ── */
const variants = { small: Small, vertical: Vertical, branch: Branch, left: Left, right: Right, register: Register, faq: Faq };

export default function CircuitSVG({ variant = 'small' }) {
  const Component = variants[variant] || Small;
  return <Component />;
}
