import type { Metadata } from "next";
import { ContentDetailPage } from "@/components/content/detail-page";
import { getAllSlugs, getContentItem } from "@/lib/content";

export function generateStaticParams() {
  return getAllSlugs("projects");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem("projects", slug);
  return {
    title: item?.title ?? "Projects",
    description: item?.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ContentDetailPage area="projects" slug={slug} />;
}
