import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleMeta } from "@/components/content/article-meta";
import { CoverVisual } from "@/components/content/cover-visual";
import { TagPill } from "@/components/content/tag-pill";
import { PageShell } from "@/components/layout/page-shell";
import { MDXContent } from "@/components/mdx/mdx-content";
import { TableOfContents } from "@/components/mdx/table-of-contents";
import { worldRegions } from "@/config/world";
import { getAvailableCover, getContentItem, getToc } from "@/lib/content";
import type { ContentArea } from "@/types/content";

export function ContentDetailPage({ area, slug }: { area: ContentArea; slug: string }) {
  const item = getContentItem(area, slug);

  if (!item) {
    notFound();
  }

  const toc = getToc(item.body);
  const areaMeta = worldRegions[area];
  const cover = getAvailableCover(item.cover);

  return (
    <PageShell>
      <Link href={areaMeta.href} className="text-sm font-semibold text-moss hover:text-coral">
        Back to {areaMeta.title}
      </Link>
      <article className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div>
          <ArticleMeta item={item} />
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{item.title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/68">{item.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>
          <CoverVisual title={item.title} src={cover} region={areaMeta} />
          {item.type === "project" ? (
            <div className="mt-6 rounded-lg border border-ink/10 bg-white/65 p-4">
              <p className="text-sm font-semibold text-ink">Project links</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                {item.demoUrl ? (
                  <Link href={item.demoUrl} className="text-moss hover:text-coral">
                    Demo
                  </Link>
                ) : null}
                {item.githubUrl ? (
                  <Link href={item.githubUrl} className="text-moss hover:text-coral">
                    GitHub
                  </Link>
                ) : null}
              </div>
              {item.techStack?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <TagPill key={tech}>{tech}</TagPill>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="prose prose-stone mt-10 max-w-none prose-headings:text-ink prose-p:text-ink/72 prose-a:text-moss prose-strong:text-ink prose-code:text-coral">
            <MDXContent source={item.body} />
          </div>
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents items={toc} />
          </div>
        </aside>
      </article>
    </PageShell>
  );
}
