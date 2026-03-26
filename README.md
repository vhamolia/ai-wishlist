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

For Next.js docs, see [nextjs.org/docs](https://nextjs.org/docs).
