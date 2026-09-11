/**
 * Parses `input` as JSON, returning the decoded value, or `null` if `input` is empty, blank, or
 * not valid JSON. Never throws.
 */
function parse(input) {
  var str = String(input || '');

  if (str.trim().length === 0) {
    return null;
  }

  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}
