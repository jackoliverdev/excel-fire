import type { ReactNode } from "react";

/**
 * Joins the last two words with a non-breaking space so a line never ends on a lone word,
 * even in browsers without `text-wrap: pretty`. Skips pairs longer than `maxJoined` characters (28 for body text; headings pass a lower cap) so a joined pair can never overflow a narrow screen.
 */
export function noOrphan(text: string, maxJoined = 28): string {
  const index = text.trimEnd().lastIndexOf(" ");
  if (index <= 0) return text;
  const tail = text.slice(index + 1);
  const before = text.slice(0, index);
  const previousWord = before.slice(before.lastIndexOf(" ") + 1);
  if (tail.length + previousWord.length > maxJoined) return text;
  return `${before} ${tail}`;
}

/** `noOrphan` for props that may be a string or other React content. */
export function tidy<T extends ReactNode>(node: T, maxJoined?: number): T | string {
  return typeof node === "string" ? noOrphan(node, maxJoined) : node;
}
