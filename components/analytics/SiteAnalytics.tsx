"use client";

import { useEffect } from "react";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";

const PRODUCTION_HOST = "www.proppact.co.in";

function allowProductionEvent(event: BeforeSendEvent): BeforeSendEvent | null {
  if (window.location.hostname !== PRODUCTION_HOST) return null;
  try {
    const url = new URL(event.url, window.location.origin);
    return { ...event, url: url.pathname };
  } catch {
    return null;
  }
}

export function SiteAnalytics() {
  return (
    <>
      <Analytics beforeSend={allowProductionEvent} />
      <AnalyticsClicks />
    </>
  );
}

function AnalyticsClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (window.location.hostname !== PRODUCTION_HOST) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const label = (link.textContent ?? "").replace(/\s+/g, " ").trim();
      const page = window.location.pathname;

      if (href.startsWith("tel:")) {
        track("Call Now", { page });
        return;
      }
      if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) {
        track("WhatsApp", { page });
        return;
      }
      if (/^enquire now$/i.test(label)) {
        track("Enquire Now", { page });
        return;
      }

      const project = projectSlug(href);
      if (project) {
        track("Project detail", { page, project });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

function projectSlug(href: string) {
  try {
    const path = new URL(href, window.location.origin).pathname;
    const match = path.match(/^\/projects\/([^/]+)$/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}
