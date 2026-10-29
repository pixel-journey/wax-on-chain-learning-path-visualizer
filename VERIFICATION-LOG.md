# Verification log

**Trust label:** educational-reference  
**Updated:** 2026-10-29 (Deep educational pass)

| Claim | Evidence | State |
| --- | --- | --- |
| intro done unlocks schema and leaves blend locked | `src/path.test.ts` | verified (unit) |
| Cycles are refused | `src/path.test.ts` | verified (unit) |
| Requests are built and not sent | `src/usecases.test.ts` and `src/api.test.ts` | verified (unit) |
| Demo renders the same functions | `src/Demo.tsx` | partial (inspection) |
| Path rules documented | `docs/PATH-RULES.md` | verified (docs) |
| Worked examples documented | `docs/WORKED-EXAMPLES.md` | verified (docs) |
| Architecture documented | `ARCHITECTURE.md` | verified (docs) |
| A live endpoint matches this repo | none | untested |
| XP / levels computed here | **not claimed** | neighbor repo |
| Progress stored on chain here | **not claimed** | permanent non-goal |

```bash
npm test
```

## Deep-pass notes (2026-10-29)

- Added `docs/PATH-RULES.md` and `docs/WORKED-EXAMPLES.md`
- Expanded `ARCHITECTURE.md` and README to full educational standard
- Pure statuses semantics unchanged
