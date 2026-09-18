# Cornell CS Major Planner

Track your progress through Cornell's Computer Science (A&S) major requirements in one place. Built for Cornell CS students who want a quick, visual way to see which courses they've completed and what's still left across Intro Computing, Math, Core CS, Electives, Practicum/Project, Technical Electives, External Specialization, and the three-credit elective.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<!-- Add build / coverage / version badges here once CI is set up, e.g.:
[![Build Status](https://img.shields.io/github/actions/workflow/status/hughknoepp/cornell-cs-major-planner/ci.yml)](...)
-->

## Features

- Account signup/login with persisted, per-user progress
- Section-by-section requirement tracking (Intro Computing, Math, Core CS, Electives, Practicum/Project, Technical Electives, External Specialization, Three-Credit Elective)
- Course descriptions, prerequisites/corequisites, and outcomes for each section
- Toggle courses in/out of your "completed" list, with live feedback on whether a section's requirements are met
- Manual course-entry forms for External Specialization and the Three-Credit Elective, including department/credit sanity checks

## Tech Stack / Built With

**Frontend**
- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) (build tool / dev server)
- [React Router](https://reactrouter.com/) + [react-router-hash-link](https://github.com/rafrex/react-router-hash-link)

**Backend**
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) (SQLite)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) + [bcryptjs](https://github.com/dcodeIO/bcrypt.js) for auth
- `cookie-parser`, `cors`, `dotenv`

**Tooling**
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) for linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later (v24 recommended)
- npm (bundled with Node.js)

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/hughknoepp/cornell-cs-major-planner.git
   cd cornell-cs-major-planner
   ```
2. Install frontend dependencies (repo root):
   ```bash
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd server
   npm install
   cd ..
   ```
4. Configure environment variables for the backend. A working `server/.env` is already included for local development; to regenerate it, copy `server/.env.example` to `server/.env` and set your own `JWT_SECRET`:
   ```bash
   cp server/.env.example server/.env
   ```

## Usage & Examples

Run the backend and frontend in two terminals:

```bash
# Terminal 1 — backend API (http://localhost:4000)
cd server
npm run dev
```

```bash
# Terminal 2 — frontend (http://localhost:5173)
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173), sign up for an account, and start checking off completed courses. The frontend proxies `/api/*` requests to the backend, so both need to be running together.

## Contributing

Pull requests are welcome! To contribute:

1. Fork the repo and create a feature branch.
2. Make your changes (frontend in `src/`, backend in `server/`).
3. Run the linter before committing: `npm run lint`.
4. Open a pull request describing what changed and why.

Found a bug or have a feature request? Open an issue on the [GitHub Issues page](https://github.com/hughknoepp/cornell-cs-major-planner/issues).

## License & Credits

**License:** [MIT](LICENSE)

**Acknowledgments:**
- Course requirements and descriptions sourced from the [Cornell CS (A&S) curriculum guide](https://catalog.cornell.edu/programs/computer-science-ba/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
