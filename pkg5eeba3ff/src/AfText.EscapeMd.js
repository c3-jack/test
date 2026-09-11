/**
 * Escapes Markdown special characters in a plain text string by prefixing each one with a
 * backslash, so the text renders as literal characters rather than Markdown formatting.
 */
function escape(input) {
  var str = String(input || '');

  // Markdown special characters that need a preceding backslash to render literally.
  return str.replace(/([\\`*_~\[\]()\{\}#+\-.!|<>])/g, '\\$1');
}
