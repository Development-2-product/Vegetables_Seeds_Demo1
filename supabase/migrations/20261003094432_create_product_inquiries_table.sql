/*
# Create product_inquiries table (single-tenant, no auth)

## Purpose
Stores product inquiry / contact form submissions from the seed & agriculture
showcase website. This is a public contact form with no sign-in, so anyone
(anon role) can submit an inquiry. Only the site operators need to read them.

## New Tables
- `product_inquiries`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — submitter's full name
  - `company_name` (text, nullable) — optional company/farm name
  - `phone` (text, not null) — contact phone
  - `email` (text, not null) — contact email
  - `location` (text, nullable) — geographic location
  - `product_interest` (text, nullable) — which product/variety they're interested in
  - `required_quantity` (text, nullable) — quantity needed
  - `message` (text, not null) — the inquiry message
  - `status` (text, default 'new') — inquiry status for future CRM use
  - `created_at` (timestamptz, default now())

## Security
- RLS enabled on `product_inquiries`.
- INSERT allowed for anon + authenticated (public form submissions).
- SELECT/UPDATE/DELETE restricted to authenticated only (site operators who log in).
  The anon-key frontend can submit but cannot read inquiries back, which is the
  correct posture for a public contact form.
*/

CREATE TABLE IF NOT EXISTS product_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text,
  phone text NOT NULL,
  email text NOT NULL,
  location text,
  product_interest text,
  required_quantity text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE product_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON product_inquiries;
CREATE POLICY "anon_insert_inquiries"
ON product_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_inquiries" ON product_inquiries;
CREATE POLICY "auth_select_inquiries"
ON product_inquiries FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_inquiries" ON product_inquiries;
CREATE POLICY "auth_update_inquiries"
ON product_inquiries FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_inquiries" ON product_inquiries;
CREATE POLICY "auth_delete_inquiries"
ON product_inquiries FOR DELETE
TO authenticated
USING (true);
