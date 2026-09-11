/**
 * Computes the simple moving average of `values` over a sliding window of size `window`.
 */
function average(values, window) {
  var result = [];
  if (window < 1 || window > values.length) {
    return result;
  }
  for (var i = 0; i <= values.length - window; i++) {
    var sum = 0;
    for (var j = i; j < i + window; j++) {
      sum += values[j];
    }
    result.push(sum / window);
  }
  return result;
}
