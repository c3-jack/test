/**
 * Computes the population variance of values.
 */
function variance(values) {
  var n = values.length;
  var mean = 0;
  for (var i = 0; i < n; i++) {
    mean += values[i];
  }
  mean = mean / n;

  var sumSquaredDiffs = 0;
  for (var j = 0; j < n; j++) {
    var diff = values[j] - mean;
    sumSquaredDiffs += diff * diff;
  }

  return sumSquaredDiffs / n;
}
