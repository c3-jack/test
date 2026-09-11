/**
 * Unit tests for AfNet.ParseUrlHost.
 */
function testAll() {
  describe('AfNet.ParseUrlHost', function () {
    describe('#parse', function () {
      it('extracts and lower-cases the host from a full URL with port, path, query, and fragment', function () {
        expect(AfNet.ParseUrlHost.parse('https://www.Example.com:8080/path?q=1#frag')).toEqual('www.example.com');
      });

      it('drops userinfo when extracting the host', function () {
        expect(AfNet.ParseUrlHost.parse('http://user:pass@sub.example.co.uk/')).toEqual('sub.example.co.uk');
      });

      it('extracts the host from a protocol-relative URL', function () {
        expect(AfNet.ParseUrlHost.parse('//cdn.example.com/lib.js')).toEqual('cdn.example.com');
      });

      it('extracts the host regardless of scheme', function () {
        expect(AfNet.ParseUrlHost.parse('ftp://example.com')).toEqual('example.com');
      });

      it('returns an empty string for a relative path with no authority', function () {
        expect(AfNet.ParseUrlHost.parse('/relative/path')).toEqual('');
      });

      it('returns an empty string for empty input', function () {
        expect(AfNet.ParseUrlHost.parse('')).toEqual('');
      });
    });
  });
}
