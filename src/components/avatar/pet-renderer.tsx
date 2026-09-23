import Image from "next/image";
import { AlphaJeAvatar } from "@/components/avatar/alphaje-avatar";
import { cn } from "@/lib/utils";

export function PetRenderer({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <div className={cn("relative", !reducedMotion && "pet-idle-walk")}>
      <AlphaJeAvatar size="large" animated={!reducedMotion} priority />
      {!reducedMotion ? (
        <Image
          src="/images/characters/alphaje-pet-blink.png"
          alt=""
          fill
          draggable={false}
          sizes="(max-width: 640px) 96px, 112px"
          className="pet-blink-frame pointer-events-none object-contain drop-shadow-[0_14px_18px_rgba(36,51,45,0.18)]"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
