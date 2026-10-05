import Image from "next/image";

import { feedback } from "@/content/site";
import { Eyebrow, SectionHeading } from "@/components/ui/Text";
import { Reveal } from "@/components/motion/Reveal";

export function Feedback() {
  return (
    <section className="section-y bg-paper">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{feedback.eyebrow}</Eyebrow>
            <SectionHeading text={feedback.headline} className="text-display" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
              {feedback.body}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-card bg-paper-muted">
              <Image
                src={feedback.image.src}
                alt={feedback.image.alt}
                width={feedback.image.width}
                height={feedback.image.height}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
