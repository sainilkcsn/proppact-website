"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPLORE_CATEGORIES } from "@/lib/site";

export function CategorySection() {
  return (
    <section className="bg-[#F1EFE9] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Explore by Category"
          title="Explore by Category"
          description="Residential Flats & Apartments | Villas | Plots & Land | Commercial Property"
          as="h2"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {EXPLORE_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={category.href}
                className="group relative block aspect-[16/10] overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                  <h3 className="font-heading text-2xl font-semibold text-primary-foreground sm:text-3xl">
                    {category.title}
                  </h3>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/95 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                    <span className="sr-only">View {category.title}</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
