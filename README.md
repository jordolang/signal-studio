# Signal Studio

Creator platform with integrated market research tools.

## Overview

Signal Studio combines Reddit trend analysis with a full creator toolkit. Monitor subreddits for emerging themes, sentiment shifts, and content demand signals, then use that intelligence to create and publish content your audience actually wants.

## Tech Stack

- **Framework:** Next.js 15 (App Router + React Server Components)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 + shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **Database:** PostgreSQL via Prisma ORM (Neon Database)
- **Auth:** Clerk
- **State Management:** Zustand
- **Forms:** React Hook Form + Zod validation
- **Testing:** Vitest + Testing Library + MSW
- **Deployment:** Vercel + Prisma Accelerate

## Getting Started

```bash
# Clone the repo
git clone https://github.com/jordolang/signal-studio.git
cd signal-studio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Clerk keys, Neon DATABASE_URL, etc.

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # Public landing pages
│   ├── (dashboard)/     # Authenticated dashboard
│   │   ├── research/    # Reddit research tools
│   │   ├── studio/      # Content creation & library
│   │   ├── subscribers/ # Subscriber management
│   │   ├── analytics/   # Performance analytics
│   │   └── settings/    # User settings
│   ├── (auth)/          # Sign-in / sign-up (Clerk)
│   └── (admin)/         # Admin panel
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── dashboard/       # Dashboard shell components
│   ├── research/        # Research-specific components
│   └── studio/          # Studio-specific components
├── lib/                 # Utilities, DB client, auth helpers
├── hooks/               # Custom React hooks
├── stores/              # Zustand state stores
└── types/               # Shared TypeScript types
```

## Key Features

### Reddit Research Dashboard
- Subreddit tracking (pre-seeded with target communities)
- Trending keyword analysis with sentiment scoring
- Post feed with sentiment indicators
- Demand signal detection (what content people are requesting)

### Creator Studio
- Content library with grid/list views
- Content creation wizard (voice, video, text, image)
- Voice baseline management
- SFW/NSFW content toggle system

### Subscriber Management
- Inbound subscriber tracking
- Status management (active, paused, unsubscribed)
- Source attribution

## Architecture Notes

- **SFW/NSFW:** Handled via flags and enums at the data level — no separate code paths
- **Reddit scraping:** Designed as a background job/cron for public post analysis only (read-only, no outreach)
- **Inbound-only:** Subscribers come to the creator; no outbound messaging features
- **No payments:** Payment processing will be added in a future phase

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier |
| `npm run test` | Run Vitest |
| `npm run db:push` | Push Prisma schema to database |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:migrate` | Run Prisma migrations |

## License

Private — all rights reserved.
