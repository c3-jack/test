/**
 * Unit tests for AfMath.Variance.
 */
function testAll() {
  describe('AfMath.Variance', function () {
    describe('#variance', function () {
      it('computes the population variance of a multi-element array', function () {
        expect(AfMath.Variance.variance([1, 2, 3, 4])).toEqual(1.25);
      });

      it('returns 0 for a single-element array', function () {
        expect(AfMath.Variance.variance([5])).toEqual(0);
      });

      it('returns 0 when all values are equal', function () {
        expect(AfMath.Variance.variance([2, 2, 2])).toEqual(0);
      });

      it('does not mutate the input array', function () {
        var input = [1, 2, 3, 4];
        AfMath.Variance.variance(input);
        expect(input).toEqual([1, 2, 3, 4]);
      });

      it('throws when given an empty array', function () {
        expect(function () {
          AfMath.Variance.variance([]);
        }).toThrow();
      });
    });
  });
}
