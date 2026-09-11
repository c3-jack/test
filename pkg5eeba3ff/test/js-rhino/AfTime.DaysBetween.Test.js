/**
 * Unit tests for AfTime.DaysBetween.
 */
function testAll() {
  describe('AfTime.DaysBetween', function () {
    describe('#between', function () {
      it('counts the whole days between two datetimes in chronological order', function () {
        var a = DateTime.fromString('2024-01-01T00:00:00Z');
        var b = DateTime.fromString('2024-01-03T00:00:00Z');
        expect(AfTime.DaysBetween.between(a, b)).toEqual(2);
      });

      it('is symmetric regardless of argument order', function () {
        var a = DateTime.fromString('2024-01-03T00:00:00Z');
        var b = DateTime.fromString('2024-01-01T00:00:00Z');
        expect(AfTime.DaysBetween.between(a, b)).toEqual(2);
      });

      it('truncates partial days rather than rounding', function () {
        var a = DateTime.fromString('2024-01-01T00:00:00Z');
        var b = DateTime.fromString('2024-01-01T12:00:00Z');
        expect(AfTime.DaysBetween.between(a, b)).toEqual(0);
      });

      it('returns 0 for identical datetimes', function () {
        var a = DateTime.fromString('2024-01-01T00:00:00Z');
        var b = DateTime.fromString('2024-01-01T00:00:00Z');
        expect(AfTime.DaysBetween.between(a, b)).toEqual(0);
      });
    });
  });
}
