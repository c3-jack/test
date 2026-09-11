function get(obj, path) {
  if (!path || path.length === 0) {
    throw new Error('AfColl.DeepGet.get: path must be a non-empty string');
  }
  var segments = path.split('.');
  var current = obj;
  for (var i = 0; i < segments.length; i++) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[segments[i]];
  }
  return current;
}
