# امتثال | Imtithal GRC

Arabic-first Saudi-market GRC product prototype, designed for an incremental migration to a multi-tenant SaaS.

## Current live demo
https://alessaib-dot.github.io/GRC/

The current `index.html` is a standalone static demo hosted on GitHub Pages. Its data is illustrative and is saved in the browser's localStorage. It has **no real user authentication, server-side authorization, tenant isolation, encrypted document store, billing, or central database**. Do not upload real customer data.

## Migration-ready direction
- Frontend: migrate the current UI to TypeScript/React in modular routes, preserving the Arabic/English experience and the domain vocabulary.
- Backend: authenticated API with server-side authorization and immutable audit events.
- Database: PostgreSQL with tenant-aware schema and Row Level Security.
- Identity: managed authentication with MFA and organization memberships; roles owner/admin/compliance/auditor/viewer.
- Evidence: private object storage, short-lived signed URLs, upload scanning, retention controls.
- Hosting: GitHub Pages remains for the demo only; production needs an application/API hosting service.
- Payments: integrate only after tenancy, access controls, backups and security review.

## Domain modules
Organizations, users and memberships; regulatory frameworks; requirements and controls; assessments; gaps and risks; corrective actions; evidence metadata; reports; audit events.

## Repository
- `index.html`: existing interactive demo.
- `docs/SAAS-ROADMAP.md`: phased production migration and acceptance criteria.
- `database/001_initial_schema.sql`: **reference PostgreSQL schema, not yet deployed**.

## Safety
This prototype is not a legal compliance certification and does not reproduce complete authoritative Saudi regulatory texts. Confirm applicable regulatory requirements with official sources and qualified specialists before production use.
