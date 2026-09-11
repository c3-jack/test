<<<<<<< HEAD
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
||||||| 83008f3
=======
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
>>>>>>> origin/main
