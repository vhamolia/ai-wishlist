# Guidelines for AI coding assistants

Use this file as the **single source of project-specific rules** when working in this repository—whether you run in Cursor, GitHub Copilot, ChatGPT, Claude, or another coding assistant. Tool-specific config may point here; the content is **not** tied to any vendor.

## Next.js

This project may use a **Next.js version that differs** from common training cutoffs: APIs, conventions, and file layout can diverge from older docs.

Before writing or suggesting Next.js code:

- Prefer the **installed** version’s documentation: see `node_modules/next/dist/docs/` in this repo.
- Follow deprecation notices and current APIs from that tree, not generic web snippets alone.

## Architecture decisions

Major technical choices are documented in [`docs/adr/`](./docs/adr/README.md). Prefer those records when they conflict with generic assumptions.

<!-- Keep vendor-neutral blocks below if you add more sections -->
