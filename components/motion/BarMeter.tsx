"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * 스크롤 시 가로로 차오르는 성과 막대.
 * value 는 0~100 (%) 기준. 0 이면 TODO 상태로 보고 막대를 비워 둔다.
 */
export function BarMeter({
  value,
  label,
  delay = 0,
}: {
  value: number;
  label?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div
      className="h-2.5 w-full overflow-hidden rounded-pill bg-navy-900/10"
      role="img"
      aria-label={label ? `${label} ${pct}%` : `${pct}%`}
    >
      <motion.div
        className="h-full rounded-pill bg-yellow-400"
        initial={{ width: reduce ? `${pct}%` : 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={reduce ? { duration: 0 } : { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
