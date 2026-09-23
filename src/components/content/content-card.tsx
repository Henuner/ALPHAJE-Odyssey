import Link from "next/link";
import { ArticleMeta } from "@/components/content/article-meta";
import { TagPill } from "@/components/content/tag-pill";
import type { ContentItem } from "@/types/content";
import { worldRegions } from "@/config/world";

export function ContentCard({ item }: { item: ContentItem }) {
  const region = worldRegions[item.area];

  return (
    <article className="group rounded-lg border border-ink/[0.08] bg-white/75 p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-ink/15 hover:bg-white/90 hover:shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ArticleMeta item={item} />
        <span className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ color: region.theme.marker, backgroundColor: region.theme.surface }}>{region.title}</span>
      </div>
      <h2 className="mt-4 text-xl font-semibold leading-snug text-ink">
        <Link href={`/${item.area}/${item.slug}`}>{item.title}</Link>
      </h2>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/66">{item.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.slice(0, 4).map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>
      <Link
        href={`/${item.area}/${item.slug}`}
        className="mt-5 inline-flex text-sm font-semibold text-moss transition group-hover:text-coral"
      >
        Read the trail
      </Link>
    </article>
  );
}
