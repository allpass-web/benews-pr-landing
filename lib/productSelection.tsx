"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

/**
 * Our Service 카드(3-8)와 문의폼(3-10)의 "관심 상품" 체크박스를 연결한다.
 * 카드를 클릭하면 폼으로 스크롤하면서 해당 상품이 자동으로 체크된다.
 */
type Ctx = {
  /** 카드 클릭으로 요청된 상품 id 목록 */
  requested: string[];
  requestProduct: (id: string) => void;
  /** 폼이 값을 반영한 뒤 호출 */
  clearRequested: () => void;
};

const ProductSelectionContext = createContext<Ctx | null>(null);

export function ProductSelectionProvider({ children }: { children: React.ReactNode }) {
  const [requested, setRequested] = useState<string[]>([]);

  const requestProduct = useCallback((id: string) => {
    setRequested((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const clearRequested = useCallback(() => setRequested([]), []);

  const value = useMemo(
    () => ({ requested, requestProduct, clearRequested }),
    [requested, requestProduct, clearRequested]
  );

  return (
    <ProductSelectionContext.Provider value={value}>
      {children}
    </ProductSelectionContext.Provider>
  );
}

export function useProductSelection(): Ctx {
  const ctx = useContext(ProductSelectionContext);
  if (!ctx) {
    throw new Error("useProductSelection 은 ProductSelectionProvider 안에서만 사용할 수 있습니다.");
  }
  return ctx;
}
