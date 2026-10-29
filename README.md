# wax-on-chain-learning-path-visualizer

> **Trust Label:** `educational-reference`  
> **Verification:** [VERIFICATION-LOG.md](VERIFICATION-LOG.md)  
> **Status:** Educational pure-function reference + Deep documentation pass  
> **Parent Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**One-sentence goal:** Compute which lessons are **done**, **ready**, or **locked** from an argument list of lessons and completed ids — with cycle detection, no storage, and no XP.

**Core rule (do not weaken):**  
The lists are arguments. Nothing is stored. `intro` done → `schema` ready → `blend` locked. This repo does not compute a level (see gamified progress neighbor).

---

## Deep educational documentation

| Guide | What it teaches |
|-------|-----------------|
| [docs/PATH-RULES.md](docs/PATH-RULES.md) | Validation, status rules, cycles, non-claims |
| [docs/WORKED-EXAMPLES.md](docs/WORKED-EXAMPLES.md) | Unlock chain, empty done, full done, cycle refusal |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Layers, honesty boundaries |

---

## 1. Overview & Goal

Learning paths need a clear readiness model. This blueprint isolates pure status assignment so UIs can visualize progress without pretending to store chain state or award XP.

**Success metrics:**
- Unit tests lock intro→schema ready, blend locked; cycles refused
- Request builders stay pure (`executed: false`)
- Docs never claim persisted progress or levels from this package

---

## 2. Concepts

- **done / ready / locked** status per lesson
- Immediate prerequisite gate (`requires` null or in `done`)
- Structural validation (unique ids, no cycles, done ⊆ lessons)
- Neighbors: credential issuer, gamified XP system, advanced education tools

---

## 3. Design & pieces

| Piece | Role |
|-------|------|
| `src/path.ts` | Pure `statuses` |
| `src/path.test.ts` | Unlock + cycle cases |
| `src/api.ts` / `usecases.ts` | Unsent builders |
| `docs/*` | Deep teaching guides |

---

## 4. Technical architecture

See **[ARCHITECTURE.md](ARCHITECTURE.md)** and **[docs/PATH-RULES.md](docs/PATH-RULES.md)**.

```
statuses(lessons, done)
  → validate structure & cycles
  → map each lesson to done | ready | locked
```

---

## 5. Examples

```ts
import { statuses } from "./src/path";

const lessons = [
  { id: "intro", requires: null },
  { id: "schema", requires: "intro" },
  { id: "blend", requires: "schema" },
];

statuses(lessons, ["intro"]);
// intro done, schema ready, blend locked
```

More: [docs/WORKED-EXAMPLES.md](docs/WORKED-EXAMPLES.md).

---

## 6. Demo & testing

```bash
npm install && npm test && npm run dev
```

See [VERIFICATION-LOG.md](VERIFICATION-LOG.md).

---

## 7. Roadmap

**Current (intentional):** pure statuses, unsent builders, deep docs.  
**Non-goals:** XP/levels, chain storage, minting credentials.

---

## 8–10. Experience, related, license

Offline educational page. Related: gamified progress, credential issuer, advanced education tools. MIT. Pixel Journey standards.

**This blueprint marks readiness from the lists it is given — and stores nothing.**

*Pixel Journey — Honest interfaces and honest documentation for public blockchain data.*

---

*Last updated: 2026-10-29 — Full educational blueprint + deep pass: PATH-RULES, WORKED-EXAMPLES, architecture, verification log.*
