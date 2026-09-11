/**
 * Rounds `value` to `places` decimal places using round-half-away-from-zero semantics, avoiding
 * binary floating-point drift by shifting the decimal point via string exponent notation rather
 * than raw multiplication. A negative `places` is clamped to `0`.
 */
function round(value, places) {
  var p = places < 0 ? 0 : places;
  var sign = value < 0 ? -1 : 1;
  var abs = Math.abs(value);

  var shifted = Number(abs + 'e' + p);
  var rounded = Math.round(shifted);
  var result = Number(rounded + 'e-' + p);

  return sign * result;
}
