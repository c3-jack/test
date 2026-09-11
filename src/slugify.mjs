/**
 * Convert a string into a url-safe slug.
 *
 * - Accented characters are normalized to their ascii equivalents.
 * - Punctuation and symbols are dropped (not replaced with dashes).
 * - Runs of whitespace collapse to a single dash.
 * - Leading/trailing dashes are trimmed.
 * - The result is lowercase.
 *
 * @param {string} text - The input string to slugify.
 * @returns {string} The url-safe slug, or '' for empty/whitespace-only/missing input.
 */
export function slugify(text) {
  if (typeof text !== "string") {
    return "";
  }

  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
