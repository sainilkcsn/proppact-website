"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";
import { SITE, projectWhatsappMessage, whatsappHref } from "@/lib/site";

export function MobileContactBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const project = PROJECTS.find((item) => pathname === `/projects/${item.slug}`);
  const whatsapp = project
    ? whatsappHref(projectWhatsappMessage(project.name))
    : SITE.whatsappUrl;

  useEffect(() => {
    const footer = document.querySelector("footer");
    const sync = () => {
      const navOpen = document.body.dataset.mobileNav === "open";
      const formDone = Boolean(document.querySelector("[data-enquiry-complete]"));
      const footerVisible = footer
        ? footer.getBoundingClientRect().top < window.innerHeight - 8
        : false;
      setHidden(navOpen || formDone || footerVisible);
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["data-mobile-nav", "data-enquiry-complete"],
    });
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [pathname]);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2 shadow-[0_-8px_24px_rgba(0,60,0,0.08)] min-[900px]:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href={SITE.phoneHref}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-primary px-2 text-sm font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Now
        </a>
        <a
          href={enquiryHref(pathname)}
          onClick={(event) => scrollToEnquiry(event)}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md bg-primary px-2 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Enquire Now
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-border bg-white px-2 text-sm font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function enquiryHref(pathname: string) {
  if (pathname.startsWith("/projects/") && pathname !== "/projects") {
    return `${pathname.split("?")[0]}#enquire`;
  }
  if (pathname.startsWith("/property/")) return `${pathname}#enquire`;
  if (pathname === "/sell-your-property") return "/sell-your-property#seller-form";
  if (pathname === "/contact-us") return "/contact-us#enquire";
  return "/contact-us#enquire";
}

function scrollToEnquiry(event: MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById("enquire") || document.getElementById("seller-form");
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  const focusable = target.querySelector<HTMLElement>("input, select, textarea");
  focusable?.focus({ preventScroll: true });
}
