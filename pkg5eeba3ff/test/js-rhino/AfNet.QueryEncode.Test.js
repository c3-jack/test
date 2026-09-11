/**
 * Unit tests for AfNet.QueryEncode.
 */
function testAll() {
  describe('AfNet.QueryEncode', function () {
    describe('#encode', function () {
      it('encodes simple key/value pairs joined with &', function () {
        expect(AfNet.QueryEncode.encode({ a: 1, b: 'x y' })).toBe('a=1&b=x%20y');
      });

      it('expands array values into repeated key=value pairs', function () {
        expect(AfNet.QueryEncode.encode({ tag: ['a', 'b'] })).toBe('tag=a&tag=b');
      });

      it('skips null and undefined values', function () {
        expect(AfNet.QueryEncode.encode({ a: null, b: 2, c: undefined })).toBe('b=2');
      });

      it('returns an empty string for an object with no encodable entries', function () {
        expect(AfNet.QueryEncode.encode({})).toBe('');
        expect(AfNet.QueryEncode.encode({ a: null })).toBe('');
      });

      it('percent-encodes both keys and values', function () {
        expect(AfNet.QueryEncode.encode({ 'k v': true })).toBe('k%20v=true');
      });
    });
  });
}
