/**
 * Decodes `query` — a URL query string, with or without a leading `?` — into a map of decoded
 * key/value pairs. Pairs are split on `&`, each pair is split on the first `=` into key and value,
 * `+` is treated as a space, and both key and value are percent-decoded via `decodeURIComponent`.
 * When a key repeats, the last occurrence wins. Empty segments are skipped.
 */
function decode(query) {
  var result = {};
  var str = query == null ? '' : query;
  if (str.charAt(0) === '?') {
    str = str.substring(1);
  }
  if (str.length === 0) {
    return result;
  }
  var pairs = str.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    if (pair.length === 0) {
      continue;
    }
    var eqIndex = pair.indexOf('=');
    var rawKey = eqIndex === -1 ? pair : pair.substring(0, eqIndex);
    var rawValue = eqIndex === -1 ? '' : pair.substring(eqIndex + 1);
    var key = decodeURIComponent(rawKey.replace(/\+/g, ' '));
    var value = decodeURIComponent(rawValue.replace(/\+/g, ' '));
    result[key] = value;
  }
  return result;
}
