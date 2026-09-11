/**
 * Unit tests for AfColl.FirstKey.
 */
function testAll() {
  describe('AfColl.FirstKey', function () {
    describe('#first', function () {
      it('returns the first own enumerable key of an object', function () {
        var result = AfColl.FirstKey.first({ b: 1, a: 2 });
        expect(result).toEqual('b');
      });

      it('returns the first index of an array as a string', function () {
        var result = AfColl.FirstKey.first(['x', 'y']);
        expect(result).toEqual('0');
      });

      it('returns null for an object with no own enumerable keys', function () {
        expect(AfColl.FirstKey.first({})).toEqual(null);
      });

      it('returns null when given null', function () {
        expect(AfColl.FirstKey.first(null)).toEqual(null);
      });
    });
  });
}
