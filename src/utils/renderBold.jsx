/**
 * Render a plain-text string that contains **bold** markers
 * into React elements with <strong> tags.
 *
 * Example:
 *   renderBold("We are a **student organization** at UW")
 *   → ["We are a ", <strong>student organization</strong>, " at UW"]
 */
export function renderBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}
