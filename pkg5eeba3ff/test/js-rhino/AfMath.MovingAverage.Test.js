/**
 * Unit tests for AfMath.MovingAverage.
 */
function testAll() {
  describe('AfMath.MovingAverage', function () {
    describe('#average', function () {
      it('computes the simple moving average for a window smaller than the series', function () {
        expect(AfMath.MovingAverage.average([1, 2, 3, 4, 5], 2)).toEqual([1.5, 2.5, 3.5, 4.5]);
      });

      it('returns the original values when window is 1', function () {
        expect(AfMath.MovingAverage.average([1, 2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5]);
      });

      it('returns an empty array when window exceeds the series length', function () {
        expect(AfMath.MovingAverage.average([1, 2, 3], 5)).toEqual([]);
      });

      it('returns an empty array for an empty values array', function () {
        expect(AfMath.MovingAverage.average([], 1)).toEqual([]);
      });

      it('returns a single-element array when window equals the series length', function () {
        expect(AfMath.MovingAverage.average([1, 2, 3, 4], 4)).toEqual([2.5]);
      });

      it('returns an empty array when window is 0', function () {
        expect(AfMath.MovingAverage.average([1, 2, 3], 0)).toEqual([]);
      });
    });
  });
}
