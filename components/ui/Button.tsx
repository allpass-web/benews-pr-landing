"use client";

import { cn, scrollToAnchor } from "@/lib/utils";

type Variant = "primary" | "outline-light" | "outline-dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-colors " +
  "disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // 노란 버튼 위 텍스트는 navy-900 (흰 글씨 금지)
  primary: "bg-yellow-400 text-navy-900 hover:bg-yellow-300",
  "outline-light": "border-2 border-white/70 text-white hover:border-yellow-400 hover:text-yellow-400",
  "outline-dark": "border-2 border-navy-700 text-navy-900 hover:border-yellow-400 hover:bg-yellow-400",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm md:text-base",
  lg: "px-7 py-3.5 text-base md:px-9 md:py-4 md:text-lg",
};

export function AnchorButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (!href.startsWith("#")) return;
        e.preventDefault();
        scrollToAnchor(href);
      }}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
