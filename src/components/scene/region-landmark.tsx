import type { SceneKind } from "@/types/world";

export function RegionLandmark({ kind, className = "" }: { kind: SceneKind; className?: string }) {
  if (kind === "observatory") {
    return (
      <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
        <path d="M24 82 H98" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M40 80 V50 Q60 31 80 50 V80" fill="#fff8ec" stroke="currentColor" strokeWidth="4" />
        <path d="M50 43 Q61 21 83 23 Q80 44 61 51 Z" fill="#b9dce5" stroke="currentColor" strokeWidth="4" />
        <path d="M72 27 L89 13" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <circle cx="61" cy="62" r="7" fill="#f4b860" />
      </svg>
    );
  }

  if (kind === "workshop") {
    return (
      <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
        <path d="M18 83 H103" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M27 81 V45 L57 29 L91 45 V81 Z" fill="#fff8ec" stroke="currentColor" strokeWidth="4" />
        <path d="M43 80 V59 H62 V80" fill="#f4b860" stroke="currentColor" strokeWidth="3" />
        <path d="M76 35 V16 H88 V42" fill="#ec7f66" stroke="currentColor" strokeWidth="4" />
        <path d="M34 49 H83" stroke="#d89b45" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "library") {
    return (
      <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
        <path d="M20 83 H100" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M27 80 V38 H93 V80" fill="#fff8ec" stroke="currentColor" strokeWidth="4" />
        <path d="M22 38 L60 17 L99 38 Z" fill="#ec7f66" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M42 47 V76 M60 47 V76 M78 47 V76" stroke="currentColor" strokeWidth="4" />
        <path d="M36 80 H85" stroke="#d67d6b" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <path d="M18 83 H103" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M28 81 V42 L61 25 L94 42 V81 Z" fill="#fff8ec" stroke="currentColor" strokeWidth="4" />
      <path d="M48 81 V58 H72 V81" fill="#6f9f72" stroke="currentColor" strokeWidth="3" />
      <circle cx="39" cy="55" r="7" fill="#f4b860" />
      <circle cx="83" cy="55" r="7" fill="#b9dce5" />
      <path d="M61 25 V10 M53 15 L61 9 L69 15" stroke="#ec7f66" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
