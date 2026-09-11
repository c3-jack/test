/**
 * Computes the population variance of a non-empty array of doubles.
 */
function variance(values) {
  if (!values || values.length === 0) {
    throw new Error('AfMath.Variance.variance: values must be a non-empty array');
  }
  var n = values.length;
  var mean = values.reduce(function (sum, v) { return sum + v; }, 0) / n;
  var sumSquaredDeviations = values.reduce(function (sum, v) {
    var deviation = v - mean;
    return sum + deviation * deviation;
  }, 0);
  return sumSquaredDeviations / n;
}
