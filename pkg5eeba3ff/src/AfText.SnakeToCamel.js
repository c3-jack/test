function convert(input) {
  var segments = input.split(/[_-]+/).filter(function (segment) {
    return segment.length > 0;
  });

  if (segments.length === 0) {
    return '';
  }

  var result = segments[0].toLowerCase();
  for (var i = 1; i < segments.length; i++) {
    var segment = segments[i].toLowerCase();
    result += segment.charAt(0).toUpperCase() + segment.slice(1);
  }
  return result;
}
