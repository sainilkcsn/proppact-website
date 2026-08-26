import { Container } from "@/components/ui/Container";

type PropertyAmenitiesProps = {
  amenities: string[];
};

export function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  if (amenities.length === 0) return null;

  return (
    <section className="bg-[#F1EFE9] py-10 sm:py-12">
      <Container>
        <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
          Amenities
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {amenities.map((item) => (
            <li
              key={item}
              className="rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
