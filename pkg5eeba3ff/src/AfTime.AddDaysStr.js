/**
 * Adds `days` whole days to the `YYYY-MM-DD` date string `dateStr` and returns the resulting
 * `YYYY-MM-DD` date string. All computation happens in UTC to avoid timezone/DST shifts.
 */
function add(dateStr, days) {
  var parts = dateStr.split('-');
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  var utcMillis = Date.UTC(year, month - 1, day) + days * 24 * 60 * 60 * 1000;
  var result = new Date(utcMillis);

  var resultYear = result.getUTCFullYear();
  var resultMonth = result.getUTCMonth() + 1;
  var resultDay = result.getUTCDate();

  var pad = function (n) {
    return n < 10 ? '0' + n : '' + n;
  };

  return resultYear + '-' + pad(resultMonth) + '-' + pad(resultDay);
}
