# Worked Examples

**Trust label:** `educational-reference`  
**Repo:** `wax-on-chain-learning-path-visualizer`

---

## Setup

```ts
const lessons = [
  { id: "intro", requires: null },
  { id: "schema", requires: "intro" },
  { id: "blend", requires: "schema" },
];
```

---

## Example A — Next lesson ready (unit-tested)

```ts
statuses(lessons, ["intro"])
// intro done, schema ready, blend locked
```

---

## Example B — Nothing done

```ts
statuses(lessons, [])
// intro ready (root), schema locked, blend locked
```

---

## Example C — Full path done

```ts
statuses(lessons, ["intro", "schema", "blend"])
// all done
```

---

## Example D — Cycle refused (unit-tested)

```ts
statuses(
  [{ id: "a", requires: "b" }, { id: "b", requires: "a" }],
  []
).ok // false
```

---

## Example E — Unknown done id refused

```ts
statuses(lessons, ["not-a-lesson"]).ok // false
```

---

## Reproduce

```ts
import { statuses } from "../src/path";
console.log(statuses(lessons, ["intro"]));
```

```bash
npm test
```

---

*Pixel Journey — Show the unlock graph, then keep the claim small.*
