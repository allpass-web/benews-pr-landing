import { z } from "zod";

/**
 * 문의폼 스키마 — 클라이언트(react-hook-form)와 서버(/api/contact)가 함께 사용합니다.
 * 한 곳만 고치면 양쪽 검증이 동시에 맞춰집니다.
 */

/** 국내 전화번호: 숫자와 하이픈만, 9~11자리 */
const phoneRegex = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;

export const contactSchema = z.object({
  company: z
    .string()
    .trim()
    .min(1, "회사명을 입력해 주세요.")
    .max(100, "회사명이 너무 깁니다."),
  name: z
    .string()
    .trim()
    .min(1, "담당자명을 입력해 주세요.")
    .max(50, "담당자명이 너무 깁니다."),
  phone: z
    .string()
    .trim()
    .min(1, "연락처를 입력해 주세요.")
    .regex(phoneRegex, "연락처를 숫자와 하이픈으로 정확히 입력해 주세요. (예: 010-1234-5678)"),
  email: z
    .union([z.string().trim().email("이메일 형식이 올바르지 않습니다."), z.literal("")])
    .optional()
    .transform((v) => v ?? ""),
  products: z.array(z.string()).default([]),
  message: z.string().trim().max(2000, "문의 내용이 너무 깁니다.").optional().default(""),
  source: z.string().trim().min(1, "방문 경로를 선택해 주세요."),
  agreed: z
    .boolean()
    .refine((v) => v === true, { message: "개인정보 수집·이용에 동의해 주세요." }),
  utm: z
    .object({
      utm_source: z.string().optional().default(""),
      utm_medium: z.string().optional().default(""),
      utm_campaign: z.string().optional().default(""),
    })
    .optional()
    .default({ utm_source: "", utm_medium: "", utm_campaign: "" }),
});

/** 폼 입력 타입 (resolver 전) */
export type ContactInput = z.input<typeof contactSchema>;
/** 검증 통과 후 타입 */
export type ContactPayload = z.output<typeof contactSchema>;

/** 웹훅으로 보낼 최종 형태 */
export type ContactRecord = ContactPayload & { timestamp: string };
