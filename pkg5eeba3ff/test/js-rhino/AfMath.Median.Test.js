/**
 * Unit tests for AfMath.Median.
 */
function testAll() {
  describe('AfMath.Median', function () {
    describe('#median', function () {
      it('returns the middle value for an odd-length array, regardless of input order', function () {
        expect(AfMath.Median.median([3, 1, 2])).toEqual(2);
      });

      it('returns the mean of the two middle values for an even-length array', function () {
        expect(AfMath.Median.median([1, 2, 3, 4])).toEqual(2.5);
      });

      it('returns the single value for a one-element array', function () {
        expect(AfMath.Median.median([5])).toEqual(5);
      });

      it('does not mutate the input array', function () {
        var input = [3, 1, 2];
        AfMath.Median.median(input);
        expect(input).toEqual([3, 1, 2]);
      });

      it('throws when given an empty array', function () {
        expect(function () {
          AfMath.Median.median([]);
        }).toThrow();
      });
    });
  });
}
