import { Mail, MapPin, MessageCircle, Phone, Search, Send } from "lucide-react";
import { buttonClassName } from "@/components/ui/Button";
import { SITE, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

type ContactAction = "call" | "enquire" | "whatsapp" | "directions" | "email" | "explore";

type ContactCTAProps = {
  action: ContactAction;
  href?: string;
  label?: string;
  whatsappMessage?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "onDark" | "onDarkOutline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const defaults: Record<ContactAction, { label: string; variant: ContactCTAProps["variant"] }> = {
  call: { label: "Call Now", variant: "outline" },
  enquire: { label: "Enquire Now", variant: "primary" },
  whatsapp: { label: "WhatsApp", variant: "outline" },
  directions: { label: "Get Directions", variant: "outline" },
  email: { label: "Email Us", variant: "outline" },
  explore: { label: "Explore Projects", variant: "primary" },
};

export function ContactCTA({
  action,
  href,
  label,
  whatsappMessage,
  variant,
  size = "md",
  className,
}: ContactCTAProps) {
  const copy = defaults[action];
  const text = label ?? copy.label;
  const look = variant ?? copy.variant ?? "primary";
  const destination = resolveHref(action, href, whatsappMessage);
  const external = action === "whatsapp" || action === "directions";
  const Icon = iconFor(action);

  return (
    <a
      href={destination}
      className={cn(buttonClassName(look, size), className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {text}
    </a>
  );
}

function resolveHref(action: ContactAction, href: string | undefined, message: string | undefined) {
  if (action === "call") return SITE.phoneHref;
  if (action === "email") return SITE.emailHref;
  if (action === "directions") return SITE.mapsUrl;
  if (action === "explore") return href || "/projects";
  if (action === "whatsapp") return message ? whatsappHref(message) : SITE.whatsappUrl;
  return href || "/contact-us#enquire";
}

function iconFor(action: ContactAction) {
  if (action === "call") return Phone;
  if (action === "email") return Mail;
  if (action === "directions") return MapPin;
  if (action === "whatsapp") return MessageCircle;
  if (action === "explore") return Search;
  return Send;
}
