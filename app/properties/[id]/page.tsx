import { redirect } from "next/navigation";
import { PROPERTIES } from "@/lib/property-data";

type LegacyPropertyPageProps = {
  params: { id: string };
};

/**
 * Legacy route support — redirects old /properties/[id] URLs to /property/[slug].
 */
export default function LegacyPropertyRedirect({
  params,
}: LegacyPropertyPageProps) {
  const property =
    PROPERTIES.find((item) => item.id === params.id) ??
    PROPERTIES.find((item) => item.slug === params.id);

  if (property) {
    redirect(`/property/${property.slug}`);
  }

  redirect("/residential-properties");
}
