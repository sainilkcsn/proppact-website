import { ContactCTA } from "@/components/ui/ContactCTA";
import { SITE } from "@/lib/site";

export function OfficeMap() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white">
      <iframe
        title="PropPact office location in Greater Noida West"
        src={SITE.mapsEmbedUrl}
        className="h-[350px] w-full max-w-full border-0 sm:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="space-y-3 border-t border-border p-4">
        <p className="text-sm text-foreground">
          <span className="font-medium">Address: </span>
          {SITE.address}
        </p>
        <div className="flex flex-wrap gap-3">
          <ContactCTA action="directions" />
          <a
            href={SITE.mapsUrl}
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
