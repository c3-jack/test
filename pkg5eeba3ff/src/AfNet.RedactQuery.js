function redact(url, keys) {
  if (!keys || keys.length === 0) {
    return url;
  }

  var queryStart = url.indexOf('?');
  if (queryStart === -1) {
    return url;
  }

  var beforeQuery = url.substring(0, queryStart + 1);
  var afterQuery = url.substring(queryStart + 1);

  var fragment = '';
  var hashStart = afterQuery.indexOf('#');
  if (hashStart !== -1) {
    fragment = afterQuery.substring(hashStart);
    afterQuery = afterQuery.substring(0, hashStart);
  }

  var keySet = {};
  for (var i = 0; i < keys.length; i++) {
    keySet[keys[i]] = true;
  }

  var segments = afterQuery.length === 0 ? [] : afterQuery.split('&');
  var redactedSegments = segments.map(function (segment) {
    var eqIdx = segment.indexOf('=');
    var name = eqIdx === -1 ? segment : segment.substring(0, eqIdx);
    if (keySet.hasOwnProperty(name)) {
      return name + '=REDACTED';
    }
    return segment;
  });

  return beforeQuery + redactedSegments.join('&') + fragment;
}
