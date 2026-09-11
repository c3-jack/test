/**
 * Converts a snake_case string to camelCase. Splits `input` on underscores, lower-cases the
 * first non-empty segment, capitalizes the first letter of every subsequent non-empty segment,
 * and concatenates them together with no separator.
 */
function convert(input) {
  var str = input || '';
  if (!str) {
    return '';
  }

  var parts = str.split('_');
  var result = '';
  var seenFirst = false;

  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (!part) {
      continue;
    }

    if (!seenFirst) {
      result += part.charAt(0).toLowerCase() + part.substring(1);
      seenFirst = true;
    } else {
      result += part.charAt(0).toUpperCase() + part.substring(1);
    }
  }

  return result;
}
