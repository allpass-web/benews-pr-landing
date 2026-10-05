import { cn, isTodo } from "@/lib/utils";

/**
 * `**강조**` 구문을 포인트 컬러로 바꿔 렌더링한다.
 *
 *  - tone="dark"  : 네이비 배경 → 옐로우 텍스트
 *  - tone="light" : 흰/밝은 배경 → 네이비 텍스트 + 옐로우 하이라이트
 *    (흰 배경에 옐로우 글자는 대비가 부족해 읽을 수 없으므로,
 *     옐로우를 밑줄 하이라이트로 돌려 포인트 컬러를 유지하면서 대비를 확보한다.)
 */
export function Emphasis({
  text,
  tone = "light",
  className,
}: {
  text: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const parts = text.split(/\*\*(.+?)\*\*/g);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong
            key={i}
            className={cn(
              "font-extrabold",
              tone === "dark"
                ? "text-yellow-400"
                : "relative isolate inline-block text-navy-900 before:absolute before:inset-x-0 before:bottom-[0.06em] before:-z-10 before:h-[0.36em] before:bg-yellow-400 before:content-['']"
            )}
          >
            {part}
          </strong>
        ) : (
          <Todoable key={i} text={part} />
        )
      )}
    </span>
  );
}

/**
 * 문장 안에 섞인 `{{TODO: ...}}` 부분만 점선 박스로 표시한다.
 * (문장 전체가 TODO 여도, 문장 일부만 TODO 여도 동일하게 동작)
 */
export function Todoable({ text, className }: { text: string; className?: string }) {
  if (!text) return null;
  if (!isTodo(text)) return <span className={className}>{text}</span>;

  const parts = text.split(/(\{\{TODO[^}]*\}\})/g);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        isTodo(part) ? (
          <span key={i} data-todo="true">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}

/** 섹션 위에 올리는 작은 라벨 */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 text-sm font-bold tracking-wide md:text-base",
        tone === "dark" ? "text-yellow-400" : "text-navy-700",
        className
      )}
    >
      {children}
    </p>
  );
}

/** 섹션 헤드라인 (h2) */
export function SectionHeading({
  text,
  tone = "light",
  as: As = "h2",
  className,
}: {
  text: string;
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <As
      className={cn(
        "text-headline",
        tone === "dark" ? "text-white" : "text-navy-900",
        className
      )}
    >
      <Emphasis text={text} tone={tone} />
    </As>
  );
}
