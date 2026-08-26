import Image from "next/image";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  title,
  description,
  imageSrc,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-primary/70" aria-hidden />
        </>
      ) : null}
      <Container className="relative py-14 sm:py-20">
        <h1 className="max-w-3xl font-heading text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
