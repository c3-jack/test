function domain(url) {
  if (!url || url.length === 0) {
    throw new Error('AfNet.DomainOf.domain: url must be a non-empty string');
  }

  var rest = url;

  // Strip scheme, e.g. "https://".
  var schemeMatch = rest.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//);
  if (schemeMatch) {
    rest = rest.slice(schemeMatch[0].length);
  }

  // Strip "user:pass@" userinfo, but only if the "@" appears before any path/query/fragment.
  var pathIndex = rest.search(/[\/\?#]/);
  var atIndex = rest.indexOf('@');
  if (atIndex !== -1 && (pathIndex === -1 || atIndex < pathIndex)) {
    rest = rest.slice(atIndex + 1);
  }

  // Cut off path, query string, and fragment.
  var cutIndex = rest.search(/[\/\?#]/);
  if (cutIndex !== -1) {
    rest = rest.slice(0, cutIndex);
  }

  // Strip a trailing ":<port>".
  var colonIndex = rest.indexOf(':');
  if (colonIndex !== -1) {
    rest = rest.slice(0, colonIndex);
  }

  if (!rest || rest.length === 0) {
    throw new Error('AfNet.DomainOf.domain: could not extract a domain from "' + url + '"');
  }

  return rest;
}
