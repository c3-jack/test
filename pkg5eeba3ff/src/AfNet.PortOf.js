function port(url) {
  var DEFAULT_PORTS = { http: 80, https: 443, ftp: 21, ssh: 22 };

  if (!url) {
    return -1;
  }

  var schemeMatch = /^([a-zA-Z][a-zA-Z0-9+.-]*):\/\/([^/?#]+)/.exec(url);
  if (!schemeMatch) {
    return -1;
  }

  var scheme = schemeMatch[1].toLowerCase();
  var authority = schemeMatch[2];

  // Strip userinfo (user:pass@) if present.
  var atIdx = authority.lastIndexOf('@');
  var hostPort = atIdx !== -1 ? authority.substring(atIdx + 1) : authority;

  var explicitPort = null;
  if (hostPort.charAt(0) === '[') {
    // IPv6 literal, e.g. [::1]:8080
    var closeIdx = hostPort.indexOf(']');
    if (closeIdx !== -1) {
      var afterBracket = hostPort.substring(closeIdx + 1);
      var ipv6PortMatch = /^:(\d+)$/.exec(afterBracket);
      if (ipv6PortMatch) {
        explicitPort = parseInt(ipv6PortMatch[1], 10);
      }
    }
  } else {
    var colonIdx = hostPort.lastIndexOf(':');
    if (colonIdx !== -1) {
      var portMatch = /^:(\d+)$/.exec(hostPort.substring(colonIdx));
      if (portMatch) {
        explicitPort = parseInt(portMatch[1], 10);
      }
    }
  }

  if (explicitPort !== null) {
    return explicitPort;
  }

  if (DEFAULT_PORTS.hasOwnProperty(scheme)) {
    return DEFAULT_PORTS[scheme];
  }

  return -1;
}
