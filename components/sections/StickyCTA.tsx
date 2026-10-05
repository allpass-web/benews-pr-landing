"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { contact, floating } from "@/content/site";
import { cn, isTodo, scrollToAnchor, telHref } from "@/lib/utils";
import { Todoable } from "@/components/ui/Text";

/**
 * 하단 고정 CTA 바.
 * 문의폼 섹션이 화면에 보이면 숨긴다.
 */
export function StickyCTA() {
  const [hidden, setHidden] = useState(false);
  const { phone, text, ctaLabel } = floating.stickyBar;
  const phoneReady = !isTodo(phone);

  useEffect(() => {
    const target = document.getElementById(contact.id);
    if (!target) return;

    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -20% 0px" }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      inert={hidden}
      className={cn(
        "fixed inset-x-0 bottom-0 z-[70] bg-yellow-400 transition-transform duration-300 md:transition-transform",
        hidden ? "translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container-page flex items-center justify-between gap-2 py-2.5 sm:gap-3 md:py-3.5">
        <p className="min-w-0 truncate text-[13px] font-extrabold leading-tight text-navy-900 sm:text-sm md:text-base">
          {text}
        </p>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {phoneReady ? (
            <a
              href={telHref(phone)}
              className="inline-flex items-center gap-1.5 rounded-pill p-1.5 text-sm font-extrabold text-navy-900 sm:p-0 md:text-base"
            >
              <Phone className="h-5 w-5 sm:h-4 sm:w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{phone}</span>
              <span className="sr-only sm:hidden">전화 상담 {phone}</span>
            </a>
          ) : (
            // 대표번호가 아직 비어 있을 때 — 모바일에서는 아이콘만 보여 바가 넘치지 않게 한다
            <span className="inline-flex items-center gap-1.5 p-1.5 text-xs font-bold text-navy-900 sm:p-0">
              <Phone className="h-5 w-5 sm:h-4 sm:w-4" aria-hidden="true" />
              <span className="hidden sm:inline">
                <Todoable text={phone} />
              </span>
            </span>
          )}

          <button
            type="button"
            onClick={() => scrollToAnchor(`#${contact.id}`)}
            className="rounded-pill bg-navy-900 px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-navy-800 md:px-5 md:text-sm"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
