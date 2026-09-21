import { HeroScene } from "@/components/home/hero-scene";
import { LatestTrail } from "@/components/home/latest-trail";
import { WorldEntrances } from "@/components/home/world-entrances";
import { getAllContent } from "@/lib/content";

export default function HomePage() {
  const latest = getAllContent();
  const counts = latest.reduce(
    (acc, item) => {
      acc[item.area] += 1;
      return acc;
    },
    { knowledge: 0, projects: 0, reflection: 0, creative: 0 },
  );

  return (
    <main>
      <HeroScene />
      <WorldEntrances counts={counts} />
      <LatestTrail items={latest} />
    </main>
  );
}
