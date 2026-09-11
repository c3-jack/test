/**
 * Removes duplicate lines from `input`, keeping only the first occurrence of each distinct line
 * (exact, case-sensitive match) and preserving the relative order of the surviving lines.
 */
function dedupe(input) {
  if (typeof input !== 'string' || input.length === 0) {
    return '';
  }

  var seen = {};
  var result = [];
  var lines = input.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.charAt(line.length - 1) === '\r') {
      line = line.slice(0, -1);
    }
    if (!Object.prototype.hasOwnProperty.call(seen, line)) {
      seen[line] = true;
      result.push(line);
    }
  }

  return result.join('\n');
}
