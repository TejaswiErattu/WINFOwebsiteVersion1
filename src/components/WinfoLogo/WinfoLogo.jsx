/**
 * WinfoLogo — renders "w;nfo" with a semicolon as the "i".
 *
 * Props:
 *   className  – extra CSS class for styling
 *   size       – optional inline fontSize override
 *   color      – 'gradient' (default), 'white', 'inherit', or 'multi'
 */
export default function WinfoLogo({ className = '', size, color = 'gradient' }) {
  const style = size ? { fontSize: size } : undefined;

  const colorClass =
    color === 'white'
      ? 'winfo-logo--white'
      : color === 'inherit'
        ? 'winfo-logo--inherit'
        : color === 'multi'
          ? 'winfo-logo--multi'
          : 'winfo-logo--gradient';

  /* Multi-colour variant wraps each segment */
  if (color === 'multi') {
    return (
      <span
        className={`winfo-logo ${colorClass} ${className}`.trim()}
        style={style}
        aria-label="WINFO"
      >
        <span className="winfo-logo__w">w</span>
        <span className="winfo-logo__semi">;</span>
        <span className="winfo-logo__nfo">nfo</span>
      </span>
    );
  }

  return (
    <span
      className={`winfo-logo ${colorClass} ${className}`.trim()}
      style={style}
      aria-label="WINFO"
    >
      w<span className="winfo-logo__semi">;</span>nfo
    </span>
  );
}
