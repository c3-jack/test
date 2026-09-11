/**
 * Computes the percent change from `from` to `to`, throwing if `from` is 0.
 */
function change(from, to) {
  if (from === 0) {
    throw 'AfMath.PercentChange.change: from must not be 0';
  }

  return ((to - from) / from) * 100;
}
