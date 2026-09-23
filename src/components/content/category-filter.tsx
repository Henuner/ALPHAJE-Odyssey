"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ContentCard } from "@/components/content/content-card";
import type { ContentItem } from "@/types/content";

export function CategoryFilter({ items }: { items: ContentItem[] }) {
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleItems = activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory);

  if (items.length === 0) {
    return (
      <div className="border-y border-dashed border-ink/20 py-12 text-center text-ink/62">
        This region is waiting for its first record.
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter content by category">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
              className={isActive ? "rounded-full bg-ink px-3.5 py-2 text-sm font-medium text-white shadow-card" : "rounded-full border border-ink/[0.08] bg-white/70 px-3.5 py-2 text-sm font-medium text-ink/68 transition hover:border-ink/20 hover:bg-white hover:text-ink"}
            >
              {category}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item) => (
            <motion.div key={`${item.area}-${item.slug}`} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
              <ContentCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visibleItems.length === 0 ? (
        <p className="mt-8 border-y border-dashed border-ink/20 py-10 text-center text-sm text-ink/60">No records in this category yet.</p>
      ) : null}
    </div>
  );
}
