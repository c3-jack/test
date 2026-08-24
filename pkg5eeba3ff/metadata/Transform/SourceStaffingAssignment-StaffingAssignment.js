data = {
  name: 'SourceStaffingAssignment-StaffingAssignment',
  source: 'SourceStaffingAssignment',
  target: 'StaffingAssignment',
  projection: {
    id: externalId,
    // Rebuild the entity references from the external foreign-key columns.
    employee: { id: employeeId },
    project: { id: projectId },
    roleOnProject: roleOnProject,
    allocationPercent: allocationPercent,
  },
};
