import { getProjectBySlug } from "@/lib/projects-data";
import { getPropertyBySlug } from "@/lib/property-data";

export const ENQUIRY_TYPES = [
  "general",
  "project",
  "property",
  "site_visit",
  "seller",
] as const;

export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export type LeadInput = {
  name: string;
  phone: string;
  email: string | null;
  enquiryType: EnquiryType;
  projectSlug: string | null;
  projectName: string | null;
  propertySlug: string | null;
  propertyTitle: string | null;
  locality: string | null;
  budget: string | null;
  propertyType: string | null;
  message: string;
  sourcePath: string;
  preferredContactMethod: "phone" | "email";
  consent: true;
  idempotencyKey: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
};

export type LeadFieldError = { field: string; message: string };

const MAX_BODY = 8000;

export function normalizeIndianPhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  let national = digits;
  if (national.length === 12 && national.startsWith("91")) national = national.slice(2);
  if (national.length === 11 && national.startsWith("0")) national = national.slice(1);
  if (!/^[6-9]\d{9}$/.test(national)) return null;
  return `+91${national}`;
}

export function validateLeadPayload(body: unknown): {
  lead?: LeadInput;
  honeypot?: boolean;
  errors?: LeadFieldError[];
} {
  if (body == null || typeof body !== "object") {
    return { errors: [{ field: "body", message: "Invalid request." }] };
  }
  const raw = body as Record<string, unknown>;
  if (JSON.stringify(raw).length > MAX_BODY) {
    return { errors: [{ field: "body", message: "Request is too large." }] };
  }
  if (typeof raw.companyWebsite === "string" && raw.companyWebsite.trim()) {
    return { honeypot: true };
  }

  const errors: LeadFieldError[] = [];
  const name = stringField(raw.name, 120);
  const phoneRaw = stringField(raw.phone, 20);
  const emailRaw = stringField(raw.email, 160);
  const enquiryType = stringField(raw.enquiryType, 32);
  const message = stringField(raw.message, 2000);
  const sourcePath = stringField(raw.sourcePath, 200);
  const locality = stringField(raw.locality, 120);
  const budget = stringField(raw.budget, 80);
  const interest = stringField(raw.interest, 80);
  const propertyType = stringField(raw.propertyType, 80);
  const propertySize = stringField(raw.propertySize, 80);
  const idempotencyKey = stringField(raw.idempotencyKey, 80);
  const utmSource = stringField(raw.utmSource, 120);
  const utmMedium = stringField(raw.utmMedium, 120);
  const utmCampaign = stringField(raw.utmCampaign, 120);

  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(idempotencyKey)) {
    errors.push({ field: "idempotencyKey", message: "This enquiry could not be identified. Refresh the page and try again." });
  }

  if (!name) errors.push({ field: "name", message: "Name is required." });
  const phone = phoneRaw ? normalizeIndianPhone(phoneRaw) : null;
  if (!phone) errors.push({ field: "phone", message: "Enter a valid Indian mobile number." });
  if (!ENQUIRY_TYPES.includes(enquiryType as EnquiryType)) {
    errors.push({ field: "enquiryType", message: "Enquiry type is not supported." });
  }
  if (!message) errors.push({ field: "message", message: "Message is required." });
  if (raw.consent !== true) {
    errors.push({ field: "consent", message: "Consent is required." });
  }

  let email: string | null = null;
  if (emailRaw) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw)) {
      errors.push({ field: "email", message: "Enter a valid email." });
    } else {
      email = emailRaw.toLowerCase();
    }
  }

  let projectSlug: string | null = null;
  let projectName: string | null = null;
  let projectLocality: string | null = null;
  const requestedProject = stringField(raw.projectSlug, 80);
  if (requestedProject) {
    const project = getProjectBySlug(requestedProject);
    if (!project) {
      errors.push({ field: "projectSlug", message: "Unknown project." });
    } else {
      projectSlug = project.slug;
      projectName = project.name;
      projectLocality = project.locality;
    }
  }

  let propertySlug: string | null = null;
  let propertyTitle: string | null = null;
  let propertyLocality: string | null = null;
  const requestedProperty = stringField(raw.propertySlug, 120);
  if (requestedProperty) {
    const property = getPropertyBySlug(requestedProperty);
    if (!property) {
      errors.push({ field: "propertySlug", message: "Unknown property." });
    } else {
      propertySlug = property.slug;
      propertyTitle = property.title;
      propertyLocality = property.locality;
    }
  }

  if (
    (enquiryType === "project" || enquiryType === "site_visit") &&
    !projectSlug
  ) {
    errors.push({ field: "projectSlug", message: "A project is required for this enquiry." });
  }
  if (enquiryType === "property" && !propertySlug) {
    errors.push({ field: "propertySlug", message: "A property is required for this enquiry." });
  }

  const safePath =
    sourcePath.startsWith("/") && !sourcePath.startsWith("//") ? sourcePath : "/";

  const detailLines = [
    interest ? `Property interest: ${interest}` : "",
    propertyType ? `Property type: ${propertyType}` : "",
    propertySize ? `Property size: ${propertySize}` : "",
    message,
  ].filter(Boolean);

  if (errors.length || !name || !phone || !message) {
    return { errors };
  }

  return {
    lead: {
      name,
      phone,
      email,
      enquiryType: enquiryType as EnquiryType,
      projectSlug,
      projectName,
      propertySlug,
      propertyTitle,
      locality: locality || projectLocality || propertyLocality || null,
      budget: budget || null,
      propertyType: propertyType || null,
      message: detailLines.join("\n"),
      sourcePath: safePath,
      preferredContactMethod: email ? "email" : "phone",
      consent: true,
      idempotencyKey: idempotencyKey.toLowerCase(),
      utmSource: utmSource || null,
      utmMedium: utmMedium || null,
      utmCampaign: utmCampaign || null,
    },
  };
}

function stringField(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
