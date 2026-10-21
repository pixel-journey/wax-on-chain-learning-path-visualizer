# Ready only after the required lesson

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

intro is done, so schema is ready. blend still requires schema, so it stays locked. No lesson is stored.

This repo was empty. It now contains one rule and two unsent queries.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/path.ts` | The pure rules |
| `src/path.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/api.ts` | The same unsent WAX query builders as the other educational repos |
| `src/Demo.tsx` | Offline page |

`npm test` runs the rules. `npm run dev` opens the page.

## Where the neighboring idea lives

XP thresholds live in `wax-gamified-learning-progress-system`. This repo does not compute a level.

## Queries

`executed` is false. This repo did not call any host. No transaction is invented.
