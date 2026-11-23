import { Fragment } from "react";

/**
 * Comma-separated list that never breaks inside an item (e.g. "Staines-upon-Thames")
 * and keeps the last two items together, so the final line is never a lone word.
 */
export function InlineList({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  const head = items.slice(0, -2);
  const tail = items.slice(-2).join(", ");

  return (
    <>
      {head.map((item) => (
        <Fragment key={item}>
          <span className="whitespace-nowrap">{item},</span>{" "}
        </Fragment>
      ))}
      <span className="whitespace-nowrap">{tail}</span>
    </>
  );
}
