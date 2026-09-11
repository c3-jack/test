/**
 * Recursively flattens a nested array into a single flat array.
 */
function flatten(items) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (Array.isArray(item)) {
      var nested = flatten(item);
      for (var j = 0; j < nested.length; j++) {
        result.push(nested[j]);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}
