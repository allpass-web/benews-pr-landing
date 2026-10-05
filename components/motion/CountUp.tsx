"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * 화면에 들어오면 0 → value 로 카운트업 (한 번만).
 * prefers-reduced-motion 이면 최종값을 바로 표시한다.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  durationMs = 1600,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / durationMs, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, durationMs]);

  const decimals = Number.isInteger(value) ? 0 : 1;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString("ko-KR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
