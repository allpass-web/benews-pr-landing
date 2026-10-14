import { ProductSelectionProvider } from "@/lib/productSelection";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Report } from "@/components/sections/Report";
import { Why } from "@/components/sections/Why";
import { Stats } from "@/components/sections/Stats";
import { Feedback } from "@/components/sections/Feedback";
import { Planning } from "@/components/sections/Planning";
import { EasyWriting } from "@/components/sections/EasyWriting";
import { Services } from "@/components/sections/Services";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { KakaoFloat } from "@/components/sections/KakaoFloat";

export default function Page() {
  return (
    <ProductSelectionProvider>
      {/* 3-0 */}
      <Header />

      <main>
        <Hero />          {/* 3-1 홍보의 중요성 */}
        <Report />        {/* 3-2 결과 리포트 */}
        <Why />           {/* 3-3 왜 미디어허브인가요? */}
        <Stats />         {/* 3-4 신뢰 지표 */}
        <Feedback />      {/* 3-5 빠른 피드백 */}
        <Planning />      {/* 3-6 단순 송출이 아닌 기획 */}
        <EasyWriting />   {/* 3-7 기사 작성 부담 제로 */}
        <Services />      {/* 3-8 Our Service */}
        <Articles />      {/* 3-9 기사 유형 및 예시 */}
        <Contact />       {/* 3-10 상담 문의 */}
      </main>

      {/* 3-11 */}
      <Footer />

      {/* 3-12 고정 요소 */}
      <StickyCTA />
      <KakaoFloat />
    </ProductSelectionProvider>
  );
}
