"use client";

import { useEffect, useState } from "react";

export type Utm = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
};

const EMPTY: Utm = { utm_source: "", utm_medium: "", utm_campaign: "" };
const STORAGE_KEY = "benews-utm";

/**
 * URL 쿼리스트링에서 utm 파라미터를 수집한다.
 * 한 번 수집한 값은 sessionStorage 에 담아, 페이지 내 이동 후에도 유지한다.
 */
export function useUtm(): Utm {
  const [utm, setUtm] = useState<Utm>(EMPTY);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl: Utm = {
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
    };

    const hasUrlValue = Object.values(fromUrl).some(Boolean);

    if (hasUrlValue) {
      setUtm(fromUrl);
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      } catch {
        /* 시크릿 모드 등 저장 실패는 무시한다 */
      }
      return;
    }

    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) setUtm({ ...EMPTY, ...(JSON.parse(saved) as Partial<Utm>) });
    } catch {
      /* 무시 */
    }
  }, []);

  return utm;
}
