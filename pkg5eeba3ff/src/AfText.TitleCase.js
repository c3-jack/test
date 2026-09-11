/**
 * Converts `input` to title case: the first letter of each whitespace-delimited word is
 * upper-cased and the rest of that word is lower-cased. Non-letter characters and existing
 * whitespace (including runs of multiple spaces) are preserved as-is.
 */
function convert(input) {
  return input.replace(/\S+/g, function (word) {
    var lower = word.toLowerCase();
    var firstAlphaIndex = -1;
    for (var i = 0; i < lower.length; i++) {
      if (/[a-zA-Z]/.test(lower.charAt(i))) {
        firstAlphaIndex = i;
        break;
      }
    }
    if (firstAlphaIndex === -1) {
      return lower;
    }
    return (
      lower.substring(0, firstAlphaIndex) +
      lower.charAt(firstAlphaIndex).toUpperCase() +
      lower.substring(firstAlphaIndex + 1)
    );
  });
}
