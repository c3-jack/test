/**
 * Parses an ISO 8601 date-time string into a DateTime, throwing if `input` is null, empty, or
 * not a valid ISO 8601 date-time string.
 */
function parse(input) {
  if (input == null || typeof input !== 'string' || input.length === 0) {
    throw 'AfTime.ParseIso.parse: input must be a non-empty ISO 8601 date-time string';
  }

  // Require a date-time of the form YYYY-MM-DDTHH:mm:ss[.fraction](Z|+HH:mm|-HH:mm), per ISO 8601.
  var isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
  if (!isoPattern.test(input)) {
    throw 'AfTime.ParseIso.parse: input is not a valid ISO 8601 date-time string: ' + input;
  }

  var result = DateTime.fromString(input);
  if (result == null) {
    throw 'AfTime.ParseIso.parse: input is not a valid ISO 8601 date-time string: ' + input;
  }
  return result;
}
