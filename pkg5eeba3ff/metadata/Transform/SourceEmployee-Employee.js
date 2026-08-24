data = {
  name: 'SourceEmployee-Employee',
  source: 'SourceEmployee',
  target: 'Employee',
  projection: {
    id: externalId,
    name: name,
    title: title,
    department: department,
    skill: skill,
    utilization: utilization,
    startDate: startDate,
  },
};
