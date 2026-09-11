function startOf(date) {
  var dayOfWeek = date.dayOfWeek(); // 1=Monday .. 7=Sunday
  var daysSinceMonday = dayOfWeek - 1;
  return date.minusDays(daysSinceMonday).withTimeAtStartOfDay();
}
