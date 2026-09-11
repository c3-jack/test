/**
 * Encodes `params` (a plain object map) into a URL query string. Keys/values are percent-encoded
 * via encodeURIComponent. Null/undefined-valued properties are omitted. Array values expand to
 * one `key=value` pair per element.
 */
function encode(params) {
  var pairs = [];
  var keys = Object.keys(params);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = params[key];

    if (value === null || value === undefined) {
      continue;
    }

    if (Array.isArray(value)) {
      for (var j = 0; j < value.length; j++) {
        var item = value[j];
        if (item === null || item === undefined) {
          continue;
        }
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(item)));
      }
    } else {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(value)));
    }
  }

  return pairs.join('&');
}
