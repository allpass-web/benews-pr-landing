import { NextResponse } from "next/server";

import { contactSchema, type ContactRecord } from "@/lib/schema";

/**
 * 문의폼 접수 엔드포인트 (스텁)
 *
 *  1) 받은 데이터를 lib/schema.ts 의 zod 스키마로 다시 검증한다.
 *  2) GOOGLE_SHEET_WEBHOOK_URL 이 설정되어 있으면 그 주소로 POST 한다.
 *  3) 설정되지 않았으면 서버 콘솔에 로그만 남기고 성공을 반환한다.
 *     → 구글시트 연동은 나중에 .env 에 URL 만 채우면 바로 동작한다.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "요청 본문을 읽을 수 없습니다." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "입력값을 확인해 주세요.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const record: ContactRecord = {
    ...parsed.data,
    timestamp: new Date().toISOString(),
  };

  const webhook = process.env.GOOGLE_SHEET_WEBHOOK_URL?.trim();

  if (!webhook) {
    // 환경변수 미설정 — 전송하지 않고 로그만 남긴다.
    console.info("[contact] GOOGLE_SHEET_WEBHOOK_URL 미설정 — 접수 내용만 기록합니다.", record);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      // 웹훅이 응답하지 않을 때 요청이 매달려 있지 않도록 제한을 둔다
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error("[contact] 웹훅 응답 오류", res.status, await res.text().catch(() => ""));
      return NextResponse.json(
        { ok: false, error: "전송에 실패했습니다." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] 웹훅 전송 실패", err);
    return NextResponse.json({ ok: false, error: "전송에 실패했습니다." }, { status: 502 });
  }
}
