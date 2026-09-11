/**
 * Groups `items` into buckets keyed by the stringified value of each item's `key` field.
 * Items are appended to their group's array in original relative order. An empty `items`
 * array returns an empty map.
 */
function group(items, key) {
  var result = {};
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var groupKey = '' + item[key];
    if (!result.hasOwnProperty(groupKey)) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
}
