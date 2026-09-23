import type { ReactNode } from "react";

export function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-ink/[0.08] bg-mist/70 px-2.5 py-1 text-xs font-medium text-ink/68">
      {children}
    </span>
  );
}
