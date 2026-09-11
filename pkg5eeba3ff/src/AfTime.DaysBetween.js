/**
 * Computes the whole number of days from `a` to `b`, truncated toward zero. `a` and `b` are
 * C3 DateTime objects. The result is `b - a` in seconds, divided by the number of seconds in a
 * day (86400), truncated toward zero so partial-day remainders are discarded rather than
 * rounded.
 */
function between(a, b) {
  var deltaSeconds = DateTime.deltaSeconds(a, b);
  var days = deltaSeconds / 86400;
  return days < 0 ? Math.ceil(days) : Math.floor(days);
}
