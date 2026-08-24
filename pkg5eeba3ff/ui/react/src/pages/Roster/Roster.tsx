import React, { useEffect, useMemo, useState } from 'react';
import { Users } from 'lucide-react';

import { c3Action } from '@/c3Action';
import { Employee } from '@/Interfaces';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { useErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';

/** Formats an ISO datetime string as a locale date, tolerating null/empty values. */
function formatDate(value?: string): string {
  if (!value) return '—';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString();
}

/** Renders a utilization percentage with a small colored bar. */
function UtilizationCell({ value }: { value?: number }) {
  const pct = Math.max(0, Math.min(100, value ?? 0));
  const color = pct >= 90 ? 'bg-danger' : pct >= 70 ? 'bg-warning' : 'bg-success';
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-24 rounded-full bg-secondary/30 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm tabular-nums">{pct}%</span>
    </div>
  );
}

const columns: ColumnDef<Employee, unknown>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'title', header: 'Title', cell: ({ row }) => row.original.title ?? '—' },
  { accessorKey: 'department', header: 'Department', cell: ({ row }) => row.original.department ?? '—' },
  { accessorKey: 'skill', header: 'Primary Skill', cell: ({ row }) => row.original.skill ?? '—' },
  {
    accessorKey: 'utilization',
    header: 'Utilization',
    cell: ({ row }) => <UtilizationCell value={row.original.utilization} />,
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
    cell: ({ row }) => formatDate(row.original.startDate),
  },
];

export default function Roster() {
  const { reportError } = useErrorBoundary();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const response = await c3Action('Employee', 'fetch', {
          include: 'this',
          order: 'ascending(name)',
          limit: 200,
          offset: 0,
        });
        if (!cancelled) setEmployees((response?.objs as Employee[]) ?? []);
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

  const avgUtilization = useMemo(() => {
    if (!employees.length) return 0;
    const sum = employees.reduce((acc, e) => acc + (e.utilization ?? 0), 0);
    return Math.round(sum / employees.length);
  }, [employees]);

  return (
    <div className="p-6 flex flex-col gap-6 w-full">
      <div className="flex items-center gap-3">
        <Users className="size-6 text-primary" aria-hidden />
        <div>
          <h1 className="text-lg font-semibold">Staff Roster</h1>
          <p className="text-sm text-secondary">All employees, their skills, and current utilization.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="c3-card rounded-lg border border-weak p-4">
          <p className="text-xs text-secondary">Total Employees</p>
          <p className="text-2xl font-semibold">{loading ? '—' : employees.length}</p>
        </div>
        <div className="c3-card rounded-lg border border-weak p-4">
          <p className="text-xs text-secondary">Average Utilization</p>
          <p className="text-2xl font-semibold">{loading ? '—' : `${avgUtilization}%`}</p>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col gap-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      ) : (
        <DataTable
          data={employees}
          columns={columns}
          clientPagination
          className="w-full"
          emptyMessage="No employees found."
        />
      )}
    </div>
  );
}
