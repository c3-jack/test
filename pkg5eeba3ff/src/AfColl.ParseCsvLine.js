/**
 * Parses a single CSV line into an array of field values. Supports double-quoted fields
 * (which may contain commas), with embedded quotes escaped as `""`.
 */
function parse(line) {
  var str = line || '';
  var fields = [];
  var current = '';
  var inQuotes = false;
  var i = 0;

  while (i < str.length) {
    var ch = str.charAt(i);

    if (inQuotes) {
      if (ch === '"') {
        if (str.charAt(i + 1) === '"') {
          current += '"';
          i += 2;
        } else {
          inQuotes = false;
          i += 1;
        }
      } else {
        current += ch;
        i += 1;
      }
    } else {
      if (ch === '"' && current === '') {
        inQuotes = true;
        i += 1;
      } else if (ch === ',') {
        fields.push(current);
        current = '';
        i += 1;
      } else {
        current += ch;
        i += 1;
      }
    }
  }

  fields.push(current);
  return fields;
}
