/**
 * Unit tests for AfNet.PortOf.
 */
function testAll() {
  describe('AfNet.PortOf', function () {
    describe('#port', function () {
      it('returns the explicit port when present in the authority', function () {
        expect(AfNet.PortOf.port('https://x.com:8443/a')).toEqual(8443);
      });

      it('returns the default https port 443 when no explicit port is given', function () {
        expect(AfNet.PortOf.port('https://x.com/a')).toEqual(443);
      });

      it('returns the default http port 80 when no explicit port is given', function () {
        expect(AfNet.PortOf.port('http://x.com/a')).toEqual(80);
      });

      it('returns the default ftp port 21 when no explicit port is given', function () {
        expect(AfNet.PortOf.port('ftp://x.com')).toEqual(21);
      });

      it('matches the scheme case-insensitively', function () {
        expect(AfNet.PortOf.port('HTTPS://x.com/a')).toEqual(443);
      });

      it('returns -1 when the url has no recognizable scheme', function () {
        expect(AfNet.PortOf.port('x.com/a')).toEqual(-1);
      });

      it('ignores userinfo when extracting an explicit port', function () {
        expect(AfNet.PortOf.port('https://user:pass@x.com:9090/a')).toEqual(9090);
      });
    });
  });
}
