import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">{children}</main>;
}
