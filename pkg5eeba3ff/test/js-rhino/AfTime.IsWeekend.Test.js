/**
 * Unit tests for AfTime.IsWeekend.
 */
function testAll() {
  describe('AfTime.IsWeekend', function () {
    describe('#check', function () {
      it('returns true for Saturdays', function () {
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-06T00:00:00Z'))).toEqual(true);
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-13T12:30:00Z'))).toEqual(true);
      });

      it('returns true for Sundays', function () {
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-07T00:00:00Z'))).toEqual(true);
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-14T23:59:59Z'))).toEqual(true);
      });

      it('returns false for weekdays (Monday-Friday)', function () {
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-08T00:00:00Z'))).toEqual(false);
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-12T00:00:00Z'))).toEqual(false);
      });

      it('ignores the time of day — only the day of week matters', function () {
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-06T23:59:59Z'))).toEqual(true);
        expect(AfTime.IsWeekend.check(DateTime.fromString('2024-01-08T23:59:59Z'))).toEqual(false);
      });
    });
  });
}
