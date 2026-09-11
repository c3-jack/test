/**
 * Joins the given path segments into a single forward-slash-delimited path. Redundant slashes
 * at segment boundaries are collapsed to one, empty segments are skipped, a leading `/` on the
 * first segment is preserved, and a trailing `/` is preserved only if the last non-empty
 * segment itself ends with `/`.
 */
function join(parts) {
  if (!parts || parts.length === 0) {
    return '';
  }

  var isAbsolute = parts.length > 0 && parts[0].length > 0 && parts[0].charAt(0) === '/';

  var segments = [];
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (!part) {
      continue;
    }
    var trimmed = part.split('/').filter(function (piece) {
      return piece.length > 0;
    });
    for (var j = 0; j < trimmed.length; j++) {
      segments.push(trimmed[j]);
    }
  }

  var lastPart = parts[parts.length - 1];
  var trailingSlash = lastPart && lastPart.length > 0 && lastPart.charAt(lastPart.length - 1) === '/';

  var result = segments.join('/');
  if (isAbsolute) {
    result = '/' + result;
  }
  if (trailingSlash && result.charAt(result.length - 1) !== '/') {
    result = result + '/';
  }
  return result;
}
