/**
 * Recursively flattens `items` into a single new array of non-array elements, in depth-first,
 * left-to-right order. Returns an empty array when `items` is not an array (including `null` or
 * `undefined`).
 */
function flatten(items) {
  if (!(items instanceof Array)) {
    return [];
  }

  var result = [];

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item instanceof Array) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
