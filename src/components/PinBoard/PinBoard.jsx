import { useCallback, useRef, useState } from 'react';

/**
 * PinBoard — a bulletin board whose pinned items can be dragged around.
 *
 * Items start in the normal page layout; dragging only adds an offset
 * (a CSS translate), so the default arrangement is always what loads.
 *
 * Safety: positions live in memory only. Nothing is saved, sent to a
 * server, or read from the URL/storage, and no viewer input is rendered,
 * so moving things around can't affect anyone else or inject content.
 * Offsets are clamped so an item can never leave the board.
 *
 * Usage:
 *   <PinBoard className="..." resetLabel="Tidy up">
 *     {(pin) => <div {...pin('photo-1')}>...</div>}
 *   </PinBoard>
 */
const KEY_STEP = 16;

export default function PinBoard({ children, className = '', resetLabel = 'Reset board', hint, heading }) {
  const boardRef = useRef(null);
  const drag = useRef(null);
  const zTop = useRef(1);
  const [offsets, setOffsets] = useState({});   // id -> { x, y, z }

  /* Keep the item's box inside the board */
  const clamp = useCallback((el, id, x, y) => {
    const board = boardRef.current?.getBoundingClientRect();
    if (!board) return { x, y };
    const cur = offsets[id] ?? { x: 0, y: 0 };
    const r = el.getBoundingClientRect();
    const baseLeft = r.left - cur.x;
    const baseTop = r.top - cur.y;
    return {
      x: Math.min(Math.max(x, board.left - baseLeft), board.right - (baseLeft + r.width)),
      y: Math.min(Math.max(y, board.top - baseTop), board.bottom - (baseTop + r.height)),
    };
  }, [offsets]);

  const move = (id, el, x, y) => {
    const next = clamp(el, id, x, y);
    setOffsets((o) => ({ ...o, [id]: { ...next, z: o[id]?.z ?? 0 } }));
  };

  const raise = (id) => {
    zTop.current += 1;
    const z = zTop.current;
    setOffsets((o) => ({ ...o, [id]: { x: 0, y: 0, ...o[id], z } }));
  };

  const pin = (id) => {
    const o = offsets[id];
    return {
      'data-pin': id,
      tabIndex: 0,
      'aria-roledescription': 'movable item',
      className: `pin-item${o?.dragging ? ' pin-item--dragging' : ''}`,
      style: o ? { translate: `${o.x}px ${o.y}px`, zIndex: o.z || undefined } : undefined,
      onPointerDown: (e) => {
        /* Mouse/pen only: on touch screens a swipe still scrolls the page */
        if (e.pointerType === 'touch' || e.button !== 0) return;
        e.preventDefault();
        const cur = offsets[id] ?? { x: 0, y: 0 };
        drag.current = { id, el: e.currentTarget, sx: e.clientX - cur.x, sy: e.clientY - cur.y };
        e.currentTarget.setPointerCapture(e.pointerId);
        raise(id);
        setOffsets((all) => ({ ...all, [id]: { ...all[id], dragging: true } }));
      },
      onPointerMove: (e) => {
        const d = drag.current;
        if (!d || d.id !== id) return;
        move(id, d.el, e.clientX - d.sx, e.clientY - d.sy);
      },
      onPointerUp: () => {
        if (drag.current?.id !== id) return;
        drag.current = null;
        setOffsets((all) => ({ ...all, [id]: { ...all[id], dragging: false } }));
      },
      onPointerCancel: () => { drag.current = null; },
      /* Keyboard: arrow keys nudge the focused item */
      onKeyDown: (e) => {
        const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
        if (!d) return;
        e.preventDefault();
        const cur = offsets[id] ?? { x: 0, y: 0 };
        raise(id);
        move(id, e.currentTarget, cur.x + d[0] * KEY_STEP, cur.y + d[1] * KEY_STEP);
      },
      onDragStart: (e) => e.preventDefault(),
    };
  };

  const moved = Object.values(offsets).some((o) => o.x || o.y);

  return (
    <div ref={boardRef} className={`pin-board ${className}`}>
      <div className="pin-board__bar">
        {heading}
        {hint && <p className="pin-board__hint">{hint}</p>}
        <button
          type="button"
          className="pin-board__reset"
          onClick={() => setOffsets({})}
          disabled={!moved}
        >
          {resetLabel}
        </button>
      </div>
      {children(pin)}
    </div>
  );
}
