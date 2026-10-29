# Architecture

**Trust label:** `educational-reference`  
**Repo:** `wax-on-chain-learning-path-visualizer`

---

## Purpose

A lesson is **ready** only when its required id is already **done** (or it has no requirement). Cycles and missing ids are refused. Nothing is stored; no XP is computed.

---

## System overview

```
┌──────────────────────────────────────────────┐
│              Offline demo UI                  │
│              Demo.tsx · Cases.tsx             │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│         statuses(lessons, done)               │
│              path.ts                          │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│         Unsent request builders               │
│         api.ts · usecases.ts                  │
└──────────────────────────────────────────────┘
```

---

## Layers

1. **Validation** — size, slugs, uniqueness, requires, cycles, done ⊆ lessons
2. **Status map** — done / ready / locked per lesson
3. **Builders** — Educational unsent API shapes
4. **Demo** — Same pure functions as tests

---

## Honesty boundaries

| Boundary | Enforcement |
|----------|-------------|
| No persistence | Argument-only lists |
| No XP/levels | Neighbor: gamified progress system |
| No mint | Neighbor: credential issuer |

---

## Deep docs

- [docs/PATH-RULES.md](docs/PATH-RULES.md)
- [docs/WORKED-EXAMPLES.md](docs/WORKED-EXAMPLES.md)
- [VERIFICATION-LOG.md](VERIFICATION-LOG.md)
- [README.md](README.md)

---

*Pixel Journey — Architecture that visualizes readiness, not grades.*
