import Link from "next/link";
import { ArrowDown, Compass, FlaskConical } from "lucide-react";
import { MotionReveal } from "@/components/home/motion-reveal";
import { HeroWorldExplorer } from "@/components/home/hero-world-explorer";

export function HeroScene() {
  return (
    <section className="relative isolate min-h-[700px] overflow-hidden bg-[#d9ecec] px-5 pb-20 pt-20 sm:px-8 lg:min-h-[calc(100svh-4rem)]">
      <HeroWorldExplorer />

      <div className="pointer-events-none relative z-20 mx-auto flex min-h-[600px] max-w-6xl items-start pt-8 sm:pt-10 lg:pt-12">
        <MotionReveal>
          <div className="pointer-events-auto max-w-xl text-ink [text-shadow:0_1px_12px_rgba(255,255,255,0.95)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss sm:text-sm">Explore · Create · Reflect · Grow</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              ALPHAJE&apos;s Odyssey
            </h1>
            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-ink/85 sm:text-base">
              A living world of study, experiments, reflection, and creative side paths.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#world-entrances" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4">
                <Compass className="size-4" aria-hidden="true" /> Start exploring
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-5 py-3 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4">
                <FlaskConical className="size-4" aria-hidden="true" /> Visit the workshop
              </Link>
            </div>

          </div>
        </MotionReveal>
      </div>

      <a href="#world-entrances" aria-label="Continue to the world directory" className="absolute bottom-5 left-1/2 z-20 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-ink/10 bg-white/75 text-ink/60 shadow-soft backdrop-blur-sm transition hover:bg-white hover:text-ink">
        <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </a>
    </section>
  );
}
