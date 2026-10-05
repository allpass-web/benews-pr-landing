/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 개발 중 화면 좌하단 오버레이가 하단 고정 CTA 바를 가려서 끕니다. (개발 환경에만 영향)
  devIndicators: false,
};

export default nextConfig;
