import { why } from "@/content/site";
import { Emphasis, Eyebrow, SectionHeading } from "@/components/ui/Text";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export function Why() {
  return (
    <section id={why.id} className="section-y bg-paper-muted">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <Eyebrow>{why.eyebrow}</Eyebrow>
          <SectionHeading text={why.headline} />
        </Reveal>

        <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {why.cards.map((card, i) => (
            <Reveal as="li" key={card.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-card border border-navy-900/10 bg-paper p-7 transition-colors hover:border-yellow-400 md:p-8">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-card bg-navy-900">
                  <Icon name={card.icon} className="h-6 w-6 text-yellow-400" />
                </span>
                <h3 className="text-lg font-extrabold text-navy-900 md:text-xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75 md:text-base">
                  <Emphasis text={card.desc} tone="light" />
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
