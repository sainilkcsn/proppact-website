import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ContactCTA } from "@/components/ui/ContactCTA";
import {
  PROPERTY_STATUS_LABEL,
  formatArea,
  type Property,
} from "@/lib/property-data";

type PropertyOverviewProps = {
  property: Property;
};

export function PropertyOverview({ property }: PropertyOverviewProps) {
  const specs = [
    property.bhk != null ? { label: "Configuration", value: `${property.bhk} BHK` } : null,
    property.bedrooms != null
      ? { label: "Bedrooms", value: String(property.bedrooms) }
      : null,
    property.bathrooms != null
      ? { label: "Bathrooms", value: String(property.bathrooms) }
      : null,
    { label: "Area", value: formatArea(property) },
    property.plotArea != null
      ? {
          label: "Plot Area",
          value: `${property.plotArea} ${property.plotAreaUnit ?? "sq.yd"}`,
        }
      : null,
    { label: "Type", value: property.propertyType },
    { label: "Status", value: PROPERTY_STATUS_LABEL[property.status] },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card sm:p-6">
      <div className="flex flex-wrap gap-2">
        {property.featured ? <Badge variant="accent">Featured</Badge> : null}
        <Badge variant="default">{property.propertyType}</Badge>
        <Badge variant="muted">{PROPERTY_STATUS_LABEL[property.status]}</Badge>
      </div>
      <h1 className="mt-4 font-heading text-3xl font-semibold text-primary sm:text-4xl">
        {property.title}
      </h1>
      <p className="mt-3 flex items-center gap-2 text-muted-foreground">
        <MapPin className="h-4 w-4 text-accent" aria-hidden />
        {property.locality}, {property.city}
      </p>
      <p className="mt-5 font-heading text-3xl font-semibold text-primary">
        {property.priceLabel}
      </p>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-md border border-border bg-background px-3 py-3"
          >
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              {spec.label}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-foreground">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ContactCTA action="enquire" href="#enquire" className="w-full sm:w-auto" />
        <ContactCTA action="call" className="w-full sm:w-auto" />
      </div>
    </div>
  );
}
