/**
 * Determines whether `url`'s scheme is `https`.
 */
function check(url) {
  var match = /^([a-zA-Z][a-zA-Z0-9+.-]*):\/\//.exec(url.trim());
  if (!match) {
    return false;
  }
  return match[1].toLowerCase() === 'https';
}
