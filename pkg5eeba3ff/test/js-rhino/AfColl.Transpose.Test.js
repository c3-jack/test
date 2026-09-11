/**
 * Unit tests for AfColl.Transpose.
 */
function testAll() {
  describe('AfColl.Transpose', function () {
    describe('#transpose', function () {
      it('transposes a non-square rectangular matrix', function () {
        var result = AfColl.Transpose.transpose([[1, 2, 3], [4, 5, 6]]);
        expect(result).toEqual([[1, 4], [2, 5], [3, 6]]);
      });

      it('transposes a square matrix', function () {
        var result = AfColl.Transpose.transpose([[1, 2], [3, 4]]);
        expect(result).toEqual([[1, 3], [2, 4]]);
      });

      it('returns an empty array for an empty matrix', function () {
        expect(AfColl.Transpose.transpose([])).toEqual([]);
      });

      it('returns an empty array when rows are all empty', function () {
        expect(AfColl.Transpose.transpose([[], []])).toEqual([]);
      });

      it('transposing twice returns the original matrix', function () {
        var original = [[1, 2], [3, 4], [5, 6]];
        var result = AfColl.Transpose.transpose(AfColl.Transpose.transpose(original));
        expect(result).toEqual(original);
      });
    });
  });
}
