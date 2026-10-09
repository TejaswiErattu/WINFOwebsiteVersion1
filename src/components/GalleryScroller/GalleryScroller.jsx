import { useCallback, useEffect, useRef, useState } from 'react';
import './GalleryScroller.css';

const COPIES = 3;             // three identical runs so the loop is seamless both ways
const SPEED = 30;             // px per second of automatic drift
const RESUME_AFTER_MS = 2500; // idle time after the user touches it before drifting again

/**
 * Looping photo gallery the visitor can scroll, swipe or drag.
 * It also drifts slowly on its own (off for reduced-motion users), pauses on
 * hover, focus and touch, and has previous / next / pause buttons.
 *
 * photos: [{ src, alt, width?, height? }]
 */
export default function GalleryScroller({ photos = [], label = 'Photo gallery', eagerCount = 3 }) {
  const scrollerRef = useRef(null);
  const posRef = useRef(0);
  const lastSetRef = useRef(0);
  const lastInteractRef = useRef(0);
  const hoverRef = useRef(false);
  const dragRef = useRef(null);
  const reduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [playing, setPlaying] = useState(!reduced);
  const playingRef = useRef(playing);
  useEffect(() => { playingRef.current = playing; }, [playing]);

  const runLength = () => {
    const el = scrollerRef.current;
    return el ? el.scrollWidth / COPIES : 0;
  };

  /* Keep the position inside the middle run so we can always keep going */
  const wrap = useCallback(() => {
    const el = scrollerRef.current;
    const h = runLength();
    if (!el || !h) return;
    if (el.scrollLeft < h) {
      el.scrollLeft += h;
    } else if (el.scrollLeft >= h * 2) {
      el.scrollLeft -= h;
    } else {
      return;
    }
    posRef.current = el.scrollLeft;
    lastSetRef.current = el.scrollLeft;
  }, []);

  /* Start in the middle run once images have laid out */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;
    const start = () => {
      const h = runLength();
      if (h) {
        el.scrollLeft = h;
        posRef.current = h;
        lastSetRef.current = h;
      }
    };
    start();
    const ro = new ResizeObserver(start);
    ro.observe(el);
    const t = setTimeout(() => ro.disconnect(), 1500);
    return () => { clearTimeout(t); ro.disconnect(); };
  }, [photos.length]);

  /* Automatic drift */
  useEffect(() => {
    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(now - last, 100) / 1000;   // seconds since last frame (capped)
      last = now;
      const el = scrollerRef.current;
      const idle = now - lastInteractRef.current > RESUME_AFTER_MS;
      if (el && playingRef.current && idle && !hoverRef.current && !dragRef.current && !document.hidden) {
        if (Math.abs(el.scrollLeft - lastSetRef.current) > 2) posRef.current = el.scrollLeft;
        posRef.current += SPEED * dt;
        el.scrollLeft = posRef.current;
        lastSetRef.current = posRef.current;
        wrap();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [wrap]);

  const touched = () => { lastInteractRef.current = performance.now(); };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (el && Math.abs(el.scrollLeft - lastSetRef.current) > 2) {
      touched();                 // the visitor moved it, not the drift
      posRef.current = el.scrollLeft;
      lastSetRef.current = el.scrollLeft;
    }
    wrap();
  };

  const nudge = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    touched();
    el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.8), behavior: 'smooth' });
  };

  /* Mouse drag (touch uses native swiping) */
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const el = scrollerRef.current;
    dragRef.current = { x: e.clientX, left: el.scrollLeft, moved: false };
    touched();
  };
  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4) d.moved = true;
    if (d.moved) {
      scrollerRef.current.scrollLeft = d.left - dx;
      scrollerRef.current.classList.add('is-dragging');
    }
  };
  const endDrag = () => {
    if (!dragRef.current) return;
    dragRef.current = null;
    scrollerRef.current?.classList.remove('is-dragging');
    touched();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); nudge(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); nudge(-1); }
  };

  if (!photos.length) return null;

  return (
    <div className="gallery-scroller" role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={scrollerRef}
        className="gallery-scroller__viewport"
        tabIndex={0}
        onScroll={onScroll}
        onMouseEnter={() => { hoverRef.current = true; }}
        onMouseLeave={() => { hoverRef.current = false; endDrag(); }}
        onTouchStart={touched}
        onFocus={() => { hoverRef.current = true; }}
        onBlur={() => { hoverRef.current = false; }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={onKeyDown}
        onDragStart={(e) => e.preventDefault()}
      >
        <ul className="gallery-scroller__track">
          {Array.from({ length: COPIES }).map((_, copy) =>
            photos.map((p, i) => (
              <li
                key={`${copy}-${p.src}`}
                className="gallery-scroller__item"
                aria-hidden={copy === 1 ? undefined : 'true'}
              >
                <img
                  src={p.src}
                  alt={copy === 1 ? p.alt : ''}
                  width={p.width}
                  height={p.height}
                  loading={copy === 1 && i < eagerCount ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                />
              </li>
            )),
          )}
        </ul>
      </div>

      <div className="gallery-scroller__controls">
        <button type="button" className="gallery-scroller__btn" onClick={() => nudge(-1)} aria-label="Scroll photos left">
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          className="gallery-scroller__btn gallery-scroller__btn--pause"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? 'Pause automatic scrolling' : 'Resume automatic scrolling'}
        >
          <span aria-hidden="true">{playing ? '❚❚' : '▶'}</span>
        </button>
        <button type="button" className="gallery-scroller__btn" onClick={() => nudge(1)} aria-label="Scroll photos right">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
