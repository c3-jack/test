/**
 * Unit tests for AfNet.IsHttps.
 */
function testAll() {
  describe('AfNet.IsHttps', function () {
    describe('#check', function () {
      it('returns true for a url starting with https://', function () {
        expect(AfNet.IsHttps.check('https://example.com')).toBe(true);
      });

      it('is case-insensitive on the scheme', function () {
        expect(AfNet.IsHttps.check('HTTPS://EXAMPLE.COM')).toBe(true);
      });

      it('trims leading and trailing whitespace before checking', function () {
        expect(AfNet.IsHttps.check('  https://example.com  ')).toBe(true);
      });

      it('returns false for http:// and other schemes', function () {
        expect(AfNet.IsHttps.check('http://example.com')).toBe(false);
        expect(AfNet.IsHttps.check('ftp://example.com')).toBe(false);
      });

      it('returns false for a scheme-less url', function () {
        expect(AfNet.IsHttps.check('example.com')).toBe(false);
      });

      it('requires :// immediately after https, not just an https prefix', function () {
        expect(AfNet.IsHttps.check('httpsx://example.com')).toBe(false);
      });

      it('returns false for empty or whitespace-only input', function () {
        expect(AfNet.IsHttps.check('')).toBe(false);
        expect(AfNet.IsHttps.check('   ')).toBe(false);
      });
    });
  });
}
