import React, { useEffect, useMemo, useState } from 'react';
import { Briefcase } from 'lucide-react';

import { c3Action } from '@/c3Action';
import { StaffingAssignment } from '@/Interfaces';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { useErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';

/** Formats an ISO datetime string as a locale date, tolerating null/empty values. */
function formatDate(value?: string): string {
  if (!value) return '—';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString();
}

interface ProjectGroup {
  projectId: string;
  projectName: string;
  client: string;
  startDate?: string;
  endDate?: string;
  rows: StaffingAssignment[];
}

export default function Assignments() {
  const { reportError } = useErrorBoundary();
  const [assignments, setAssignments] = useState<StaffingAssignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const response = await c3Action('StaffingAssignment', 'fetch', {
          include:
            'this, employee.id, employee.name, employee.title, project.id, project.name, project.client, project.startDate, project.endDate',
          limit: 500,
          offset: 0,
        });
        if (!cancelled) setAssignments((response?.objs as StaffingAssignment[]) ?? []);
      } catch (err) {
        if (!cancelled) reportError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [reportError]);

  const groups = useMemo<ProjectGroup[]>(() => {
    const byProject = new Map<string, ProjectGroup>();
    for (const a of assignments) {
      const p = a.project;
      const key = p?.id ?? 'unassigned';
      if (!byProject.has(key)) {
        byProject.set(key, {
          projectId: key,
          projectName: p?.name ?? 'Unassigned',
          client: p?.client ?? '—',
          startDate: p?.startDate,
          endDate: p?.endDate,
          rows: [],
        });
      }
      byProject.get(key)!.rows.push(a);
    }
    return Array.from(byProject.values()).sort((x, y) => x.projectName.localeCompare(y.projectName));
  }, [assignments]);

  return (
    <div className="p-6 flex flex-col gap-6 w-full">
      <div className="flex items-center gap-3">
        <Briefcase className="size-6 text-primary" aria-hidden />
        <div>
          <h1 className="text-lg font-semibold">Staffing Assignments</h1>
          <p className="text-sm text-secondary">Which employees are staffed on which projects.</p>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col gap-2">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      ) : groups.length === 0 ? (
        <p className="text-secondary">No staffing assignments found.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {groups.map((g) => (
            <div key={g.projectId} className="c3-card rounded-lg border border-weak overflow-hidden">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-weak p-4">
                <div>
                  <h2 className="text-base font-semibold">{g.projectName}</h2>
                  <p className="text-xs text-secondary">Client: {g.client}</p>
                </div>
                <div className="text-xs text-secondary">
                  {formatDate(g.startDate)} – {formatDate(g.endDate)} · {g.rows.length}{' '}
                  {g.rows.length === 1 ? 'person' : 'people'}
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Role on Project</TableHead>
                    <TableHead>Allocation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {g.rows.map((a) => (
                    <TableRow key={a.id}>
                      <TableCell>{a.employee?.name ?? '—'}</TableCell>
                      <TableCell>{a.employee?.title ?? '—'}</TableCell>
                      <TableCell>{a.roleOnProject ?? '—'}</TableCell>
                      <TableCell className="tabular-nums">
                        {a.allocationPercent != null ? `${a.allocationPercent}%` : '—'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
