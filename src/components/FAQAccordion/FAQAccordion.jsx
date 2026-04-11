import { useState } from 'react';
import './FAQAccordion.css';

/**
 * FAQAccordion — expandable question/answer list.
 *
 * Props:
 *   items       – array of { question, answer }
 *   allowMulti  – if true, multiple items can be open at once (default: false)
 *
 * Only one item is open at a time by default. Clicking an open item closes it.
 */
export default function FAQAccordion({ items = [], allowMulti = false }) {
  const [openSet, setOpenSet] = useState(new Set());

  const toggle = (index) => {
    setOpenSet((prev) => {
      const next = new Set(allowMulti ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="faq-accordion" role="list">
      {items.map((item, i) => {
        const isOpen = openSet.has(i);

        return (
          <div
            key={i}
            className={`faq-accordion__item ${isOpen ? 'faq-accordion__item--open' : ''}`}
            role="listitem"
          >
            <button
              className="faq-accordion__trigger"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span className="faq-accordion__icon" aria-hidden="true">+</span>
            </button>

            <div className="faq-accordion__body">
              <p className="faq-accordion__answer">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
