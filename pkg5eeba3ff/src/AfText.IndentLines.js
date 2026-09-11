/**
 * Prepends `spaces` space characters to the start of every line of
 * `input`, including blank lines.
 */
function indent(input, spaces) {
  if (input == null) {
    throw new Error('AfText.IndentLines.indent: input must not be null or undefined.');
  }
  if (spaces < 0) {
    throw new Error('AfText.IndentLines.indent: spaces must be a non-negative integer.');
  }
  var prefix = new Array(spaces + 1).join(' ');
  return input.split('\n').map(function (line) {
    return prefix + line;
  }).join('\n');
}
