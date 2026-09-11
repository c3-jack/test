/**
 * Converts a camelCase or PascalCase string `input` into snake_case by inserting an underscore
 * before every uppercase letter that is not the first character, then lower-casing the result.
 */
function convert(input) {
  var result = '';

  for (var i = 0; i < input.length; i++) {
    var ch = input.charAt(i);
    if (i > 0 && ch >= 'A' && ch <= 'Z') {
      result += '_';
    }
    result += ch.toLowerCase();
  }

  return result;
}
