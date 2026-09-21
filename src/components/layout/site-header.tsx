import Link from "next/link";
import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-parchment/86 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-[0.04em] text-ink">
          {siteConfig.author}
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-ink/72 transition hover:bg-white/70 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/knowledge" className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5">Explore</Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
