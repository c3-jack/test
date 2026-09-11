/**
 * Unit tests for AfTime.IsWeekend.
 */
function testAll() {
  describe('AfTime.IsWeekend', function () {
    describe('#check', function () {
      it('returns true for a Saturday', function () {
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-06T00:00:00Z'))).toEqual(true);
      });

      it('returns true for a Sunday', function () {
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-07T00:00:00Z'))).toEqual(true);
      });

      it('returns false for a Monday', function () {
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-08T00:00:00Z'))).toEqual(false);
      });

      it('returns false for a Friday', function () {
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-05T00:00:00Z'))).toEqual(false);
      });
    });
  });
}
