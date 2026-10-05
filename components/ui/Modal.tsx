"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

/**
 * 접근성 기본을 갖춘 모달.
 *  - ESC 로 닫기, 배경 클릭으로 닫기
 *  - 열릴 때 포커스를 가두고, 닫히면 호출 버튼으로 포커스를 되돌린다
 *  - 열려 있는 동안 배경 스크롤 잠금
 */
export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) return;

    openerRef.current = document.activeElement;
    closeRef.current?.focus();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        aria-label="닫기"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-navy-900/70"
      />
      <div
        ref={panelRef}
        className="relative max-h-[85vh] w-full overflow-y-auto rounded-t-card bg-paper p-6 shadow-2xl sm:max-w-lg sm:rounded-card"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 id={titleId} className="text-lg font-extrabold text-navy-900">
            {title}
          </h3>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="-mr-1 -mt-1 rounded-pill p-1.5 text-navy-700 transition-colors hover:bg-paper-muted"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="text-sm leading-relaxed text-ink">{children}</div>
      </div>
    </div>
  );
}
