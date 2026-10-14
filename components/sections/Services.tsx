"use client";

import { serviceSection, services } from "@/content/site";
import { Eyebrow, SectionHeading, Todoable } from "@/components/ui/Text";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { useProductSelection } from "@/lib/productSelection";
import { scrollToAnchor } from "@/lib/utils";

export function Services() {
  const { requestProduct } = useProductSelection();

  const pick = (id: string) => {
    requestProduct(id);
    scrollToAnchor("#contact");
  };

  return (
    <section id={serviceSection.id} className="section-y bg-paper-muted">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <Eyebrow>{serviceSection.eyebrow}</Eyebrow>
          <SectionHeading text={serviceSection.headline} />
          <p className="mt-5 text-sm text-ink/70 md:text-base">{serviceSection.sub}</p>
        </Reveal>

        {/* 데스크탑 4열 × 2줄 / 태블릿 3열 / 모바일 2열 — 개수가 바뀌어도 깨지지 않는다 */}
        <ul className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={Math.min(i, 7) * 0.06}>
              <button
                type="button"
                onClick={() => pick(service.id)}
                aria-label={`${service.name} 상담 문의하기`}
                className="flex h-full w-full flex-col rounded-card border border-navy-900/10 bg-paper p-5 text-left transition-colors hover:border-yellow-400 md:p-7"
              >
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-card bg-navy-900 md:h-12 md:w-12">
                  <Icon name={service.icon} className="h-5 w-5 text-yellow-400 md:h-6 md:w-6" />
                </span>
                <span className="block text-[15px] font-extrabold text-navy-900 md:text-lg">
                  <Todoable text={service.name} />
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-ink/70 md:text-sm">
                  <Todoable text={service.desc} />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
