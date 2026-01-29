# Circles — Social + Fintech Coordination Platform

Circles is a premium social finance experience for group savings, bill splits, and micro-transfers built with Go + Next.js.

## Architecture Diagram (Text)

```
                        ┌─────────────────────────────┐
                        │        Next.js App          │
                        │  App Router + BFF (/api/*)  │
                        └──────────────┬──────────────┘
                                       │
                                       ▼
                          ┌────────────────────────┐
                          │ Go API (cmd/api)       │
                          │ Auth · Circles · Feed  │
                          │ Ledger · Search        │
                          └────────────┬───────────┘
                                       │
                                       ▼
              ┌────────────────────────┴─────────────────────────┐
              │                 Postgres                          │
              │ users · circles · ledger · feed · notifications  │
              └────────────────────────┬─────────────────────────┘
                                       │
                                       ▼
                          ┌────────────────────────┐
                          │ Go Worker (cmd/worker) │
                          │ schedules · fanout     │
                          └────────────────────────┘
```

## Monorepo Layout

```
backend/   Go services + migrations
frontend/  Next.js App Router UI
```

## Database Schema (summary)

Key tables:
- `users`, `sessions`
- `circles`, `circle_members`
- `accounts`, `transactions`, `entries`
- `feed_items`, `reactions`, `comments`
- `notifications`

See `backend/migrations/001_init.sql` for the full schema and indexes.

## API Spec Summary (MVP)

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`

### Wallet / Ledger
- `POST /api/wallet/topup` (idempotency-key)
- `POST /api/wallet/transfer` (idempotency-key)
- `GET /api/wallet/statement?currency=NGN`

### Circles
- `POST /api/circles`
- `POST /api/circles/{id}/invite`
- `POST /api/circles/{id}/splits`
- `POST /api/circles/{id}/contributions`

### Feed + Social
- `GET /api/feed`
- `POST /api/feed/{id}/reactions`
- `POST /api/feed/{id}/comments`

### Search
- `GET /api/search?query=`

## Ledger Mapping Notes
- Top up: `External Funding (credit) → User Wallet (debit)`
- Transfer: `Sender Wallet (credit) → Recipient Wallet (debit)`
- Bill split escrow: `User Wallet (credit) → Escrow (debit)`
- Settlement: `Escrow (credit) → Payee Wallet (debit)`

## Implementation Plan (step-by-step)

1. Establish Go service scaffolding + clean architecture layout.
2. Implement ledger core invariants + idempotent transactions.
3. Define Postgres schema, migrations, and seed data.
4. Build Next.js UI with App Router, Tailwind, and shadcn-inspired components.
5. Add BFF routes + client data hooks (SWR/React Query) + SSE for realtime.
6. Implement worker for scheduled contributions + notification fanout.
7. Ship demo script + docs for product walkthrough.

## Local Development

### Backend
```
cd backend
# go run ./cmd/api
```

### Frontend
```
cd frontend
# npm install
# npm run dev
```

### Infrastructure
```
docker compose up -d
```

## Demo Script

1. Visit the landing page to see the Circles value proposition.
2. Open the feed to review social financial activity.
3. Visit Wallet to explore balances + statements.
4. Open a Circle detail to see tabs for activity, members, splits, and contributions.
5. Use the theme toggle for dark mode.

