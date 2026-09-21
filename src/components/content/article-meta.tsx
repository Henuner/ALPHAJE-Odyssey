import type { ContentItem } from "@/types/content";
import { formatDate } from "@/lib/format-date";

export function ArticleMeta({ item }: { item: Pick<ContentItem, "date" | "category" | "readingTime"> }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-ink/58">
      <time dateTime={item.date}>{formatDate(item.date)}</time>
      <span aria-hidden="true">/</span>
      <span>{item.category}</span>
      <span aria-hidden="true">/</span>
      <span>{item.readingTime}</span>
    </div>
  );
}
