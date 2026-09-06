# AI Act Ready: Learn

A bite-sized, visual learning app that takes complete novices to exam-ready
for EU AI Act practitioner/professional certification exams. Full product
spec and architecture in `ai-act-learn-platform-spec.md` (delivered
alongside this repo).

Target production URL: **mockexam.aiactready.tech**

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Supabase (Postgres + Auth + Row Level Security)
- Claude (Anthropic API) for the AI tutor, behind a provider-agnostic
  interface in `src/services/ai/`
- Web Speech API for audio in MVP (`src/services/audio/`)
- Deployment target: Vercel (frontend/API) + Supabase (DB/Auth)

## Local setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create a Supabase project** at [supabase.com](https://supabase.com) (free tier is fine for MVP).

3. **Run the migration** — in the Supabase SQL editor, paste and run
   `supabase/migrations/0001_init.sql`. This creates every table, the
   auto-profile-on-signup trigger, and Row Level Security policies.

4. **Copy environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in:
   - `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase project Settings → API
   - `SUPABASE_SERVICE_ROLE_KEY` — same page (server-only, never commit, never ship to the client)
   - `ANTHROPIC_API_KEY` — for the AI tutor

5. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## What's working right now (Stage 1)

- Landing page with the brand design system (dark navy/cyan/blue-violet, Space Grotesk + Inter)
- Working signup/login against Supabase Auth, with a middleware-enforced
  auth wall on every learner route (`/dashboard`, `/learn`, `/quiz`, etc.)
- Full database schema + RLS policies for the entire data model
  (tracks, courses, modules, lessons, concepts, glossary, questions,
  attempts, revision items, mock exams, sessions, admin audit log)
- Spaced-repetition scheduler and mastery-scoring logic
  (`src/services/spaced-repetition/`) — pure functions, unit-testable,
  not yet wired to a UI
- AI tutor service layer with a working Claude adapter
  (`src/services/ai/`) — not yet wired to a UI
- Dashboard shell wired to real auth (placeholder content pending seed data)

## What's not built yet

Lesson player, quiz runner, glossary UI, Knowledge Map, mock exam runner,
admin CRUD, and seed content — see the implementation plan in the spec
document for the order these are being built in.

## Folder structure

```
src/
  app/            Next.js routes (pages, layouts, route handlers)
  components/     Reusable UI (marketing/, lesson/, ui/)
  lib/supabase/   Supabase client factories (browser, server, admin)
  services/
    ai/           Provider-agnostic AI tutor interface + Claude adapter
    audio/        TTS abstraction (Web Speech API for MVP)
    spaced-repetition/  Scheduling + mastery scoring (pure functions)
  types/          Shared TypeScript types (database.ts is a placeholder
                  until real Supabase types are generated — see comment
                  in that file)
supabase/
  migrations/     SQL migrations, run in order
```

## Deploying to mockexam.aiactready.tech

Covered step-by-step once Stage 1 is confirmed working — will include
Vercel project setup, environment variables, DNS records for the
subdomain, and the production Supabase project.

## Not legal advice

This is an educational tool. Content is reviewed against official EU AI Act
sources (tracked per-lesson via `content_sources`), but nothing in this
app constitutes legal advice.
