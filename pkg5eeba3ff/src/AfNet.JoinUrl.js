function join(base, path) {
  var strippedBase = base.replace(/\/+$/, '');
  var strippedPath = path.replace(/^\/+/, '');

  if (strippedPath.length === 0) {
    return strippedBase;
  }

  return strippedBase + '/' + strippedPath;
}
