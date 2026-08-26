"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";

export type SellerFormValues = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  locality: string;
  propertySize: string;
  expectedPrice: string;
  message: string;
};

const phonePattern = /^[+]?[\d\s()-]{8,18}$/;

export function SellerLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SellerFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      propertyType: "",
      locality: "",
      propertySize: "",
      expectedPrice: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-lg border border-border bg-white p-5 shadow-card sm:p-6"
      noValidate
      aria-label="Sell your property"
      id="seller-form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            className={inputClass}
            autoComplete="name"
            {...register("name", { required: "Name is required" })}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            className={inputClass}
            autoComplete="tel"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: phonePattern,
                message: "Enter a valid phone number",
              },
            })}
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          className={inputClass}
          autoComplete="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Property Type" error={errors.propertyType?.message}>
          <select
            className={inputClass}
            {...register("propertyType", {
              required: "Select a property type",
            })}
          >
            <option value="">Select type</option>
            <option value="residential">Residential flats & apartments</option>
            <option value="villa">Villas & independent houses</option>
            <option value="plot">Plots & land</option>
            <option value="commercial">Commercial spaces</option>
          </select>
        </Field>
        <Field label="Locality" error={errors.locality?.message}>
          <input
            className={inputClass}
            {...register("locality", { required: "Locality is required" })}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Property Size" error={errors.propertySize?.message}>
          <input
            className={inputClass}
            placeholder="e.g. 1,650 sq.ft or 200 sq.yd"
            {...register("propertySize", {
              required: "Property size is required",
            })}
          />
        </Field>
        <Field label="Expected Price" error={errors.expectedPrice?.message}>
          <input
            className={inputClass}
            placeholder="e.g. ₹1.25 Cr"
            {...register("expectedPrice", {
              required: "Expected price is required",
            })}
          />
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={4}
          className={inputClass}
          placeholder="Share possession status, amenities, and any other details"
          {...register("message", { required: "Message is required" })}
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting..." : "Get a Free Property Valuation"}
      </Button>

      {submitted ? (
        <p
          className="rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-primary"
          role="status"
        >
          Thank you. Our team will review your property details and share a
          valuation shortly.
        </p>
      ) : null}
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-secondary">{error}</span>
      ) : null}
    </label>
  );
}
