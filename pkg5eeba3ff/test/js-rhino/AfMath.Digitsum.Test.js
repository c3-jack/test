function testAll() {
  describe('AfMath.Digitsum', function () {
    it('returns the sum of digits for positive numbers', function () {
      expect(AfMath.Digitsum.sum(19)).toBe(10);
      expect(AfMath.Digitsum.sum(123)).toBe(6);
      expect(AfMath.Digitsum.sum(9)).toBe(9);
    });

    it('ignores the sign for negative numbers', function () {
      expect(AfMath.Digitsum.sum(-123)).toBe(6);
      expect(AfMath.Digitsum.sum(-9)).toBe(9);
    });

    it('returns 0 for 0', function () {
      expect(AfMath.Digitsum.sum(0)).toBe(0);
    });
  });
}
