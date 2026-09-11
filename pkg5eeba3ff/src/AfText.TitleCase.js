/**
 * Converts `input` to title case: the first alphabetic character of each whitespace-separated
 * word is upper-cased, the remainder of the word is lower-cased, and whitespace between words is
 * preserved unchanged.
 */
function convert(input) {
  if (typeof input !== 'string' || input.length === 0) {
    return '';
  }

  return input.replace(/\S+/g, function (word) {
    var lower = word.toLowerCase();
    return lower.replace(/[a-z]/, function (ch) {
      return ch.toUpperCase();
    });
  });
}
