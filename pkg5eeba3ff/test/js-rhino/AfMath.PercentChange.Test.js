/**
 * Unit tests for AfMath.PercentChange.
 */
function testAll() {
  describe('AfMath.PercentChange', function () {
    describe('#change', function () {
      it('returns a positive percentage when the value increases', function () {
        var result = AfMath.PercentChange.change(50, 75);
        expect(result).toEqual(50);
      });

      it('returns a negative percentage when the value decreases', function () {
        var result = AfMath.PercentChange.change(50, 25);
        expect(result).toEqual(-50);
      });

      it('returns 0 when the value is unchanged', function () {
        var result = AfMath.PercentChange.change(10, 10);
        expect(result).toEqual(0);
      });

      it('throws when from is 0', function () {
        expect(function () {
          AfMath.PercentChange.change(0, 10);
        }).toThrow();
      });
    });
  });
}
