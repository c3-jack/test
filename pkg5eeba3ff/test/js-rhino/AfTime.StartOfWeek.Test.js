/**
 * Unit tests for AfTime.StartOfWeek.
 */
function testAll() {
  describe('AfTime.StartOfWeek', function () {
    describe('#startOf', function () {
      it('returns the same Monday at midnight when given a Monday', function () {
        var result = AfTime.StartOfWeek.startOf(DateTime.fromString('2024-01-08T15:30:00Z'));
        expect(result.isEqual(DateTime.fromString('2024-01-08T00:00:00Z'))).toEqual(true);
      });

      it('returns the preceding Monday at midnight for a mid-week date', function () {
        var result = AfTime.StartOfWeek.startOf(DateTime.fromString('2024-01-10T09:00:00Z'));
        expect(result.isEqual(DateTime.fromString('2024-01-08T00:00:00Z'))).toEqual(true);
      });

      it('returns the preceding Monday at midnight for a Sunday', function () {
        var result = AfTime.StartOfWeek.startOf(DateTime.fromString('2024-01-14T23:59:59Z'));
        expect(result.isEqual(DateTime.fromString('2024-01-08T00:00:00Z'))).toEqual(true);
      });

      it('discards the time of day, only using the date to locate the Monday', function () {
        var startOfMonday = AfTime.StartOfWeek.startOf(DateTime.fromString('2024-01-08T00:00:00Z'));
        var startOfSameWeekLater = AfTime.StartOfWeek.startOf(DateTime.fromString('2024-01-08T23:59:59Z'));
        expect(startOfMonday.isEqual(startOfSameWeekLater)).toEqual(true);
      });
    });
  });
}
