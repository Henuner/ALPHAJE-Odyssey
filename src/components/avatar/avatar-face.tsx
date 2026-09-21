import type { AvatarMood } from "@/types/world";

export function AvatarFace({ mood = "welcome" }: { mood?: AvatarMood }) {
  const eyeY = mood === "curious" ? 69 : 71;

  return (
    <g aria-hidden="true">
      {mood === "thinking" ? (
        <>
          <path d="M82 67 Q88 63 94 67" fill="none" stroke="#3b362f" strokeWidth="3" strokeLinecap="round" />
          <circle cx="111" cy={eyeY} r="3.5" fill="#3b362f" />
        </>
      ) : (
        <>
          <circle cx="90" cy={eyeY} r="3.5" fill="#3b362f" />
          <circle cx="111" cy={eyeY} r="3.5" fill="#3b362f" />
        </>
      )}
      {mood === "curious" ? (
        <path d="M94 84 Q101 79 108 84" fill="none" stroke="#3b362f" strokeWidth="3" strokeLinecap="round" />
      ) : mood === "proud" ? (
        <path d="M93 82 Q101 90 110 82" fill="none" stroke="#3b362f" strokeWidth="3" strokeLinecap="round" />
      ) : (
        <path d="M94 82 Q101 87 108 82" fill="none" stroke="#3b362f" strokeWidth="3" strokeLinecap="round" />
      )}
      <ellipse cx="80" cy="80" rx="7" ry="3" fill="#ec7f66" opacity="0.27" />
      <ellipse cx="119" cy="80" rx="7" ry="3" fill="#ec7f66" opacity="0.27" />
    </g>
  );
}
