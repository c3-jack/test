/**
 * Unit tests for AfColl.Flatten.
 */
function testAll() {
  describe('AfColl.Flatten', function () {
    describe('#flatten', function () {
      it('flattens a shallowly nested array', function () {
        var result = AfColl.Flatten.flatten([1, [2, 3], [4, [5, 6]]]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
      });

      it('flattens a deeply nested array', function () {
        var result = AfColl.Flatten.flatten([1, [2, [3, [4]]]]);
        expect(result).toEqual([1, 2, 3, 4]);
      });

      it('returns an empty array for an empty input array', function () {
        expect(AfColl.Flatten.flatten([])).toEqual([]);
      });

      it('returns an empty array when given null', function () {
        expect(AfColl.Flatten.flatten(null)).toEqual([]);
      });
    });
  });
}
