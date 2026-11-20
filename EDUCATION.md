# Education — done, ready, or locked

> **Rung:** `npm test` passes. The lists are arguments. Nothing is stored. No XP.  
> **The test is the rule.**

## Predict, then run

A lesson is `done` when its id is in the done list. It is `ready` when it is not done and its requirement is `null` or already done. Otherwise it is `locked`. One to twelve lessons. A cycle, a self-requirement, and a done id that is not in the list are refused.

| Done list | Locked result |
| --- | --- |
| `[]` | `intro` ready, `schema` locked, `blend` locked |
| `["intro"]` | `intro` done, `schema` ready, `blend` locked |
| all three | all `done` |
| `a` requires `b` and `b` requires `a` | not ok |
| a lesson that requires itself | not ok |
| done id `missing` | not ok |

Marking `blend` done while `schema` is not does not unlock anything else, and it does not un-mark `blend`. The function does not check that a done lesson's requirement is also done. The test does not claim that it does.
