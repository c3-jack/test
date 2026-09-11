/**
 * Returns the first own enumerable key of `obj`, in insertion order, or
 * `null` if `obj` has no keys.
 */
function first(obj) {
  if (obj == null) {
    throw new Error('AfColl.FirstKey.first: obj must not be null or undefined.');
  }
  var keys = Object.keys(obj);
  return keys.length > 0 ? keys[0] : null;
}
