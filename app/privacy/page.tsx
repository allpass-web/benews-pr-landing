import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { meta, privacyPolicy } from "@/content/site";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | ${meta.siteName}`,
  description: privacyPolicy.intro,
  // 약관 페이지는 검색 결과에 띄울 이유가 없다
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="bg-paper">
      <div className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-navy-900"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {privacyPolicy.backLabel}
          </Link>

          <h1 className="mt-6 text-headline text-navy-900">{privacyPolicy.title}</h1>

          <p className="mt-5 text-sm leading-relaxed text-ink/75 md:text-base">
            {privacyPolicy.intro}
          </p>

          <div className="mt-12 space-y-10">
            {privacyPolicy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-extrabold text-navy-900 md:text-xl">
                  {section.title}
                </h2>
                <ul className="mt-3 space-y-2">
                  {section.body.map((line) => (
                    <li
                      key={line}
                      className="text-sm leading-relaxed text-ink/75 md:text-base"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-navy-900/10 pt-6 text-sm text-ink/60">
            본 방침은 {privacyPolicy.effectiveDate}부터 시행합니다.
          </p>
        </div>
      </div>
    </main>
  );
}
