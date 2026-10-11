import { escapeHtml, type LeadInput } from "@/lib/lead-validation";
import { SITE } from "@/lib/site";

type NotifyInput = {
  id: string;
  createdAt: string;
  lead: LeadInput;
};

export async function notifyLead(input: NotifyInput): Promise<{
  sent: boolean;
  error: string | null;
}> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_NOTIFICATION_EMAIL || SITE.email;
  if (!apiKey || !from) {
    return {
      sent: false,
      error: "RESEND_API_KEY or LEAD_FROM_EMAIL is not configured.",
    };
  }

  const subjectName = input.lead.projectName || input.lead.enquiryType;
  const pageUrl = `${SITE.url}${input.lead.sourcePath}`;
  const html = renderNotification(input, pageUrl);

  const team = await sendEmail({
    apiKey,
    from,
    to,
    subject: `New PropPact Website Lead — ${subjectName}`,
    html,
  });
  if (!team.ok) return { sent: false, error: team.error };

  if (input.lead.email) {
    await sendEmail({
      apiKey,
      from,
      to: input.lead.email,
      subject: "PropPact received your enquiry",
      html: `<p>Thank you for contacting PropPact. Your enquiry has been recorded.</p><p>Reference: ${escapeHtml(input.id)}</p><p>This message confirms that we received your form. It does not confirm a site visit, price or availability.</p>`,
    });
  }

  return { sent: true, error: null };
}

async function sendEmail(options: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${options.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: options.from,
        to: [options.to],
        subject: options.subject,
        html: options.html,
      }),
    });
    if (!response.ok) {
      const text = await response.text();
      return { ok: false, error: text.slice(0, 500) };
    }
    return { ok: true, error: null };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Email request failed.",
    };
  }
}

function renderNotification(input: NotifyInput, pageUrl: string) {
  const lead = input.lead;
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;"><strong>${escapeHtml(label)}</strong></td><td>${value}</td></tr>`;
  return `<table>${[
    row("Lead ID", escapeHtml(input.id)),
    row("Date", escapeHtml(input.createdAt)),
    row("Name", escapeHtml(lead.name)),
    row("Phone", `<a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a>`),
    row("Email", lead.email ? escapeHtml(lead.email) : "Not supplied"),
    row("Enquiry type", escapeHtml(lead.enquiryType)),
    row("Project", lead.projectName ? escapeHtml(lead.projectName) : "—"),
    row("Property", lead.propertySlug ? escapeHtml(lead.propertySlug) : "—"),
    row("Locality", lead.locality ? escapeHtml(lead.locality) : "—"),
    row("Budget", lead.budget ? escapeHtml(lead.budget) : "—"),
    row("Message", escapeHtml(lead.message).replace(/\n/g, "<br />")),
    row("Source", `<a href="${escapeHtml(pageUrl)}">${escapeHtml(pageUrl)}</a>`),
  ].join("")}</table>`;
}
