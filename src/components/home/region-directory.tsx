import Link from "next/link";
import { ArrowUpRight, BookOpenText, FlaskConical, Palette, Telescope } from "lucide-react";
import { worldRegionList } from "@/config/world";
import type { ContentArea } from "@/types/content";

const regionIcons = {
  knowledge: Telescope,
  projects: FlaskConical,
  reflection: BookOpenText,
  creative: Palette,
};

export function RegionDirectory({ counts }: { counts: Record<ContentArea, number> }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {worldRegionList.map((region) => {
        const Icon = regionIcons[region.id];
        return (
          <Link key={region.id} href={region.href} className="group rounded-lg border border-ink/[0.08] bg-white/75 p-5 shadow-card outline-none transition duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-soft focus-visible:ring-2 focus-visible:ring-ink">
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-10 place-items-center rounded-lg" style={{ backgroundColor: region.theme.surface, color: region.theme.marker }}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <ArrowUpRight className="size-5 text-ink/28 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" aria-hidden="true" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">{region.eyebrow}</p>
            <h3 className="mt-2 text-xl font-semibold text-ink">{region.title}</h3>
            <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-ink/62">{region.description}</p>
            <p className="mt-4 text-xs font-medium text-moss">{counts[region.id]} {counts[region.id] === 1 ? "record" : "records"}</p>
          </Link>
        );
      })}
    </div>
  );
}
