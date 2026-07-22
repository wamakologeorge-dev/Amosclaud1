# Amosclaud Command Center

A GitHub-native control center for monitoring Amosclaud autonomous software engineering.

## Purpose

This repository is the visual dashboard for the Amosclaud repository ecosystem. The authoritative autonomous engine remains in [`wamakologeorge-dev/amosclaude-clean`](https://github.com/wamakologeorge-dev/amosclaude-clean).

## Dashboard sections

- system and agent status
- connected repository architecture
- autonomous execution path
- verification and safety gates
- recent repair and delivery links

## Local preview

Open `index.html` in a browser, or run a small static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Repository roles

| Repository | Role |
|---|---|
| `amosclaude-clean` | Core autonomous engine and control plane |
| `Amosclaud1` | Command Center dashboard |
| `starter-workflows` | Reusable GitHub Actions |
| `workspace` | Agent experiments and integration tests |
| `github-mcp-server` | GitHub tooling research |
| `awesome-copilot` | Prompts, documentation, and references |
