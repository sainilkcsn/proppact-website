"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  BUDGET_OPTIONS,
  LOCALITY_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  SITE,
} from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden">
      <Image
        src="/images/hero-home.jpg"
        alt={`Premium residential skyline and homes in ${SITE.city}`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/45"
        aria-hidden
      />

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
            Find Your Perfect Property in {SITE.city} with PropPact
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            Buying property is one of the biggest decisions you&apos;ll make —
            PropPact makes it simple. We help buyers and investors in{" "}
            {SITE.city} discover verified residential and commercial properties,
            from ready-to-move flats and luxury villas to open plots and
            commercial spaces, all backed by transparent pricing and end-to-end
            support.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-10 max-w-4xl rounded-lg bg-background p-4 shadow-soft sm:p-5"
          onSubmit={(event) => event.preventDefault()}
          aria-label="Property search"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1.2fr_auto]">
            <label className="block">
              <span className="sr-only">Property Type</span>
              <select
                name="propertyType"
                defaultValue=""
                className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground"
              >
                {PROPERTY_TYPE_OPTIONS.map((option) => (
                  <option key={option.value || "type"} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Budget</span>
              <select
                name="budget"
                defaultValue=""
                className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground"
              >
                {BUDGET_OPTIONS.map((option) => (
                  <option key={option.value || "budget"} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block sm:col-span-2 lg:col-span-1">
              <span className="sr-only">Locality</span>
              <select
                name="locality"
                defaultValue=""
                className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground"
              >
                {LOCALITY_OPTIONS.map((option) => (
                  <option key={option.value || "locality"} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <Button type="submit" size="lg" className="w-full lg:w-auto">
              <Search className="h-4 w-4" aria-hidden />
              Search
            </Button>
          </div>
        </motion.form>
      </Container>
    </section>
  );
}
