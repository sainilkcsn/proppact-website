-- PropPact website lead capture.
-- Run this in the Supabase SQL Editor for the project used by the site.
-- The public Data API must not be able to read or insert these rows.
-- The Next.js server uses the service role key, which bypasses RLS.

create table if not exists public.website_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'new',
  name text not null,
  phone text not null,
  email text,
  enquiry_type text not null,
  project_slug text,
  project_name text,
  property_slug text,
  locality text,
  budget text,
  message text not null,
  source_path text not null,
  preferred_contact_method text,
  consent boolean not null,
  notification_status text not null default 'pending',
  notification_sent_at timestamptz,
  notification_error text,
  constraint website_leads_status_check check (status in ('new', 'contacted', 'closed')),
  constraint website_leads_enquiry_type_check check (
    enquiry_type in ('general', 'project', 'property', 'site_visit', 'seller')
  ),
  constraint website_leads_notification_status_check check (
    notification_status in ('pending', 'sent', 'failed')
  ),
  constraint website_leads_consent_check check (consent = true)
);

create index if not exists website_leads_created_at_idx on public.website_leads (created_at desc);
create index if not exists website_leads_status_idx on public.website_leads (status);
create index if not exists website_leads_phone_idx on public.website_leads (phone);
create index if not exists website_leads_project_slug_idx on public.website_leads (project_slug);

alter table public.website_leads enable row level security;

revoke all on table public.website_leads from anon, authenticated;
