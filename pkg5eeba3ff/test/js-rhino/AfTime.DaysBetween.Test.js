/**
 * Unit tests for AfTime.DaysBetween.
 */
function testAll() {
  describe('AfTime.DaysBetween', function () {
    describe('#between', function () {
      it('returns 1 for two datetimes exactly one day apart', function () {
        var a = DateTime.fromString('2024-01-01T00:00:00Z');
        var b = DateTime.fromString('2024-01-02T00:00:00Z');
        var result = AfTime.DaysBetween.between(a, b);
        expect(result).toEqual(1);
      });

      it('returns 0 for the same instant', function () {
        var a = DateTime.fromString('2024-01-01T00:00:00Z');
        var b = DateTime.fromString('2024-01-01T00:00:00Z');
        var result = AfTime.DaysBetween.between(a, b);
        expect(result).toEqual(0);
      });

      it('returns a negative value when b is before a', function () {
        var a = DateTime.fromString('2024-01-02T00:00:00Z');
        var b = DateTime.fromString('2024-01-01T00:00:00Z');
        var result = AfTime.DaysBetween.between(a, b);
        expect(result).toEqual(-1);
      });

      it('truncates partial days toward zero', function () {
        var a = DateTime.fromString('2024-01-01T00:00:00Z');
        var b = DateTime.fromString('2024-01-10T12:00:00Z');
        var result = AfTime.DaysBetween.between(a, b);
        expect(result).toEqual(9);
      });
    });
  });
}
