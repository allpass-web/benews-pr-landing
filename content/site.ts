/**
 * ============================================================================
 *  미디어허브 언론홍보 랜딩페이지 — 콘텐츠 단일 소스 (Single Source of Truth)
 * ============================================================================
 *
 *  모든 카피 · 수치 · 링크 · 상품 목록 · 이미지 경로를 이 파일에서만 관리합니다.
 *  컴포넌트에는 어떤 문구도 하드코딩하지 않습니다.
 *
 *  ▸ `{{TODO: ...}}` 로 남은 값은 아직 확정되지 않은 항목입니다.
 *    화면에서는 노란 점선 박스로 표시되므로 빠진 곳을 바로 찾을 수 있습니다.
 *    전체 목록은 프로젝트 루트의 TODO-CHECKLIST.md 를 참고하세요.
 *
 *  ▸ 강조 표기: 문장 안에서 **별표 두 개** 로 감싼 부분이 포인트 컬러로 강조됩니다.
 *    예) "보도로 끝나지 않습니다. **결과까지 리포트로**"
 *
 *  ▸ 아이콘: 문자열 키로 지정합니다. 사용 가능한 키 목록은
 *    components/ui/Icon.tsx 의 iconMap 을 참고하세요.
 * ============================================================================
 */

export type IconKey =
  | "newspaper"
  | "share"
  | "workflow"
  | "clock"
  | "coins"
  | "fileText"
  | "search"
  | "target"
  | "users"
  | "trendingUp"
  | "megaphone"
  | "penTool"
  | "sparkles"
  | "barChart"
  | "mic"
  | "layers"
  | "quote"
  | "listChecks"
  | "send"
  | "phone"
  | "mail"
  | "checkCircle";

/* -------------------------------------------------------------------------- */
/* 0. 사이트 메타 / SEO                                                        */
/* -------------------------------------------------------------------------- */

export const meta = {
  siteName: "미디어허브",
  title: "미디어허브 | 언론사가 직접 쓰는 기사, 250여 개 언론사 동시 송출",
  description:
    "자체 언론사가 직접 기사를 기획·작성·발행합니다. 브랜드경제신문·대한민국소비자신문을 운영하는 미디어허브가 포털 노출부터 결과 리포트까지 한 번에 책임집니다.",
  keywords: "언론홍보, 보도자료 배포, 기사 송출, 미디어허브, 브랜드경제신문, 기업홍보, 포털 뉴스 노출, 인터뷰 기사, 기획기사",
  /** 배포 후 실제 도메인으로 교체 (OG 태그 절대경로 생성에 사용) */
  url: "https://benews-pr-landing.vercel.app",
  ogImage: "/images/og.png",
  locale: "ko_KR",
} as const;

/* -------------------------------------------------------------------------- */
/* 0-1. 헤더 / 네비게이션                                                      */
/* -------------------------------------------------------------------------- */

export const header = {
  logo: {
    src: "/images/logo.svg",
    /** 로고 이미지가 없거나 로딩에 실패하면 이 텍스트 로고가 대신 표시됩니다. */
    fallbackText: "미디어허브",
    alt: "미디어허브",
    width: 168,
    height: 28,
  },
  nav: [
    { label: "홍보의 중요성", href: "#importance" },
    { label: "왜 미디어허브인가요?", href: "#why" },
    { label: "기사 유형 및 예시", href: "#articles" },
    { label: "상담 문의하기", href: "#contact" },
  ],
  /** 데스크탑 헤더 우측 CTA */
  cta: { label: "무료 상담 신청하기", href: "#contact" },
} as const;

/* -------------------------------------------------------------------------- */
/* 3-1. 히어로 — 홍보의 중요성                                                 */
/* -------------------------------------------------------------------------- */

export const hero = {
  id: "importance",
  eyebrow: "홍보의 중요성",
  /** H1 — 장식용 검색창을 사이에 두고 위/아래 두 줄로 나뉜다. */
  lineTop: "우리 브랜드를",
  lineBottom: "검색하면, 뭐가 나오나요?",
  /** 검색창은 장식이라 스크린리더에는 이 문장 하나만 읽힌다. */
  srHeadline: "우리 브랜드를 검색하면, 뭐가 나오나요?",
  /** 서브 문구 2줄. **강조** 로 감싼 부분이 포인트 컬러로 표시된다. */
  sub: ["언론사가 직접 쓴 기사를", "**250여 개 제휴 언론사**에 동시 송출합니다."],
  cta: { label: "무료 상담 신청하기", href: "#contact" },
  scrollHint: "아래로 스크롤",
} as const;

/* -------------------------------------------------------------------------- */
/* 3-2. 결과 리포트                                                            */
/* -------------------------------------------------------------------------- */

export const report = {
  id: "report",
  headline: "보도로 끝나지 않습니다. **결과까지 리포트로**",
  sub: "기사 송출 후 노출 현황과 반응을 한눈에 볼 수 있도록 결과 리포트를 드립니다.",
  mockup: {
    src: "/images/report-mockup.png",
    alt: "미디어허브 언론홍보 결과 리포트 예시 화면",
    width: 720,
    height: 540,
  },
  /**
   * 성과 막대그래프 카드 4개.
   * value 는 0~100 사이 숫자(막대 길이, %)로 넣고, display 에는 화면에 쓸 문구를 넣습니다.
   * 근거 있는 실제 수치로만 채워 주세요. (임의 수치 금지)
   */
  bars: [
    { label: "{{TODO: 지표명 1}}", value: 0, display: "{{TODO: %}}" },
    { label: "{{TODO: 지표명 2}}", value: 0, display: "{{TODO: %}}" },
    { label: "{{TODO: 지표명 3}}", value: 0, display: "{{TODO: %}}" },
    { label: "{{TODO: 지표명 4}}", value: 0, display: "{{TODO: %}}" },
  ],
  legend: "{{TODO: 지표 설명 (집계 기간·기준·출처를 함께 적어 주세요)}}",
} as const;

/* -------------------------------------------------------------------------- */
/* 3-3. 서비스 소개 — 왜 미디어허브인가요?                                      */
/* -------------------------------------------------------------------------- */

export const why = {
  id: "why",
  eyebrow: "Why MEDIAHUB",
  headline: "왜 미디어허브인가요?",
  cards: [
    {
      icon: "newspaper" as IconKey,
      title: "자체 언론사 직접 운영",
      desc: "**브랜드경제신문·대한민국소비자신문**을 직접 운영합니다. 대행사를 거치지 않고 언론사가 직접 기사를 작성하고 발행합니다.",
    },
    {
      icon: "share" as IconKey,
      title: "포털 노출 & 제휴 매체 송출",
      desc: "**250여 개 제휴 언론사**로 브랜드 소식을 넓게 알립니다.",
    },
    {
      icon: "workflow" as IconKey,
      title: "기획부터 발행까지 원스톱",
      desc: "기업 분석, 기사 기획, 작성, 송출, 결과 리포트까지 한 번에 진행합니다.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* 3-4. 신뢰 지표                                                              */
/* -------------------------------------------------------------------------- */

export const stats = {
  eyebrow: "WHY CHOOSE US",
  headline: "숫자로 증명하는 **언론홍보**",
  sub: [
    "빠른 기사 송출부터 완료 URL 제공까지,",
    "브랜드 신뢰를 높이는 체계적인 언론홍보 서비스를 제공합니다.",
  ],
  /**
   * 숫자 카드 4개.
   *  - value  : 카운트업 목표 숫자 (숫자만). 0 이면 카운트업 없이 display 를 그대로 쓴다.
   *  - prefix / suffix : 숫자 앞뒤에 붙는 단위 (예: suffix "건", "%", "시간")
   *  - display : 숫자로 표현할 수 없는 값 (예: "1:1"). value 가 0 일 때만 쓰인다.
   *  - label  : 숫자 아래 설명
   * ※ 집계 수치를 넣을 때는 확인된 실제 값만 입력하고 note 에 기준일자를 적는다.
   */
  items: [
    { value: 24, prefix: "", suffix: "시간", label: "원고 확정 후 당일 기사 송출", display: "" },
    { value: 100, prefix: "", suffix: "%", label: "송출 완료 기사 URL 제공", display: "" },
    { value: 365, prefix: "", suffix: "일", label: "영업·마케팅 자료로 지속 활용", display: "" },
    { value: 0, prefix: "", suffix: "", label: "브랜드 맞춤 보도자료 송출", display: "1:1" },
  ],
  /** 집계 수치를 넣었을 때의 기준일자. 비워 두면 표시되지 않는다. */
  note: "",
} as const;

/* -------------------------------------------------------------------------- */
/* 3-5. 빠른 피드백                                                            */
/* -------------------------------------------------------------------------- */

export const feedback = {
  eyebrow: "홍보 대행의 가장 큰 불만",
  headline: "**'답이 늦다'**",
  body: "미디어허브는 전담 담당자가 바로 응답합니다. 혼자 고민하지 말고, 기사 전문가와 함께하세요.",
  image: {
    src: "/images/feedback.png",
    alt: "전담 담당자가 빠르게 응답하는 모습을 나타낸 일러스트",
    width: 640,
    height: 480,
  },
} as const;

/* -------------------------------------------------------------------------- */
/* 3-6. 단순 송출이 아닌 기획                                                   */
/* -------------------------------------------------------------------------- */

export const planning = {
  eyebrow: "단순 송출? NO!",
  headline: "브랜드 분석부터 기획까지, **우리 회사 홍보팀처럼**",
  body: "시장과 경쟁사를 살피고 우리 회사만의 강점과 키워드를 찾아 맞는 기사 방향을 제안합니다.",
  centerLabel: "브랜드\n기획",
  items: [
    { label: "자사 강점", icon: "sparkles" as IconKey },
    { label: "경쟁사 분석", icon: "search" as IconKey },
    { label: "트렌드 분석", icon: "trendingUp" as IconKey },
    { label: "핵심 타겟", icon: "target" as IconKey },
    { label: "키워드 분석", icon: "listChecks" as IconKey },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* 3-7. 기사 작성 부담 제로                                                     */
/* -------------------------------------------------------------------------- */

export const easyWriting = {
  eyebrow: "한 건이라도, 전문가에게",
  headline: "**기사 작성, 어렵지 않습니다**",
  body: "키워드, 사진, 간단한 회사 소개만 보내 주세요. 전문 기자가 업종에 맞춰 기사 초안을 작성해 드립니다.",
  badges: [
    { icon: "clock" as IconKey, label: "자료 전달 후 당일 송출" },
    { icon: "coins" as IconKey, label: "프리랜서 기자가 되면 송출비용 0원" },
  ],
  steps: [
    { no: "01", icon: "send" as IconKey, title: "자료 전달", desc: "키워드 · 사진 · 회사 소개만 보내 주세요." },
    { no: "02", icon: "penTool" as IconKey, title: "기사 작성 · 검수", desc: "전문 기자가 초안을 쓰고 함께 확인합니다." },
    { no: "03", icon: "barChart" as IconKey, title: "송출 · 리포트", desc: "발행 후 노출 결과를 리포트로 드립니다." },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* 3-8. Our Service                                                           */
/* -------------------------------------------------------------------------- */

/**
 * 상품 카드.
 *  - id   : 문의폼의 "관심 상품" 체크박스 값으로 쓰입니다. 영문 소문자+하이픈 권장.
 *           ※ id 는 한 번 정하면 바꾸지 마세요 (수집된 데이터와 값이 어긋납니다).
 *  - name : 카드 제목 겸 체크박스 라벨
 * 배열 개수가 바뀌어도 레이아웃은 깨지지 않습니다 (데스크탑 4열 / 모바일 2열).
 */
export const services = [
  {
    id: "press-release",
    icon: "megaphone" as IconKey,
    name: "보도자료 배포",
    desc: "언론사가 직접 기사를 작성해 포털과 제휴 매체에 동시 송출합니다.",
  },
  {
    id: "press-reporter",
    icon: "users" as IconKey,
    name: "프리랜서 기자모집",
    desc: "브랜드경제신문 기자로 등록하고 기자증(PRESS)을 발급받습니다.",
  },
  {
    id: "media-launch",
    icon: "newspaper" as IconKey,
    name: "인터넷신문사 창간",
    desc: "언론사 홈페이지 구축부터 기사 작성·송출·기자단 관리까지 한 번에 제공합니다.",
  },
  {
    id: "brand-awards",
    icon: "sparkles" as IconKey,
    name: "브랜드어워즈",
    desc: "KBS N 브랜드 어워즈 등 브랜드대상 참여부터 수상 홍보까지 지원합니다.",
  },
] as const;

export const serviceSection = {
  id: "service",
  eyebrow: "상품 안내",
  headline: "Our Service",
  sub: "카드를 누르면 아래 문의폼에 해당 상품이 자동으로 체크됩니다.",
} as const;

/* -------------------------------------------------------------------------- */
/* 3-9. 기사 유형 및 예시                                                       */
/* -------------------------------------------------------------------------- */

/**
 * 탭 6개 + 탭마다 예시 기사 1개.
 * url 은 반드시 benews.co.kr 에 실제로 게재된 기사 링크로 채워 주세요.
 * 썸네일은 public/images/articles/ 아래 같은 파일명으로 덮어쓰면 교체됩니다.
 */
export const articles = [
  {
    type: "보도자료",
    title: "{{TODO: 보도자료 예시 기사 제목}}",
    lead: "{{TODO: 리드문 2~3줄}}",
    url: "{{TODO: benews.co.kr 기사 링크}}",
    thumbnail: "/images/articles/press.jpg",
  },
  {
    type: "기획기사",
    title: "{{TODO: 기획기사 예시 기사 제목}}",
    lead: "{{TODO: 리드문 2~3줄}}",
    url: "{{TODO: benews.co.kr 기사 링크}}",
    thumbnail: "/images/articles/feature.jpg",
  },
  {
    type: "인터뷰",
    title: "{{TODO: 인터뷰 예시 기사 제목}}",
    lead: "{{TODO: 리드문 2~3줄}}",
    url: "{{TODO: benews.co.kr 기사 링크}}",
    thumbnail: "/images/articles/interview.jpg",
  },
  {
    type: "연재기사",
    title: "{{TODO: 연재기사 예시 기사 제목}}",
    lead: "{{TODO: 리드문 2~3줄}}",
    url: "{{TODO: benews.co.kr 기사 링크}}",
    thumbnail: "/images/articles/series.jpg",
  },
  {
    type: "칼럼",
    title: "{{TODO: 칼럼 예시 기사 제목}}",
    lead: "{{TODO: 리드문 2~3줄}}",
    url: "{{TODO: benews.co.kr 기사 링크}}",
    thumbnail: "/images/articles/column.jpg",
  },
  {
    type: "라운드업",
    title: "{{TODO: 라운드업 예시 기사 제목}}",
    lead: "{{TODO: 리드문 2~3줄}}",
    url: "{{TODO: benews.co.kr 기사 링크}}",
    thumbnail: "/images/articles/roundup.jpg",
  },
] as const;

export const articleSection = {
  id: "articles",
  eyebrow: "Article Types",
  headline: "기사 유형 및 예시",
  sub: "브랜드 소식의 성격에 맞는 기사 유형을 제안해 드립니다.",
  linkLabel: "기사 원문 보기",
} as const;

/* -------------------------------------------------------------------------- */
/* 3-10. 상담 문의                                                             */
/* -------------------------------------------------------------------------- */

export const contact = {
  id: "contact",
  eyebrow: "Contact",
  headline: "Contact Us",
  sub: "맞춤 언론홍보 전략, 무료로 상담받으세요.",
  blocks: [
    { no: "01", title: "기본정보", desc: "연락을 드릴 수 있도록 담당자 정보를 남겨 주세요." },
    { no: "02", title: "문의 내용", desc: "관심 있는 상품과 궁금한 점을 알려 주세요." },
    { no: "03", title: "방문 경로", desc: "어떻게 방문하셨는지 알려 주시면 상담에 도움이 됩니다." },
  ],
  fields: {
    company: { label: "회사명", placeholder: "예) 주식회사 ○○○" },
    name: { label: "담당자명", placeholder: "예) 홍길동" },
    phone: { label: "연락처", placeholder: "예) 010-1234-5678" },
    email: { label: "이메일", placeholder: "예) contact@example.com" },
    products: { label: "관심 상품", hint: "복수 선택 가능" },
    message: { label: "문의 내용", placeholder: "홍보하고 싶은 소식, 일정, 예산 등을 자유롭게 적어 주세요." },
    source: { label: "방문 경로" },
  },
  /** "기타" 체크박스의 id — services 배열과 겹치지 않는 고정값 */
  etcProductId: "etc",
  etcProductLabel: "기타",
  sources: ["네이버", "구글", "지인 소개", "기타"],
  privacy: {
    checkboxLabel: "개인정보 수집·이용에 동의합니다. (필수)",
    detailLabel: "자세히 보기",
    modalTitle: "개인정보 수집·이용 동의",
    /** 각 항목을 실제 운영 기준으로 채워 주세요. 법무 검토 후 확정 권장. */
    items: [
      {
        term: "수집 항목",
        desc: "필수 — 회사명, 담당자명, 연락처, 방문 경로 / 선택 — 이메일, 관심 상품, 문의 내용 / 자동 수집 — 접속 경로 정보(utm), 신청 일시",
      },
      {
        term: "수집 목적",
        desc: "언론홍보 서비스 상담 신청 확인, 상담 진행을 위한 연락, 문의 처리 결과 안내 및 관련 서비스 안내",
      },
      { term: "보유 기간", desc: "상담 종료 후 1년 (관계 법령에 따라 보존이 필요한 경우 해당 기간)" },
      {
        term: "동의 거부 권리",
        desc: "동의를 거부하실 수 있습니다. 다만 필수 항목에 동의하지 않으시면 상담 신청이 접수되지 않습니다.",
      },
    ],
  },
  submit: { label: "문의하기", loadingLabel: "전송 중..." },
  success: {
    title: "문의가 접수되었습니다.",
    desc: "담당자가 확인 후 빠르게 연락드리겠습니다. 감사합니다.",
    again: "다시 작성하기",
  },
  error: "전송에 실패했습니다. 잠시 후 다시 시도하시거나 대표번호로 연락해 주세요.",
} as const;

/* -------------------------------------------------------------------------- */
/* 3-11. 푸터                                                                  */
/* -------------------------------------------------------------------------- */

export const footer = {
  company: { term: "상호", value: "(주)오픈엑스" },
  ceo: { term: "대표", value: "김미진" },
  bizNo: { term: "사업자등록번호", value: "310-81-34293" },
  address: { term: "주소", value: "서울시 마포구 성암로 330, 8층 B동 808호" },
  tel: { term: "대표번호", value: "010-4559-5049" },
  email: { term: "이메일", value: "allpass@kakao.com" },
  links: [
    { label: "브랜드경제신문 바로가기", href: "https://benews.co.kr", external: true },
    { label: "개인정보처리방침", href: "/privacy", external: false },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* 개인정보처리방침 (/privacy)                                                 */
/* -------------------------------------------------------------------------- */

/**
 * 푸터 "개인정보처리방침" 링크가 가리키는 /privacy 페이지의 내용.
 * 실제 수집 항목은 lib/schema.ts 의 contactSchema 와 일치해야 한다.
 * 폼 필드를 바꾸면 아래 "수집하는 항목"도 함께 고칠 것.
 */
export const privacyPolicy = {
  title: "개인정보처리방침",
  intro:
    "(주)오픈엑스(이하 \"회사\")는 미디어허브 언론홍보 상담 신청 과정에서 수집하는 개인정보를 다음과 같이 처리합니다.",
  backLabel: "처음으로 돌아가기",
  /** 시행일 — 실제 공개일로 맞출 것 */
  effectiveDate: "2026년 10월 14일",
  sections: [
    {
      title: "1. 수집하는 항목",
      body: [
        "필수 항목 — 회사명, 담당자명, 연락처, 방문 경로",
        "선택 항목 — 이메일, 관심 상품, 문의 내용",
        "자동 수집 항목 — 접속 경로 정보(utm_source, utm_medium, utm_campaign), 신청 일시",
      ],
    },
    {
      title: "2. 수집 및 이용 목적",
      body: [
        "언론홍보 서비스 상담 신청 확인, 상담 진행을 위한 연락, 문의 처리 결과 안내 및 관련 서비스 안내를 목적으로 개인정보를 처리합니다.",
      ],
    },
    {
      title: "3. 보유 및 이용 기간",
      body: [
        "상담 종료 후 1년간 보유한 뒤 지체 없이 파기합니다.",
        "다만 관계 법령에 따라 보존해야 하는 경우에는 해당 기간 동안 보관합니다.",
      ],
    },
    {
      title: "4. 제3자 제공",
      body: [
        "회사는 수집한 개인정보를 제3자에게 제공하지 않습니다. 법령에 따라 요구되는 경우는 예외로 합니다.",
      ],
    },
    {
      title: "5. 동의를 거부할 권리",
      body: [
        "개인정보 수집·이용 동의를 거부하실 수 있습니다.",
        "다만 필수 항목에 동의하지 않으시면 상담 신청이 접수되지 않습니다.",
      ],
    },
    {
      title: "6. 정보주체의 권리",
      body: [
        "언제든지 본인의 개인정보에 대해 열람·정정·삭제·처리정지를 요구하실 수 있습니다.",
        "아래 개인정보 보호책임자에게 요청하시면 지체 없이 조치합니다.",
      ],
    },
    {
      title: "7. 개인정보 보호책임자",
      body: [
        "성명: 윤수만",
        "연락처: 010-4559-5049",
        "이메일: allpass@kakao.com",
        "소속: (주)오픈엑스 (사업자등록번호 310-81-34293)",
        "주소: 서울시 마포구 성암로 330, 8층 B동 808호",
      ],
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* 3-12. 고정 요소                                                             */
/* -------------------------------------------------------------------------- */

export const floating = {
  stickyBar: {
    text: "맞춤 언론홍보 전략, 무료 상담받기",
    /** 숫자/하이픈만 넣어 주세요. tel: 링크로 자동 변환됩니다. */
    phone: "010-4559-5049",
    ctaLabel: "상담 신청",
  },
  kakao: {
    /** 비워 두면 플로팅 버튼 자체가 표시되지 않는다. 채널이 열리면 URL 만 넣으면 된다. */
    url: "",
    label: "카카오톡 채널 상담",
    tooltip: "궁금한 점을 바로 물어보세요",
  },
} as const;

/* -------------------------------------------------------------------------- */

export const site = {
  meta,
  header,
  hero,
  report,
  why,
  stats,
  feedback,
  planning,
  easyWriting,
  services,
  serviceSection,
  articles,
  articleSection,
  contact,
  footer,
  floating,
} as const;

export type Site = typeof site;
export type Service = (typeof services)[number];
export type Article = (typeof articles)[number];
