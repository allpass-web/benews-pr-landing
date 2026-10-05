# 남은 작업 체크리스트

랜딩페이지 구조·디자인·동작은 모두 완성되었습니다.
아래 항목만 채우면 바로 공개할 수 있습니다.

- **텍스트·수치·링크** → 전부 [`content/site.ts`](content/site.ts) 한 파일에 있습니다. (총 58곳)
- **이미지** → `public/images/` 아래에 **같은 파일명으로 덮어쓰면** 교체됩니다.
- 화면에서는 아직 안 채운 값이 **노란 점선 박스**로 표시되므로 눈으로도 바로 찾을 수 있습니다.
- 다 채운 뒤에는 `app/globals.css` 의 `[data-todo="true"]` 블록을 지우면 점선 표시가 사라집니다.

> ⚠️ 근거 없는 수치·가짜 후기·가짜 보도는 넣지 않았습니다. 아래 수치 항목은 **실제 집계값**으로만 채워 주세요.

---

## 1. SEO / 메타 — `content/site.ts` (L51~L56)

- [ ] `meta.title` — SEO 타이틀
- [ ] `meta.description` — SEO 설명문 (80~120자)
- [ ] `meta.keywords` — 검색 키워드 (쉼표 구분)
- [ ] `meta.url` — 배포 주소 (예: `https://pr.benews.co.kr`) ※ 비어 있으면 OG 이미지가 절대경로로 안 잡힙니다
- [ ] `public/images/og.png` — 공유용 OG 이미지 (1200 × 630)

## 2. 로고 — `public/images/`

- [ ] `logo.svg` — 실제 로고로 교체 (현재는 임시 텍스트 로고)
      ※ 파일이 없거나 깨지면 "브랜드경제신문" 텍스트 로고로 자동 대체됩니다

## 3. 결과 리포트 (3-2) — `content/site.ts` (L128~L133)

- [ ] `report.bars[0~3].label` — 지표명 4개
- [ ] `report.bars[0~3].display` — 화면에 표시할 값 (예: `92%`)
- [ ] `report.bars[0~3].value` — 막대 길이 (0~100 숫자) ※ `0`이면 막대가 차오르지 않습니다
- [ ] `report.legend` — 지표 설명 (집계 기간 · 기준 · 출처)
- [ ] `public/images/report-mockup.png` — 리포트 목업 이미지 (720 × 540)

## 4. 왜 브랜드경제신문인가요? (3-3) — `content/site.ts` (L153)

- [ ] `why.cards[1].desc` 안의 **송출 포털 · 제휴 언론사 수**

## 5. 신뢰 지표 (3-4) — `content/site.ts` (L178~L183)

- [ ] `stats.items[0~3].value` — 카운트업 목표 숫자 (숫자만)
- [ ] `stats.items[0~3].prefix` / `suffix` — 단위 (예: `건`, `%`, `시간`)
- [ ] `stats.items[0~3].label` — 숫자 아래 설명
- [ ] `stats.items[0~3].display` — 숫자로 표현하기 어려울 때 쓸 대체 문구
- [ ] `stats.note` — 수치 기준 일자

> `value`가 `0`이면 카운트업 대신 `display` 문구가 표시됩니다. 실제 숫자를 넣으면 자동으로 카운트업이 켜집니다.

## 6. 빠른 피드백 (3-5) — `public/images/`

- [ ] `feedback.png` — 일러스트 / 이미지 (640 × 480)

## 7. 기사 작성 부담 제로 (3-7) — `content/site.ts` (L229~L230)

- [ ] `easyWriting.badges[0].label` — 송출 소요시간 문구
- [ ] `easyWriting.badges[1].label` — 최저가 문구

## 8. Our Service (3-8) — `content/site.ts` (L251~L258)

- [ ] `services[0~7].name` — 상품명 8개
- [ ] `services[0~7].desc` — 한 줄 설명 8개
- [ ] (선택) `services[*].icon` — 아이콘 변경 시 `components/ui/Icon.tsx` 의 `iconMap` 키 중에서 선택
- [ ] (선택) 상품 개수 조정 — 배열에서 추가·삭제해도 레이아웃은 깨지지 않습니다

> ⚠️ `services[*].id` 는 **문의폼 체크박스 값**으로 저장됩니다. 운영 시작 후에는 바꾸지 마세요 (이전 수집 데이터와 어긋납니다).

## 9. 기사 유형 및 예시 (3-9) — `content/site.ts` (L280~L317)

유형 6개 각각:

- [ ] `articles[*].title` — 예시 기사 제목
- [ ] `articles[*].lead` — 리드문 2~3줄
- [ ] `articles[*].url` — **benews.co.kr 실제 기사 링크** (채우기 전에는 버튼 대신 TODO 표시가 뜹니다)
- [ ] `public/images/articles/` — 썸네일 6장 (800 × 500 권장)
      `press.jpg` · `feature.jpg` · `interview.jpg` · `series.jpg` · `column.jpg` · `roundup.jpg`

## 10. 개인정보 수집·이용 동의 (3-10) — `content/site.ts` (L363~L366)

- [ ] `contact.privacy.items[*].desc` — 수집 항목 / 수집 목적 / 보유 기간 / 동의 거부 권리
      ※ 법무 검토 후 확정 권장

## 11. 푸터 (3-11) — `content/site.ts` (L383~L391)

- [ ] `footer.company.value` — 상호
- [ ] `footer.ceo.value` — 대표자명
- [ ] `footer.bizNo.value` — 사업자등록번호
- [ ] `footer.address.value` — 주소
- [ ] `footer.tel.value` — 대표번호
- [ ] `footer.email.value` — 이메일
- [ ] `footer.links[1].href` — 개인정보처리방침 URL

## 12. 고정 요소 (3-12) — `content/site.ts` (L403~L407)

- [ ] `floating.stickyBar.phone` — 대표번호 (모바일에서 `tel:` 링크로 연결됩니다)
- [ ] `floating.kakao.url` — 카카오톡 채널 URL (채우기 전에는 버튼이 비활성 상태로 표시됩니다)

## 13. 문의 데이터 수집 (구글시트 연동)

지금은 **전송하지 않고 서버 콘솔에 로그만 남기는 스텁** 상태입니다. 추가 비용이나 API 키가 필요 없습니다.

- [ ] 구글 스프레드시트 + Apps Script 웹앱 생성 (무료)
- [ ] `.env.local` 파일을 만들고 `GOOGLE_SHEET_WEBHOOK_URL=` 에 웹앱 URL 입력
      (`.env.example` 참고 — `.env.local` 은 git 에 올라가지 않습니다)
- [ ] Vercel 배포 시 같은 환경변수를 프로젝트 설정에 등록

전송되는 필드:
`timestamp`, `company`, `name`, `phone`, `email`, `products[]`, `message`, `source`, `agreed`,
`utm.utm_source`, `utm.utm_medium`, `utm.utm_campaign`

> utm 파라미터는 방문 URL(`?utm_source=...&utm_medium=...&utm_campaign=...`)에서 자동으로 수집되고,
> 페이지 안에서 이동해도 세션 동안 유지됩니다.

---

## 확인한 사항

- ✅ 360 / 768 / 1280px 모두 가로 스크롤 없음
- ✅ 빌드 통과, 브라우저 콘솔 에러 없음
- ✅ 문의폼 검증 → 제출 → 완료 화면 → API 스텁 로그까지 동작 확인
- ✅ Our Service 카드 클릭 → 문의폼 스크롤 + 해당 상품 자동 체크 확인
- ✅ 개인정보 모달 열기 / ESC 닫기 / 포커스 복귀 확인
- ✅ `prefers-reduced-motion` 설정 시 모든 애니메이션 비활성화
