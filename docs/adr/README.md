# Architecture Decision Records (ADR)

This folder holds **ADRs**: short, versioned documents that capture **why** we made important technical choices. They complement code and PRs—future readers (and AI assistants) see intent, not only the outcome.

## Is this still relevant?

Yes. ADRs remain a common practice (popularized by Michael Nygard; variants include **MADR**, **Y-statement**). They are lightweight compared to full RFCs and fit well next to `docs/tech-design.md` when you add it.

## Conventions

- **Numbering:** `NNN-short-title.md` (e.g. `001-use-nextjs-app-router.md`). Numbers are stable; titles can be adjusted in the filename when clarity matters.
- **Status:** Each ADR states `Accepted`, `Proposed`, `Deprecated`, or `Superseded by ADR-00X`.
- **One decision per file** keeps diffs and reviews small.

## Index

| ADR                                 | Title                                       | Status   |
| ----------------------------------- | ------------------------------------------- | -------- |
| [000](000-template.md)              | Template                                    | —        |
| [001](001-use-nextjs-app-router.md) | Use Next.js App Router as the web framework | Accepted |
