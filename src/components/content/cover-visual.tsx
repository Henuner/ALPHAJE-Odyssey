import Image from "next/image";
import { RegionLandmark } from "@/components/scene/region-landmark";
import type { WorldRegion } from "@/types/world";

export function CoverVisual({ title, src, region }: { title: string; src?: string; region: WorldRegion }) {
  return (
    <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-lg border border-ink/[0.08] shadow-card" style={{ backgroundColor: region.theme.surface }}>
      {src ? (
        <Image src={src} alt={`Cover image for ${title}`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 820px" />
      ) : (
        <>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-white/25" />
          <RegionLandmark kind={region.sceneKind} className="absolute bottom-3 right-6 h-[74%] w-auto opacity-70" />
          <div className="absolute inset-x-6 bottom-6 max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/48">{region.eyebrow}</p>
            <p className="mt-2 text-xl font-semibold leading-snug text-ink sm:text-2xl">{title}</p>
          </div>
        </>
      )}
    </div>
  );
}
