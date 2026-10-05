# 브랜드경제신문 언론홍보 랜딩페이지

기업 대상 언론홍보(기사 송출) 서비스 원페이지 랜딩페이지입니다.
제작 요구사항은 [PROMPT.md](PROMPT.md), 남은 작업은 [TODO-CHECKLIST.md](TODO-CHECKLIST.md)를 참고하세요.

## 실행

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

```bash
npm run build && npm run start   # 운영 빌드 확인
```

## 기술 스택

| 구분 | 사용 |
|---|---|
| 프레임워크 | Next.js 15 (App Router) · React 19 · TypeScript |
| 스타일 | Tailwind CSS 3.4 (`tailwind.config.ts` 에 디자인 토큰 정의) |
| 애니메이션 | Framer Motion |
| 아이콘 | lucide-react |
| 폼 | react-hook-form + zod |
| 폰트 | Pretendard (동적 서브셋, `public/fonts/pretendard` 로컬 호스팅) |

외부 유료 API는 사용하지 않습니다.

## 폴더 구조

```
content/site.ts          ★ 모든 카피·수치·링크·상품·기사 데이터 (여기만 고치면 됩니다)
lib/
  schema.ts              문의폼 zod 스키마 (클라이언트·서버 공용)
  utils.ts               클래스 병합, 전화번호 포맷, 앵커 스크롤
  useUtm.ts              URL utm 파라미터 수집
  productSelection.tsx   Our Service 카드 ↔ 문의폼 체크박스 연결
app/
  layout.tsx             폰트·SEO 메타 (content/site.ts 에서 읽음)
  page.tsx               섹션 조립
  api/contact/route.ts   문의 접수 (구글시트 웹훅 스텁)
components/
  sections/              섹션별 컴포넌트 (PROMPT 3-0 ~ 3-12)
  ui/                    Button · Modal · Icon · Text
  motion/                Reveal · CountUp · BarMeter
public/
  images/                플레이스홀더 이미지 (같은 파일명으로 덮어쓰면 교체)
  fonts/pretendard/      Pretendard 서브셋 (SIL OFL)
```

## 디자인 토큰

`tailwind.config.ts` 에 정의된 색만 사용합니다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `navy-900` | `#0B1B33` | 메인 배경 |
| `navy-800` | `#12284A` | 카드 배경, 보조 섹션 |
| `navy-700` | `#1E3A66` | 보더, 호버 |
| `yellow-400` | `#FFC72C` | 포인트 컬러, CTA |
| `yellow-300` | `#FFD95C` | CTA 호버 |
| `ink` | `#111827` | 밝은 배경 본문 |
| `paper` / `paper-muted` | `#FFFFFF` / `#F5F7FA` | 밝은 섹션 배경 |

**강조 표기 규칙:** 카피 안에서 `**강조**` 로 감싼 부분이 포인트 컬러로 표시됩니다.
네이비 배경에서는 옐로우 글자로, 흰 배경에서는 네이비 글자 + 옐로우 하이라이트로 처리합니다
(흰 배경에 옐로우 글자는 대비가 부족해 읽히지 않기 때문입니다).

## 문의 데이터 전송

`app/api/contact/route.ts` 가 받은 값을 서버에서 다시 검증한 뒤,
`GOOGLE_SHEET_WEBHOOK_URL` 환경변수가 있으면 그 주소로 POST 합니다.

환경변수가 비어 있으면 **전송하지 않고 서버 콘솔에 로그만 남긴 뒤 성공을 반환**합니다.
구글시트 연동은 `.env.local` 에 URL 만 채우면 바로 동작합니다. (`.env.example` 참고)

## 접근성 / 성능

- 모든 폼 요소에 `label` 연결, 에러는 `role="alert"` 로 안내
- 모달: 포커스 트랩 · ESC 닫기 · 포커스 복귀 · 배경 스크롤 잠금
- 기사 유형 탭: 좌우 방향키 이동 지원
- `prefers-reduced-motion` 을 존중해 모든 애니메이션을 끕니다
- 이미지는 `next/image`, 폰트는 동적 서브셋 + `font-display: swap`
