function join(base, path) {
  var trimmedBase = base.charAt(base.length - 1) === '/' ? base.slice(0, -1) : base;
  var trimmedPath = path.charAt(0) === '/' ? path.slice(1) : path;
  return trimmedBase + '/' + trimmedPath;
}
