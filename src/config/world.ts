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
      accent: "#89b5c0",
      surface: "#e5f1f2",
      marker: "#527983",
    },
    position: { desktop: { x: 25, y: 23 }, heroDesktop: { x: 62, y: 20 }, mobileOrder: 1 },
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
      accent: "#d7a45d",
      surface: "#faebcf",
      marker: "#8b672f",
    },
    position: { desktop: { x: 76, y: 23 }, heroDesktop: { x: 61, y: 59 }, mobileOrder: 2 },
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
      accent: "#d98e7d",
      surface: "#f7e1da",
      marker: "#925d52",
    },
    position: { desktop: { x: 24, y: 69 }, heroDesktop: { x: 85, y: 37 }, mobileOrder: 3 },
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
      accent: "#89a985",
      surface: "#e3eee0",
      marker: "#557555",
    },
    position: { desktop: { x: 77, y: 69 }, heroDesktop: { x: 92, y: 72 }, mobileOrder: 4 },
    guideMessage: "Not every experiment needs a reason. Some begin simply because making is fun.",
  },
};

export const worldRegionList = Object.values(worldRegions).sort(
  (a, b) => a.position.mobileOrder - b.position.mobileOrder,
);
