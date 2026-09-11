/**
 * Unit tests for AfMath.Lerp.
 */
function testAll() {
  describe('AfMath.Lerp', function () {
    describe('#lerp', function () {
      it('returns a when t is 0 and b when t is 1', function () {
        expect(AfMath.Lerp.lerp(0, 10, 0)).toEqual(0);
        expect(AfMath.Lerp.lerp(0, 10, 1)).toEqual(10);
      });

      it('returns the midpoint when t is 0.5', function () {
        expect(AfMath.Lerp.lerp(0, 10, 0.5)).toEqual(5);
      });

      it('extrapolates beyond b when t is greater than 1', function () {
        expect(AfMath.Lerp.lerp(10, 20, 2)).toEqual(30);
      });

      it('extrapolates beyond a when t is negative', function () {
        expect(AfMath.Lerp.lerp(10, 20, -1)).toEqual(0);
      });
    });
  });
}
