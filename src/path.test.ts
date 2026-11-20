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

  it("starts with only the root ready, and finishes only what is listed", () => {
    expect(statuses(lessons, [])).toEqual({
      ok: true,
      rows: [
        { id: "intro", status: "ready" },
        { id: "schema", status: "locked" },
        { id: "blend", status: "locked" },
      ],
    });
    const finished = statuses(lessons, ["intro", "schema", "blend"]);
    expect(finished).toEqual({
      ok: true,
      rows: [
        { id: "intro", status: "done" },
        { id: "schema", status: "done" },
        { id: "blend", status: "done" },
      ],
    });
    expect(statuses(lessons, ["blend"])).toEqual({
      ok: true,
      rows: [
        { id: "intro", status: "ready" },
        { id: "schema", status: "locked" },
        { id: "blend", status: "done" },
      ],
    });
  });

  it("refuses a cycle, a self-requirement, and a done id that is not a lesson", () => {
    expect(statuses([{ id: "a", requires: "b" }, { id: "b", requires: "a" }], []).ok).toBe(false);
    expect(statuses([{ id: "a", requires: "a" }], []).ok).toBe(false);
    expect(statuses(lessons, ["missing"]).ok).toBe(false);
  });
});
