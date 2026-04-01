"use client";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="w-full max-w-2xl rounded-xl border bg-card p-8 text-card-foreground shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome to AI Wishlist</h1>
        <p className="mt-3 text-muted-foreground">
          Foundation initialized with Next.js, TypeScript, Tailwind CSS v4, and shadcn/ui.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className={buttonVariants({ variant: "outline" })}
            href="https://nextjs.org/docs"
            rel="noreferrer"
            target="_blank"
          >
            Open Next.js docs
          </a>
          <a
            className={buttonVariants({ variant: "default" })}
            href="https://ui.shadcn.com/docs"
            rel="noreferrer"
            target="_blank"
          >
            Open shadcn/ui docs
          </a>
        </div>
      </section>
    </main>
  );
}
