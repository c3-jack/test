/**
 * Checks whether `input` is a syntactically valid IPv4 address in dotted-decimal notation: four
 * `.`-separated octets, each consisting only of digits, in the range 0-255, with no leading
 * zeros other than a bare "0".
 */
function check(input) {
  if (typeof input !== 'string') {
    return false;
  }

  var parts = input.split('.');
  if (parts.length !== 4) {
    return false;
  }

  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part.length === 0 || part.length > 3) {
      return false;
    }
    if (!/^[0-9]+$/.test(part)) {
      return false;
    }
    if (part.length > 1 && part.charAt(0) === '0') {
      return false;
    }
    var value = parseInt(part, 10);
    if (value < 0 || value > 255) {
      return false;
    }
  }

  return true;
}
