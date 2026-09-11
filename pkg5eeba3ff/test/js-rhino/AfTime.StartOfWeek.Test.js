/**
 * Unit tests for AfTime.StartOfWeek.
 */
function testAll() {
  describe('AfTime.StartOfWeek', function () {
    describe('#startOf', function () {
      it('returns midnight Monday for a mid-week Wednesday', function () {
        var wednesday = DateTime.fromString('2024-01-03T15:30:00Z');
        var result = AfTime.StartOfWeek.startOf(wednesday);
        expect(result.toString()).toEqual(DateTime.fromString('2024-01-01T00:00:00Z').toString());
      });

      it('returns midnight Monday for a late Sunday (end of the same ISO week)', function () {
        var sunday = DateTime.fromString('2024-01-07T23:59:59Z');
        var result = AfTime.StartOfWeek.startOf(sunday);
        expect(result.toString()).toEqual(DateTime.fromString('2024-01-01T00:00:00Z').toString());
      });

      it('truncates the time-of-day when the input is already Monday', function () {
        var monday = DateTime.fromString('2024-01-01T09:00:00Z');
        var result = AfTime.StartOfWeek.startOf(monday);
        expect(result.toString()).toEqual(DateTime.fromString('2024-01-01T00:00:00Z').toString());
      });

      it('does not mutate the input date', function () {
        var input = DateTime.fromString('2024-01-03T15:30:00Z');
        AfTime.StartOfWeek.startOf(input);
        expect(input.toString()).toEqual(DateTime.fromString('2024-01-03T15:30:00Z').toString());
      });
    });
  });
}
