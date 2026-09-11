function between(a, b) {
  var deltaSeconds = Math.abs(DateTime.deltaSeconds(a, b));
  return Math.floor(deltaSeconds / 86400);
}
