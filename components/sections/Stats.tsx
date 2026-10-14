import { stats } from "@/content/site";
import { Eyebrow, SectionHeading, Todoable } from "@/components/ui/Text";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { isTodo } from "@/lib/utils";

export function Stats() {
  return (
    <section className="section-y relative overflow-hidden bg-navy-900">
      <div className="navy-glow pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden="true" />

      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="dark">{stats.eyebrow}</Eyebrow>
          <SectionHeading text={stats.headline} tone="dark" />
          <div className="mt-5 space-y-1">
            {stats.sub.map((line) => (
              <p key={line} className="text-sm text-white/70 md:text-base">
                <Todoable text={line} />
              </p>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-5">
          {stats.items.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 0.1}>
              <div className="h-full rounded-card border border-navy-700 bg-navy-800 p-6 text-center md:p-8">
                <p className="text-3xl font-extrabold text-yellow-400 md:text-5xl">
                  {item.value > 0 ? (
                    <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
                  ) : isTodo(item.display) ? (
                    /* 아직 안 채운 값만 작게 — 점선 박스가 카드를 밀어내지 않도록 */
                    <span className="text-base md:text-lg">
                      <Todoable text={item.display} />
                    </span>
                  ) : (
                    /* 숫자로 표현할 수 없는 값(예: 1:1)도 숫자 카드와 같은 크기로 */
                    item.display
                  )}
                </p>
                <p className="mt-3 text-sm font-semibold text-white md:text-base">
                  <Todoable text={item.label} />
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {stats.note && (
          <Reveal delay={0.1}>
            <p className="mt-6 text-xs text-white/50 md:text-sm">
              <Todoable text={stats.note} />
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
