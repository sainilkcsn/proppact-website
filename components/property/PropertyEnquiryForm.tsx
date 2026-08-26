"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Property } from "@/lib/property-data";

type EnquiryValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type PropertyEnquiryFormProps = {
  property: Property;
};

export function PropertyEnquiryForm({ property }: PropertyEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: `I am interested in ${property.title}.`,
    },
  });

  const onSubmit = async (values: EnquiryValues) => {
    // Frontend-only for now — payload shaped for future CRM/API wiring.
    void {
      ...values,
      propertyId: property.id,
      propertySlug: property.slug,
      propertyTitle: property.title,
    };
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
    reset({
      name: "",
      phone: "",
      email: "",
      message: `I am interested in ${property.title}.`,
    });
  };

  return (
    <section id="enquire" className="scroll-mt-28 bg-[#F1EFE9] py-12 sm:py-16">
      <Container className="max-w-3xl">
        <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
          Enquire About This Property
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Share your details and a PropPact advisor will follow up on{" "}
          <span className="font-medium text-foreground">{property.title}</span>.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 space-y-4 rounded-lg border border-border bg-white p-5 shadow-card sm:p-6"
          noValidate
        >
          <input type="hidden" name="propertyId" value={property.id} />
          <input type="hidden" name="propertySlug" value={property.slug} />
          <input type="hidden" name="propertyTitle" value={property.title} />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input
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

          <Field label="Message" error={errors.message?.message}>
            <textarea
              rows={4}
              className={inputClass}
              {...register("message", { required: "Message is required" })}
            />
          </Field>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Enquiry"}
          </Button>

          {submitted ? (
            <p className="text-sm text-accent" role="status">
              Thank you. Our property expert will contact you shortly.
            </p>
          ) : null}
        </form>
      </Container>
    </section>
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
