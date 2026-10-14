import { ChevronDown, Search } from "lucide-react";

import { hero } from "@/content/site";
import { AnchorButton } from "@/components/ui/Button";
import { Emphasis } from "@/components/ui/Text";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section
      id={hero.id}
      className="relative overflow-hidden bg-navy-900 pb-20 pt-[calc(var(--header-h)+64px)] md:pb-28 md:pt-[calc(var(--header-h)+96px)]"
    >
      <div className="navy-glow pointer-events-none absolute inset-x-0 top-0 h-[60%]" aria-hidden="true" />

      <div className="container-page relative">
        <p className="mb-5 inline-flex rounded-pill border border-navy-700 px-4 py-1.5 text-xs font-bold tracking-wide text-yellow-400 md:text-sm">
          {hero.eyebrow}
        </p>

        <h1 className="text-display text-white">
          <span className="sr-only">{hero.srHeadline}</span>

          <span aria-hidden="true">
            <span className="block">{hero.lineTop}</span>

            {/* 입력 기능 없는 장식용 검색창 (커서 깜빡임 + 돋보기) */}
            <span className="hero-search">
              <span className="hero-search__caret" />
              <Search className="h-[0.9em] w-[0.9em] flex-none" strokeWidth={3} />
            </span>

            <span className="block">{hero.lineBottom}</span>
          </span>
        </h1>

        {/* 스크롤하면 순서대로 등장 */}
        <div className="mt-14 space-y-1 md:mt-20">
          {hero.sub.map((line, i) => (
            <Reveal key={line} delay={i * 0.15}>
              <p className="text-[clamp(17px,2.4vw,26px)] font-bold leading-relaxed text-white">
                <Emphasis text={line} tone="dark" />
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35} className="mt-10 md:mt-12">
          <AnchorButton href={hero.cta.href} size="lg">
            {hero.cta.label}
          </AnchorButton>
        </Reveal>

        <div
          className="mt-14 flex items-center gap-1.5 text-xs text-white/50 md:mt-20"
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4 animate-bubble-float" />
          {hero.scrollHint}
        </div>
      </div>
    </section>
  );
}
