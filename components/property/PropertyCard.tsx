"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import {
  PROPERTY_STATUS_LABEL,
  formatArea,
  type Property,
} from "@/lib/property-data";
import { cn } from "@/lib/utils";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const [favourite, setFavourite] = useState(false);
  const configLabel =
    property.bhk != null
      ? `${property.bhk} BHK`
      : property.bedrooms != null
        ? `${property.bedrooms} Bed`
        : null;

  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-white shadow-card transition-shadow duration-300 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link href={`/property/${property.slug}`} className="block h-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {property.featured ? <Badge variant="accent">Featured</Badge> : null}
          <Badge variant="muted">{property.propertyType}</Badge>
        </div>
        <button
          type="button"
          aria-label={favourite ? "Remove from favourites" : "Save to favourites"}
          aria-pressed={favourite}
          onClick={() => setFavourite((value) => !value)}
          className={cn(
            "absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/95 text-primary transition-colors",
            favourite
              ? "border-accent text-accent"
              : "border-border hover:border-accent hover:text-accent"
          )}
        >
          <Heart
            className={cn("h-4 w-4", favourite && "fill-current")}
            aria-hidden
          />
        </button>
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {PROPERTY_STATUS_LABEL[property.status]}
        </p>
        <h3 className="font-heading text-xl font-semibold leading-snug text-primary">
          <Link
            href={`/property/${property.slug}`}
            className="transition-colors hover:text-accent"
          >
            {property.title}
          </Link>
        </h3>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          {property.locality}, {property.city}
        </p>
        <p className="font-heading text-2xl font-semibold text-primary">
          {property.priceLabel}
        </p>
        <p className="text-sm text-muted-foreground">
          {[configLabel, formatArea(property)].filter(Boolean).join(" · ")}
        </p>
        <ButtonLink
          href={`/property/${property.slug}`}
          variant="outline"
          className="w-full"
        >
          View Details
        </ButtonLink>
      </div>
    </article>
  );
}
