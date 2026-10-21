import { describe, expect, it } from "vitest";
import { statuses } from "./path";

const lessons = [
  { id: "intro", requires: null },
  { id: "schema", requires: "intro" },
  { id: "blend", requires: "schema" },
];

describe("learning path", () => {
  it("unlocks only the next lesson", () => {
    expect(statuses(lessons, ["intro"])).toEqual({
      ok: true,
      rows: [
        { id: "intro", status: "done" },
        { id: "schema", status: "ready" },
        { id: "blend", status: "locked" },
      ],
    });
  });

  it("refuses a cycle", () => {
    expect(statuses([{ id: "a", requires: "b" }, { id: "b", requires: "a" }], []).ok).toBe(false);
  });
});
