import './WinfoLogo.css';

/**
 * WinfoLogo — renders the WINFO logo as an image.
 *
 * Props:
 *   className  – extra CSS class for styling
 *   size       – optional height override (e.g. '2rem', '48px')
 *   color      – 'gradient' | 'multi' (default) → color logo
 *                'white' → white logo
 */
export default function WinfoLogo({ className = '', size, color = 'gradient' }) {
  const isWhite = color === 'white';
  const src = isWhite ? '/images/winfo-logo-white.png' : '/images/winfo-logo-color.png';

  const style = size ? { height: size } : undefined;

  return (
    <img
      src={src}
      alt="WINFO"
      className={`winfo-logo ${className}`.trim()}
      style={style}
      draggable={false}
    />
  );
}
