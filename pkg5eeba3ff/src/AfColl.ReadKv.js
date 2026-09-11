function parse(input) {
  var result = {};

  input.split(',').forEach(function (segment) {
    var trimmed = segment.trim();
    if (trimmed.length === 0) {
      return;
    }

    var eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) {
      result[trimmed] = '';
      return;
    }

    var key = trimmed.slice(0, eqIndex).trim();
    var value = trimmed.slice(eqIndex + 1).trim();
    result[key] = value;
  });

  return result;
}
