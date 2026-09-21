import { AvatarGuide } from "@/components/avatar/avatar-guide";
import { RegionLandmark } from "@/components/scene/region-landmark";
import type { WorldRegion } from "@/types/world";

const regionMoods = {
  knowledge: "curious",
  projects: "proud",
  reflection: "thinking",
  creative: "welcome",
} as const;

export function RegionHeader({ region }: { region: WorldRegion }) {
  return (
    <header className="relative overflow-hidden border-b border-ink/10 pb-10">
      <div className="absolute inset-0 -z-10 opacity-65" style={{ background: `linear-gradient(115deg, ${region.theme.surface}, transparent 72%)` }} />
      <div className="grid items-end gap-8 pt-4 md:grid-cols-[1fr_auto]">
        <div className="max-w-3xl pb-3">
          <div className="flex items-center gap-4">
            <span className="grid size-20 place-items-center rounded-lg" style={{ color: region.theme.marker, backgroundColor: region.theme.surface }}>
              <RegionLandmark kind={region.sceneKind} className="h-16 w-16" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">{region.eyebrow}</p>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{region.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/68 sm:text-lg">{region.description}</p>
        </div>
        <div className="hidden md:block">
          <AvatarGuide message={region.guideMessage} mood={regionMoods[region.id]} size="small" compact />
        </div>
      </div>
      <p className="mt-6 border-l-2 pl-4 text-sm italic leading-6 text-ink/62 md:hidden" style={{ borderColor: region.theme.accent }}>{region.guideMessage}</p>
    </header>
  );
}
