import type { Config } from "tailwindcss";

/**
 * 디자인 토큰 (PROMPT.md 2. 디자인 토큰)
 * 여기 정의된 색 외의 임의 색은 사용하지 않는다.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B1B33",
          800: "#12284A",
          700: "#1E3A66",
        },
        yellow: {
          400: "#FFC72C",
          300: "#FFD95C",
        },
        ink: "#111827",
        paper: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F7FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      fontSize: {
        // 큰 헤드라인: 모바일 28~32px / 데스크탑 48~56px
        display: ["clamp(1.75rem, 5vw, 3.5rem)", { lineHeight: "1.2", fontWeight: "800" }],
        headline: ["clamp(1.5rem, 3.6vw, 3rem)", { lineHeight: "1.25", fontWeight: "800" }],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "bubble-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "bubble-float": "bubble-float 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
