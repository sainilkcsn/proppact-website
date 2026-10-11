import type { LeadInput } from "@/lib/lead-validation";

export type CrmLeadResult =
  | { ok: true; leadCode: string; created: boolean }
  | { ok: false; error: string };

export function crmLeadConfigError(): string | null {
  const missing = [
    !process.env.CRM_API_BASE_URL ? "CRM_API_BASE_URL" : null,
    !process.env.CRM_WEBSITE_LEAD_API_KEY ? "CRM_WEBSITE_LEAD_API_KEY" : null,
  ].filter(Boolean);
  if (missing.length) {
    return `Lead storage is not configured. Missing ${missing.join(", ")}.`;
  }
  const base = process.env.CRM_API_BASE_URL || "";
  let url: URL;
  try {
    url = new URL(base);
  } catch {
    return "Lead storage is not configured. CRM_API_BASE_URL is not a valid URL.";
  }
  if (process.env.NODE_ENV === "production" && (url.hostname === "localhost" || url.hostname === "127.0.0.1")) {
    return "Lead storage is not configured. CRM_API_BASE_URL cannot be localhost in production.";
  }
  return null;
}

export async function submitLeadToCrm(lead: LeadInput): Promise<CrmLeadResult> {
  const configError = crmLeadConfigError();
  if (configError) {
    return { ok: false, error: configError };
  }
  const base = process.env.CRM_API_BASE_URL!.replace(/\/$/, "");
  const key = process.env.CRM_WEBSITE_LEAD_API_KEY!;
  try {
    const response = await fetch(`${base}/api/integrations/website/leads`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idempotencyKey: lead.idempotencyKey,
        name: lead.name,
        mobile: lead.phone,
        email: lead.email,
        enquiryType: lead.enquiryType,
        projectName: lead.projectName,
        projectSlug: lead.projectSlug,
        propertySlug: lead.propertySlug,
        propertyTitle: lead.propertyTitle,
        locality: lead.locality,
        budget: lead.budget,
        message: lead.message,
        propertyType: lead.propertyType,
        consent: true,
        sourcePath: lead.sourcePath,
        utmSource: lead.utmSource,
        utmMedium: lead.utmMedium,
        utmCampaign: lead.utmCampaign,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    const payload = (await response.json().catch(() => null)) as {
      ok?: boolean;
      leadCode?: string;
    } | null;
    if (!response.ok || !payload?.ok || !payload.leadCode) {
      return {
        ok: false,
        error: "Your enquiry could not be completed. Please try again or contact PropPact.",
      };
    }
    return { ok: true, leadCode: payload.leadCode, created: true };
  } catch {
    return {
      ok: false,
      error: "Your enquiry could not be completed. Please try again or contact PropPact.",
    };
  }
}

export function publicLeadError(error: string): string {
  if (error.startsWith("Lead storage is not configured")) {
    return error;
  }
  return "Your enquiry could not be completed. Please try again or contact PropPact.";
}
