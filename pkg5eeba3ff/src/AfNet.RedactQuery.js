function redact(url, keys) {
  if (!keys || keys.length === 0) {
    return url;
  }

  var lowerKeys = [];
  for (var i = 0; i < keys.length; i++) {
    lowerKeys.push(String(keys[i]).toLowerCase());
  }

  var fragment = '';
  var withoutFragment = url;
  var hashIdx = url.indexOf('#');
  if (hashIdx !== -1) {
    withoutFragment = url.substring(0, hashIdx);
    fragment = url.substring(hashIdx);
  }

  var prefix = withoutFragment;
  var query = '';
  var qIdx = withoutFragment.indexOf('?');
  if (qIdx !== -1) {
    prefix = withoutFragment.substring(0, qIdx + 1);
    query = withoutFragment.substring(qIdx + 1);
  } else {
    prefix = '';
    query = withoutFragment;
  }

  var pairs = query.split('&');
  for (var j = 0; j < pairs.length; j++) {
    var pair = pairs[j];
    var eqIdx = pair.indexOf('=');
    if (eqIdx === -1) {
      continue;
    }
    var key = pair.substring(0, eqIdx);
    if (lowerKeys.indexOf(key.toLowerCase()) !== -1) {
      pairs[j] = key + '=REDACTED';
    }
  }

  return prefix + pairs.join('&') + fragment;
}
