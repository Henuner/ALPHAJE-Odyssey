import type { Metadata } from "next";
import { ContentDetailPage } from "@/components/content/detail-page";
import { getAllSlugs, getContentItem } from "@/lib/content";

export function generateStaticParams() {
  return getAllSlugs("creative");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem("creative", slug);
  return {
    title: item?.title ?? "Creative",
    description: item?.summary,
  };
}

export default async function CreativeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ContentDetailPage area="creative" slug={slug} />;
}
