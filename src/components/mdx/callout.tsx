import type { ReactNode } from "react";

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-6 rounded-lg border border-honey/40 bg-honey/15 p-4 text-ink/78">
      {children}
    </aside>
  );
}
