import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Official PropPact PNG with alpha (cropped; source /public/Logo.png) */
export const LOGO_SRC = "/images/proppact-logo.png";

/** Intrinsic cropped size */
export const LOGO_INTRINSIC = { width: 656, height: 265 } as const;
export const LOGO_ASPECT = LOGO_INTRINSIC.width / LOGO_INTRINSIC.height;

/**
 * Visual heights (~1.5× original mark presence, constrained to header).
 * Desktop ~66px, mobile ~52px, footer ~56px.
 */
export const LOGO_HEIGHT = {
  desktop: 66,
  desktopCompact: 60,
  mobile: 52,
  footer: 56,
} as const;

type LogoProps = {
  className?: string;
  priority?: boolean;
  /** Visual height in px; width follows aspect ratio */
  height?: number;
  /** Use responsive mobile/desktop heights automatically */
  responsive?: boolean;
};

export function Logo({
  className,
  priority = false,
  height = LOGO_HEIGHT.desktop,
  responsive = false,
}: LogoProps) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center self-center bg-transparent",
        className
      )}
      aria-label={`${SITE.name} home`}
    >
      <Image
        src={LOGO_SRC}
        alt="PropPact"
        width={LOGO_INTRINSIC.width}
        height={LOGO_INTRINSIC.height}
        priority={priority}
        unoptimized
        className={cn(
          "w-auto bg-transparent object-contain object-left",
          responsive
            ? "h-[52px] min-[900px]:h-[66px]"
            : undefined
        )}
        style={
          responsive
            ? { backgroundColor: "transparent", width: "auto" }
            : {
                height,
                width: "auto",
                maxHeight: height,
                backgroundColor: "transparent",
              }
        }
        sizes={`${width}px`}
      />
    </Link>
  );
}
