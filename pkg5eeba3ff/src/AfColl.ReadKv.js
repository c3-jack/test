/**
 * Parses `input` — text containing one `key=value` pair per line — into a string map. Blank
 * lines and `#`-comment lines are skipped; each line is split on the first `=`; keys and values
 * are trimmed; later duplicate keys overwrite earlier ones.
 */
function parse(input) {
  var result = {};
  var lines = input.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.length > 0 && line.charAt(line.length - 1) === '\r') {
      line = line.substring(0, line.length - 1);
    }
    var trimmed = line.replace(/^\s+/, '');
    if (trimmed.length === 0 || trimmed.charAt(0) === '#') {
      continue;
    }
    var idx = line.indexOf('=');
    if (idx === -1) {
      continue;
    }
    var key = line.substring(0, idx).replace(/^\s+|\s+$/g, '');
    var value = line.substring(idx + 1).replace(/^\s+|\s+$/g, '');
    result[key] = value;
  }
  return result;
}
