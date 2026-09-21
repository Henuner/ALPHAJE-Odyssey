export function FloatingClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="cloud-drift absolute left-[6%] top-[14%] h-8 w-28 rounded-full bg-white/65 before:absolute before:-top-4 before:left-5 before:size-10 before:rounded-full before:bg-white/65 after:absolute after:-top-6 after:right-4 after:size-14 after:rounded-full after:bg-white/65" />
      <div className="cloud-drift-slow absolute right-[8%] top-[22%] h-7 w-24 rounded-full bg-white/55 before:absolute before:-top-5 before:left-4 before:size-12 before:rounded-full before:bg-white/55 after:absolute after:-top-3 after:right-3 after:size-9 after:rounded-full after:bg-white/55" />
    </div>
  );
}
