## AI Wishlist Foundation

Core repository initialized with:

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui
- pnpm

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Initial Structure

```text
src/
  app/
  components/ui/
  features/
    ai/
    auth/
    notifications/
    wishlists/
  i18n/messages/
  shared/
    components/
    hooks/
    lib/
    types/
```

## Notes

- The landing page already uses a shadcn/ui component (`Button`) as the Welcome screen.
- Environment variable template is defined in `.env.example`.

## AI coding assistants

Project-specific rules for any AI assistant (Cursor, Copilot, etc.) live in [`AGENTS.md`](./AGENTS.md). Point your tool’s “project rules” or workspace instructions at that file if supported.

## Architecture decisions (ADR)

Significant technical choices are recorded as [Architecture Decision Records](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) in [`docs/adr/`](./docs/adr/README.md) (template + index).

For Next.js docs, see [nextjs.org/docs](https://nextjs.org/docs).

## Committing Code

This project enforces [Conventional Commits](https://www.conventionalcommits.org/). When making a commit, please format your message as:

```
type(scope): subject
```

For example:

- `feat(wishlists): add share link`
- `fix(auth): resolve login timeout issue`
- `chore: update dependencies`

## CI

GitHub Actions runs automatically on every pull request to `development`.

The pipeline runs:

```bash

pnpm lint

pnpm typecheck

pnpm test

pnpm build
```
