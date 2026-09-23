import Image from "next/image";
import { cn } from "@/lib/utils";
import type { AlphaJeAvatarProps } from "@/types/world";

const sizeClasses = {
  small: "w-16 sm:w-20",
  medium: "w-20 sm:w-24",
  large: "w-24 sm:w-28",
};

export function AlphaJeAvatar({ size = "medium", animated = true, className, priority = false }: AlphaJeAvatarProps) {
  return (
    <div className={cn("relative aspect-[2/3] shrink-0", sizeClasses[size], animated && "avatar-breathe", className)}>
      <Image
        src="/images/characters/alphaje-pet-v2.png"
        alt="ALPHAJE, a chibi explorer queen with a crown and backpack"
        fill
        draggable={false}
        priority={priority}
        sizes={size === "large" ? "(max-width: 640px) 96px, 112px" : size === "medium" ? "96px" : "80px"}
        className="pointer-events-none object-contain drop-shadow-[0_14px_18px_rgba(36,51,45,0.18)]"
      />
    </div>
  );
}
