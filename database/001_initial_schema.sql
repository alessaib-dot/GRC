-- امتثال / Imtithal: PostgreSQL reference schema for a future SaaS backend.
-- NOT deployed. Security-sensitive: review, test and implement server-side auth + RLS before production.
-- UUIDs supplied by application or gen_random_uuid() (pgcrypto on older PostgreSQL).
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE organizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  name_en text,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','suspended')),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE users (
  id uuid PRIMARY KEY,
  email text NOT NULL UNIQUE,
  display_name text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE memberships (
  organization_id uuid NOT NULL REFERENCES organizations(id),
  user_id uuid NOT NULL REFERENCES users(id),
  role text NOT NULL CHECK (role IN ('owner','admin','compliance','auditor','viewer')),
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (organization_id,user_id)
);
CREATE TABLE frameworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL,
  title_ar text NOT NULL,
  title_en text,
  issuer text,
  version text,
  effective_date date,
  source_url text,
  UNIQUE (code,version)
);
CREATE TABLE requirements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  framework_id uuid NOT NULL REFERENCES frameworks(id),
  code text NOT NULL,
  title_ar text NOT NULL,
  title_en text,
  description_ar text,
  UNIQUE (framework_id,code)
);
CREATE TABLE controls (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  code text NOT NULL,
  title text NOT NULL,
  description text,
  owner_user_id uuid REFERENCES users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id,code),
  UNIQUE (id,organization_id)
);
CREATE TABLE control_requirements (
  organization_id uuid NOT NULL REFERENCES organizations(id),
  control_id uuid NOT NULL,
  requirement_id uuid NOT NULL REFERENCES requirements(id),
  PRIMARY KEY (organization_id,control_id,requirement_id),
  FOREIGN KEY (control_id,organization_id) REFERENCES controls(id,organization_id)
);
CREATE TABLE assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  control_id uuid NOT NULL,
  status text NOT NULL CHECK (status IN ('compliant','partial','noncompliant','unassessed','not_applicable')),
  score numeric(5,2),
  notes text,
  assessed_by uuid REFERENCES users(id),
  assessed_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (control_id,organization_id) REFERENCES controls(id,organization_id),
  UNIQUE (id,organization_id)
);
CREATE TABLE gaps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  control_id uuid NOT NULL,
  title text NOT NULL,
  severity text NOT NULL CHECK (severity IN ('low','medium','high','critical')),
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','in_progress','closed')),
  created_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (control_id,organization_id) REFERENCES controls(id,organization_id),
  UNIQUE (id,organization_id)
);
CREATE TABLE corrective_actions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  gap_id uuid NOT NULL,
  title text NOT NULL,
  owner_user_id uuid REFERENCES users(id),
  due_date date,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','in_progress','done','cancelled')),
  created_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (gap_id,organization_id) REFERENCES gaps(id,organization_id)
);
CREATE TABLE evidence (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  control_id uuid NOT NULL,
  title text NOT NULL,
  storage_key text NOT NULL,
  mime_type text,
  sha256 text,
  uploaded_by uuid REFERENCES users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (control_id,organization_id) REFERENCES controls(id,organization_id)
);
CREATE TABLE audit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id),
  actor_user_id uuid REFERENCES users(id),
  event_type text NOT NULL,
  entity_type text NOT NULL,
  entity_id uuid,
  details jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX ON memberships (user_id);
CREATE INDEX ON controls (organization_id);
CREATE INDEX ON assessments (organization_id, assessed_at DESC);
CREATE INDEX ON gaps (organization_id,status);
CREATE INDEX ON corrective_actions (organization_id,status,due_date);
CREATE INDEX ON evidence (organization_id,control_id);
CREATE INDEX ON audit_events (organization_id,created_at DESC);

-- Default deny for client-facing database roles until policies are installed and verified.
-- A production migration MUST add explicit authenticated tenant policies, role enforcement,
-- audit-event write restrictions, secure storage policies, and server-side authorization.
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE frameworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE controls ENABLE ROW LEVEL SECURITY;
ALTER TABLE control_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE gaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE corrective_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_events ENABLE ROW LEVEL SECURITY;
