/**
 * Unit tests for AfMath.RoundTo.
 */
function testAll() {
  describe('AfMath.RoundTo', function () {
    describe('#round', function () {
      it('rounds half away from zero at the given decimal place', function () {
        expect(AfMath.RoundTo.round(1.005, 2)).toEqual(1.01);
        expect(AfMath.RoundTo.round(2.5, 0)).toEqual(3);
        expect(AfMath.RoundTo.round(-2.5, 0)).toEqual(-3);
      });

      it('clamps a negative places to 0 and rounds to the nearest integer', function () {
        expect(AfMath.RoundTo.round(123.456, -1)).toEqual(123);
      });

      it('returns the value unchanged when it already has fewer decimal places', function () {
        expect(AfMath.RoundTo.round(10, 3)).toEqual(10);
      });

      it('rounds zero to zero and truncates extra precision beyond the requested places', function () {
        expect(AfMath.RoundTo.round(0, 2)).toEqual(0);
        expect(AfMath.RoundTo.round(3.14159, 2)).toEqual(3.14);
      });
    });
  });
}
