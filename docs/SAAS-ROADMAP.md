# امتثال — SaaS migration roadmap

## Phase 0 — Demo (current)
Single HTML file on GitHub Pages, localStorage and sample data. Useful for product demonstrations, not real customers.

## Phase 1 — Modular frontend
1. Move UI into TypeScript components: dashboard, libraries, controls, assessments, gaps, actions, evidence, reports.
2. Introduce typed models and a data-access interface: `DemoRepository` (browser) and `ApiRepository` (server).
3. Maintain Arabic RTL and English LTR translations in explicit localization files.
4. Add automated UI and accessibility tests, especially iPhone Safari.

## Phase 2 — Multi-tenant backend
1. Deploy PostgreSQL and apply a reviewed version of `database/001_initial_schema.sql`.
2. Implement managed identity with verified email, password recovery, MFA, and organization membership.
3. Enforce tenant boundaries **on the server** for every API route and database query; never trust tenant_id from a client request.
4. Enforce role-based permissions and row-level security, including for evidence and reports.
5. Create append-only audit events and backups; test restore procedures.

## Phase 3 — GRC workflows
1. Import licensed/approved regulatory framework data with version and effective date.
2. Map framework requirements to organization controls and responsible owners.
3. Add assessment cycles, approval workflow, evidence review, exceptions, and due-date reminders.
4. Add risk register, gap remediation, report exports, and immutable activity history.
5. Add private object storage with antivirus checks and expiring access links.

## Phase 4 — Commercial launch
1. Tenant onboarding, plan limits, subscription billing, invoices, customer support and usage metrics.
2. Threat modeling, penetration test, dependency scanning, incident response, security logging and privacy impact review.
3. Saudi regulatory/legal review, privacy notice, terms, data retention and hosting/data residency decision.
4. Monitoring, SLA, disaster recovery, staging/production separation, CI/CD and secrets management.

## Release gates
- No cross-tenant access in automated negative tests.
- No unauthenticated access to customer records or files.
- Server-side permission checks for every write and export.
- Backups restored in a documented exercise.
- Mobile and bilingual critical paths tested.
- Official framework text sourced and reviewed.
- No production customer data in the GitHub Pages demo.

## Suggested implementation stack (not yet provisioned)
TypeScript + React frontend, PostgreSQL database, server-side API, managed authentication, private object storage, automated tests and CI/CD. Provider selection and cloud region require separate confirmation.
