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
    });
  });
}
