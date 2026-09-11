/**
 * Unit tests for AfTime.IsLeap.
 */
function testAll() {
  describe('AfTime.IsLeap', function () {
    describe('#check', function () {
      it('returns true for a year divisible by 4 but not by 100', function () {
        expect(AfTime.IsLeap.check(2024)).toEqual(true);
      });

      it('returns false for a year divisible by 100 but not by 400', function () {
        expect(AfTime.IsLeap.check(1900)).toEqual(false);
      });

      it('returns true for a year divisible by 400', function () {
        expect(AfTime.IsLeap.check(2000)).toEqual(true);
      });

      it('returns false for a year not divisible by 4', function () {
        expect(AfTime.IsLeap.check(2023)).toEqual(false);
      });

      it('applies the same Gregorian rule to negative and zero years', function () {
        expect(AfTime.IsLeap.check(0)).toEqual(true);
        expect(AfTime.IsLeap.check(-4)).toEqual(true);
        expect(AfTime.IsLeap.check(-100)).toEqual(false);
      });
    });
  });
}
