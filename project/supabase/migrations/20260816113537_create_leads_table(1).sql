/*
# Create leads table for the contact form & project estimator

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the contact
  - `email` (text, not null) — contact email
  - `company` (text, nullable) — company / organization name
  - `service` (text, nullable) — primary service of interest
  - `budget` (text, nullable) — selected budget band
  - `timeline` (text, nullable) — selected timeline
  - `message` (text, not null) — free-text inquiry / project notes
  - `estimator_data` (jsonb, nullable) — structured answers from the project estimator
  - `status` (text, not null default 'new') — lead pipeline status
  - `source` (text, nullable) — which form/page submitted the lead
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- This is a public contact form (no sign-in), so we use `TO anon, authenticated`.
- INSERT is open to anon/authenticated so the contact form works for all visitors.
- SELECT / UPDATE / DELETE are denied from the browser; leads are managed from the
  Supabase dashboard (service role) by the Nexavera team. We intentionally do NOT
  add SELECT/UPDATE/DELETE policies for anon, so visitors cannot read or scrape
  submitted leads.

3. Notes
- No `user_id` column — this is a single-tenant public lead intake, not per-user data.
- `estimator_data` stores the raw multi-step estimator answers as JSON for reference.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text,
  budget text,
  timeline text,
  message text NOT NULL,
  estimator_data jsonb,
  status text NOT NULL DEFAULT 'new',
  source text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
ON leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);
