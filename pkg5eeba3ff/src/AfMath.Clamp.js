/**
 * Restricts value to the closed interval [min, max].
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
