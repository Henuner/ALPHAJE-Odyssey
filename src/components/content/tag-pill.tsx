import type { ReactNode } from "react";

export function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-ink/10 bg-white/60 px-2.5 py-1 text-xs font-medium text-ink/70">
      {children}
    </span>
  );
}
