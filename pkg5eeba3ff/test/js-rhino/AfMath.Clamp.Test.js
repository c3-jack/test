function testAll() {
  describe('AfMath.Clamp', function () {
    it('returns min when value is below the lower bound', function () {
      expect(AfMath.Clamp.clamp(-5, 0, 10)).toBe(0);
    });

    it('returns max when value is above the upper bound', function () {
      expect(AfMath.Clamp.clamp(15, 0, 10)).toBe(10);
    });

    it('returns the value unchanged when already within bounds', function () {
      expect(AfMath.Clamp.clamp(5, 0, 10)).toBe(5);
    });

    it('returns the bound value when value equals min or max', function () {
      expect(AfMath.Clamp.clamp(0, 0, 10)).toBe(0);
      expect(AfMath.Clamp.clamp(10, 0, 10)).toBe(10);
    });
  });
}
