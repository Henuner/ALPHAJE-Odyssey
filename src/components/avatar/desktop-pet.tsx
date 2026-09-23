"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { Crown, Heart, Home, Map, MessageCircle, Shuffle, X, Zap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { AvatarDialogue } from "@/components/avatar/avatar-dialogue";
import { PetRenderer } from "@/components/avatar/pet-renderer";
import { useDesktopPet } from "@/components/avatar/use-desktop-pet";
import { usePetVitals } from "@/components/avatar/use-pet-vitals";

const routeMessages: Record<string, string> = {
  "/knowledge": "Let’s take one difficult idea at a time.",
  "/projects": "The workshop is open. What shall we build?",
  "/reflection": "A quiet note can become tomorrow’s map.",
  "/creative": "Try the strange idea. That’s what this room is for.",
  "/about": "This world grows alongside its maker.",
};

function messageForPath(pathname: string) {
  const route = Object.keys(routeMessages).find((key) => pathname.startsWith(key));
  return route ? routeMessages[route] : "Need a guide? Pick a destination or let curiosity choose.";
}

export function DesktopPet({ randomDestinations }: { randomDestinations: string[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const draggedRef = useRef(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const vitals = usePetVitals();
  const {
    hidden,
    menuOpen,
    position,
    ready,
    talking,
    savePosition,
    setHidden,
    setMenuOpen,
    setTalking,
  } = useDesktopPet();

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  useEffect(() => {
    setMenuOpen(false);
    setTalking(false);
  }, [pathname, setMenuOpen, setTalking]);

  function exploreWorld() {
    setMenuOpen(false);
    if (pathname === "/") {
      document.querySelector("#world-entrances")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      return;
    }
    router.push("/#world-entrances");
  }

  function visitRandomRecord() {
    if (!randomDestinations.length) return;
    const alternatives = randomDestinations.filter((destination) => destination !== pathname);
    const pool = alternatives.length ? alternatives : randomDestinations;
    router.push(pool[Math.floor(Math.random() * pool.length)]);
  }

  return (
    <div ref={constraintsRef} className="pointer-events-none fixed inset-3 z-[70] sm:inset-5" aria-label="ALPHAJE desktop companion">
      {ready && hidden ? (
        <button
          type="button"
          onClick={() => setHidden(false)}
          className="pointer-events-auto absolute bottom-0 right-0 grid size-10 place-items-center rounded-full border border-ink/10 bg-parchment/95 text-honey shadow-float backdrop-blur transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss"
          title="Show ALPHAJE"
          aria-label="Show ALPHAJE desktop companion"
        >
          <Crown className="size-4" aria-hidden="true" />
        </button>
      ) : null}

      {ready && !hidden ? (
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.04}
          dragMomentum={false}
          style={{ x, y }}
          onDragStart={() => { draggedRef.current = true; }}
          onDragEnd={() => {
            savePosition({ x: x.get(), y: y.get() });
            window.setTimeout(() => { draggedRef.current = false; }, 0);
          }}
          className="pointer-events-auto absolute bottom-0 right-0 flex touch-none select-none flex-col items-center cursor-grab active:cursor-grabbing"
          whileDrag={reducedMotion ? undefined : { scale: 1.04 }}
        >
          {talking ? <AvatarDialogue message={messageForPath(pathname)} className="mb-1 w-48 sm:w-52" /> : null}

          {menuOpen ? (
            <div className="mb-2 w-52 rounded-lg border border-ink/[0.08] bg-parchment/95 p-2 shadow-float backdrop-blur-sm" role="menu" aria-label="ALPHAJE quick actions">
              <div className="mb-1 grid grid-cols-2 gap-2 border-b border-ink/[0.08] px-2 pb-2 pt-1 text-xs font-medium text-ink/65" aria-label="ALPHAJE condition">
                <span className="flex items-center gap-1.5"><Zap className="size-3.5 text-honey" aria-hidden="true" />Energy {vitals.energy}</span>
                <span className="flex items-center gap-1.5"><Heart className="size-3.5 text-coral" aria-hidden="true" />Mood {vitals.mood}</span>
              </div>
              <button type="button" onPointerDown={(event) => event.stopPropagation()} onClick={exploreWorld} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-ink/75 transition hover:bg-mist" role="menuitem">
                <Map className="size-4 text-moss" aria-hidden="true" /> Explore the world
              </button>
              <button type="button" onPointerDown={(event) => event.stopPropagation()} onClick={visitRandomRecord} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-ink/75 transition hover:bg-mist" role="menuitem">
                <Shuffle className="size-4 text-coral" aria-hidden="true" /> Random record
              </button>
              <button type="button" onPointerDown={(event) => event.stopPropagation()} onClick={() => router.push("/")} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-ink/75 transition hover:bg-mist" role="menuitem">
                <Home className="size-4 text-honey" aria-hidden="true" /> Back home
              </button>
            </div>
          ) : null}

          <div className="relative">
            <div className="absolute right-full top-10 mr-1 flex flex-col gap-1.5 opacity-80 transition-opacity hover:opacity-100 sm:top-12">
              <button type="button" onPointerDown={(event) => event.stopPropagation()} onClick={() => setTalking((value) => !value)} className="grid size-8 place-items-center rounded-full border border-ink/10 bg-parchment/95 text-moss shadow-card backdrop-blur transition hover:bg-white hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss" title={talking ? "Close dialogue" : "Talk to ALPHAJE"} aria-label={talking ? "Close dialogue" : "Talk to ALPHAJE"}>
                <MessageCircle className="size-3.5" aria-hidden="true" />
              </button>
              <button type="button" onPointerDown={(event) => event.stopPropagation()} onClick={() => setHidden(true)} className="grid size-8 place-items-center rounded-full border border-ink/10 bg-parchment/95 text-ink/55 shadow-card backdrop-blur transition hover:bg-white hover:text-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss" title="Hide ALPHAJE" aria-label="Hide ALPHAJE desktop companion">
                <X className="size-3.5" aria-hidden="true" />
              </button>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                if (!draggedRef.current) setMenuOpen((value) => !value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setMenuOpen((value) => !value);
              }}
              className="block cursor-grab focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 active:cursor-grabbing"
              aria-label="Open ALPHAJE quick actions"
              aria-expanded={menuOpen}
            >
              <PetRenderer reducedMotion={Boolean(reducedMotion)} />
            </div>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
