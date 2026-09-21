import type { TocItem } from "@/types/content";

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="rounded-lg border border-ink/10 bg-white/65 p-4">
      <p className="text-sm font-semibold text-ink">On this page</p>
      <ul className="mt-3 space-y-2 text-sm text-ink/65">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : undefined}>
            <a href={`#${item.id}`} className="hover:text-coral">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
