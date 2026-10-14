"use client";

import { MessageCircle } from "lucide-react";

import { floating } from "@/content/site";
import { isTodo } from "@/lib/utils";

/**
 * 우측 하단 플로팅 카카오톡 채널 상담 버튼.
 * 말풍선 툴팁은 호버/포커스 시 노출된다.
 */
export function KakaoFloat() {
  const { url, label, tooltip } = floating.kakao;

  // URL 이 비어 있으면(채널 미개설) 버튼을 아예 띄우지 않는다.
  if (!url) return null;

  const ready = !isTodo(url);

  return (
    <div className="group fixed bottom-20 right-4 z-[75] flex items-center gap-2 md:bottom-24 md:right-6">
      {/* 말풍선 툴팁 */}
      <span
        role="tooltip"
        className="pointer-events-none hidden rounded-pill bg-navy-900 px-3.5 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 sm:block md:text-sm"
      >
        {tooltip}
      </span>

      {ready ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (새 창에서 열림)`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 shadow-xl shadow-navy-900/25 transition-colors hover:bg-yellow-300"
        >
          <MessageCircle className="h-7 w-7 text-navy-900" strokeWidth={2} aria-hidden="true" />
        </a>
      ) : (
        <span
          title={`${label} — 카카오 채널 URL이 설정되지 않았습니다 (content/site.ts)`}
          aria-hidden="true"
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-yellow-400 bg-yellow-400/20 shadow-xl shadow-navy-900/25"
        >
          <MessageCircle className="h-7 w-7 text-yellow-400" strokeWidth={2} />
        </span>
      )}
    </div>
  );
}
