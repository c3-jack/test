/**
 * Counts the number of whitespace-separated words in `input`. Leading/trailing whitespace is
 * ignored and consecutive whitespace characters are treated as a single separator.
 */
function count(input) {
  var trimmed = input.replace(/^\s+|\s+$/g, '');
  if (trimmed.length === 0) {
    return 0;
  }
  return trimmed.split(/\s+/).length;
}
