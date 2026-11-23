# AI handoff — on-chain learning path visualizer

## Non-negotiables

1. Pure `statuses(lessons, done)` → **done / ready / locked**.
2. Locked sample: `intro` done → `schema` ready → `blend` locked.
3. Cycle in `requires` is **refused**. Unique ids; done ⊆ lessons.
4. **Nothing is stored.** No XP, no levels (gamified neighbor owns XP).
5. Request builders stay `executed: false`.
6. Status rules port; lesson content is product-local.

## Prompt seeds

- "statuses with intro done — schema and blend?"
- "Cycle A requires B requires A — refuse?"
- "Refuse claiming this package awards XP or stores progress on chain."

## Do not

- Compute levels or XP here.
- Persist progress in the pure package.
- Mint credentials from status alone.
