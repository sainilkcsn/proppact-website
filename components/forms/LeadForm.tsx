"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";

type LeadFormValues = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  locality: string;
  notes: string;
};

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      propertyType: "",
      locality: "",
      notes: "",
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
      aria-label="List your property"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            type="text"
            className={inputClass}
            {...register("name", { required: "Name is required" })}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            className={inputClass}
            {...register("phone", { required: "Phone is required" })}
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          className={inputClass}
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
            type="text"
            className={inputClass}
            {...register("locality", { required: "Locality is required" })}
          />
        </Field>
      </div>

      <Field label="Property Details" error={errors.notes?.message}>
        <textarea
          rows={4}
          className={inputClass}
          placeholder="Share size, configuration, expected price, and any other details"
          {...register("notes", { required: "Please add property details" })}
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting..." : "Get a Free Property Valuation"}
      </Button>

      {submitted ? (
        <p className="text-sm text-accent" role="status">
          Thank you. We&apos;ll review your details and share a valuation shortly.
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
