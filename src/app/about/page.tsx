import Link from "next/link";
import { Code2, Mail, Map, Sparkles } from "lucide-react";
import { AvatarGuide } from "@/components/avatar/avatar-guide";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/layout/section-header";
import { siteConfig } from "@/config/site";

const directions = ["AI & LLMs", "Frontend craft", "Algorithms", "Creative tools", "Reading & reflection"];
const roadmap = ["Phase 1: MDX-based personal world", "Phase 2: ALPHAJE guide character", "Phase 3: explorable 2D/3D space"];

export default function AboutPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="About ALPHAJE"
        title="A young explorer building a personal archive of becoming."
        description="This is not a static resume. It is a long-running digital field notebook for learning, projects, thoughts, and creative practice."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <section className="border-y border-ink/10 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral">The king behind the world</p>
          <h2 className="mt-3 text-2xl font-semibold text-ink">A digital self, not a separate mascot</h2>
          <p className="mt-4 leading-7 text-ink/68">
            The little explorer king is ALPHAJE&apos;s digital counterpart: the keeper of this world and a learner still walking through it. The crown represents authorship; the backpack keeps the story open.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {directions.map((direction) => (
              <span key={direction} className="rounded-full bg-mist px-3 py-1 text-sm text-ink/72">
                {direction}
              </span>
            ))}
          </div>
        </section>
        <aside className="flex items-end justify-center border-y border-ink/10 py-6">
          <AvatarGuide message="I keep the map, but the real journey belongs to the person learning behind the screen." mood="proud" size="medium" compact />
        </aside>
      </div>

      <section className="mt-12 grid gap-8 border-y border-ink/10 py-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3 text-moss"><Sparkles className="size-5" aria-hidden="true" /><span className="text-xs font-semibold uppercase tracking-[0.16em]">Current quest</span></div>
          <h2 className="mt-4 text-2xl font-semibold text-ink">Build, understand, record, repeat.</h2>
          <p className="mt-4 leading-7 text-ink/66">The current journey connects AI learning, frontend craft, algorithms, creative tools, and the habit of reflecting in public.</p>
        </div>
        <div>
          <div className="flex items-center gap-3 text-moss"><Map className="size-5" aria-hidden="true" /><span className="text-xs font-semibold uppercase tracking-[0.16em]">World roadmap</span></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {roadmap.map((item, index) => (
              <div key={item} className="border-l-2 pl-4" style={{ borderColor: index === 0 ? "#6f9f72" : index === 1 ? "#f4b860" : "#ec7f66" }}>
                <p className="text-xs font-semibold text-ink/40">0{index + 1}</p>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-meadow">Find ALPHAJE</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={siteConfig.links.github} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/65 px-4 py-2.5 text-sm font-semibold text-moss transition hover:bg-white hover:text-coral">
              <Code2 className="size-4" aria-hidden="true" /> GitHub
            </Link>
            <Link href={siteConfig.links.email} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/65 px-4 py-2.5 text-sm font-semibold text-moss transition hover:bg-white hover:text-coral">
              <Mail className="size-4" aria-hidden="true" /> Email
            </Link>
        </div>
      </section>
    </PageShell>
  );
}
