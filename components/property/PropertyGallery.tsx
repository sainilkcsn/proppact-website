"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const safeImages = images.length > 0 ? images : ["/images/hero-home.jpg"];
  const current = safeImages[index] ?? safeImages[0];

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((value) => {
        const next = value + direction;
        if (next < 0) return safeImages.length - 1;
        if (next >= safeImages.length) return 0;
        return next;
      });
    },
    [safeImages.length]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(false);
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, lightbox]);

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted sm:aspect-[16/11]">
        <Image
          src={current}
          alt={`${title} — image ${index + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3">
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-background/95 text-primary"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-background/95 text-primary"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <button
            type="button"
            aria-label="Open full screen gallery"
            onClick={() => setLightbox(true)}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-background/95 px-3 text-sm font-medium text-primary"
          >
            <Maximize2 className="h-4 w-4" aria-hidden />
            Expand
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
        {safeImages.map((image, imageIndex) => (
          <button
            key={`${image}-${imageIndex}`}
            type="button"
            aria-label={`Show image ${imageIndex + 1}`}
            aria-current={imageIndex === index}
            onClick={() => setIndex(imageIndex)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-md border",
              imageIndex === index
                ? "border-primary ring-2 ring-primary/30"
                : "border-border opacity-80 hover:opacity-100"
            )}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/90 p-4"
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setLightbox(false)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-background text-primary"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(-1)}
            className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-background text-primary"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <div className="relative h-[70vh] w-full max-w-5xl">
            <Image
              src={current}
              alt={`${title} — full screen image ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-background text-primary sm:right-16"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      ) : null}
    </div>
  );
}
