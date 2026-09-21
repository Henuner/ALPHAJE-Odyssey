export type ContentArea = "knowledge" | "projects" | "reflection" | "creative";

export type ContentType = "technical" | "project" | "reflection" | "creative";

export type ContentFrontMatter = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  type: ContentType;
  summary: string;
  cover?: string;
  techStack?: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export type ContentItem = ContentFrontMatter & {
  area: ContentArea;
  slug: string;
  body: string;
  readingTime: string;
};

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};
