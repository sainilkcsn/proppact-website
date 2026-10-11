import { MapPin } from "lucide-react";
import { ContactCTA } from "@/components/ui/ContactCTA";
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
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          This demonstration listing does not have verified coordinates, so no map pin is shown.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <ContactCTA action="enquire" href="#enquire" />
          <ContactCTA action="call" />
        </div>
      </Container>
    </section>
  );
}
