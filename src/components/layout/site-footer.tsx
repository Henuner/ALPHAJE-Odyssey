import Link from "next/link";
import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white/45">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-semibold text-ink">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-ink/65">
            A living record of study, craft, reflection, and steady growth.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-ink/65 hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
