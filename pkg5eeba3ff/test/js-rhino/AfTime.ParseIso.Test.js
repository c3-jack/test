/**
 * Unit tests for AfTime.ParseIso.
 */
function testAll() {
  describe('AfTime.ParseIso', function () {
    describe('#parse', function () {
      it('parses a UTC ISO 8601 date-time string into the corresponding DateTime', function () {
        var result = AfTime.ParseIso.parse('2024-01-01T12:00:00Z');
        expect(result.toString()).toEqual(DateTime.fromString('2024-01-01T12:00:00Z').toString());
      });

      it('parses an ISO 8601 date-time string with fractional seconds', function () {
        var result = AfTime.ParseIso.parse('2024-01-01T12:00:00.500Z');
        expect(result.toString()).toEqual(
          DateTime.fromString('2024-01-01T12:00:00.500Z').toString()
        );
      });

      it('parses an ISO 8601 date-time string with a numeric UTC offset', function () {
        var result = AfTime.ParseIso.parse('2024-01-01T12:00:00-05:00');
        expect(result.toString()).toEqual(
          DateTime.fromString('2024-01-01T12:00:00-05:00').toString()
        );
      });

      it('throws when given an empty string', function () {
        expect(function () {
          AfTime.ParseIso.parse('');
        }).toThrow();
      });

      it('throws when given a non-ISO-8601 string', function () {
        expect(function () {
          AfTime.ParseIso.parse('not-a-date');
        }).toThrow();
      });
    });
  });
}
