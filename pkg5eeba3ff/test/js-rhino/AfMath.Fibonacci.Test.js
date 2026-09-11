function testAll() {
  describe('AfMath.Fibonacci', function () {
    it('returns known values for small indices', function () {
      expect(AfMath.Fibonacci.compute(0)).toBe(0);
      expect(AfMath.Fibonacci.compute(1)).toBe(1);
      expect(AfMath.Fibonacci.compute(2)).toBe(1);
      expect(AfMath.Fibonacci.compute(3)).toBe(2);
      expect(AfMath.Fibonacci.compute(10)).toBe(55);
    });

    it('throws for a negative index', function () {
      expect(function () {
        AfMath.Fibonacci.compute(-1);
      }).toThrow();
    });
  });
}
