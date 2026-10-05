import Image from "next/image";

import { report } from "@/content/site";
import { SectionHeading, Todoable } from "@/components/ui/Text";
import { Reveal } from "@/components/motion/Reveal";
import { BarMeter } from "@/components/motion/BarMeter";
import { isTodo } from "@/lib/utils";

export function Report() {
  return (
    <section id={report.id} className="section-y bg-paper">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 텍스트 */}
          <Reveal>
            <SectionHeading text={report.headline} />
            <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
              {report.sub}
            </p>
          </Reveal>

          {/* 리포트 목업 (모바일에서는 아래로) */}
          <Reveal delay={0.1} className="order-last lg:order-none">
            <div className="overflow-hidden rounded-card border border-navy-900/10 bg-paper-muted shadow-xl shadow-navy-900/5">
              <Image
                src={report.mockup.src}
                alt={report.mockup.alt}
                width={report.mockup.width}
                height={report.mockup.height}
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>

        {/* 성과 막대그래프 카드 */}
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {report.bars.map((bar, i) => (
            <Reveal as="li" key={i} delay={i * 0.08}>
              <div className="h-full rounded-card border border-navy-900/10 bg-paper-muted p-6">
                <p className="text-sm font-semibold text-navy-700">
                  <Todoable text={bar.label} />
                </p>
                <p className="mt-3 text-2xl font-extrabold text-navy-900 md:text-3xl">
                  <Todoable text={bar.display} />
                </p>
                <div className="mt-4">
                  <BarMeter
                    value={bar.value}
                    label={isTodo(bar.label) ? undefined : bar.label}
                    delay={i * 0.08}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-6 text-xs leading-relaxed text-ink/60 md:text-sm">
            <Todoable text={report.legend} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
