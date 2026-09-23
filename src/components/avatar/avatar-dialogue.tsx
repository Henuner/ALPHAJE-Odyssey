import { cn } from "@/lib/utils";

export function AvatarDialogue({ message, className }: { message: string; className?: string }) {
  return (
    <div className={cn("relative max-w-xs rounded-lg border border-ink/[0.08] bg-parchment/95 p-4 shadow-float", className)}>
      <span className="absolute -bottom-2 left-8 size-4 rotate-45 border-b border-r border-ink/[0.08] bg-parchment" aria-hidden="true" />
      <p className="relative text-sm leading-6 text-ink/72">{message}</p>
    </div>
  );
}
