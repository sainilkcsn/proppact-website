"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyFilters } from "@/components/property/PropertyFilters";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import type { CategoryConfig } from "@/lib/property-categories";
import type { Property } from "@/lib/property-data";
import {
  filterProperties,
  type PropertyFilterState,
} from "@/lib/property-filters";

type CategoryPageTemplateProps = {
  category: CategoryConfig;
  properties: Property[];
};

export function CategoryPageTemplate({
  category,
  properties,
}: CategoryPageTemplateProps) {
  const [draft, setDraft] = useState<PropertyFilterState>({});
  const [applied, setApplied] = useState<PropertyFilterState>({});

  const filtered = useMemo(
    () => filterProperties(properties, applied),
    [applied, properties]
  );

  const reset = () => {
    setDraft({});
    setApplied({});
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary">
        <Image
          src={category.heroImage}
          alt={category.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-primary/70" aria-hidden />
        <Container className="relative py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Buy Property", href: "/residential-properties" },
              { label: category.title },
            ]}
          />
          <h1 className="max-w-3xl font-heading text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {category.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {category.description}
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="space-y-8">
          <PropertyFilters
            fields={category.filters}
            values={draft}
            onChange={setDraft}
            onSearch={() => setApplied(draft)}
            onReset={reset}
          />

          <div className="flex flex-wrap items-end justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "property" : "properties"}
            </p>
            <ButtonLink href={category.ctaHref} variant="outline" size="sm">
              {category.ctaLabel}
            </ButtonLink>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border bg-white px-6 py-12 text-center">
              <h2 className="font-heading text-xl font-semibold text-primary">
                No matching properties
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your filters or reset to see all{" "}
                {category.title.toLowerCase()}.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-4 text-sm font-medium text-accent hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTASection title={category.ctaLabel} ctaHref={category.ctaHref} />
    </>
  );
}
