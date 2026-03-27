# ADR-001: Use Next.js App Router as the web framework

- **Status:** Accepted
- **Date:** 2026-03-26
- **Deciders:** Project team (foundation phase)

## Context

AI Wishlist needs a type-safe, modern frontend with server and client capabilities: static marketing pages, SSR for shared wishlist links, CSR for dashboards, and API route handlers to integrate with Supabase, AI providers, and email without maintaining a separate backend service in the first phase.

## Decision

We adopt **Next.js** with the **App Router** (`app/`) as the primary web framework and runtime for this repository.

Implementation details (React, TypeScript, Tailwind, deployment target) are documented in the README and code; this ADR only records the framework choice.

## Consequences

### Positive

- Single codebase for UI and HTTP handlers (Route Handlers) aligned with the “senior frontend–led” scope.
- Built-in support for multiple rendering strategies (SSG, SSR, CSR) on a per-route basis.
- Strong ecosystem and hosting options (e.g. Vercel) for the planned deployment story.

### Negative / trade-offs

- Next.js evolves quickly; team must follow **in-repo** docs under `node_modules/next/dist/docs/` and migration guides when upgrading.
- Mental model (Server Components, caching) requires discipline to avoid subtle bugs.

### Follow-up

- Supabase, AI provider, and email integrations should have their own ADRs when those choices are finalized.
- Add `docs/tech-design.md` for a consolidated architecture overview referencing these ADRs.

## Links

- Project assistant rules: [`AGENTS.md`](../../AGENTS.md)
- Template: [`000-template.md`](000-template.md)
