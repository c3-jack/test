function parse(url) {
  if (!url) {
    return '';
  }

  var rest = url;

  // Strip a leading scheme (e.g. "https:") if present.
  var schemeMatch = rest.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:/);
  if (schemeMatch) {
    rest = rest.slice(schemeMatch[0].length);
  }

  // Only a protocol-relative "//authority..." form has an identifiable host.
  if (rest.slice(0, 2) !== '//') {
    return '';
  }
  rest = rest.slice(2);

  // Isolate the authority section (up to the first path/query/fragment delimiter).
  var delimiterIndex = rest.search(/[\/?#]/);
  var authority = delimiterIndex === -1 ? rest : rest.slice(0, delimiterIndex);

  if (authority.length === 0) {
    return '';
  }

  // Drop userinfo ("user:pass@").
  var atIndex = authority.lastIndexOf('@');
  var hostAndPort = atIndex === -1 ? authority : authority.slice(atIndex + 1);

  // Drop a trailing ":port".
  var colonIndex = hostAndPort.lastIndexOf(':');
  var host = colonIndex === -1 ? hostAndPort : hostAndPort.slice(0, colonIndex);

  return host.toLowerCase();
}
