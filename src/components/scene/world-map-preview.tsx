import { RegionMarker } from "@/components/scene/region-marker";
import { worldRegionList } from "@/config/world";

export function WorldMapPreview() {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-lg border border-ink/10 bg-[#dfeeed] shadow-soft sm:min-h-[430px] md:min-h-[620px]">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,#c6e4eb_0%,#eaf2e8_100%)]" />
      <div className="absolute left-[12%] top-[9%] size-16 rounded-full bg-honey/75 shadow-[0_0_52px_rgba(244,184,96,0.55)]" />

      <svg viewBox="0 0 1000 680" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" role="img" aria-label="Illustrated overview of ALPHAJE's four regions">
        <path d="M0 345 C160 245 245 325 350 256 C465 178 558 272 670 228 C808 174 889 252 1000 196 V680 H0 Z" fill="#b5cfae" />
        <path d="M0 402 C122 344 240 400 339 350 C465 286 557 399 687 331 C811 267 900 358 1000 301 V680 H0 Z" fill="#85ad7f" />
        <path d="M0 515 C120 448 256 539 381 458 C491 386 632 493 756 421 C853 365 934 434 1000 407 V680 H0 Z" fill="#648f69" />
        <path d="M176 208 C225 159 277 167 325 210" fill="none" stroke="#8fb2b9" strokeWidth="24" strokeLinecap="round" opacity="0.52" />
        <path d="M239 259 C325 319 454 318 514 407 C567 487 690 460 753 513" fill="none" stroke="#f8e6bd" strokeWidth="18" strokeLinecap="round" strokeDasharray="6 17" />
        <path d="M239 259 C325 319 454 318 514 407 C567 487 690 460 753 513" fill="none" stroke="#fff8ec" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 28" opacity="0.9" />
        <path d="M113 533 C173 478 237 483 293 535 C230 571 165 569 113 533 Z" fill="#b9dce5" opacity="0.85" />
        <path d="M714 214 C774 165 842 171 891 223 C832 253 769 253 714 214 Z" fill="#b9dce5" opacity="0.7" />
        <g fill="#426747" opacity="0.72">
          <path d="M79 445 L105 382 L130 445 Z" /><path d="M115 452 L146 370 L178 452 Z" />
          <path d="M817 398 L846 323 L874 398 Z" /><path d="M858 410 L891 327 L923 410 Z" />
          <path d="M398 553 L426 482 L455 553 Z" /><path d="M438 566 L470 475 L505 566 Z" />
        </g>
      </svg>

      <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/60 bg-white/82 p-4 backdrop-blur-md md:hidden">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">World preview</p>
        <p className="mt-2 text-sm leading-6 text-ink/68">Four regions are connected by one growing trail. Choose a destination in the directory below.</p>
      </div>

      {worldRegionList.map((region) => (
        <RegionMarker key={region.id} region={region} />
      ))}
    </div>
  );
}
