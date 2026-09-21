import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-meadow">Lost trail</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink">This path is not mapped yet.</h1>
        <p className="mt-4 leading-7 text-ink/66">
          The page may be moved, renamed, or still waiting to be created.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
        >
          Return home
        </Link>
      </div>
    </PageShell>
  );
}
