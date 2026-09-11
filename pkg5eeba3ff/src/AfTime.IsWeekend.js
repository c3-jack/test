/**
 * Determines whether `date` falls on a weekend (Saturday or Sunday), based solely on its
 * day of week (DateTime#dayOfWeek, 1 = Monday ... 7 = Sunday). Days 6 (Saturday) and 7 (Sunday)
 * return true; days 1-5 (Monday-Friday) return false.
 */
function check(date) {
  var dayOfWeek = date.dayOfWeek;
  return dayOfWeek === 6 || dayOfWeek === 7;
}
