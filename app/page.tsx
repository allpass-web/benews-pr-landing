import { ProductSelectionProvider } from "@/lib/productSelection";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Why } from "@/components/sections/Why";
import { Feedback } from "@/components/sections/Feedback";
import { Planning } from "@/components/sections/Planning";
import { EasyWriting } from "@/components/sections/EasyWriting";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Articles } from "@/components/sections/Articles";
import { Report } from "@/components/sections/Report";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { KakaoFloat } from "@/components/sections/KakaoFloat";

/**
 * 설득 흐름 순서 (PROMPT.md 의 3-N 번호는 섹션 식별자이고, 배치 순서와는 다르다)
 *
 *   문제 제기        Hero
 *   왜 우리인가       Why
 *   강점 3가지        Feedback · Planning · EasyWriting
 *   숫자로 증명       Stats
 *   무엇을 파는가     Services
 *   어떤 결과물인가   Articles · Report
 *   행동              Contact
 *
 * 배경은 네이비 ↔ 밝은색이 번갈아 나오도록 맞춰 두었다. 순서를 바꿀 때는
 * 각 섹션의 bg- 클래스를 함께 확인할 것.
 */
export default function Page() {
  return (
    <ProductSelectionProvider>
      {/* 3-0 */}
      <Header />

      <main>
        <Hero />          {/* 3-1  홍보의 중요성        navy-900 */}
        <Why />           {/* 3-3  왜 미디어허브인가요?  paper-muted */}
        <Feedback />      {/* 3-5  빠른 피드백          paper */}
        <Planning />      {/* 3-6  단순 송출이 아닌 기획 navy-800 */}
        <EasyWriting />   {/* 3-7  기사 작성 부담 제로   paper */}
        <Stats />         {/* 3-4  신뢰 지표            navy-900 */}
        <Services />      {/* 3-8  Our Service          paper-muted */}
        <Articles />      {/* 3-9  기사 유형 및 예시     paper */}
        <Report />        {/* 3-2  결과 리포트          paper-muted */}
        <Contact />       {/* 3-10 상담 문의            navy-900 */}
      </main>

      {/* 3-11 */}
      <Footer />

      {/* 3-12 고정 요소 */}
      <StickyCTA />
      <KakaoFloat />
    </ProductSelectionProvider>
  );
}
