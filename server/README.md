# CS Major Planner — Backend

Express + SQLite API providing account signup/login and persisted course-progress storage for the planner frontend.

## Run locally

```bash
cd server
npm install
npm run dev
```

Listens on `http://localhost:4000` by default. `.env` is already configured for local dev (copy `.env.example` if you ever need to regenerate it). The SQLite database file is created automatically at `server/db/data/app.db` on first run.

The frontend (`npm run dev` at the repo root) proxies `/api/*` requests to this server, so run both at the same time during development.
