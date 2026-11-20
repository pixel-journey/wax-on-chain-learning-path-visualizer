# Security — lesson status map

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Cycle in requirements | refused |
| Self-requirement | refused |
| Done id not in lesson list | refused |
| Duplicate / bad lesson ids | refused |
| Outside 1..12 lessons | refused |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Who sets `done` | Client list is not proof of completion |
| Persistence | Nothing is stored |
| Auth | No account signs this map |

## Attack angles

1. Passing `done: ["blend"]` without schema to unlock later UI. Status still marks blend done only.  
2. Shipping a cyclic curriculum that never resolves.  
3. Treating ready as "user completed the parent on chain."

## Honesty limits

No network. No wasm. No XP. [docs.wax.io](https://docs.wax.io/) · [PATH-RULES](docs/PATH-RULES.md).
