import { NextResponse } from "next/server";
import { crmLeadConfigError, publicLeadError, submitLeadToCrm } from "@/lib/crm-leads";
import { validateLeadPayload } from "@/lib/lead-validation";

const hits = new Map<string, number[]>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries. Please call PropPact or try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = validateLeadPayload(body);
  if (parsed.honeypot) {
    return NextResponse.json({ ok: true, id: null });
  }
  if (!parsed.lead) {
    return NextResponse.json(
      { ok: false, error: parsed.errors?.[0]?.message || "Please check the form." },
      { status: 400 }
    );
  }

  const configError = crmLeadConfigError();
  if (configError) {
    return NextResponse.json({ ok: false, error: configError }, { status: 503 });
  }

  const saved = await submitLeadToCrm(parsed.lead);
  if (!saved.ok) {
    return NextResponse.json({ ok: false, error: publicLeadError(saved.error) }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: saved.leadCode });
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}
