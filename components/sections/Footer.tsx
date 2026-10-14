import Image from "next/image";

import { footer, header } from "@/content/site";
import { Todoable } from "@/components/ui/Text";
import { isTodo } from "@/lib/utils";

export function Footer() {
  const rows = [footer.company, footer.ceo, footer.bizNo, footer.address, footer.tel, footer.email];

  return (
    <footer className="border-t border-navy-700 bg-navy-900 pb-28 pt-14 md:pb-16 md:pt-16">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src={header.logo.src}
              alt={header.logo.alt}
              width={header.logo.width}
              height={header.logo.height}
              className="h-6 w-auto"
            />
            <p className="mt-3 text-sm font-bold text-white/80">{header.logo.fallbackText}</p>
          </div>

          <nav aria-label="푸터 링크" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footer.links.map((link) =>
              isTodo(link.href) ? (
                <span key={link.label} className="text-sm text-white/50">
                  {link.label} <Todoable text={link.href} />
                </span>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  /* 내부 페이지(/privacy)는 같은 탭에서 연다 */
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm font-semibold text-white/80 transition-colors hover:text-yellow-400"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>

        <dl className="mt-10 grid gap-x-8 gap-y-2.5 border-t border-navy-700 pt-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row) => (
            <div key={row.term} className="flex gap-2">
              <dt className="shrink-0 font-semibold text-white/50">{row.term}</dt>
              <dd className="text-white/80">
                <Todoable text={row.value} />
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-xs text-white/40">
          © {new Date().getFullYear()} {header.logo.fallbackText}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
