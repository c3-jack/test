/**
 * Shorten `text` to at most `max` characters, appending a single ellipsis
 * character ("…") when the text had to be shortened.
 *
 * Counts by Unicode code points (not UTF-16 code units) so that surrogate
 * pairs (e.g. emoji) are never split in two.
 *
 * @param {string} text - The text to truncate. Missing or empty returns ''.
 * @param {number} max - The maximum number of characters (including the
 *   ellipsis) the result may contain. A value of 0 or less returns ''.
 * @returns {string} The truncated (or original) text.
 */
export function truncate(text, max) {
  if (!text) {
    return '';
  }
  if (typeof max !== 'number' || max <= 0) {
    return '';
  }

  const chars = Array.from(text);

  if (chars.length <= max) {
    return text;
  }

  if (max === 1) {
    return '…';
  }

  return chars.slice(0, max - 1).join('') + '…';
}
