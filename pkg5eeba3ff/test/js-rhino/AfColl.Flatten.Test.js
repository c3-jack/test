function testAll() {
  describe('AfColl.Flatten', function () {
    it('flattens a nested array of arbitrary depth', function () {
      expect(AfColl.Flatten.flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
      expect(AfColl.Flatten.flatten([[[1]], [[2]]])).toEqual([1, 2]);
    });

    it('preserves non-array elements and their order', function () {
      expect(AfColl.Flatten.flatten(['a', [1, 'b'], 2])).toEqual(['a', 1, 'b', 2]);
    });

    it('returns an empty array for empty input, including nested empties', function () {
      expect(AfColl.Flatten.flatten([])).toEqual([]);
      expect(AfColl.Flatten.flatten([[], [[]], []])).toEqual([]);
    });
  });
}
