"use client";

import { useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export type LeadEnquiryType =
  | "general"
  | "project"
  | "property"
  | "site_visit"
  | "seller";

type LeadFormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
  companyWebsite: string;
  enquiryType: LeadEnquiryType;
  interest: string;
  propertyType: string;
  locality: string;
  propertySize: string;
  expectedPrice: string;
};

type LeadCaptureFormProps = {
  id?: string;
  title: string;
  description?: string;
  sourcePath: string;
  enquiryType: LeadEnquiryType;
  projectSlug?: string;
  projectName?: string;
  propertySlug?: string;
  allowSiteVisit?: boolean;
  variant?: "general" | "seller";
};

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground";

export function LeadCaptureForm({
  id = "enquire",
  title,
  description,
  sourcePath,
  enquiryType,
  projectSlug,
  projectName,
  propertySlug,
  allowSiteVisit = false,
  variant = "general",
}: LeadCaptureFormProps) {
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const idempotencyKey = useRef(
    typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : ""
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: projectName
        ? `I would like current pricing and availability for ${projectName}.`
        : "",
      consent: false,
      companyWebsite: "",
      enquiryType,
      interest: "",
      propertyType: "",
      locality: "",
      propertySize: "",
      expectedPrice: "",
    },
  });

  const onSubmit = async (values: LeadFormValues) => {
    setSubmitError(null);
    if (!idempotencyKey.current && typeof crypto !== "undefined" && "randomUUID" in crypto) {
      idempotencyKey.current = crypto.randomUUID();
    }
    const params = new URLSearchParams(window.location.search);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          enquiryType: allowSiteVisit ? values.enquiryType : enquiryType,
          projectSlug,
          projectName,
          propertySlug,
          sourcePath,
          budget: values.expectedPrice,
          idempotencyKey: idempotencyKey.current,
          utmSource: params.get("utm_source") || "",
          utmMedium: params.get("utm_medium") || "",
          utmCampaign: params.get("utm_campaign") || "",
        }),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        id?: string | null;
        error?: string;
      };
      if (!response.ok || !payload.ok) {
        setSubmitError(
          payload.error ||
            "Your enquiry was not saved. Please try again or call PropPact."
        );
        return;
      }
      setReferenceId(payload.id ?? null);
    } catch {
      setSubmitError(
        "Your enquiry was not saved. Please try again or call PropPact."
      );
    }
  };

  if (referenceId !== null || referenceId === "") {
    return (
      <div
        id={id}
        tabIndex={-1}
        data-enquiry-complete=""
        className="scroll-mt-28 rounded-lg border border-border bg-white p-5 shadow-card outline-none sm:p-6"
        role="status"
      >
        <h2 className="font-heading text-2xl font-semibold text-primary">
          Thank you for contacting PropPact
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you for contacting PropPact. Your enquiry has been received. Our
          team will follow up using the contact details you provided.
        </p>
        {referenceId ? (
          <p className="mt-3 text-sm text-foreground">
            Reference ID: <span className="font-medium">{referenceId}</span>
          </p>
        ) : null}
        <p className="mt-4 text-sm">
          <a href={SITE.phoneHref} className="font-medium text-primary">
            Call {SITE.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      tabIndex={-1}
      onSubmit={handleSubmit(onSubmit)}
      className="scroll-mt-28 space-y-4 rounded-lg border border-border bg-white p-5 shadow-card outline-none sm:p-6"
      noValidate
    >
      <div>
        <h2 className="font-heading text-2xl font-semibold text-primary">{title}</h2>
        {description ? (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        ) : null}
        {projectName ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Project: <span className="font-medium text-foreground">{projectName}</span>
          </p>
        ) : null}
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Company website
          <input tabIndex={-1} autoComplete="off" {...register("companyWebsite")} />
        </label>
      </div>

      {allowSiteVisit ? (
        <>
          <Field label="Enquiry type" error={errors.enquiryType?.message}>
            <select className={inputClass} {...register("enquiryType")}>
              <option value="project">Project enquiry</option>
              <option value="site_visit">Request a site visit</option>
            </select>
          </Field>
          <p className="text-sm text-muted-foreground">
            A site-visit request is an enquiry. The team will confirm the arrangements separately. Submitting this form does not confirm an appointment.
          </p>
        </>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}>
          <input
            className={inputClass}
            autoComplete="name"
            {...register("name", { required: "Name is required" })}
          />
        </Field>
        <Field label="Mobile Number" error={errors.phone?.message}>
          <input
            className={inputClass}
            type="tel"
            autoComplete="tel"
            {...register("phone", { required: "Phone is required" })}
          />
        </Field>
      </div>

      <Field label="Email (optional)" error={errors.email?.message}>
        <input
          className={inputClass}
          type="email"
          autoComplete="email"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
      </Field>

      {variant === "general" && enquiryType === "general" ? (
        <Field label="Property interest" error={errors.interest?.message}>
          <select className={inputClass} {...register("interest")}>
            <option value="">Select interest</option>
            <option value="Residential apartments">Residential apartments</option>
            <option value="Villas">Villas</option>
            <option value="Sell property">Sell property</option>
            <option value="Services">Services</option>
          </select>
        </Field>
      ) : null}

      {variant === "seller" ? (
        <>
          <Field label="Property type" error={errors.propertyType?.message}>
            <select
              className={inputClass}
              {...register("propertyType", { required: "Property type is required" })}
            >
              <option value="">Select type</option>
              <option value="Residential flats & apartments">
                Residential flats & apartments
              </option>
              <option value="Villas & independent houses">
                Villas & independent houses
              </option>
              <option value="Plots & land">Plots & land</option>
              <option value="Commercial spaces">Commercial spaces</option>
            </select>
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Locality" error={errors.locality?.message}>
              <input
                className={inputClass}
                {...register("locality", { required: "Locality is required" })}
              />
            </Field>
            <Field label="Property size" error={errors.propertySize?.message}>
              <input
                className={inputClass}
                {...register("propertySize", { required: "Property size is required" })}
              />
            </Field>
          </div>
          <Field label="Expected price" error={errors.expectedPrice?.message}>
            <input
              className={inputClass}
              {...register("expectedPrice", { required: "Expected price is required" })}
            />
          </Field>
        </>
      ) : null}

      <Field label="Message" error={errors.message?.message}>
        <textarea
          className={inputClass}
          rows={4}
          {...register("message", {
            required: "Message is required",
            maxLength: { value: 2000, message: "Message is too long" },
          })}
        />
      </Field>

      <label className="flex items-start gap-2 text-sm text-foreground">
        <input
          type="checkbox"
          className="mt-1"
          {...register("consent", { required: "Consent is required" })}
        />
        <span>
          I agree that PropPact may use these details to respond to this enquiry.
        </span>
      </label>
      {errors.consent ? (
        <p className="text-xs text-secondary">{errors.consent.message}</p>
      ) : null}

      {submitError ? (
        <p className="text-sm text-secondary" role="alert">
          {submitError}{" "}
          <a href={SITE.phoneHref} className="font-medium underline">
            Call {SITE.phone}
          </a>
          {" · "}
          <a href={SITE.emailHref} className="font-medium underline">
            {SITE.email}
          </a>
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit enquiry"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-secondary">{error}</span> : null}
    </label>
  );
}
