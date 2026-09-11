/**
 * Retrieves the value at the given dot/bracket-notation path within obj,
 * returning null if any segment of the path is missing instead of throwing.
 */
function get(obj, path) {
  if (path === '') {
    return obj === undefined ? null : obj;
  }

  var segments = String(path)
    .replace(/\[(\w+)\]/g, '.$1')
    .split('.')
    .filter(function (segment) {
      return segment !== '';
    });

  var current = obj;
  for (var i = 0; i < segments.length; i++) {
    if (current === null || current === undefined) {
      return null;
    }
    current = current[segments[i]];
  }

  return current === undefined ? null : current;
}
