import type { ContentArea } from "@/types/content";
import type { WorldRegion } from "@/types/world";

export const worldRegions: Record<ContentArea, WorldRegion> = {
  knowledge: {
    id: "knowledge",
    title: "Knowledge",
    eyebrow: "The Observatory",
    description: "AI, algorithms, deep learning, CS courses, and questions worth keeping.",
    href: "/knowledge",
    sceneKind: "observatory",
    theme: {
      accent: "#77a8b8",
      surface: "#dcecf0",
      marker: "#477988",
    },
    position: { desktop: { x: 24, y: 31 }, mobileOrder: 1 },
    guideMessage: "Look closely. Every difficult idea becomes a little clearer from here.",
  },
  projects: {
    id: "projects",
    title: "Projects",
    eyebrow: "The Workshop",
    description: "Experiments, research practice, open-source study, and things brought to life.",
    href: "/projects",
    sceneKind: "workshop",
    theme: {
      accent: "#d89b45",
      surface: "#fae6bd",
      marker: "#9a6827",
    },
    position: { desktop: { x: 73, y: 34 }, mobileOrder: 2 },
    guideMessage: "Ideas earn their shape in the workshop. Bring curiosity and leave with a build.",
  },
  reflection: {
    id: "reflection",
    title: "Reflection",
    eyebrow: "The Library",
    description: "Reading notes, essays, seasonal reviews, and quiet records of becoming.",
    href: "/reflection",
    sceneKind: "library",
    theme: {
      accent: "#d67d6b",
      surface: "#f8d9d1",
      marker: "#9f4f40",
    },
    position: { desktop: { x: 32, y: 71 }, mobileOrder: 3 },
    guideMessage: "Some paths only make sense after we sit down and write about them.",
  },
  creative: {
    id: "creative",
    title: "Creative",
    eyebrow: "The Atelier",
    description: "Blender, Unity, visual design, and side quests driven by the joy of making.",
    href: "/creative",
    sceneKind: "atelier",
    theme: {
      accent: "#729d72",
      surface: "#dcebd8",
      marker: "#476e4a",
    },
    position: { desktop: { x: 69, y: 73 }, mobileOrder: 4 },
    guideMessage: "Not every experiment needs a reason. Some begin simply because making is fun.",
  },
};

export const worldRegionList = Object.values(worldRegions).sort(
  (a, b) => a.position.mobileOrder - b.position.mobileOrder,
);
