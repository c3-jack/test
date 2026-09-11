/**
 * Zips `keys` and `values` together, position by position, into a plain object mapping each
 * key to its corresponding value. Extra trailing elements in the longer array are ignored, and
 * a duplicate key keeps the value from its highest index.
 */
function zip(keys, values) {
  var result = {};
  var len = Math.min(keys.length, values.length);

  for (var i = 0; i < len; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}
