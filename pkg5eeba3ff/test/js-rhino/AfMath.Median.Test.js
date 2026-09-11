/**
 * Unit tests for AfMath.Median.
 */
function testAll() {
  describe('AfMath.Median', function () {
    describe('#median', function () {
      it('returns the middle element for an odd-length list', function () {
        expect(AfMath.Median.median([3, 1, 2])).toEqual(2);
      });

      it('returns the average of the two middle elements for an even-length list', function () {
        expect(AfMath.Median.median([4, 1, 3, 2])).toEqual(2.5);
      });

      it('returns the single value for a list of length one', function () {
        expect(AfMath.Median.median([5])).toEqual(5);
      });

      it('handles negative numbers and unsorted input', function () {
        expect(AfMath.Median.median([-1, -5, 3])).toEqual(-1);
      });

      it('does not mutate the input array', function () {
        var input = [3, 1, 2];
        AfMath.Median.median(input);
        expect(input).toEqual([3, 1, 2]);
      });
    });
  });
}
