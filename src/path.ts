/**
 * Which lessons are done, ready, or locked.
 * The lists are arguments. Nothing is stored.
 */

export type Lesson = { id: string; requires: string | null };
export type Row = { id: string; status: "done" | "ready" | "locked" };

const ID = /^[a-z][a-z0-9-]{0,23}$/;

export function statuses(lessons: readonly Lesson[], done: readonly string[]): { ok: false; reason: string } | { ok: true; rows: Row[] } {
  if (lessons.length < 1 || lessons.length > 12) return { ok: false, reason: "pass 1 to 12 lessons" };
  const ids = new Set<string>();
  for (const lesson of lessons) {
    if (!ID.test(lesson.id)) return { ok: false, reason: "lesson id must be a short lowercase slug" };
    if (ids.has(lesson.id)) return { ok: false, reason: "lesson ids must be unique" };
    ids.add(lesson.id);
  }
  for (const lesson of lessons) {
    if (lesson.requires === null) continue;
    if (!ids.has(lesson.requires)) return { ok: false, reason: "requires must name a lesson in the list" };
    if (lesson.requires === lesson.id) return { ok: false, reason: "a lesson cannot require itself" };
  }
  for (const lesson of lessons) {
    const seen = new Set<string>();
    let cursor: string | null = lesson.id;
    while (cursor) {
      if (seen.has(cursor)) return { ok: false, reason: "requirements contain a cycle" };
      seen.add(cursor);
      const next = lessons.find((item) => item.id === cursor);
      cursor = next ? next.requires : null;
    }
  }
  for (const id of done) {
    if (!ids.has(id)) return { ok: false, reason: "done must name a lesson in the list" };
  }
  const finished = new Set(done);
  const rows: Row[] = lessons.map((lesson) => {
    if (finished.has(lesson.id)) return { id: lesson.id, status: "done" };
    if (lesson.requires === null || finished.has(lesson.requires)) return { id: lesson.id, status: "ready" };
    return { id: lesson.id, status: "locked" };
  });
  return { ok: true, rows };
}
