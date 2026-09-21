import type { Metadata } from "next";
import { ContentDetailPage } from "@/components/content/detail-page";
import { getAllSlugs, getContentItem } from "@/lib/content";

export function generateStaticParams() {
  return getAllSlugs("reflection");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem("reflection", slug);
  return {
    title: item?.title ?? "Reflection",
    description: item?.summary,
  };
}

export default async function ReflectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ContentDetailPage area="reflection" slug={slug} />;
}
