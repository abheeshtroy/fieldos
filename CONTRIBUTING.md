# Contributing

We are an early two-person team. Please coordinate work through GitHub issues and short-lived branches; don't push directly to protected `main` once branch protection is configured.

1. Create an issue with a clear outcome and acceptance criteria.
2. Create a branch `feat/<topic>`, `fix/<topic>` or `docs/<topic>`.
3. Include tests for new behavior.
4. Run `pytest -q` and `ruff check backend engine cli tests` for Python changes; `npm run lint` for web changes.
5. Open a PR and ask the other contributor to review.
6. Link significant research or architectural decisions in Notion.

Never commit secrets or customer-specific data without explicit permission.
