/**
 * Unit tests for AfNet.RedactQuery.
 */
function testAll() {
  describe('AfNet.RedactQuery', function () {
    describe('#redact', function () {
      it('redacts matching query parameter values (case-insensitively), preserving order and repeats', function () {
        expect(AfNet.RedactQuery.redact('https://host/path?token=abc&id=1', ['token']))
          .toBe('https://host/path?token=REDACTED&id=1');
        expect(AfNet.RedactQuery.redact('https://host/path?Token=abc', ['token']))
          .toBe('https://host/path?Token=REDACTED');
        expect(AfNet.RedactQuery.redact('a=1&a=2', ['a']))
          .toBe('a=REDACTED&a=REDACTED');
      });

      it('leaves the url unchanged when there is no query string or no matching keys', function () {
        expect(AfNet.RedactQuery.redact('https://host/path', ['token']))
          .toBe('https://host/path');
        expect(AfNet.RedactQuery.redact('https://host/path?id=1', ['token']))
          .toBe('https://host/path?id=1');
        expect(AfNet.RedactQuery.redact('https://host/path?id=1', []))
          .toBe('https://host/path?id=1');
      });

      it('preserves an unredacted fragment while redacting the query', function () {
        expect(AfNet.RedactQuery.redact('https://host/path?a=1#a=1', ['a']))
          .toBe('https://host/path?a=REDACTED#a=1');
      });
    });
  });
}
