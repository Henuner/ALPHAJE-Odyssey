import Link from "next/link";
import { ArrowDown, Compass, FlaskConical } from "lucide-react";
import { AlphaJeAvatar } from "@/components/avatar/alphaje-avatar";
import { AvatarDialogue } from "@/components/avatar/avatar-dialogue";
import { MotionReveal } from "@/components/home/motion-reveal";
import { FloatingClouds } from "@/components/scene/floating-clouds";

export function HeroScene() {
  return (
    <section className="relative isolate min-h-[780px] overflow-hidden bg-[#dcebed] px-4 pb-20 pt-16 sm:min-h-[820px] sm:px-6 lg:min-h-[calc(100svh-4rem)]">
      <div className="absolute inset-x-0 top-0 h-[62%] bg-[linear-gradient(180deg,#c4e1e8_0%,#e8efe2_78%,rgba(232,239,226,0)_100%)]" />
      <div className="absolute left-[8%] top-[12%] size-20 rounded-full bg-honey/80 shadow-[0_0_75px_rgba(244,184,96,0.65)] sm:size-28" />
      <FloatingClouds />

      <svg viewBox="0 0 1440 760" preserveAspectRatio="xMidYMax slice" className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] w-full" aria-hidden="true">
        <path d="M0 362 C152 250 302 345 421 244 C531 152 672 281 782 207 C915 117 1080 278 1197 198 C1305 125 1375 164 1440 124 V760 H0 Z" fill="#b8cfae" />
        <path d="M0 430 C174 337 278 447 446 351 C605 261 737 405 898 301 C1048 205 1208 363 1440 256 V760 H0 Z" fill="#87aa80" />
        <path d="M0 533 C158 441 308 552 471 468 C635 383 781 545 972 432 C1128 340 1281 452 1440 400 V760 H0 Z" fill="#648f69" />
        <path d="M594 760 C581 659 625 586 720 531 C815 586 860 661 847 760 Z" fill="#f7e9c9" />
        <path d="M655 760 C648 675 673 618 720 579 C769 620 795 681 785 760 Z" fill="#fff8ec" opacity="0.75" />
        <g opacity="0.68" fill="#3f6848">
          <path d="M74 586 L107 497 L141 586 Z" /><path d="M117 602 L159 486 L201 602 Z" />
          <path d="M1190 559 L1227 458 L1264 559 Z" /><path d="M1239 580 L1285 452 L1332 580 Z" />
          <path d="M286 537 L316 456 L346 537 Z" /><path d="M1046 516 L1080 425 L1114 516 Z" />
        </g>
        <path d="M129 637 C195 584 269 589 327 645 C264 681 191 679 129 637 Z" fill="#b9dce5" opacity="0.7" />
        <path d="M1097 624 C1156 579 1220 583 1273 631 C1217 663 1152 662 1097 624 Z" fill="#b9dce5" opacity="0.65" />
      </svg>

      <div className="relative mx-auto grid min-h-[650px] max-w-6xl items-start gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <MotionReveal>
          <div className="relative z-10 max-w-3xl pt-6 lg:pb-36 lg:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">Explore · Create · Reflect · Grow</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] text-ink sm:text-7xl lg:text-[5.4rem]">
              ALPHAJE&apos;s<br />Odyssey
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/72 sm:text-lg">
              Welcome to a living world of study, experiments, quiet reflection, and creative side paths. The map keeps growing with its maker.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#world-entrances" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4">
                <Compass className="size-4" aria-hidden="true" />
                Start exploring
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/72 px-5 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4">
                <FlaskConical className="size-4" aria-hidden="true" />
                Visit the workshop
              </Link>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.16}>
          <div className="relative z-10 mx-auto flex min-h-[360px] w-full max-w-sm flex-col items-center justify-end pt-16 lg:min-h-[600px] lg:justify-center lg:pt-24">
            <AvatarDialogue message="A small kingdom is built one curious step at a time. Shall we look around?" className="absolute left-1/2 top-3 w-[min(19rem,86vw)] -translate-x-1/2 lg:top-16" />
            <AlphaJeAvatar mood="welcome" size="large" />
            <div className="mt-1 rounded-full border border-white/60 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-moss backdrop-blur-sm">ALPHAJE · Explorer King</div>
          </div>
        </MotionReveal>
      </div>

      <a href="#world-entrances" aria-label="Continue to the world atlas" className="absolute bottom-5 left-1/2 z-20 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-ink/10 bg-white/60 text-ink/60 backdrop-blur-sm transition hover:bg-white hover:text-ink">
        <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </a>
    </section>
  );
}
