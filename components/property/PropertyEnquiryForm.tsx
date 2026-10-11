import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import type { Property } from "@/lib/property-data";

type PropertyEnquiryFormProps = {
  property: Property;
};

export function PropertyEnquiryForm({ property }: PropertyEnquiryFormProps) {
  return (
    <section className="bg-[#F1EFE9] py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <LeadCaptureForm
          title="Enquire about this demonstration listing"
          description="This page is sample interface data, not a live PropPact listing. The form still sends the property title and slug through the website enquiry path when lead storage is configured."
          sourcePath={`/property/${property.slug}`}
          enquiryType="property"
          propertySlug={property.slug}
        />
      </div>
    </section>
  );
}
