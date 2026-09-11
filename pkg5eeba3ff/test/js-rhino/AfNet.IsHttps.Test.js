function testAll() {
  describe('AfNet.IsHttps', function () {
    it('returns true for an https URL', function () {
      expect(AfNet.IsHttps.check('https://example.com')).toBe(true);
    });

    it('returns false for an http URL', function () {
      expect(AfNet.IsHttps.check('http://example.com')).toBe(false);
    });

    it('returns false for a URL with no scheme', function () {
      expect(AfNet.IsHttps.check('example.com/path')).toBe(false);
    });

    it('is case-insensitive on the scheme and ignores surrounding whitespace', function () {
      expect(AfNet.IsHttps.check('  HTTPS://example.com  ')).toBe(true);
    });
  });
}
