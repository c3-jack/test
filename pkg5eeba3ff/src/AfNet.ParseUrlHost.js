<<<<<<< HEAD
/**
 * Extracts the lower-cased hostname from a URL string, ignoring scheme, userinfo, port, path,
 * query, and fragment.
 */
function parse(url) {
  var str = String(url || '');

  // Drop fragment and query string.
  str = str.split('#')[0];
  str = str.split('?')[0];

  // Drop the scheme (e.g. "https://"), if present.
  var schemeIdx = str.indexOf('://');
  var rest;
  if (schemeIdx !== -1) {
    rest = str.substring(schemeIdx + 3);
  } else {
    rest = str;
    // Otherwise drop a protocol-relative "//" prefix, if present.
    if (rest.indexOf('//') === 0) {
      rest = rest.substring(2);
    }
  }

  // Drop userinfo (e.g. "user:pass@"), if present.
  var atIdx = rest.indexOf('@');
  if (atIdx !== -1) {
    rest = rest.substring(atIdx + 1);
  }

  // The authority runs up to the next '/', or to the end of the string.
  var slashIdx = rest.indexOf('/');
  var authority = slashIdx !== -1 ? rest.substring(0, slashIdx) : rest;

  // Strip a trailing ":port".
  var colonIdx = authority.lastIndexOf(':');
  var host = colonIdx !== -1 ? authority.substring(0, colonIdx) : authority;

  return host.toLowerCase();
}
||||||| 83008f3
=======
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
>>>>>>> origin/main
