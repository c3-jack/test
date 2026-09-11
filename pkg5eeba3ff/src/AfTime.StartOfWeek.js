/**
 * Computes midnight of the Monday that starts the calendar week containing `date`, using
 * DateTime#dayOfWeek (1 = Monday ... 7 = Sunday) to determine how many days to subtract, then
 * zeroing out the time-of-day component.
 */
function startOf(date) {
  var dayOfWeek = date.dayOfWeek;
  return date.minusDays(dayOfWeek - 1).toDateMidnight();
}
