import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ContentArea, ContentFrontMatter, ContentItem, TocItem } from "@/types/content";
import { slugify } from "@/lib/utils";

const contentRoot = path.join(process.cwd(), "content");
const publicRoot = path.join(process.cwd(), "public");

const areas: ContentArea[] = ["knowledge", "projects", "reflection", "creative"];

function estimateReadingTime(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

function normalizeFrontMatter(data: Record<string, unknown>): ContentFrontMatter {
  return {
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? new Date().toISOString()),
    category: String(data.category ?? "General"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    type: (data.type as ContentFrontMatter["type"]) ?? "technical",
    summary: String(data.summary ?? ""),
    cover: data.cover ? String(data.cover) : undefined,
    techStack: Array.isArray(data.techStack) ? data.techStack.map(String) : undefined,
    demoUrl: data.demoUrl ? String(data.demoUrl) : undefined,
    githubUrl: data.githubUrl ? String(data.githubUrl) : undefined,
  };
}

export function getAllContent(): ContentItem[] {
  return areas
    .flatMap((area) => getContentByArea(area))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getContentByArea(area: ContentArea): ContentItem[] {
  const areaPath = path.join(contentRoot, area);

  if (!fs.existsSync(areaPath)) {
    return [];
  }

  return fs
    .readdirSync(areaPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(areaPath, file), "utf8");
      const { data, content } = matter(raw);
      const frontMatter = normalizeFrontMatter(data);

      return {
        ...frontMatter,
        area,
        slug,
        body: content,
        readingTime: estimateReadingTime(content),
      };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getContentItem(area: ContentArea, slug: string) {
  return getContentByArea(area).find((item) => item.slug === slug);
}

export function getAvailableCover(cover?: string) {
  if (!cover || !cover.startsWith("/")) {
    return undefined;
  }

  const relativePath = cover.slice(1).replaceAll("/", path.sep);
  return fs.existsSync(path.join(publicRoot, relativePath)) ? cover : undefined;
}

export function getAllSlugs(area: ContentArea) {
  return getContentByArea(area).map((item) => ({ slug: item.slug }));
}

export function getToc(body: string): TocItem[] {
  return body
    .split("\n")
    .map((line) => {
      const match = /^(##|###)\s+(.+)$/.exec(line);
      if (!match) {
        return null;
      }

      return {
        id: slugify(match[2]),
        text: match[2],
        level: match[1].length as 2 | 3,
      };
    })
    .filter((item): item is TocItem => Boolean(item));
}
