/**
 * Unit tests for AfNet.RedactQuery.
 */
function testAll() {
  describe('AfNet.RedactQuery', function () {
    describe('#redact', function () {
      it('redacts the value of a matching query parameter', function () {
        expect(AfNet.RedactQuery.redact('https://x.com/a?token=abc&id=1', ['token'])).toEqual(
          'https://x.com/a?token=REDACTED&id=1'
        );
      });

      it('redacts every occurrence of a repeated matching key', function () {
        expect(AfNet.RedactQuery.redact('https://x.com/a?a=1&a=2&b=3', ['a'])).toEqual(
          'https://x.com/a?a=REDACTED&a=REDACTED&b=3'
        );
      });

      it('leaves the url unchanged when there is no query string', function () {
        expect(AfNet.RedactQuery.redact('https://x.com/a', ['token'])).toEqual('https://x.com/a');
      });

      it('leaves the url unchanged when no parameter matches', function () {
        expect(AfNet.RedactQuery.redact('https://x.com/a?id=1', ['token'])).toEqual(
          'https://x.com/a?id=1'
        );
      });

      it('rewrites a value-less parameter as name=REDACTED', function () {
        expect(AfNet.RedactQuery.redact('https://x.com/a?token', ['token'])).toEqual(
          'https://x.com/a?token=REDACTED'
        );
      });

      it('preserves a trailing fragment after the query string', function () {
        expect(AfNet.RedactQuery.redact('https://x.com/a?token=1#frag', ['token'])).toEqual(
          'https://x.com/a?token=REDACTED#frag'
        );
      });

      it('is a no-op when keys is empty', function () {
        expect(AfNet.RedactQuery.redact('https://x.com/a?token=1', [])).toEqual(
          'https://x.com/a?token=1'
        );
      });
    });
  });
}
