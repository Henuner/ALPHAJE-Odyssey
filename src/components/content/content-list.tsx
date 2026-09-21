import { ContentCard } from "@/components/content/content-card";
import type { ContentItem } from "@/types/content";

export function ContentList({ items }: { items: ContentItem[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-ink/20 bg-white/45 p-8 text-center text-ink/62">
        This area is waiting for its first note.
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <ContentCard key={`${item.area}-${item.slug}`} item={item} />
      ))}
    </div>
  );
}
