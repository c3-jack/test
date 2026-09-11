/**
 * Groups `items` — an array of plain objects — into buckets keyed by the stringified value of
 * each element's `key` field. Elements are preserved in their original relative order within
 * each bucket (a stable grouping).
 */
function group(items, key) {
  var result = {};
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var bucket = String(item == null ? item : item[key]);
    if (!result.hasOwnProperty(bucket)) {
      result[bucket] = [];
    }
    result[bucket].push(item);
  }
  return result;
}
