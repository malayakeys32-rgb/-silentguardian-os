# SilentGuardianOS

A symptom check-in, risk-scoring, and silent-alert companion app for people
managing high-risk heart conditions (e.g. CHF, transplant patients).

Stack: Next.js 14 (App Router) + TypeScript + Tailwind + Prisma + PostgreSQL.

## Local setup

```bash
npm install
cp .env.example .env
# edit .env and set DATABASE_URL to a real Postgres connection string

npx prisma migrate dev --name init
npm run dev
```

Visit http://localhost:3000.

## Project structure

```
silentguardian-os/
  prisma/schema.prisma        # data model
  src/app/                    # pages + API routes (App Router)
  src/components/             # UI components
  src/lib/                     # prisma client, risk engine, device helper
```

## Deploying to Fly.io

1. Install the Fly CLI and log in:
   ```bash
   curl -L https://fly.io/install.sh | sh
   fly auth login
   ```

2. Create a Postgres database (Fly Postgres, Neon, or Supabase all work):
   ```bash
   fly postgres create --name silentguardian-db
   ```

3. Create the app (this repo already includes `fly.toml`, so you can skip
   `fly launch` and go straight to creating the app + deploying):
   ```bash
   fly apps create silentguardian-os
   fly secrets set DATABASE_URL="postgresql://..."
   fly deploy
   ```

4. Run migrations against the production database once deployed:
   ```bash
   fly ssh console -C "npx prisma migrate deploy"
   ```

## Deploying via GitHub

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SilentGuardianOS"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. Connect the repo to Fly.io (optional, for auto-deploy on push) or to
   Vercel if you'd rather host there instead of Fly.io — both work with
   this Next.js + Prisma setup with no changes needed besides the
   `DATABASE_URL` environment variable.

## Important note

This app is a prototype/companion tool, not a certified medical device. The
risk scoring is a simple heuristic, not a diagnosis. Anyone using this
should still be directed to call emergency services (911) or their care
team for anything urgent — the in-app copy reflects that, and it should
stay that way if you extend this further.
