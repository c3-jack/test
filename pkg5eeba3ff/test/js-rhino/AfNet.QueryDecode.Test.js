/**
 * Unit tests for AfNet.QueryDecode.
 */
function testAll() {
  describe('AfNet.QueryDecode', function () {
    describe('#decode', function () {
      it('decodes a simple key=value query string into a map', function () {
        var result = AfNet.QueryDecode.decode('a=1&b=2');
        expect(result).toEqual({ a: '1', b: '2' });
      });

      it('strips a leading "?" and percent/plus-decodes keys and values', function () {
        var result = AfNet.QueryDecode.decode('?name=John+Doe&city=New%20York');
        expect(result).toEqual({ name: 'John Doe', city: 'New York' });
      });

      it('returns an empty map for an empty query string', function () {
        expect(AfNet.QueryDecode.decode('')).toEqual({});
      });

      it('keeps the last value when a key repeats', function () {
        var result = AfNet.QueryDecode.decode('a=1&a=2');
        expect(result).toEqual({ a: '2' });
      });

      it('treats a pair with no "=" as a key with an empty string value', function () {
        var result = AfNet.QueryDecode.decode('flag&a=1');
        expect(result).toEqual({ flag: '', a: '1' });
      });

      it('returns an empty map for a query string that is only "?"', function () {
        expect(AfNet.QueryDecode.decode('?')).toEqual({});
      });

      it('decodes a percent-encoded "&" or "=" inside a key or value', function () {
        var result = AfNet.QueryDecode.decode('a%26b=1%3D2');
        expect(result).toEqual({ 'a&b': '1=2' });
      });

      it('skips empty segments produced by a leading, trailing, or doubled "&"', function () {
        var result = AfNet.QueryDecode.decode('&a=1&&b=2&');
        expect(result).toEqual({ a: '1', b: '2' });
      });
    });
  });
}
