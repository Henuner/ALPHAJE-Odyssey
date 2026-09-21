import { CategoryFilter } from "@/components/content/category-filter";
import { RegionHeader } from "@/components/content/region-header";
import { PageShell } from "@/components/layout/page-shell";
import { worldRegions } from "@/config/world";
import { getContentByArea } from "@/lib/content";
import type { ContentArea } from "@/types/content";

export function AreaPage({ area }: { area: ContentArea }) {
  const region = worldRegions[area];
  const items = getContentByArea(area);

  return (
    <PageShell>
      <RegionHeader region={region} />
      <section className="pt-10" aria-label={`${region.title} records`}>
        <CategoryFilter items={items} />
      </section>
    </PageShell>
  );
}
