import { PropertyCard } from "@/components/property/PropertyCard";
import { Container } from "@/components/ui/Container";
import type { Property } from "@/lib/property-data";

type SimilarPropertiesProps = {
  properties: Property[];
};

export function SimilarProperties({ properties }: SimilarPropertiesProps) {
  if (properties.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
          Similar Properties
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
}
