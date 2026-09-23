import { RegionLandmark } from "@/components/scene/region-landmark";
import type { WorldRegion } from "@/types/world";

export function RegionHeader({ region }: { region: WorldRegion }) {
  return (
    <header className="relative overflow-hidden rounded-lg border border-ink/[0.08] px-5 pb-8 shadow-card sm:px-8" style={{ backgroundColor: region.theme.surface }}>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-white/18" aria-hidden="true" />
      <div className="pt-4">
        <div className="max-w-3xl pb-3">
          <div className="flex items-center gap-4">
            <span className="grid size-20 place-items-center rounded-lg border border-white/60 bg-white/45" style={{ color: region.theme.marker }}>
              <RegionLandmark kind={region.sceneKind} className="h-16 w-16" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">{region.eyebrow}</p>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{region.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/68 sm:text-lg">{region.description}</p>
        </div>
      </div>
      <p className="relative mt-5 max-w-2xl border-l-2 pl-4 text-sm italic leading-6 text-ink/62" style={{ borderColor: region.theme.accent }}>{region.guideMessage}</p>
    </header>
  );
}
