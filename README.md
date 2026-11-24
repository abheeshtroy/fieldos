# fieldOS

**Tools for engineers who build and deploy customer-specific solutions.**

An early-stage project to make forward-deployed engineering work faster, from understanding unfamiliar customer environments to building and supporting integrations.

> **Status: planning / scaffold.** No integrations, AI workflows, authentication, customer deployments, or production-grade security controls have been built yet. The first product workflow will be chosen from research on real FDE work rather than assuming an idealized customer scenario.

## What are we building?

**Initial hypothesis:** An engineer connects or supplies *authorized* customer system information, explores APIs and data structures, finds integration blockers, reviews potential mappings, and gets usable context for a first working integration. We want to measure engineering time saved **and** correctness, not just generate reports.

**Long-term vision:** A workbench spanning customer discovery, technical implementation, validation, deployment, and post-launch support. We expect web and CLI first; IDE and desktop later if they are useful.

The project is **not** another task tracker or a replacement for Claude Code / Codex. User discovery may change the initial scope.

## Stack

- **Web:** Next.js + TypeScript
- **API:** Python + FastAPI
- **Engine:** Standalone Python package (currently just a placeholder)
- **CLI:** Typer (basic command included)
- **Database (planned):** PostgreSQL, provisioned locally through Docker Compose
- **Testing:** pytest; web linting with ESLint

The API, engine, and CLI are kept in separate packages so the Python engine can later run both locally and through a service.

## Quick start

Requires Python 3.11+, Node.js 20.9+ and npm. Docker is optional until persistence is implemented.

### API + engine + CLI

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -e '.[dev]'
uvicorn app.main:app --app-dir backend --reload --port 8000
```

Check http://127.0.0.1:8000/health or http://127.0.0.1:8000/docs.

In another shell (with the same venv activated):

```bash
fieldos --help
fieldos status
pytest
```

### Web

```bash
cd apps/web
cp .env.local.example .env.local
npm install
npm run dev
```

Open http://localhost:3000. The starter page calls the API health endpoint (make sure the API is running).

### Optional local PostgreSQL

```bash
docker compose up -d db
```

PostgreSQL is provisioned but not yet used by the scaffold API. Never commit real credentials.

## Repo layout

```text
apps/web/          Next.js web UI
backend/app/       FastAPI application
engine/fieldos_engine/ Future environment discovery and integration logic
cli/fieldos_cli/       Python CLI
tests/             Python tests
docs/              Research, roadmap and decisions
.github/workflows/ Basic Python CI
```

## Starting work

1. Review [`docs/PROJECT_PLAN.md`](docs/PROJECT_PLAN.md) and the shared [Notion master plan](https://app.notion.com/p/417ee3737ed081158adbf79a5c7da5df).
2. Research real FDE roles, companies, customer workflows, and actual technical pain points.
3. Choose a representative scenario based on that evidence; recreate it with permitted sandbox/public data.
4. Implement the workflow manually and measure the time and failure modes.
5. Build the first time-saving engine capability and evaluate it on independently designed scenarios.

## Collaboration

- Work in short-lived branches (`feat/...`, `fix/...`, `docs/...`) and open PRs into `main`.
- Include what changed, how it was tested, and relevant screenshots/recordings for UI work.
- No real customer data, secrets, or proprietary employer materials in issues, commits, or demos.
- Track product decisions and milestones in Notion; use GitHub issues/PRs for implementation work.

## Security boundary

No real customer integrations should run through this scaffold yet. Production access requires explicit permission, least-privilege and preferably read-only execution, a secret management plan, audit logging, and security review.

## License

MIT (starter default). Decide whether to retain this before making the repository public.
