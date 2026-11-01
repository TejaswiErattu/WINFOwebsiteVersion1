/**
 * Render a plain-text string that contains **bold** and *italic* markers
 * into React elements with <strong> and <em> tags.
 *
 * Example:
 *   renderBold("We are a **student organization** at UW")
 *   → ["We are a ", <strong>student organization</strong>, " at UW"]
 */
export function renderBold(text) {
  /* **bold** and *italic* (used for titles like *Decoding with WINFO*) */
  const parts = text.split(/(\*\*.*?\*\*|\*[^*]+?\*)/g);
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;
    return part.startsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : <em key={i}>{part.slice(1, -1)}</em>;
  });
}
