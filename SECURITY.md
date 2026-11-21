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
| XP / rewards | Not this product |

## Attack angles

1. Passing `done: ["blend"]` without schema to unlock later UI — status still marks blend done only.  
2. Shipping a cyclic curriculum that never resolves.  
3. Treating **ready** as "user completed the parent on chain."  
4. Confusing readiness with [quest log](https://github.com/pixel-journey/wax-on-chain-quest-log) id completion.  
5. Hiding a network fetch inside the pure status map.

## Honesty limits

No network. No wasm. No XP. Soft status map only.

| Sibling | Distinction |
| --- | --- |
| [quest log](https://github.com/pixel-journey/wax-on-chain-quest-log) | Append ids, hard stop 20 |
| [credential issuer](https://github.com/pixel-journey/wax-on-chain-education-credential-issuer) | Prerequisite lessons before record |
| [narrative timeline](https://github.com/pixel-journey/wax-on-chain-narrative-timeline) | Time gaps between beats |

[docs.wax.io](https://docs.wax.io/) · [PATH-RULES](docs/PATH-RULES.md).
