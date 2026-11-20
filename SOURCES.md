# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | WAX context |
| [docs/PATH-RULES.md](docs/PATH-RULES.md) | Validation + status assignment |
| [quest log](https://github.com/pixel-journey/wax-on-chain-quest-log) | Append-only id list |
| [credential issuer](https://github.com/pixel-journey/wax-on-chain-education-credential-issuer) | Course row when a prerequisite is done |

## Product facts locked by tests

- Status: done if id in `done`; else ready if requires is null or in `done`; else locked.
- `done=["intro"]` → intro done, schema ready, blend locked.
- `done=["blend"]` alone keeps intro ready and schema locked.
- Cycles, self-require, and unknown done ids refused.
- 1..12 lessons. Nothing is stored. No XP.
