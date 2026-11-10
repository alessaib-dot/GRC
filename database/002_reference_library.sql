-- GRC reference library extension (PostgreSQL). NOT DEPLOYED.
-- Review authorization, migrations and tenant policies before production.
CREATE TABLE IF NOT EXISTS framework_applicability (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 organization_id uuid NOT NULL REFERENCES organizations(id),
 framework_id uuid NOT NULL REFERENCES frameworks(id),
 decision text NOT NULL CHECK (decision IN ('pending','applicable','not_applicable','partially_applicable')),
 rationale text NOT NULL,
 reviewed_by uuid REFERENCES users(id),
 reviewed_at timestamptz,
 next_review_at timestamptz,
 created_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(organization_id,framework_id)
);
CREATE TABLE IF NOT EXISTS library_control_templates (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 code text NOT NULL UNIQUE,
 title_ar text NOT NULL,
 title_en text NOT NULL,
 domain text NOT NULL,
 evidence_types jsonb NOT NULL DEFAULT '[]'::jsonb,
 frequency text NOT NULL,
 version integer NOT NULL DEFAULT 1,
 is_active boolean NOT NULL DEFAULT true,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS requirement_applicability (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 organization_id uuid NOT NULL REFERENCES organizations(id),
 requirement_id uuid NOT NULL REFERENCES requirements(id),
 decision text NOT NULL CHECK (decision IN ('pending','applicable','not_applicable','partially_applicable')),
 rationale text NOT NULL,
 owner_user_id uuid REFERENCES users(id),
 reviewer_user_id uuid REFERENCES users(id),
 reviewed_at timestamptz,
 UNIQUE(organization_id,requirement_id)
);
CREATE INDEX IF NOT EXISTS framework_applicability_org_idx ON framework_applicability(organization_id,decision);
CREATE INDEX IF NOT EXISTS requirement_applicability_org_idx ON requirement_applicability(organization_id,decision);
-- Deliberate default-deny; no tenant policies are included in this reference migration.
ALTER TABLE framework_applicability ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_control_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE requirement_applicability ENABLE ROW LEVEL SECURITY;
