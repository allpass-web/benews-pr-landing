import type { Metadata, Viewport } from "next";

import { meta } from "@/content/site";
import { isTodo } from "@/lib/utils";
import "./globals.css";

/** {{TODO}} 가 그대로 남은 값은 메타태그에서 비워 둔다 (검색결과에 노출되지 않도록) */
const clean = (v: string) => (isTodo(v) ? "" : v);

const title = clean(meta.title) || `${meta.siteName} 언론홍보`;
const description = clean(meta.description);
const siteUrl = clean(meta.url);

export const metadata: Metadata = {
  // 배포 주소가 정해지면 content/site.ts 의 meta.url 만 채우면 된다.
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title,
  description,
  ...(clean(meta.keywords) ? { keywords: clean(meta.keywords) } : {}),
  openGraph: {
    type: "website",
    siteName: meta.siteName,
    locale: meta.locale,
    title,
    description,
    ...(siteUrl ? { url: siteUrl } : {}),
    images: [{ url: meta.ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [meta.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1B33",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 동적 서브셋 (로컬 호스팅) */}
        <link
          rel="stylesheet"
          href="/fonts/pretendard/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body>
        <a
          href="#importance"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-yellow-400 focus:px-4 focus:py-2 focus:font-bold focus:text-navy-900"
        >
          본문으로 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
