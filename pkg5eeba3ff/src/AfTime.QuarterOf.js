/**
 * Computes the calendar quarter (1-4) that `date` falls into, based solely on its month
 * (DateTime#monthOfYear, 1-12). Months 1-3 -> quarter 1, 4-6 -> quarter 2, 7-9 -> quarter 3,
 * 10-12 -> quarter 4.
 */
function quarter(date) {
  var month = date.monthOfYear();
  return Math.floor((month - 1) / 3) + 1;
}
