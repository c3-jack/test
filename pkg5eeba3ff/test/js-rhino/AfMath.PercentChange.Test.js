function testAll() {
  describe('AfMath.PercentChange', function () {
    it('returns a positive percentage when the value increases', function () {
      expect(AfMath.PercentChange.change(50, 75)).toBe(50);
    });

    it('returns a negative percentage when the value decreases', function () {
      expect(AfMath.PercentChange.change(100, 60)).toBe(-40);
    });

    it('returns zero when the value is unchanged', function () {
      expect(AfMath.PercentChange.change(20, 20)).toBe(0);
    });

    it('follows floating point division semantics when from is zero', function () {
      expect(AfMath.PercentChange.change(0, 10)).toBe(Infinity);
      expect(AfMath.PercentChange.change(0, -10)).toBe(-Infinity);
      expect(isNaN(AfMath.PercentChange.change(0, 0))).toBe(true);
    });
  });
}
