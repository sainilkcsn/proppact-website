import type { FilterFieldKey } from "@/lib/property-categories";
import type { Property } from "@/lib/property-data";

export type PropertyFilterState = Partial<Record<FilterFieldKey, string>>;

function matchesBudget(price: number, budget: string) {
  if (!budget) return true;
  if (budget === "0-50") return price < 5_000_000;
  if (budget === "50-100") return price >= 5_000_000 && price < 10_000_000;
  if (budget === "100-200") return price >= 10_000_000 && price < 20_000_000;
  if (budget === "200+") return price >= 20_000_000;
  return true;
}

function matchesRange(value: number | undefined, range: string) {
  if (!range || value == null) return !range;
  if (range.endsWith("+")) {
    const min = Number(range.replace("+", ""));
    return value >= min;
  }
  const [minRaw, maxRaw] = range.split("-");
  const min = Number(minRaw);
  const max = Number(maxRaw);
  return value >= min && value <= max;
}

/**
 * Pure filter helper — UI-agnostic so CRM/API results can reuse the same rules.
 */
export function filterProperties(
  properties: Property[],
  filters: PropertyFilterState
): Property[] {
  return properties.filter((property) => {
    if (
      filters.propertyType &&
      property.propertyType !== filters.propertyType
    ) {
      return false;
    }
    if (filters.locality && property.locality !== filters.locality) {
      return false;
    }
    if (filters.budget && !matchesBudget(property.price, filters.budget)) {
      return false;
    }
    if (filters.bhk) {
      const required = Number(filters.bhk);
      if (!property.bhk || property.bhk < required) return false;
      if (required < 4 && property.bhk !== required) return false;
    }
    if (filters.bedrooms) {
      const required = Number(filters.bedrooms);
      if (!property.bedrooms || property.bedrooms < required) return false;
    }
    if (filters.plotArea && !matchesRange(property.plotArea, filters.plotArea)) {
      return false;
    }
    if (filters.plotSize && !matchesRange(property.plotArea ?? property.area, filters.plotSize)) {
      return false;
    }
    if (
      filters.developmentType &&
      property.developmentType !== filters.developmentType
    ) {
      return false;
    }
    if (filters.area && !matchesRange(property.area, filters.area)) {
      return false;
    }
    return true;
  });
}
