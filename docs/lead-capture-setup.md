# PropPact lead capture

Website enquiries are stored in the PropPact CRM. See [crm-lead-integration.md](./crm-lead-integration.md).

The Supabase `website_leads` migration remains in the repository and is not used by `POST /api/leads`.

## 1. Create a Supabase project

Create a project in the Supabase dashboard. Do not enable a public insert policy for leads.

## 2. Copy the project URL and server key

From Project Settings → API, copy:

- Project URL → `SUPABASE_URL`
- service_role / secret key → `SUPABASE_SERVICE_ROLE_KEY`

Do not use a `NEXT_PUBLIC_` name for the service role key.

## 3. Run the SQL migration

Open the Supabase SQL Editor and run the full contents of:

`supabase/migrations/20261010_create_website_leads.sql`

That creates `website_leads`, enables row level security, and revokes access from the `anon` and `authenticated` roles. The Next.js server uses the service role key, which bypasses RLS. There is no public page for browsing leads.

## 4. Create a Resend API key

Create a Resend account and an API key. Store it as `RESEND_API_KEY`.

## 5. Verify the sending domain

`support@proppact.co.in` is the notification recipient. It is not assumed to be a verified sending address.

In Resend, verify the domain you will send from, then set `LEAD_FROM_EMAIL` to an address on that verified domain.

## 6. Local environment

Copy `.env.example` to `.env.local` and fill in the real values. `.env.local` is gitignored.

## 7. Vercel environment

In the Vercel project, add the same variable names for Production and Preview:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_EMAIL`
- `LEAD_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

Use `https://proppact.co.in` for `NEXT_PUBLIC_SITE_URL` if that is the primary domain.

## 8. DNS

When verifying the sending domain in Resend, add only the DNS records Resend asks for. Do not replace existing mail or MX records for the domain.

## 9. Test locally

Start the site with `npm run dev`.

Submit the contact form with a real-looking Indian mobile number and the consent box checked.

If Supabase variables are missing, the form must show a configuration error and must not show the success message.

## 10. Test notification delivery

After a successful save, check that `notification_status` becomes `sent` in Supabase and that the team inbox receives the email. If Resend fails, the lead row should remain and `notification_status` should be `failed`.

## 11. Test the deployed site

Submit one enquiry on the Vercel deployment after the environment variables are saved and the deployment is rebuilt.

## 12. Confirm both sides

Confirm the new row in the Supabase table and the email at `support@proppact.co.in`.

## Manual checklist

- [ ] Homepage shows Greater Noida West, not `[City]`
- [ ] Four project cards use the supplied cover images
- [ ] Vista Homez, Madhav Kunj and Rudransh Urban Vista say “Price on enquiry” on the card
- [ ] Yuvraj Villa card says indicative price from ₹85 lakh plus applicable charges
- [ ] Historical prices on project pages are dated or marked undated
- [ ] Plot and commercial category pages do not show invented projects
- [ ] Phone links use `tel:+919560959762`
- [ ] Email links use `mailto:support@proppact.co.in`
- [ ] WhatsApp opens `wa.me/919560959762`
- [ ] Office map opens the supplied Google Maps link
- [ ] Contact, project, property and seller forms post to `/api/leads`
- [ ] Missing Supabase configuration returns an error, not a fake success
- [ ] A saved lead appears in `website_leads`
- [ ] A notification email arrives when Resend is configured
- [ ] `npm run lint` and `npm run build` pass

Live database and email delivery cannot be marked complete until the keys above are added and those checks are actually run.
