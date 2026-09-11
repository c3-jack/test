function check(input) {
  var segments = input.split('.');

  if (segments.length !== 4) {
    return false;
  }

  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];

    if (segment.length === 0 || !/^[0-9]+$/.test(segment)) {
      return false;
    }

    if (segment.length > 1 && segment.charAt(0) === '0') {
      return false;
    }

    var value = parseInt(segment, 10);
    if (value < 0 || value > 255) {
      return false;
    }
  }

  return true;
}
