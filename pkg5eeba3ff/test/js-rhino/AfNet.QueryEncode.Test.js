/**
 * Unit tests for AfNet.QueryEncode.
 */
function testAll() {
  describe('AfNet.QueryEncode', function () {
    describe('#encode', function () {
      it('encodes and joins simple key/value pairs with & and percent-encodes values', function () {
        var result = AfNet.QueryEncode.encode({a: 1, b: 'x y'});
        expect(result).toEqual('a=1&b=x%20y');
      });

      it('omits properties whose value is null or undefined', function () {
        var result = AfNet.QueryEncode.encode({a: null, b: 2, c: undefined});
        expect(result).toEqual('b=2');
      });

      it('expands array values to one key=value pair per element', function () {
        var result = AfNet.QueryEncode.encode({a: [1, 2]});
        expect(result).toEqual('a=1&a=2');
      });

      it('returns the empty string for an empty object', function () {
        var result = AfNet.QueryEncode.encode({});
        expect(result).toEqual('');
      });
    });
  });
}
