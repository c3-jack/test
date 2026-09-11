/**
 * Unit tests for AfNet.ParseUrlHost.
 */
function testAll() {
  describe('AfNet.ParseUrlHost', function () {
    describe('#parse', function () {
      it('extracts the host from a simple https URL', function () {
        var result = AfNet.ParseUrlHost.parse('https://www.example.com/path');
        expect(result).toEqual('www.example.com');
      });

      it('strips userinfo, port, query, and fragment, and lower-cases the host', function () {
        var result = AfNet.ParseUrlHost.parse('http://user:pass@Example.COM:8080/path?q=1#frag');
        expect(result).toEqual('example.com');
      });

      it('extracts the host from a protocol-relative URL', function () {
        var result = AfNet.ParseUrlHost.parse('//cdn.example.com/lib.js');
        expect(result).toEqual('cdn.example.com');
      });

      it('extracts the host from a bare host+path with no scheme', function () {
        var result = AfNet.ParseUrlHost.parse('example.com/path');
        expect(result).toEqual('example.com');
      });

      it('returns the empty string for an empty url', function () {
        var result = AfNet.ParseUrlHost.parse('');
        expect(result).toEqual('');
      });
    });
  });
}
