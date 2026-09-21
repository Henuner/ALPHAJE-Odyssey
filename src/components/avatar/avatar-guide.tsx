import { AlphaJeAvatar } from "@/components/avatar/alphaje-avatar";
import { AvatarDialogue } from "@/components/avatar/avatar-dialogue";
import type { AvatarMood, AvatarSize } from "@/types/world";

type AvatarGuideProps = {
  message: string;
  mood?: AvatarMood;
  size?: AvatarSize;
  compact?: boolean;
};

export function AvatarGuide({ message, mood = "welcome", size = "medium", compact = false }: AvatarGuideProps) {
  return (
    <div className={compact ? "flex items-end gap-3" : "flex flex-col items-center gap-2"}>
      <AvatarDialogue message={message} className={compact ? "order-2 mb-5" : "order-1"} />
      <AlphaJeAvatar mood={mood} size={size} className={compact ? "order-1" : "order-2"} />
    </div>
  );
}
