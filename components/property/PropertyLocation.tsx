import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Property } from "@/lib/property-data";

type PropertyLocationProps = {
  property: Property;
};

export function PropertyLocation({ property }: PropertyLocationProps) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
          Location
        </h2>
        <p className="mt-3 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-accent" aria-hidden />
          {property.locality}, {property.city}
        </p>
        <div className="mt-6 overflow-hidden rounded-lg border border-border bg-muted">
          <div className="flex aspect-[16/7] items-center justify-center px-6 text-center text-sm text-muted-foreground">
            Map placeholder for {property.locality}, {property.city}. Connect a
            map embed when verified coordinates are available.
          </div>
        </div>
      </Container>
    </section>
  );
}
