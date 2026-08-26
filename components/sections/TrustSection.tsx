"use client";

import { motion } from "framer-motion";
import { FileCheck2, MapPinned, ShieldCheck, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE, WHY_CHOOSE, type WhyChooseItem } from "@/lib/site";

const icons: Record<WhyChooseItem["icon"], typeof ShieldCheck> = {
  shield: ShieldCheck,
  map: MapPinned,
  user: UserRound,
  file: FileCheck2,
};

export function TrustSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Choose PropPact"
          title="Why Choose PropPact?"
          description={`Whether you're a first-time homebuyer, an investor looking for rental yield, or a business searching for commercial space, PropPact connects you with the right property, at the right price, backed by people who know ${SITE.city} inside out.`}
          as="h2"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-lg border border-border bg-white p-6 shadow-card"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
