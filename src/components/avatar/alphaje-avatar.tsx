import { cn } from "@/lib/utils";
import type { AlphaJeAvatarProps } from "@/types/world";
import { AvatarFace } from "@/components/avatar/avatar-face";

const sizeClasses = {
  small: "w-20",
  medium: "w-32",
  large: "w-48 sm:w-56",
};

export function AlphaJeAvatar({
  mood = "welcome",
  size = "medium",
  animated = true,
  className,
}: AlphaJeAvatarProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] shrink-0",
        sizeClasses[size],
        animated && "avatar-breathe",
        className,
      )}
      aria-label={`ALPHAJE, the young explorer king, feeling ${mood}`}
      role="img"
    >
      <svg viewBox="0 0 200 250" className="h-full w-full overflow-visible">
        <ellipse cx="100" cy="232" rx="57" ry="10" fill="#24332d" opacity="0.12" />

        <g className={animated ? "avatar-cape" : undefined}>
          <path d="M61 133 Q34 160 47 211 Q70 226 87 205 L83 139 Z" fill="#ec7f66" />
          <path d="M139 133 Q166 160 153 211 Q130 226 113 205 L117 139 Z" fill="#d96d59" />
        </g>

        <path d="M53 146 Q47 166 57 190 L75 184 L72 148 Z" fill="#9b6a3a" />
        <rect x="46" y="157" width="17" height="34" rx="7" fill="#b9824f" />
        <path d="M76 134 Q100 122 124 134 L135 203 Q101 220 65 203 Z" fill="#4f6f52" />
        <path d="M83 135 L100 163 L117 135" fill="#fff8ec" opacity="0.95" />
        <circle cx="100" cy="161" r="5" fill="#f4b860" />
        <path d="M73 200 L67 228" stroke="#3e5541" strokeWidth="15" strokeLinecap="round" />
        <path d="M126 200 L132 228" stroke="#3e5541" strokeWidth="15" strokeLinecap="round" />
        <path d="M54 229 H79" stroke="#24332d" strokeWidth="10" strokeLinecap="round" />
        <path d="M121 229 H146" stroke="#24332d" strokeWidth="10" strokeLinecap="round" />

        <path d="M65 145 Q48 157 55 179" fill="none" stroke="#f0c6a8" strokeWidth="13" strokeLinecap="round" />
        <path d="M135 145 Q151 158 144 178" fill="none" stroke="#f0c6a8" strokeWidth="13" strokeLinecap="round" />
        <rect x="135" y="172" width="29" height="22" rx="4" fill="#f4b860" transform="rotate(-8 135 172)" />
        <path d="M142 177 H157 M143 183 H156" stroke="#9a6827" strokeWidth="2" strokeLinecap="round" />

        <circle cx="100" cy="77" r="52" fill="#f0c6a8" />
        <path d="M53 72 Q52 27 100 24 Q148 27 147 72 Q137 44 119 44 Q96 52 72 43 Q60 54 53 72 Z" fill="#38483e" />
        <path d="M57 61 Q40 82 58 105" fill="none" stroke="#38483e" strokeWidth="12" strokeLinecap="round" />
        <path d="M143 61 Q160 82 142 105" fill="none" stroke="#38483e" strokeWidth="12" strokeLinecap="round" />
        <AvatarFace mood={mood} />

        <g className={animated ? "avatar-crown" : undefined}>
          <path d="M69 30 L74 4 L91 20 L101 0 L113 20 L130 5 L132 34 Z" fill="#f4b860" stroke="#9a6827" strokeWidth="3" strokeLinejoin="round" />
          <path d="M71 29 Q100 22 132 29 L130 42 Q100 36 72 42 Z" fill="#e5a642" stroke="#9a6827" strokeWidth="3" />
          <circle cx="101" cy="27" r="4" fill="#ec7f66" />
        </g>
      </svg>
    </div>
  );
}
