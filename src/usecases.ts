import { ATOMIC_ORIGIN } from "./api";
import { statuses } from "./path";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const path = statuses(
  [
    { id: "intro", requires: null },
    { id: "schema", requires: "intro" },
    { id: "blend", requires: "schema" },
  ],
  ["intro"],
);
if (!path.ok) throw new Error(path.reason);
const rows = path.rows;

export const USE_CASES: UseCase[] = [
  {
    title: "A template list is not a syllabus",
    detail: "schema is ready. blend is locked. The template request is not sent.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/templates/pixeljourney`, executed: false },
    transaction: null,
  },
  {
    title: "An asset is not a completed lesson",
    detail: "No credential action is built.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  const ready = rows.find((row) => row.id === "schema");
  const locked = rows.find((row) => row.id === "blend");
  if (!ready || ready.status !== "ready" || !locked || locked.status !== "locked") throw new Error("path");
}
