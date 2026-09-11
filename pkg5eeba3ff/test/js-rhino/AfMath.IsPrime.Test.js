function testAll() {
  describe('AfMath.IsPrime', function () {
    it('returns true for prime numbers', function () {
      expect(AfMath.IsPrime.check(2)).toBe(true);
      expect(AfMath.IsPrime.check(3)).toBe(true);
      expect(AfMath.IsPrime.check(17)).toBe(true);
      expect(AfMath.IsPrime.check(97)).toBe(true);
    });

    it('returns false for composite numbers', function () {
      expect(AfMath.IsPrime.check(4)).toBe(false);
      expect(AfMath.IsPrime.check(9)).toBe(false);
      expect(AfMath.IsPrime.check(100)).toBe(false);
    });

    it('returns false for numbers less than 2', function () {
      expect(AfMath.IsPrime.check(1)).toBe(false);
      expect(AfMath.IsPrime.check(0)).toBe(false);
      expect(AfMath.IsPrime.check(-7)).toBe(false);
    });

    it('correctly classifies larger primes and composites near a square boundary', function () {
      expect(AfMath.IsPrime.check(101)).toBe(true);
      expect(AfMath.IsPrime.check(121)).toBe(false);
    });
  });
}
