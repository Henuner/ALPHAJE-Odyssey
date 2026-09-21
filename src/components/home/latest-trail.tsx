import { ContentCard } from "@/components/content/content-card";
import type { ContentItem } from "@/types/content";

export function LatestTrail({ items }: { items: ContentItem[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-meadow">Recent footsteps</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">New records from the journey</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/62">Fresh notes, builds, and reflections gathered while the world continues to take shape.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {items.slice(0, 3).map((item) => (
          <ContentCard key={`${item.area}-${item.slug}`} item={item} />
        ))}
      </div>
    </section>
  );
}
