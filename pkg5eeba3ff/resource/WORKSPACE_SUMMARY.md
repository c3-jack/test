# Workspace Summary

> This is the **work-to-date** summary of this workspace. It starts from the template's initial
> state below and **you (the agent) keep it updated** as you make meaningful changes (new/renamed
> types, new UI pages/routes, seed/data, key decisions). Read it first at the start of a chat to
> recall what has been done; update it as you go. Keep it concise — a map, not a transcript.

## Current state

**Staffing app** (pivoted from an earlier Customer app, which was fully removed). Models
Employees, Projects, and their StaffingAssignments; two pages wired end-to-end
(C3 backend → `c3Action` fetch → React). A Databricks ingestion pipeline is authored but
inactive (awaiting credentials in Studio Data Fusion). Verified rendering live at localhost:9000.

## Packages

- `pkg5eeba3ff` (main) — the staffing app.

## Backend types

- **`Employee`** (`src/Employee.c3typ`) — `name!`, `title`, `department`, `skill`,
  `utilization` (double %), `startDate` (date), `assignments: [StaffingAssignment](employee)`.
- **`Project`** (`src/Project.c3typ`) — `name!`, `client`, `startDate`, `endDate`,
  `assignments: [StaffingAssignment](project)`.
- **`StaffingAssignment`** (`src/StaffingAssignment.c3typ`) — join entity: `employee: Employee`,
  `project: Project`, `roleOnProject` (string), `allocationPercent` (double). Inverse of the two
  `assignments` collections above.
- **SQL source types** (`src/source/`): `SourceEmployee`, `SourceStaffingAssignment` — both
  `entity type mixes External, NoSystemCols, Source`, column names mapped via `schema name`.
  **Table/column names are best-guess and must be reconciled with the real Databricks schema.**
- **`AfMath.IsPrime`** (`src/AfMath.IsPrime.c3typ`/`.js`) — unrelated utility `service type`
  added for PS-20: `check(n)` returns whether `n` is a prime integer (`false` for `n <= 1`).
  Jasmine tests in `test/js-rhino/AfMath.IsPrime.Test.c3typ`/`.js`. Built on branch
  `task/jh/ps-20`. Could not smoke-test via `runJsCode`/`runTest` — the live-app MCP backend
  was returning 500s ("unexpected mimetype") for the whole session, same as PS-73; re-verify
  with `runJsCode` next session (e.g. `AfMath.IsPrime.check(17)` should be `true`,
  `AfMath.IsPrime.check(4)` should be `false`).

## UI pages / routes

- **Roster** (`ui/react/src/pages/Roster/Roster.tsx`) at `/` — employee table (DataTable, client
  pagination) with utilization bars + summary cards. Nav `id: 'roster'` (Users icon).
- **Assignments** (`ui/react/src/pages/Assignments/Assignments.tsx`) at `/assignments` — grouped
  by project, each card lists staffed employees + role + allocation. Nav `id: 'assignments'`
  (Briefcase icon). Fetches `StaffingAssignment` with `employee.*`/`project.*` joins.
- `Employee`/`Project`/`StaffingAssignment` interfaces in `ui/react/src/Interfaces.tsx`.

## Seed / data

- `data/Employee/employees.json` (10), `data/Project/projects.json` (4),
  `data/StaffingAssignment/assignments.json` (13). Upserted. Assignment refs use `{ "id": ... }`.

## Databricks ingestion pipeline (authored, inactive — needs credentials via Studio)

- SourceSystem `metadata/SqlSourceSystem/StaffingDatabricks.json` (name only; creds via Studio).
- Collections `metadata/SqlSourceCollection/EmployeesSql.json` (→ `default.employees`) and
  `StaffingAssignmentsSql.json` (→ `default.staffing_assignments`).
- Transforms `SourceEmployee-Employee.js`, `SourceStaffingAssignment-StaffingAssignment.js`
  (the latter rebuilds employee/project refs from `employee_id`/`project_id`).
- Target Databricks: host `dbc-f0c26f43-52b1.cloud.databricks.com`, catalog
  `wgt_datafusion_test`, schema `default`. **Real table/column names unconfirmed** — user to
  verify from Studio. No live SqlSourceSystem exists in the env yet (ping: no credentials).

## Key decisions

- Utilization/allocation are plain doubles (0–100); dates are `date`.
- DI is pull-only (external → C3). Write-back would require `SqlSourceSystem.connect()` →
  `Jdbc.exec/execBatch`, gated by C3 `cluster-admin` action group AND the token's Databricks
  grants. Not implemented.
- Build requires `VITE_C3_PKG` env var (set inline for local `npm run build`).

## Open platform friction / bug log (running)

See the separate bug-log deliverable. Key items: DI has no write-back; `Jdbc.exec*` gated by
`cluster-admin`; `fetch({limit:0}).count` returns 0 instead of the true total (use `limit:-1`);
seed `data/` vs `seed/` placement warning for category-'data' entities.
