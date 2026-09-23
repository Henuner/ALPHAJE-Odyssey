"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, Link2, RotateCcw, Sparkles, Zap } from "lucide-react";
import { usePetVitals } from "@/components/avatar/use-pet-vitals";
import { playgroundConfig } from "@/config/playground";
import { nudgePetVitals } from "@/lib/pet-vitals";

const bubbles = [
  { id: 1, left: 10, top: 16, size: 54, color: "bg-skysoft/75" },
  { id: 2, left: 35, top: 8, size: 42, color: "bg-honey/60" },
  { id: 3, left: 66, top: 15, size: 60, color: "bg-coral/50" },
  { id: 4, left: 22, top: 51, size: 64, color: "bg-meadow/40" },
  { id: 5, left: 53, top: 43, size: 46, color: "bg-skysoft/80" },
  { id: 6, left: 78, top: 57, size: 48, color: "bg-honey/60" },
  { id: 7, left: 44, top: 72, size: 38, color: "bg-coral/50" },
];

const vitalMeta = [
  { key: "energy", label: "Energy", icon: Zap, color: "bg-honey" },
  { key: "mood", label: "Mood", icon: Heart, color: "bg-coral" },
  { key: "curiosity", label: "Curiosity", icon: Sparkles, color: "bg-skysoft" },
  { key: "bond", label: "Bond", icon: Link2, color: "bg-meadow" },
] as const;

export function OdysseyPlayground() {
  const [popped, setPopped] = useState<number[]>([]);
  const vitals = usePetVitals();
  const reducedMotion = useReducedMotion();
  const finished = popped.length === bubbles.length;

  function popBubble(id: number) {
    if (popped.includes(id)) return;
    const nextCount = popped.length + 1;
    setPopped((current) => [...current, id]);
    nudgePetVitals({ energy: -1, mood: 2, curiosity: 1, bond: nextCount === bubbles.length ? 2 : 0 });
  }

  return (
    <section className="border-y border-ink/[0.08] bg-mist/50 py-16" aria-labelledby="playground-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">Side quest clearing</p>
            <h2 id="playground-title" className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Odyssey Playground</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-ink/60">Small thoughts, tiny experiments, and playful things that do not need to become big projects.</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="border-l-2 border-honey pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">Current curiosity</p>
              <p className="mt-3 max-w-xl text-xl font-semibold leading-8 text-ink sm:text-2xl">{playgroundConfig.curiosity}</p>
            </div>

            <figure className="mt-10 border-t border-ink/[0.08] pt-6">
              <blockquote className="text-base italic leading-7 text-ink/70">“{playgroundConfig.note}”</blockquote>
              <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">A note from {playgroundConfig.noteDate}</figcaption>
            </figure>

            <div className="mt-9">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">ALPHAJE&apos;s condition</p>
                <p className="text-xs text-ink/40">Stored on this device</p>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {vitalMeta.map(({ key, label, icon: Icon, color }) => (
                  <div key={key}>
                    <div className="flex items-center justify-between text-xs font-medium text-ink/65">
                      <span className="flex items-center gap-1.5"><Icon className="size-3.5" aria-hidden="true" />{label}</span>
                      <span>{vitals[key]}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/70" role="meter" aria-label={`${label}: ${vitals[key]} out of 100`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={vitals[key]}>
                      <motion.div className={`h-full rounded-full ${color}`} animate={{ width: `${vitals[key]}%` }} transition={reducedMotion ? { duration: 0 } : { duration: 0.45 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-ink/[0.08] bg-parchment p-4 shadow-card sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-meadow">Tiny interaction</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">Pop a little pressure</h3>
                <p className="mt-1 text-sm leading-6 text-ink/60">Each bubble cheers ALPHAJE up a little.</p>
              </div>
              <button type="button" onClick={() => setPopped([])} className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/[0.08] bg-white/70 text-ink/50 transition hover:bg-white hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss" aria-label="Reset bubbles" title="Reset bubbles">
                <RotateCcw className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="relative mt-5 h-[260px] overflow-hidden rounded-lg border border-skysoft/60 bg-[#e8f5f5] sm:h-auto sm:min-h-[260px] sm:aspect-[5/3]" aria-label="Bubble popping game">
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-meadow/20" aria-hidden="true" />
              <AnimatePresence>
                {bubbles.filter((bubble) => !popped.includes(bubble.id)).map((bubble) => (
                  <motion.button
                    key={bubble.id}
                    type="button"
                    onClick={() => popBubble(bubble.id)}
                    className={`absolute rounded-full border border-white/80 ${bubble.color} shadow-[inset_7px_7px_12px_rgba(255,255,255,0.55),0_8px_18px_rgba(80,130,130,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss`}
                    style={{ left: `${bubble.left}%`, top: `${bubble.top}%`, width: bubble.size, height: bubble.size }}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
                    animate={reducedMotion ? undefined : { opacity: 1, scale: 1, y: [0, -5, 0] }}
                    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.5 }}
                    transition={reducedMotion ? { duration: 0 } : { y: { duration: 3 + bubble.id * 0.2, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
                    aria-label={`Pop bubble ${bubble.id}`}
                  >
                    <span className="absolute left-[23%] top-[18%] size-[20%] rounded-full bg-white/75" aria-hidden="true" />
                  </motion.button>
                ))}
              </AnimatePresence>

              {finished ? (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-0 grid place-items-center p-6 text-center">
                  <div>
                    <Sparkles className="mx-auto size-7 text-honey" aria-hidden="true" />
                    <p className="mt-3 font-semibold text-ink">The clearing feels lighter.</p>
                    <button type="button" onClick={() => setPopped([])} className="mt-4 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white">Play again</button>
                  </div>
                </motion.div>
              ) : null}
            </div>
            <p className="mt-3 text-right text-xs font-medium text-ink/40">{popped.length} / {bubbles.length} bubbles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
