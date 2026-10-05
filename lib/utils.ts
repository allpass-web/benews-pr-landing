/** 조건부 클래스 병합 (의존성 없는 경량 버전) */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** `{{TODO: ...}}` 플레이스홀더인지 판별 */
export function isTodo(value: unknown): boolean {
  return typeof value === "string" && value.includes("{{TODO");
}

/** 전화번호에서 tel: 링크용 숫자만 추출 */
export function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : "#contact";
}

/** 연락처 입력 자동 하이픈 (국내 번호 기준, 그 외는 입력값 유지) */
export function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.startsWith("02")) {
    if (d.length <= 5) return `${d.slice(0, 2)}-${d.slice(2)}`;
    if (d.length <= 9) return `${d.slice(0, 2)}-${d.slice(2, 5)}-${d.slice(5)}`;
    return `${d.slice(0, 2)}-${d.slice(2, 6)}-${d.slice(6, 10)}`;
  }
  if (d.length <= 7) return `${d.slice(0, 3)}-${d.slice(3)}`;
  if (d.length <= 10) return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7, 11)}`;
}

/**
 * 고정 헤더 높이를 보정해 부드럽게 스크롤한다.
 * prefers-reduced-motion 이면 즉시 이동한다.
 */
export function scrollToAnchor(href: string) {
  if (typeof window === "undefined") return;
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (!el) return;

  const headerH =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
      10
    ) || 64;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;

  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}
