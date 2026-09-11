/**
 * Extracts the host (domain) portion of `url`, stripping scheme, userinfo, port, path, query,
 * and fragment. A leading "www." label is preserved as part of the host.
 */
function domain(url) {
  var str = url || '';
  if (!str) {
    return '';
  }

  // Strip scheme (e.g. "https://", "ftp://").
  var afterScheme = str;
  var schemeIdx = str.indexOf('://');
  if (schemeIdx !== -1) {
    afterScheme = str.substring(schemeIdx + 3);
  }

  // Strip path/query/fragment: host ends at the first '/', '?', or '#'.
  var host = afterScheme;
  for (var i = 0; i < host.length; i++) {
    var ch = host.charAt(i);
    if (ch === '/' || ch === '?' || ch === '#') {
      host = host.substring(0, i);
      break;
    }
  }

  // Strip userinfo prefix ("user:pass@").
  var atIdx = host.lastIndexOf('@');
  if (atIdx !== -1) {
    host = host.substring(atIdx + 1);
  }

  // Strip trailing port (":8080"), but leave IPv6-style hosts alone if bracketed.
  if (host.charAt(0) !== '[') {
    var colonIdx = host.indexOf(':');
    if (colonIdx !== -1) {
      host = host.substring(0, colonIdx);
    }
  }

  return host;
}
