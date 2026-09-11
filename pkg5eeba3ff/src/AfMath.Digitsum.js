/**
 * Computes the sum of the decimal digits of `n`, ignoring sign.
 */
function sum(n) {
  var value = Math.abs(n);
  var total = 0;
  do {
    total += value % 10;
    value = Math.floor(value / 10);
  } while (value > 0);
  return total;
}
