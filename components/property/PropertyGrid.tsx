import { PropertyCard } from "@/components/property/PropertyCard";
import type { Property } from "@/lib/property-data";

type PropertyGridProps = {
  properties: Property[];
  emptyMessage?: string;
};

export function PropertyGrid({
  properties,
  emptyMessage = "No properties match your filters yet.",
}: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border bg-white px-6 py-12 text-center text-muted-foreground">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
