/**
 * Splits `items` into consecutive chunks of at most `size` elements each, preserving order.
 * The last chunk may be shorter than `size` if `items.length` is not evenly divisible by `size`.
 */
function chunk(items, size) {
  var list = items || [];
  var chunkSize = size;
  if (!chunkSize || chunkSize < 1) {
    chunkSize = 1;
  }

  var result = [];
  for (var i = 0; i < list.length; i += chunkSize) {
    result.push(list.slice(i, i + chunkSize));
  }

  return result;
}
