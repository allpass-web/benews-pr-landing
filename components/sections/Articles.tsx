"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { articleSection, articles } from "@/content/site";
import { Eyebrow, SectionHeading, Todoable } from "@/components/ui/Text";
import { Reveal } from "@/components/motion/Reveal";
import { cn, isTodo } from "@/lib/utils";

export function Articles() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const current = articles[active];
  const linkReady = !isTodo(current.url);

  return (
    <section id={articleSection.id} className="section-y bg-paper">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <Eyebrow>{articleSection.eyebrow}</Eyebrow>
          <SectionHeading text={articleSection.headline} />
          <p className="mt-5 text-sm text-ink/70 md:text-base">{articleSection.sub}</p>
        </Reveal>

        {/* 탭 — 모바일은 가로 스크롤 칩 */}
        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="기사 유형"
            className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 md:mx-0 md:mt-12 md:flex-wrap md:overflow-visible md:px-0"
          >
            {articles.map((article, i) => {
              const selected = i === active;
              return (
                <button
                  key={article.type}
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${i}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                    e.preventDefault();
                    const next =
                      e.key === "ArrowRight"
                        ? (active + 1) % articles.length
                        : (active - 1 + articles.length) % articles.length;
                    setActive(next);
                    document.getElementById(`${baseId}-tab-${next}`)?.focus();
                  }}
                  className={cn(
                    "shrink-0 rounded-pill border-2 px-4 py-2.5 text-sm font-bold transition-colors md:px-5 md:text-base",
                    selected
                      ? "border-yellow-400 bg-yellow-400 text-navy-900"
                      : "border-navy-900/15 text-navy-700 hover:border-yellow-400"
                  )}
                >
                  {article.type}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* 예시 카드 */}
        <Reveal delay={0.12}>
          <div
            role="tabpanel"
            id={`${baseId}-panel-${active}`}
            aria-labelledby={`${baseId}-tab-${active}`}
            className="mt-8 overflow-hidden rounded-card border border-navy-900/10 bg-paper-muted md:mt-10"
          >
            <div className="grid md:grid-cols-[minmax(0,360px)_1fr]">
              <div className="relative aspect-[16/10] bg-navy-800 md:aspect-auto md:min-h-[260px]">
                <Image
                  src={current.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-9">
                <p className="text-xs font-bold text-navy-700 md:text-sm">{current.type}</p>
                <h3 className="mt-3 text-lg font-extrabold leading-snug text-navy-900 md:text-2xl">
                  <Todoable text={current.title} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75 md:mt-4 md:text-base">
                  <Todoable text={current.lead} />
                </p>

                {linkReady ? (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-pill border-2 border-navy-700 px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:border-yellow-400 hover:bg-yellow-400 md:mt-8"
                  >
                    {articleSection.linkLabel}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">(새 창에서 열림)</span>
                  </a>
                ) : (
                  <p className="mt-6 text-xs md:mt-8 md:text-sm">
                    <Todoable text={current.url} />
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
