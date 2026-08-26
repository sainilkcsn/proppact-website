import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

type PropertyHighlightsProps = {
  highlights: string[];
};

export function PropertyHighlights({ highlights }: PropertyHighlightsProps) {
  if (highlights.length === 0) return null;

  return (
    <section className="py-10 sm:py-12">
      <Container>
        <h2 className="font-heading text-2xl font-semibold text-primary sm:text-3xl">
          Property Highlights
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-md border border-border bg-white px-4 py-3 text-sm text-muted-foreground"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
