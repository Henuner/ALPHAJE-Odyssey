import { RegionDirectory } from "@/components/home/region-directory";
import { WorldMapPreview } from "@/components/scene/world-map-preview";
import type { ContentArea } from "@/types/content";

export function WorldEntrances({ counts }: { counts: Record<ContentArea, number> }) {
  return (
    <section id="world-entrances" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-meadow">The world atlas</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Choose a region to explore</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-ink/62">
          Four places, one continuing journey. Follow the trail toward study, building, reflection, or the joy of making.
        </p>
      </div>
      <div className="mt-9 space-y-5">
        <WorldMapPreview />
        <RegionDirectory counts={counts} />
      </div>
    </section>
  );
}
