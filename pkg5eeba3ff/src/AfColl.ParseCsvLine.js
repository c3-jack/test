/**
 * Parses `line`, a single CSV record, into its component field values. Fields separated by commas
 * outside of double quotes; a double-quoted field may contain literal commas/newlines and escapes
 * an embedded quote as `""`. Returns a new array of strings, one per field, in order.
 */
function parse(line) {
  var text = line || '';
  var fields = [];
  var field = '';
  var inQuotes = false;
  var i = 0;

  while (i < text.length) {
    var ch = text.charAt(i);

    if (inQuotes) {
      if (ch === '"') {
        if (text.charAt(i + 1) === '"') {
          field += '"';
          i += 2;
        } else {
          inQuotes = false;
          i += 1;
        }
      } else {
        field += ch;
        i += 1;
      }
    } else {
      if (ch === '"' && field === '') {
        inQuotes = true;
        i += 1;
      } else if (ch === ',') {
        fields.push(field);
        field = '';
        i += 1;
      } else {
        field += ch;
        i += 1;
      }
    }
  }

  fields.push(field);

  return fields;
}
