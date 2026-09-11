/**
 * Determines the numeric port for a URL string: an explicit ":port" on the authority takes
 * precedence, otherwise the well-known default port for the URL's scheme is used, otherwise -1
 * is returned.
 */
function port(url) {
  var DEFAULT_PORTS = {
    http: 80,
    https: 443,
    ftp: 21,
    ws: 80,
    wss: 443
  };

  var str = String(url || '');

  // Drop fragment and query string.
  str = str.split('#')[0];
  str = str.split('?')[0];

  // Drop the scheme (e.g. "https://"), if present, capturing it.
  var scheme = null;
  var schemeIdx = str.indexOf('://');
  var rest;
  if (schemeIdx !== -1) {
    scheme = str.substring(0, schemeIdx).toLowerCase();
    rest = str.substring(schemeIdx + 3);
  } else {
    rest = str;
    // Otherwise drop a protocol-relative "//" prefix, if present (no scheme captured).
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

  // Look for a trailing ":port" (non-empty run of digits after the last ':').
  var colonIdx = authority.lastIndexOf(':');
  if (colonIdx !== -1) {
    var portStr = authority.substring(colonIdx + 1);
    if (/^[0-9]+$/.test(portStr)) {
      return parseInt(portStr, 10);
    }
  }

  if (scheme && DEFAULT_PORTS.hasOwnProperty(scheme)) {
    return DEFAULT_PORTS[scheme];
  }

  return -1;
}
