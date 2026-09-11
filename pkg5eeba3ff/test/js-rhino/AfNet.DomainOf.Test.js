/**
 * Unit tests for AfNet.DomainOf.
 */
function testAll() {
  describe('AfNet.DomainOf', function () {
    describe('#domain', function () {
      it('extracts the host from a full URL with scheme, path, and query string', function () {
        expect(AfNet.DomainOf.domain('https://www.example.com/path?x=1')).toEqual('www.example.com');
      });

      it('extracts the host from a bare host+path with no scheme', function () {
        expect(AfNet.DomainOf.domain('example.com/path')).toEqual('example.com');
      });

      it('strips userinfo and port from the URL', function () {
        expect(AfNet.DomainOf.domain('http://user:pass@example.com:8080/')).toEqual('example.com');
      });

      it('returns the host unchanged when the URL is only a bare domain', function () {
        expect(AfNet.DomainOf.domain('example.com')).toEqual('example.com');
      });

      it('throws when given an empty string', function () {
        expect(function () {
          AfNet.DomainOf.domain('');
        }).toThrow();
      });
    });
  });
}
