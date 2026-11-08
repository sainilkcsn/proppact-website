"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryPhoto } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";

type AlbumLightboxProps = {
  photos: GalleryPhoto[];
  albumTitle: string;
};

export function AlbumLightbox({ photos, albumTitle }: AlbumLightboxProps) {
  const [index, setIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const open = index !== null;
  const current = index !== null ? photos[index] : null;

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((value) => {
        if (value === null || photos.length === 0) return value;
        const next = value + direction;
        if (next < 0) return photos.length - 1;
        if (next >= photos.length) return 0;
        return next;
      });
    },
    [photos.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, open]);

  return (
    <>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, photoIndex) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setIndex(photoIndex)}
            className="group overflow-hidden rounded-lg border border-border bg-white text-left shadow-card transition-shadow hover:shadow-soft"
            aria-label={`Open ${photo.title}`}
          >
            <div
              className="relative w-full overflow-hidden bg-[#F1EFE9]"
              style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading={photoIndex < 6 ? "eager" : "lazy"}
              />
            </div>
            <div className="space-y-1 p-4">
              <h3 className="font-heading text-base font-semibold text-primary">
                {photo.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {photo.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {open && current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${albumTitle} photograph`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#003c00]/92 p-3 sm:p-6"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="Close photograph"
            onClick={() => setIndex(null)}
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-md bg-background text-primary sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Previous photograph"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-md bg-background text-primary sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next photograph"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-background text-primary sm:right-6"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div
            className="flex w-full max-w-5xl flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(delta) < 50) return;
              go(delta < 0 ? 1 : -1);
            }}
          >
            <div
              className={cn(
                "relative w-full max-h-[72vh] overflow-hidden rounded-lg bg-black/20",
                current.width >= current.height ? "aspect-[4/3]" : "aspect-[3/4]"
              )}
            >
              <Image
                src={current.image}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="max-w-2xl text-center text-primary-foreground">
              <p className="font-heading text-lg font-semibold">{current.title}</p>
              <p className="mt-1 text-sm text-primary-foreground/85">{current.caption}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-primary-foreground/70">
                {(index ?? 0) + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
