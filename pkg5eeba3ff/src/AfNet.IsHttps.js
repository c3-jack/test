function check(url) {
  var trimmed = url.trim();
  return /^https:\/\//i.test(trimmed);
}
