"use client";

import { Button } from "@/components/ui/Button";
import type { FilterField } from "@/lib/property-categories";
import type { PropertyFilterState } from "@/lib/property-filters";

type PropertyFiltersProps = {
  fields: FilterField[];
  values: PropertyFilterState;
  onChange: (values: PropertyFilterState) => void;
  onSearch: () => void;
  onReset: () => void;
};

export function PropertyFilters({
  fields,
  values,
  onChange,
  onSearch,
  onReset,
}: PropertyFiltersProps) {
  return (
    <form
      className="rounded-lg border border-border bg-white p-4 shadow-card sm:p-5"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
      aria-label="Filter properties"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {fields.map((field) => (
          <label key={field.key} className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {field.label}
            </span>
            <select
              value={values[field.key] ?? ""}
              onChange={(event) =>
                onChange({ ...values, [field.key]: event.target.value })
              }
              className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground"
            >
              {field.options.map((option) => (
                <option key={`${field.key}-${option.value || "any"}`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button type="submit" className="min-w-[120px]">
          Search
        </Button>
        <Button type="button" variant="outline" onClick={onReset}>
          Reset
        </Button>
      </div>
    </form>
  );
}
