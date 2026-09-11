function indent(input, spaces) {
  if (spaces <= 0) {
    return input;
  }

  var prefix = new Array(spaces + 1).join(' ');
  var lines = input.split('\n');
  for (var i = 0; i < lines.length; i++) {
    lines[i] = prefix + lines[i];
  }
  return lines.join('\n');
}
