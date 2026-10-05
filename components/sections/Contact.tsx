"use client";

import { useEffect, useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";

import { contact, services } from "@/content/site";
import { contactSchema, type ContactPayload } from "@/lib/schema";
import { useUtm } from "@/lib/useUtm";
import { useProductSelection } from "@/lib/productSelection";
import { cn, formatPhone } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Eyebrow, SectionHeading, Todoable } from "@/components/ui/Text";
import { Reveal } from "@/components/motion/Reveal";

const inputClass =
  "w-full rounded-card border-2 border-navy-700 bg-navy-800 px-4 py-3 text-[15px] text-white " +
  "placeholder:text-white/35 transition-colors focus:border-yellow-400 focus:outline-none";

const errorClass = "border-yellow-400";

/** 체크박스/라디오 공통 외형 */
const choiceClass =
  "flex cursor-pointer items-start gap-2.5 rounded-card border-2 border-navy-700 bg-navy-800 " +
  "px-4 py-3 text-sm text-white transition-colors hover:border-navy-700/80 has-[:checked]:border-yellow-400";

export function Contact() {
  const utm = useUtm();
  const { requested, clearRequested } = useProductSelection();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema) as Resolver<ContactPayload>,
    mode: "onBlur",
    defaultValues: {
      company: "",
      name: "",
      phone: "",
      email: "",
      products: [],
      message: "",
      source: "",
      agreed: false,
      utm: { utm_source: "", utm_medium: "", utm_campaign: "" },
    },
  });

  // URL 에서 수집한 utm 값을 폼에 반영
  useEffect(() => {
    setValue("utm", utm);
  }, [utm, setValue]);

  // Our Service 카드 클릭 → 해당 상품 자동 체크
  useEffect(() => {
    if (requested.length === 0) return;
    const current = getValues("products") ?? [];
    const merged = Array.from(new Set([...current, ...requested]));
    setValue("products", merged, { shouldDirty: true });
    clearRequested();
  }, [requested, getValues, setValue, clearRequested]);

  const onSubmit = async (data: ContactPayload) => {
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setDone(true);
    } catch {
      setSubmitError(contact.error);
    }
  };

  const productOptions = [
    ...services.map((s) => ({ id: s.id, label: s.name })),
    { id: contact.etcProductId, label: contact.etcProductLabel },
  ];

  return (
    <section id={contact.id} className="section-y relative overflow-hidden bg-navy-900">
      <div className="navy-glow pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden="true" />

      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="dark">{contact.eyebrow}</Eyebrow>
          <SectionHeading text={contact.headline} tone="dark" />
          <p className="mt-5 text-base text-white/75 md:text-lg">{contact.sub}</p>
        </Reveal>

        <div className="mt-12 max-w-3xl md:mt-16">
          {done ? (
            <div className="rounded-card border-2 border-yellow-400 bg-navy-800 p-10 text-center md:p-14">
              <CheckCircle2
                className="mx-auto h-14 w-14 text-yellow-400"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl font-extrabold text-white md:text-2xl">
                {contact.success.title}
              </h3>
              <p className="mt-3 text-sm text-white/75 md:text-base">{contact.success.desc}</p>
              <button
                type="button"
                onClick={() => {
                  reset();
                  setDone(false);
                }}
                className="mt-8 rounded-pill border-2 border-white/40 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
              >
                {contact.success.again}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10 md:space-y-12">
              {/* ── 01 기본정보 ───────────────────────────────── */}
              <FormBlock block={contact.blocks[0]}>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    id="company"
                    label={contact.fields.company.label}
                    required
                    error={errors.company?.message}
                  >
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={contact.fields.company.placeholder}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? "company-error" : undefined}
                      className={cn(inputClass, errors.company && errorClass)}
                      {...register("company")}
                    />
                  </Field>

                  <Field
                    id="name"
                    label={contact.fields.name.label}
                    required
                    error={errors.name?.message}
                  >
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder={contact.fields.name.placeholder}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={cn(inputClass, errors.name && errorClass)}
                      {...register("name")}
                    />
                  </Field>

                  <Field
                    id="phone"
                    label={contact.fields.phone.label}
                    required
                    error={errors.phone?.message}
                  >
                    <input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder={contact.fields.phone.placeholder}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={cn(inputClass, errors.phone && errorClass)}
                      {...register("phone", {
                        onChange: (e) => {
                          setValue("phone", formatPhone(e.target.value));
                        },
                      })}
                    />
                  </Field>

                  <Field id="email" label={contact.fields.email.label} error={errors.email?.message}>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder={contact.fields.email.placeholder}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={cn(inputClass, errors.email && errorClass)}
                      {...register("email")}
                    />
                  </Field>
                </div>
              </FormBlock>

              {/* ── 02 문의 내용 ──────────────────────────────── */}
              <FormBlock block={contact.blocks[1]}>
                <fieldset>
                  <legend className="mb-3 text-sm font-bold text-white">
                    {contact.fields.products.label}
                    <span className="ml-2 font-medium text-white/50">
                      {contact.fields.products.hint}
                    </span>
                  </legend>
                  <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {productOptions.map((opt) => (
                      <label key={opt.id} className={choiceClass}>
                        <input
                          type="checkbox"
                          value={opt.id}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-yellow-400"
                          {...register("products")}
                        />
                        <span className="leading-snug">
                          <Todoable text={opt.label} />
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-6">
                  <Field
                    id="message"
                    label={contact.fields.message.label}
                    error={errors.message?.message}
                  >
                    <textarea
                      id="message"
                      rows={5}
                      placeholder={contact.fields.message.placeholder}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={cn(inputClass, "resize-y", errors.message && errorClass)}
                      {...register("message")}
                    />
                  </Field>
                </div>
              </FormBlock>

              {/* ── 03 방문 경로 ──────────────────────────────── */}
              <FormBlock block={contact.blocks[2]}>
                <fieldset
                  aria-invalid={!!errors.source}
                  aria-describedby={errors.source ? "source-error" : undefined}
                >
                  <legend className="mb-3 text-sm font-bold text-white">
                    {contact.fields.source.label}
                    <span aria-hidden="true" className="ml-1 text-yellow-400">
                      *
                    </span>
                  </legend>
                  <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                    {contact.sources.map((src) => (
                      <label key={src} className={choiceClass}>
                        <input
                          type="radio"
                          value={src}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-yellow-400"
                          {...register("source")}
                        />
                        <span className="leading-snug">{src}</span>
                      </label>
                    ))}
                  </div>
                  {errors.source?.message && (
                    <p id="source-error" role="alert" className="mt-2 text-sm font-semibold text-yellow-400">
                      {errors.source.message}
                    </p>
                  )}
                </fieldset>
              </FormBlock>

              {/* 개인정보 동의 */}
              <div className="rounded-card border border-navy-700 bg-navy-800 p-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-white">
                    <input
                      type="checkbox"
                      aria-invalid={!!errors.agreed}
                      aria-describedby={errors.agreed ? "agreed-error" : undefined}
                      className="h-4 w-4 shrink-0 accent-yellow-400"
                      {...register("agreed")}
                    />
                    {contact.privacy.checkboxLabel}
                  </label>
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="text-sm font-bold text-yellow-400 underline underline-offset-4"
                  >
                    {contact.privacy.detailLabel}
                  </button>
                </div>
                {errors.agreed?.message && (
                  <p id="agreed-error" role="alert" className="mt-2 text-sm font-semibold text-yellow-400">
                    {errors.agreed.message}
                  </p>
                )}
              </div>

              {submitError && (
                <p role="alert" className="text-sm font-semibold text-yellow-400">
                  {submitError}
                </p>
              )}

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                {isSubmitting ? contact.submit.loadingLabel : contact.submit.label}
              </Button>
            </form>
          )}
        </div>
      </div>

      <Modal
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title={contact.privacy.modalTitle}
      >
        <dl className="space-y-4">
          {contact.privacy.items.map((item) => (
            <div key={item.term}>
              <dt className="font-bold text-navy-900">{item.term}</dt>
              <dd className="mt-1 text-ink/80">
                <Todoable text={item.desc} />
              </dd>
            </div>
          ))}
        </dl>
      </Modal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function FormBlock({
  block,
  children,
}: {
  block: { no: string; title: string; desc: string };
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div>
        <div className="mb-5 flex items-baseline gap-3">
          <span className="text-sm font-extrabold text-yellow-400">{block.no}</span>
          <div>
            <h3 className="text-lg font-extrabold text-white md:text-xl">{block.title}</h3>
            <p className="mt-1 text-sm text-white/60">{block.desc}</p>
          </div>
        </div>
        {children}
      </div>
    </Reveal>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-white">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-yellow-400">
            *
          </span>
        )}
        {required && <span className="sr-only">(필수)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm font-semibold text-yellow-400">
          {error}
        </p>
      )}
    </div>
  );
}
