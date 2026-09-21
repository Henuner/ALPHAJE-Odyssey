import type { Metadata } from "next";
import { ContentDetailPage } from "@/components/content/detail-page";
import { getAllSlugs, getContentItem } from "@/lib/content";

export function generateStaticParams() {
  return getAllSlugs("knowledge");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem("knowledge", slug);
  return {
    title: item?.title ?? "Knowledge",
    description: item?.summary,
  };
}

export default async function KnowledgeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ContentDetailPage area="knowledge" slug={slug} />;
}
