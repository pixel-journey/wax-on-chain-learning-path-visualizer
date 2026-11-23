# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | WAX context |
| [docs/PATH-RULES.md](docs/PATH-RULES.md) | Validation + status assignment |
| [docs/WORKED-EXAMPLES.md](docs/WORKED-EXAMPLES.md) | Unlock chain examples |
| [quest log](https://github.com/pixel-journey/wax-on-chain-quest-log) | Append-only id list (may be private) |
| [credential issuer](https://github.com/pixel-journey/wax-on-chain-education-credential-issuer) | Course row when a prerequisite is done (may be private) |
| [mutable RPG XP](https://github.com/pixel-journey/px-aa-mutable-rpg-xp-and-leveling) | XP is a **different** product |
| [wharfkit/skill](https://github.com/wharfkit/skill) | SessionKit if a host later mints credentials elsewhere |

```bash
git clone https://github.com/wharfkit/skill.git ~/.claude/skills/wharfkit
```

## Product facts locked by tests

- Status: done if id in `done`; else ready if requires is null or in `done`; else locked.
- `done=["intro"]` → intro done, schema ready, blend locked.
- `done=["blend"]` alone keeps intro ready and schema locked.
- Cycles, self-require, and unknown done ids refused.
- 1..12 lessons. Nothing is stored. No XP.

## Portability

Prerequisite graphs port. Lesson content and on-chain credential mint are product-local.

## Suggested topics

`antelope` `education` `pixel-journey` `wax`
