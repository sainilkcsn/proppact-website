"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const phonePattern = /^[+]?[\d\s()-]{8,18}$/;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      interest: "",
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
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            className={inputClass}
            {...register("name", { required: "Name is required" })}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            className={inputClass}
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
          autoComplete="email"
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

      <Field label="Property Interest" error={errors.interest?.message}>
        <select
          className={inputClass}
          {...register("interest", { required: "Please select an interest" })}
        >
          <option value="">Select interest</option>
          <option value="residential">Residential</option>
          <option value="villa">Villa</option>
          <option value="plot">Plot</option>
          <option value="commercial">Commercial</option>
          <option value="sell">Sell property</option>
          <option value="services">Services</option>
        </select>
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={4}
          className={inputClass}
          {...register("message", { required: "Message is required" })}
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Us a Message"}
      </Button>

      {submitted ? (
        <p
          className="rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-primary"
          role="status"
        >
          Thank you. Our team typically responds within 24 hours.
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
