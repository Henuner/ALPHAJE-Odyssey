"use client";

import { useEffect, useState } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { worldRegionList } from "@/config/world";
import { RegionLandmark } from "@/components/scene/region-landmark";
import type { WorldRegion } from "@/types/world";

export function HeroWorldExplorer() {
  const [activeRegion, setActiveRegion] = useState<WorldRegion | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<WorldRegion | null>(null);
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const cloudXRaw = useMotionValue(0);
  const cloudYRaw = useMotionValue(0);
  const foregroundXRaw = useMotionValue(0);
  const foregroundYRaw = useMotionValue(0);
  const baseX = useSpring(pointerX, { stiffness: 45, damping: 24 });
  const baseY = useSpring(pointerY, { stiffness: 45, damping: 24 });
  const cloudX = useSpring(cloudXRaw, { stiffness: 35, damping: 22 });
  const cloudY = useSpring(cloudYRaw, { stiffness: 35, damping: 22 });
  const foregroundX = useSpring(foregroundXRaw, { stiffness: 55, damping: 24 });
  const foregroundY = useSpring(foregroundYRaw, { stiffness: 55, damping: 24 });
  const highlightedRegion = activeRegion ?? hoveredRegion;

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveRegion(null);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const xRatio = (event.clientX - bounds.left) / bounds.width - 0.5;
    const yRatio = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(xRatio * -6);
    pointerY.set(yRatio * -4);
    cloudXRaw.set(xRatio * 16);
    cloudYRaw.set(yRatio * 9);
    foregroundXRaw.set(xRatio * 10);
    foregroundYRaw.set(yRatio * 6);
  }

  function resetParallax() {
    pointerX.set(0);
    pointerY.set(0);
    cloudXRaw.set(0);
    cloudYRaw.set(0);
    foregroundXRaw.set(0);
    foregroundYRaw.set(0);
  }

  return (
    <div
      className="absolute inset-0 z-10"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
      onClick={(event) => {
        if (event.target === event.currentTarget) setActiveRegion(null);
      }}
    >
      <motion.div className="pointer-events-none absolute -inset-2" style={reducedMotion ? undefined : { x: baseX, y: baseY }}>
        <Image
          src="/images/illustrations/odyssey-world-hero-v2.png"
          alt="A warm illustrated world with an observatory, workshop, library, atelier, mountains, and winding paths"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[18%_center] sm:object-center"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute -inset-2 hidden [clip-path:inset(67%_0_0_0)] md:block"
        style={reducedMotion ? undefined : { x: foregroundX, y: foregroundY }}
        aria-hidden="true"
      >
        <Image src="/images/illustrations/odyssey-world-hero-v2.png" alt="" fill sizes="100vw" className="object-cover object-center" />
      </motion.div>

      <motion.div className="pointer-events-none absolute inset-x-[-4%] top-[1%] h-[46%] opacity-55 mix-blend-screen" style={reducedMotion ? undefined : { x: cloudX, y: cloudY }} aria-hidden="true">
        <Image src="/images/illustrations/odyssey-cloud-layer.png" alt="" fill sizes="108vw" className="hero-cloud-layer object-cover" />
      </motion.div>

      <div className="pointer-events-none absolute left-[67.1%] top-[17%] hidden h-8 w-4 origin-bottom md:block" aria-hidden="true">
        <span className="hero-flag absolute left-0 top-0 block h-2.5 w-4 bg-coral/80 [clip-path:polygon(0_0,100%_22%,76%_100%,0_78%)]" />
      </div>
      <span className="hero-waterfall pointer-events-none absolute left-[79.4%] top-[50%] hidden h-[13%] w-[1.8%] rounded-full bg-white/35 blur-[1px] md:block" aria-hidden="true" />
      <span className="hero-window-light pointer-events-none absolute left-[84.5%] top-[38%] hidden size-2 rounded-full bg-honey shadow-[0_0_18px_8px_rgba(232,182,95,0.58)] md:block" aria-hidden="true" />
      <span className="hero-window-light pointer-events-none absolute left-[61.6%] top-[58%] hidden size-2 rounded-full bg-honey shadow-[0_0_16px_7px_rgba(232,182,95,0.5)] md:block [animation-delay:1.3s]" aria-hidden="true" />

      <AnimatePresence>
        {highlightedRegion ? (
          <motion.div
            key={highlightedRegion.id}
            className="pointer-events-none absolute -inset-2 hidden md:block"
            style={{ clipPath: `ellipse(7% 10% at ${highlightedRegion.position.heroDesktop.x}% ${highlightedRegion.position.heroDesktop.y}%)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: reducedMotion ? 0 : -4, filter: "brightness(1.08) saturate(1.08) drop-shadow(0 10px 16px rgba(255,255,255,0.7))" }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.22 }}
            aria-hidden="true"
          >
            <Image src="/images/illustrations/odyssey-world-hero-v2.png" alt="" fill sizes="100vw" className="object-cover object-center" />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="absolute inset-0 hidden md:block" aria-label="Explore the world by landmark">
        {worldRegionList.map((region) => (
          <motion.button
            key={region.id}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveRegion((current) => current?.id === region.id ? null : region);
            }}
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
            onFocus={() => setHoveredRegion(region)}
            onBlur={() => setHoveredRegion(null)}
            className="group absolute h-24 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-moss/40"
            style={{ left: `${region.position.heroDesktop.x}%`, top: `${region.position.heroDesktop.y}%` }}
            whileHover={reducedMotion ? undefined : { y: -3, scale: 1.03 }}
            whileFocus={reducedMotion ? undefined : { y: -3, scale: 1.03 }}
            aria-label={`Discover ${region.title}, ${region.eyebrow}`}
          >
            <span className="absolute inset-1 rounded-full border border-white/0 bg-white/0 transition duration-300 group-hover:border-white/70 group-hover:bg-white/15 group-hover:shadow-[0_0_34px_rgba(255,255,255,0.95)] group-focus-visible:border-white/70 group-focus-visible:bg-white/15" />
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-2 whitespace-nowrap rounded-full border border-white/80 bg-parchment/95 py-1.5 pl-1.5 pr-3 text-left shadow-float transition duration-200 group-hover:translate-y-1 group-focus-visible:translate-y-1">
              <span className="grid size-8 place-items-center rounded-full" style={{ color: region.theme.marker, backgroundColor: region.theme.surface }}>
                <RegionLandmark kind={region.sceneKind} className="h-6 w-7" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-ink">{region.title}</span>
                <span className="block text-[10px] text-ink/55">{region.eyebrow}</span>
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeRegion ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            onClick={(event) => event.stopPropagation()}
            className="absolute bottom-16 left-1/2 z-50 hidden w-[min(31rem,calc(100%-2rem))] -translate-x-1/2 rounded-lg border border-white/75 bg-parchment/95 p-4 shadow-float backdrop-blur-sm md:flex md:items-center md:gap-4"
            role="dialog"
            aria-label={`${activeRegion.title} introduction`}
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-lg" style={{ color: activeRegion.theme.marker, backgroundColor: activeRegion.theme.surface }}>
              <RegionLandmark kind={activeRegion.sceneKind} className="h-11 w-12" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-moss">{activeRegion.eyebrow}</p>
              <p className="mt-1 text-sm leading-6 text-ink/70">{activeRegion.guideMessage}</p>
            </div>
            <button type="button" onClick={() => router.push(activeRegion.href)} className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2">
              Enter <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => setActiveRegion(null)} className="absolute right-2 top-2 grid size-7 place-items-center rounded-full text-ink/45 transition hover:bg-mist hover:text-ink" aria-label="Close region introduction">
              <X className="size-3.5" aria-hidden="true" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
