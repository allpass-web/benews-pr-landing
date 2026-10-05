import { easyWriting } from "@/content/site";
import { Eyebrow, SectionHeading, Todoable } from "@/components/ui/Text";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export function EasyWriting() {
  return (
    <section className="section-y bg-paper">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <Eyebrow>{easyWriting.eyebrow}</Eyebrow>
          <SectionHeading text={easyWriting.headline} />
          <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
            {easyWriting.body}
          </p>
        </Reveal>

        {/* 강조 배지 (옐로우 아웃라인) */}
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-3">
            {easyWriting.badges.map((badge, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-2 rounded-pill border-2 border-yellow-400 px-4 py-2 text-sm font-bold text-navy-900 md:px-5 md:py-2.5 md:text-base"
              >
                <Icon name={badge.icon} className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
                <Todoable text={badge.label} />
              </li>
            ))}
          </ul>
        </Reveal>

        {/* 3단계 프로세스 */}
        <ol className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
          {easyWriting.steps.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 0.1}>
              <div className="relative h-full rounded-card border border-navy-900/10 bg-paper-muted p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-card bg-navy-900">
                    <Icon name={step.icon} className="h-6 w-6 text-yellow-400" />
                  </span>
                  <span className="text-2xl font-extrabold text-navy-900/15 md:text-3xl">
                    {step.no}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-extrabold text-navy-900 md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/75 md:text-base">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
