function testAll() {
  describe('AfMath.Variance', function () {
    it('returns 0 for a single-element list', function () {
      expect(AfMath.Variance.variance([5])).toBe(0);
    });

    it('computes the population variance of a list of numbers', function () {
      expect(AfMath.Variance.variance([2, 4, 4, 4, 5, 5, 7, 9])).toBe(4);
    });

    it('returns 0 when all values are identical', function () {
      expect(AfMath.Variance.variance([3, 3, 3, 3])).toBe(0);
    });

    it('computes the population variance for a simple two-value list', function () {
      expect(AfMath.Variance.variance([1, 3])).toBe(1);
    });
  });
}
