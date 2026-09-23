import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { DesktopPet } from "@/components/avatar/desktop-pet";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const randomDestinations = getAllContent().map((item) => `/${item.area}/${item.slug}`);

  return (
    <html lang="en">
      <body suppressHydrationWarning className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <DesktopPet randomDestinations={randomDestinations} />
      </body>
    </html>
  );
}
