"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { hero } from "@/content/site";
import { AnchorButton } from "@/components/ui/Button";
import { Emphasis } from "@/components/ui/Text";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (hero.rotating.length <= 1) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % hero.rotating.length),
      hero.rotateIntervalMs
    );
    return () => clearInterval(t);
  }, []);

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
          <span className="block">{hero.line1}</span>

          {/* 대괄호 문구 순환 */}
          <span className="relative mt-2 block min-h-[1.3em] md:mt-3">
            <span className="sr-only">
              {hero.rotating.map((t) => `[ ${t} ]`).join(", ")}
            </span>
            <span aria-hidden="true" className="block">
              {reduce ? (
                <span className="text-yellow-400">[ {hero.rotating[idx]} ]</span>
              ) : (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={idx}
                    className="block text-yellow-400"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    [ {hero.rotating[idx]} ]
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          </span>

          <span className="mt-2 block md:mt-3">{hero.line3}</span>
        </h1>

        {/* 스크롤하면 순서대로 등장 */}
        <div className="mt-14 space-y-3 md:mt-20 md:space-y-4">
          {hero.reveal.map((line, i) => (
            <Reveal key={line} delay={i * 0.15}>
              <p className="text-xl font-extrabold text-white md:text-3xl">
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
