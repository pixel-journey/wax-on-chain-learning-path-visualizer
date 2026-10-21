"use client";

import { statuses } from "./path";

const lessons = [
  { id: "intro", requires: null },
  { id: "schema", requires: "intro" },
  { id: "blend", requires: "schema" },
];

export function Demo() {
  const path = statuses(lessons, ["intro"]);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Ready only after the required lesson</h1>
      <p className="lede">intro is done, so schema is ready. blend still requires schema, so it stays locked. Nothing is stored.</p>
      {path.ok ? (
        <ul>
          {path.rows.map((row) => (
            <li key={row.id}>{row.id}: {row.status}</li>
          ))}
        </ul>
      ) : (
        <p>{path.reason}</p>
      )}
    </main>
  );
}
