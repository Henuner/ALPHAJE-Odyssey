import type { ContentArea } from "@/types/content";

export type SceneKind = "observatory" | "workshop" | "library" | "atelier";

export type AvatarSize = "small" | "medium" | "large";

export type WorldRegion = {
  id: ContentArea;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  sceneKind: SceneKind;
  theme: {
    accent: string;
    surface: string;
    marker: string;
  };
  position: {
    desktop: { x: number; y: number };
    heroDesktop: { x: number; y: number };
    mobileOrder: number;
  };
  guideMessage: string;
};

export type AlphaJeAvatarProps = {
  size?: AvatarSize;
  animated?: boolean;
  className?: string;
  priority?: boolean;
};
