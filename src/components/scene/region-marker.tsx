"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RegionLandmark } from "@/components/scene/region-landmark";
import type { WorldRegion } from "@/types/world";

export function RegionMarker({ region }: { region: WorldRegion }) {
  return (
    <motion.div
      className="absolute hidden -translate-x-1/2 -translate-y-1/2 md:block"
      style={{ left: `${region.position.desktop.x}%`, top: `${region.position.desktop.y}%` }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: region.position.mobileOrder * 0.08 }}
    >
      <Link
        href={region.href}
        className="group relative block w-40 rounded-lg border border-white/70 bg-white/85 p-3 text-left shadow-soft outline-none backdrop-blur-md transition hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4"
        aria-label={`Enter ${region.title}: ${region.description}`}
      >
        <span
          className="absolute -inset-2 -z-10 rounded-lg opacity-0 blur-md transition group-hover:opacity-30 group-focus-visible:opacity-30"
          style={{ backgroundColor: region.theme.accent }}
        />
        <RegionLandmark kind={region.sceneKind} className="mx-auto h-16 w-20" />
        <span className="mt-1 flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-ink">{region.title}</span>
          <ArrowUpRight className="size-4 text-ink/45 transition group-hover:text-coral" aria-hidden="true" />
        </span>
        <span className="mt-1 block text-xs leading-5 text-ink/58">{region.eyebrow}</span>
      </Link>
    </motion.div>
  );
}
