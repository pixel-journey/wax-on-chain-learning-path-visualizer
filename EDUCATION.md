# Education — done, ready, or locked

> **Rung:** `npm test` passes. The lists are arguments. Nothing is stored. No XP.  
> **The test is the rule.** Rules: [docs/PATH-RULES.md](docs/PATH-RULES.md) · numbers: [docs/WORKED-EXAMPLES.md](docs/WORKED-EXAMPLES.md).

Official context: [docs.wax.io](https://docs.wax.io/). Completing an id list is [quest log](https://github.com/pixel-journey/wax-on-chain-quest-log). Recording a course row is [credential issuer](https://github.com/pixel-journey/wax-on-chain-education-credential-issuer).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Show intro done → schema ready → blend locked |
| Intermediate | Explain cycle / self-require refusals and the 1..12 bound |
| Masterclass | Note that marking blend done does not force schema done |

---

## Beginner — one scene

A lesson is `done` when its id is in the done list. It is `ready` when it is not done and its requirement is `null` or already done. Otherwise it is `locked`.

| Done list | Locked result |
| --- | --- |
| `[]` | `intro` ready, `schema` locked, `blend` locked |
| `["intro"]` | `intro` done, `schema` ready, `blend` locked |
| all three | all `done` |
| `["blend"]` only | `blend` done, `intro` still ready, `schema` still locked |
| `a` requires `b` and `b` requires `a` | not ok |
| a lesson that requires itself | not ok |
| done id `missing` | not ok |

```bash
npm test
```

---

## Intermediate — validation before status

| Rule | Failure |
| --- | --- |
| 1..12 lessons | pass 1 to 12 |
| id `^[a-z][a-z0-9-]{0,23}$` | short lowercase slug |
| unique ids | must be unique |
| requires names a listed lesson | or null |
| no self-require | cannot require itself |
| no cycles | requirements contain a cycle |
| every done id is listed | done must name a lesson in the list |

Readiness checks only the **immediate** prerequisite. Transitive ancestors are not re-walked at status time; cycles are rejected up front instead.

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Cycle a↔b | refused |
| Self-require | refused |
| Done id not in lesson list | refused |
| Assume blend-done unlocks schema | schema stays locked |

---

## Masterclass

### Common mistakes

1. Assuming done ids must form a prefix of the path. `blend` alone is accepted as done.  
2. Treating locked as "failed." It only means the immediate requirement is not done.  
3. Computing XP here.  
4. Storing the rows and calling them on-chain progress.

### Exercises

1. After `intro`, is `blend` ready? (**No**.)  
2. Why refuse cycles instead of ranking them? (Validation before status.)  
3. Does done=`["blend"]` unlock schema? (**No**.)

---

## What this course will not teach

- XP or levels
- Credential minting
- A persisted gradebook
