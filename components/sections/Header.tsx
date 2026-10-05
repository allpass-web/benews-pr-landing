"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { header } from "@/content/site";
import { cn, scrollToAnchor } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 모바일 메뉴가 열려 있으면 배경 스크롤을 잠근다
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    // 메뉴 닫힘 레이아웃이 반영된 다음 스크롤
    requestAnimationFrame(() => scrollToAnchor(href));
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] h-[var(--header-h)] transition-colors duration-300",
        scrolled || open ? "bg-navy-900 shadow-lg shadow-navy-900/20" : "bg-transparent"
      )}
    >
      <div className="container-page flex h-full items-center justify-between gap-4">
        <a
          href="#importance"
          onClick={(e) => {
            e.preventDefault();
            go("#importance");
          }}
          className="flex shrink-0 items-center"
          aria-label={`${header.logo.alt} 홈`}
        >
          {logoOk ? (
            <Image
              src={header.logo.src}
              alt={header.logo.alt}
              width={header.logo.width}
              height={header.logo.height}
              priority
              onError={() => setLogoOk(false)}
              className="h-6 w-auto md:h-7"
            />
          ) : (
            <span className="text-base font-extrabold text-white md:text-lg">
              {header.logo.fallbackText}
            </span>
          )}
        </a>

        {/* 데스크탑 메뉴 */}
        <nav aria-label="주요 메뉴" className="hidden items-center gap-7 lg:flex">
          {header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                go(item.href);
              }}
              className="text-sm font-semibold text-white/90 transition-colors hover:text-yellow-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href={header.cta.href}
            onClick={(e) => {
              e.preventDefault();
              go(header.cta.href);
            }}
            className="rounded-pill bg-yellow-400 px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-yellow-300"
          >
            {header.cta.label}
          </a>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          className="-mr-1 rounded-pill p-2 text-white lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 패널 */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-navy-700 bg-navy-900 lg:hidden"
      >
        <nav aria-label="모바일 메뉴" className="container-page flex flex-col py-3">
          {header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                go(item.href);
              }}
              className="border-b border-navy-700/60 py-3.5 text-[15px] font-semibold text-white last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={header.cta.href}
            onClick={(e) => {
              e.preventDefault();
              go(header.cta.href);
            }}
            className="mt-3 rounded-pill bg-yellow-400 px-5 py-3 text-center text-[15px] font-bold text-navy-900"
          >
            {header.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
