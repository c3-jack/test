/**
 * Unit tests for AfNet.DomainOf.
 */
function testAll() {
  describe('AfNet.DomainOf', function () {
    describe('#domain', function () {
      it('extracts the host from a full URL with scheme, path, and query string', function () {
        var result = AfNet.DomainOf.domain('https://www.example.com/path?q=1');
        expect(result).toEqual('www.example.com');
      });

      it('strips userinfo and port from the host', function () {
        var result = AfNet.DomainOf.domain('http://user:pass@example.com:8080/path');
        expect(result).toEqual('example.com');
      });

      it('treats a schemeless string as already starting at the host', function () {
        var result = AfNet.DomainOf.domain('example.com/path');
        expect(result).toEqual('example.com');
      });

      it('returns an empty string for an empty input', function () {
        var result = AfNet.DomainOf.domain('');
        expect(result).toEqual('');
      });
    });
  });
}
