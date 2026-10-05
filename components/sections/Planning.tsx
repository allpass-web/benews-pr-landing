import { planning } from "@/content/site";
import { Eyebrow, SectionHeading } from "@/components/ui/Text";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** 원형 배치 좌표 (12시 방향부터 시계방향으로 균등 분배) */
function orbit(index: number, total: number, radius = 38) {
  const deg = -90 + (360 / total) * index;
  const rad = (deg * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.cos(rad)}%`,
    top: `${50 + radius * Math.sin(rad)}%`,
  };
}

export function Planning() {
  const items = planning.items;

  return (
    <section className="section-y bg-navy-800">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow tone="dark">{planning.eyebrow}</Eyebrow>
            <SectionHeading text={planning.headline} tone="dark" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {planning.body}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            {/* 데스크탑: 가운데 원 + 5개가 둘러싸는 배치 */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-[460px] md:block">
              <div
                className="absolute inset-[12%] rounded-full border border-dashed border-navy-700"
                aria-hidden="true"
              />
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 text-center">
                <span className="whitespace-pre-line text-base font-extrabold leading-tight text-navy-900">
                  {planning.centerLabel}
                </span>
              </div>

              <ul>
                {items.map((item, i) => (
                  <li
                    key={item.label}
                    style={orbit(i, items.length)}
                    className="absolute flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy-700 bg-navy-900">
                      <Icon name={item.icon} className="h-5 w-5 text-yellow-400" />
                    </span>
                    <span className="text-center text-sm font-bold text-white">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 모바일: 2열 칩 */}
            <ul className="grid grid-cols-2 gap-3 md:hidden">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-card border border-navy-700 bg-navy-900 px-4 py-3.5"
                >
                  <Icon name={item.icon} className="h-5 w-5 shrink-0 text-yellow-400" />
                  <span className="text-sm font-bold text-white">{item.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
