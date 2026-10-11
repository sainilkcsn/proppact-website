"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileContactBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sync = () => {
      const navOpen = document.body.dataset.mobileNav === "open";
      const active = document.activeElement;
      const typing = isFormField(active);
      const viewport = window.visualViewport;
      const keyboardOpen = viewport ? window.innerHeight - viewport.height > 120 : false;
      setHidden(navOpen || (typing && keyboardOpen));
    };

    const onFocusOut = () => {
      window.setTimeout(sync, 0);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-mobile-nav"],
    });
    document.addEventListener("focusin", sync);
    document.addEventListener("focusout", onFocusOut);
    window.visualViewport?.addEventListener("resize", sync);
    window.visualViewport?.addEventListener("scroll", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", sync);
      document.removeEventListener("focusout", onFocusOut);
      window.visualViewport?.removeEventListener("resize", sync);
      window.visualViewport?.removeEventListener("scroll", sync);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background px-3 pt-3 shadow-[0_-4px_16px_rgba(0,60,0,0.06)] min-[900px]:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        <a
          href={SITE.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary bg-transparent text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Now
        </a>
        <a
          href={enquiryHref(pathname)}
          onClick={(event) => scrollToEnquiry(event)}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-[#002a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <MessageSquare className="h-4 w-4" aria-hidden />
          Enquire Now
        </a>
      </div>
    </div>
  );
}

function isFormField(node: Element | null) {
  return (
    node instanceof HTMLElement &&
    Boolean(node.closest("form")) &&
    node.matches("input, textarea, select")
  );
}

function enquiryHref(pathname: string) {
  const path = pathname.split("?")[0];
  if (path.startsWith("/projects/") && path !== "/projects") return `${path}#enquire`;
  if (path.startsWith("/property/")) return `${path}#enquire`;
  if (path === "/sell-your-property") return "/sell-your-property#seller-form";
  return "/contact-us#enquire";
}

function scrollToEnquiry(event: MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById("enquire") || document.getElementById("seller-form");
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  target.focus({ preventScroll: true });
}
