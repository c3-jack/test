/**
 * Returns the first own enumerable key of `obj`, in the object's natural key-iteration order, or
 * `null` if `obj` has no own enumerable keys (including when `obj` is `null`/`undefined`).
 */
function first(obj) {
  if (obj === null || obj === undefined) {
    return null;
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return key;
    }
  }

  return null;
}
