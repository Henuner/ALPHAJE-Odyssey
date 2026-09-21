"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/config/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} className="grid size-10 place-items-center rounded-full border border-ink/10 bg-white/65 text-ink">
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>
      {open ? (
        <nav id="mobile-navigation" className="absolute inset-x-4 top-[4.5rem] rounded-lg border border-ink/10 bg-parchment/95 p-2 shadow-soft backdrop-blur-xl" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-4 py-3 text-sm font-medium text-ink/72 transition hover:bg-white hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
