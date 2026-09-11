/**
 * Computes the n-th Fibonacci number (zero-indexed), where
 * `F(0) = 0`, `F(1) = 1`, and `F(n) = F(n - 1) + F(n - 2)`.
 */
function compute(n) {
  if (n < 0) {
    throw 'n must be a non-negative integer';
  }
  var prev = 0;
  var curr = 1;
  for (var i = 0; i < n; i++) {
    var next = prev + curr;
    prev = curr;
    curr = next;
  }
  return prev;
}
