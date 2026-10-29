# Path Rules

**Trust label:** `educational-reference`  
**Repo:** `wax-on-chain-learning-path-visualizer`

---

## Purpose

Document pure `statuses(lessons, done)`: which lessons are **done**, **ready**, or **locked**. The lists are arguments. **Nothing is stored.** No XP or level is computed here.

---

## Types

```ts
type Lesson = { id: string; requires: string | null };
type Row = { id: string; status: "done" | "ready" | "locked" };
```

- `id` — short lowercase slug
- `requires` — `null` (root) or another lesson id in the same list

---

## Validation (before status assignment)

| Rule | Failure reason |
|------|----------------|
| 1–12 lessons | `pass 1 to 12 lessons` |
| Valid slug ids | `lesson id must be a short lowercase slug` |
| Unique ids | `lesson ids must be unique` |
| `requires` names a listed lesson (if not null) | `requires must name a lesson in the list` |
| No self-require | `a lesson cannot require itself` |
| No cycles in requirement chains | `requirements contain a cycle` |
| Every `done` id is in the lesson list | `done must name a lesson in the list` |

---

## Status assignment (when validation passes)

For each lesson:

1. If `id` ∈ `done` → **done**
2. Else if `requires === null` OR `requires` ∈ `done` → **ready**
3. Else → **locked**

Only the *immediate* prerequisite is checked for readiness (not the full transitive unlock tree beyond that rule). Cycles are rejected up front.

---

## Canonical example (unit-tested)

```ts
lessons = [
  { id: "intro", requires: null },
  { id: "schema", requires: "intro" },
  { id: "blend", requires: "schema" },
]
done = ["intro"]
```

| id | status |
|----|--------|
| intro | done |
| schema | ready |
| blend | locked |

---

## What this is not

| Non-claim | Neighbor / reason |
|-----------|-------------------|
| XP / levels | `wax-gamified-learning-progress-system` |
| Credential minting | `wax-on-chain-education-credential-issuer` |
| Persisted progress store | Argument-only `done` list |

---

## Classroom prompts

1. Why refuse cycles instead of trying to rank them?
2. How does **ready** differ from **done** for UI design?
3. What would change if readiness required the full ancestor chain to be done (and is that true today)?

---

*Pixel Journey — Unlock the next step; do not invent the gradebook.*
