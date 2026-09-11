/**
 * Unit tests for AfNet.PortOf.
 */
function testAll() {
  describe('AfNet.PortOf', function () {
    describe('#port', function () {
      it('returns the default https port when no explicit port is present', function () {
        var result = AfNet.PortOf.port('https://www.example.com/path');
        expect(result).toEqual(443);
      });

      it('returns the explicit port when present, taking precedence over the scheme default', function () {
        var result = AfNet.PortOf.port('http://user:pass@example.com:8080/path?q=1#frag');
        expect(result).toEqual(8080);
      });

      it('returns the default ftp port when no explicit port is present', function () {
        var result = AfNet.PortOf.port('ftp://example.com/file');
        expect(result).toEqual(21);
      });

      it('returns an explicit port on a protocol-relative URL', function () {
        var result = AfNet.PortOf.port('//cdn.example.com:9000/lib.js');
        expect(result).toEqual(9000);
      });

      it('returns -1 when no scheme and no explicit port can be determined', function () {
        var result = AfNet.PortOf.port('example.com/path');
        expect(result).toEqual(-1);
      });
    });
  });
}
