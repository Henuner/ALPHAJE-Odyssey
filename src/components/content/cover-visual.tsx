import Image from "next/image";
import { RegionLandmark } from "@/components/scene/region-landmark";
import type { WorldRegion } from "@/types/world";

export function CoverVisual({ title, src, region }: { title: string; src?: string; region: WorldRegion }) {
  return (
    <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-lg border border-ink/10" style={{ background: `linear-gradient(135deg, ${region.theme.surface}, #fff8ec)` }}>
      {src ? (
        <Image src={src} alt={`Cover image for ${title}`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 820px" />
      ) : (
        <>
          <div className="absolute -right-16 -top-20 size-64 rounded-full bg-white/45" />
          <div className="absolute -bottom-24 -left-12 size-72 rounded-full bg-white/35" />
          <RegionLandmark kind={region.sceneKind} className="absolute bottom-4 right-6 h-[78%] w-auto opacity-75" />
          <div className="absolute inset-x-6 bottom-6 max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/48">{region.eyebrow}</p>
            <p className="mt-2 text-xl font-semibold leading-snug text-ink sm:text-2xl">{title}</p>
          </div>
        </>
      )}
    </div>
  );
}
